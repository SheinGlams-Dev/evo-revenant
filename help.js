const { SlashCommandBuilder, EmbedBuilder, ActionRowBuilder, StringSelectMenuBuilder } = require('discord.js');
const fs = require('fs');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('help')
        .setDescription('Get information on our bot commands and features.'),

    async execute(interaction, client) {
        if (interaction.user.id !== interaction.member.id) {
            return await interaction.reply({ 
                embeds: [new EmbedBuilder()
                    .setColor(client.config.embedColor)
                    .setDescription('I apologize, but this command is intended for the user who initiated it. Please use your own help command. Thank you for your understanding.')],
                ephemeral: true 
            });
        }

        try {
            const commandFolders = fs.readdirSync('./src/commands')
                .filter(folder => !folder.startsWith('.') && folder !== 'dev');
            const commandsByCategory = {};

            for (const folder of commandFolders) {
                const commandFiles = fs.readdirSync(`./src/commands/${folder}`).filter(file => file.endsWith('.js'));
                const commands = [];

                for (const file of commandFiles) {
                    const command = require(`../${folder}/${file}`);
                    commands.push({ name: command.data.name, description: command.data.description });
                }

                commandsByCategory[folder] = commands;
            }

            const dropdownOptions = [
                {
                    label: 'Main Menu',
                    value: 'main_menu'
                },
                ...Object.keys(commandsByCategory).map(folder => ({
                    label: folder,
                    value: folder
                }))
            ];

            const selectMenu = new StringSelectMenuBuilder()
                .setCustomId('category-select')
                .setPlaceholder('Click Me!')
                .addOptions(dropdownOptions.map(option => ({
                    label: option.label,
                    value: option.value
                })));

            const mainEmbed = new EmbedBuilder()
                .setColor(client.config.embedColor)
                .setTitle('Evo-Revenant Help Center')
                .setDescription(`**Konnichiwa! <@${interaction.user.id}>, I'm Evo-Revenant**\n\n**A multifunctional Discord bot inspired by your favorite anime characters. With powerful features, Evo-Revenant is not only ready to accompany you to play, but also help you manage your Discord server more effectively. Equipped with various moderation, entertainment, and utility features, and more. Evo-Revenant is a loyal friend who is ready to help anytime!**`)
                .addFields(
                    { name: '\u200B', value: '\u200B' }
                )
                .addFields(
                    { name: 'Features', value: '- Multifunctional\n- Moderation\n- Fun\n- Music \n- Very Cute (most important)\n- and more' }
                )
                .setImage('https://i.ibb.co.com/DrjLJtW/Cute-Blue-Girl-Gamer-Twitch-Banner-1.png')
                .setFooter({ text: 'Thanks for choosing Evo-Revenant!' })
                .setTimestamp();

            const row = new ActionRowBuilder()
                .addComponents(selectMenu);

            await interaction.reply({ embeds: [mainEmbed], components: [row] });

            const filter = i => i.isStringSelectMenu() && i.customId === 'category-select';
            const collector = interaction.channel.createMessageComponentCollector({ filter, time: 120000 });

            collector.on('collect', async i => {
                if (i.user.id !== interaction.user.id) {
                    return await i.reply({ 
                        embeds: [new EmbedBuilder()
                            .setColor(client.config.embedColor)
                            .setDescription('I apologize, but this menu is intended for the user who initiated it. Please use your own help command. Thank you for your understanding.')],
                        ephemeral: true 
                    });
                }

                if (i.values[0] === 'main_menu') {
                    await i.update({ embeds: [mainEmbed] });
                } else {
                    const selectedCategory = i.values[0];
                    const categoryCommands = commandsByCategory[selectedCategory];

                    const categoryEmbed = new EmbedBuilder()
                        .setColor(client.config.embedColor)
                        .setTitle(`${selectedCategory} Commands`)
                        .setDescription('List of available commands in this category:')
                        .addFields(categoryCommands.map(command => ({
                            name: `/${command.name}`,
                            value: `\`\`\`${command.description}\`\`\``
                        })));

                    await i.update({ embeds: [categoryEmbed] });
                }
            });

            collector.on('end', async () => {
                const disabledRow = new ActionRowBuilder()
                    .addComponents(selectMenu.setDisabled(true));

                await interaction.editReply({ embeds: [mainEmbed], components: [disabledRow] });
            });
        } catch (error) {
            console.error('Error executing help command:', error);
            if (!interaction.replied) {
                await interaction.reply({ 
                    embeds: [new EmbedBuilder()
                        .setColor(client.config.embedColor)
                        .setDescription(`Oops! It seems like I encountered an error while trying to help you. \nMy circuits might be a bit overloaded right now. \nCould you please try again later? If the problem persists, \nplease let my creators know. Gomen nasai! 🙇‍♀️`)],
                    ephemeral: true 
                });
            }
        }
    }
};
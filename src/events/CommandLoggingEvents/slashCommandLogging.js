const { Events, EmbedBuilder } = require('discord.js');

module.exports = {
    name: Events.InteractionCreate,
    async execute(interaction, client) {

        if (!interaction) return;
        if (!interaction.isChatInputCommand()) return;
        else {

            const channel = await client.channels.cache.get(client.config.slashCommandLoggingChannel);
            if (!channel) {
                console.error(`Channel not found: ${client.config.slashCommandLoggingChannel}`);
                return;
            }
            const server = interaction.guild.name;
            const user = interaction.user.username;
            const userID = interaction.user.id;

            const embed = new EmbedBuilder()
                .setColor(client.config.embedColor)
                .setAuthor({ name: `${user} has used a command.`, iconURL: interaction.user.avatarURL({ dynamic: true }) })
                .setTitle(`${client.user.username} Command Logger`)
                .addFields({ name: 'Server Name', value: `${server}` })
                .addFields({ name: 'Command', value: `\`\`\`${interaction}\`\`\`` })
                .addFields({ name: 'User', value: `${user} | ${userID}` })
                .setTimestamp()
                .setFooter({ text: `Command Logger`, iconURL: client.user.avatarURL({ dynamic: true }) })

            await channel.send({ embeds: [embed] });
        }
    }
}
const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('game-news')
        .setDescription('Get the latest Once Human game news from a specific channel'),

    async execute(interaction, client) {
        const channel = client.channels.cache.get('1278875299685072926');

        if (!channel) {
            return interaction.reply({ content: 'Channel not found!', ephemeral: true });
        }

        const messages = await channel.messages.fetch({ limit: 1 });
        const latestMessage = messages.first();

        if (!latestMessage) {
            return interaction.reply({ content: 'No messages found in the channel!', ephemeral: true });
        }

        return interaction.reply({ content: `\`\`Latest Game News:\`\`\n${latestMessage.content}` });
    }
};

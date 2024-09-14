const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('event-news')
        .setDescription('Get the latest Once Human event news from a specific channel'),
        "integration_types":[1],
        "contexts": [0,1,2],

    async execute(interaction, client) {
        const channel = client.channels.cache.get('1278884001725157406');

        if (!channel) {
            return interaction.reply({ content: 'Channel not found!', ephemeral: true });
        }

        const messages = await channel.messages.fetch({ limit: 1 });
        const latestMessage = messages.first();

        if (!latestMessage) {
            return interaction.reply({ content: 'No messages found in the channel!', ephemeral: true });
        }

        // Start with the message content
        let replyContent = `\`\`Latest Event News:\`\`\n${latestMessage.content}`;

        // Check for attachments (e.g., images)
        if (latestMessage.attachments.size > 0) {
            latestMessage.attachments.forEach(attachment => {
                replyContent += `\n${attachment.url}`;
            });
        }

        return interaction.reply({ content: replyContent });
    }
};

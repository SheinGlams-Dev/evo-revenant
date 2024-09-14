const { Events, ChannelType } = require('discord.js');

const confirmationSentTimes = {};

module.exports = {
    name: Events.MessageCreate,
    async execute(message, client) {

        if (message.channel.type === ChannelType.DM && !message.author.bot) {
            const forumChannelId = '1279373603191656448';
            const tagId = '1279373846188916816';
            const forumChannel = await client.channels.cache.get(forumChannelId);

            if (!forumChannel) {
                console.error(`Channel forum tidak ditemukan: ${forumChannelId}`);
                return;
            }

            try {
                const postTitle = `Pesan dari ${message.author.username}`;

                let existingThread = forumChannel.threads.cache.find(thread => thread.name === postTitle);

                if (existingThread) {
                    await existingThread.send(message.content);
                } else {
                    existingThread = await forumChannel.threads.create({
                        name: postTitle,
                        message: {
                            content: message.content,
                        },
                        appliedTags: [tagId],
                    });
                }

                const now = Date.now();
                if (!confirmationSentTimes[message.author.id] || now - confirmationSentTimes[message.author.id] >= 5 * 60 * 1000) {
                    await message.author.send('[Auto Reply] Thank you for contacting us here! 🥰 To resolve your issue, please provide specific details.\n\nExample\nIssue type (Bug/Suggestion/etc.): \nCommand:\nDetailed description: \n\nIf you have submitted the relevant information of the issue you would like to consult, please wait patiently, we will get back to you as soon as we can. ☺️');
                    confirmationSentTimes[message.author.id] = now;
                }

            } catch (error) {
                console.error('Gagal memproses pesan di forum:', error);
                try {
                    await message.author.send('Maaf, terjadi kesalahan saat mencoba meneruskan pesan Anda ke tim support kami.');
                } catch (dmError) {
                    console.error('Gagal mengirim pesan ke user:', dmError);
                }
            }

        } else if (message.channel.type === ChannelType.GuildPublicThread && !message.author.bot) {
            const originalUserName = message.channel.name.replace('Pesan dari ', '');
            const originalUser = client.users.cache.find(user => user.username === originalUserName);

            if (originalUser) {
                try {
                    await originalUser.send(`Dear User, ${message.content}`);
                } catch (error) {
                    console.error('Gagal mengirim pesan ke user asli:', error);
                }
            }
        }
    }
};

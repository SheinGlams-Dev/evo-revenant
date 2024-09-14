const { Events, ActivityType } = require('discord.js');

module.exports = {
    name: Events.ClientReady,
    async execute(client) {
        setInterval(() => {
            let activities = [
                { type: 'Watching', name: `${client.commands?.size || 0} slash commands!`},
                { type: 'Watching', name: `${client.guilds.cache.size} servers!`},
                { type: 'Watching', name: `${client.guilds.cache.reduce((a,b) => a+b.memberCount, 0)} members!`},
                { type: 'Playing', name: `/help | @${client.user.username}`},
            ];

            const status = activities[Math.floor(Math.random() * activities.length)];

            if (status.type === 'Watching') {
                client.user.setPresence({ activities: [{ name: `${status.name}`, type: ActivityType.Watching }]});
            } else {
                client.user.setPresence({ activities: [{ name: `${status.name}`, type: ActivityType.Playing }]});
            } 
        }, 7500);
        client.logs.success(`[STATUS] Rotating status loaded successfully.`);
    }
}
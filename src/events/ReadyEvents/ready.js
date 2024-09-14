const config = require('../../config');
const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');
const mongodbURL = process.env.mongodb;

module.exports = {
    name: 'ready',
    once: true,
    async execute(client) {
       // Ensure client.config is defined
        if (!client.config) {
            console.error('client.config is not defined');
            return;
        }

        // Ensure client.logs is defined
        if (!client.logs) {
            client.logs = {
                info: console.log,
                success: console.log,
                error: console.error,
            };
        }

        client.logs.info(`[SCHEMAS] Started loading schemas...`);

        if (!mongodbURL) return;

        mongoose.set("strictQuery", false);
        await mongoose.connect(mongodbURL || ``, {
            keepAlive: true,
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        const color = {
            red: '\x1b[31m',
            orange: '\x1b[38;5;202m',
            yellow: '\x1b[33m',
            green: '\x1b[32m',
            blue: '\x1b[34m',
            pink: '\x1b[38;5;213m',
            torquise: '\x1b[38;5;45m',
            purple: '\x1b[38;5;57m',
            reset: '\x1b[0m'
        };
        
        function getTimestamp() {
            const date = new Date();
            const year = date.getFullYear();
            const month = date.getMonth() + 1;
            const day = date.getDate();
            const hours = date.getHours();
            const minutes = date.getMinutes();
            const seconds = date.getSeconds();
            return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
        };

        if (mongoose.connect) {
            client.logs.success('[DATABASE] Connected to MongoDB successfully.');

            const schemaFolder = path.join(__dirname, '../../schemas'); 
            fs.readdir(schemaFolder, (err, files) => {
                if (err) {
                    client.logs.error('[ERROR] Error reading schemas folder:', err);
                    return;
                };
                client.logs.success(`[SCHEMAS] Loaded ${files.length} schema files.`);
            });
        };

        client.logs.info(`[EVENTS] Started loading events...`);
        client.logs.success(`[EVENTS] Loaded ${client.eventNames().length} events.`);
        
        const triggerFolder = path.join(__dirname, '../../triggers'); 
        fs.readdir(triggerFolder, (err, files) => {
            if (err) {
                client.logs.error('Error reading trigger folder:', err);
                return;
            };
            client.logs.info(`[TRIGGERS] Started loading triggers...`);
            client.logs.success(`[TRIGGERS] Loaded ${files.length} trigger files.`);
        });

        console.log(`${color.pink}[${getTimestamp()}] ==================================`);
        console.log(`${color.pink}[${getTimestamp()}] [BOT] ${client.user.username} has been launched!`);
        console.log(`${color.pink}[${getTimestamp()}] [BOT] Version: ${client.config.botVersion}`);
        console.log(`${color.pink}[${getTimestamp()}] [BOT] Developed by: Tronix Development`);
        console.log(`${color.pink}[${getTimestamp()}] [BOT] Watching over ${client.guilds.cache.reduce((a,b) => a+b.memberCount, 0)} members!`);
        console.log(`${color.pink}[${getTimestamp()}] [BOT] Watching over ${client.guilds.cache.size} servers!`);
        console.log(`${color.pink}[${getTimestamp()}] ==================================`);

        require('events').EventEmitter.defaultMaxListeners = config.eventListeners;
    },
};
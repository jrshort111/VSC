const { Client, GatewayIntentBits, Events } = require('discord.js');

// Create a new client instance
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ],
});

// When the bot is ready
client.once(Events.ClientReady, () => {
    console.log(`Logged in as ${client.user.tag}!`);
    // Set the bot's status
    client.user.setActivity('yap', { type: 'PLAYING' });
});

// When the bot receives a message
client.on(Events.MessageCreate, message => {
    // Ignore messages from the bot itself
    if (message.author.bot) return;

    // Simple command: !ping
    if (message.content === '!up') {
        message.reply('bot,backend is up!');
    }
});

// Replace 'YOUR_BOT_TOKEN' with your actual bot token
client.login('YOUR_BOT_TOKEN');

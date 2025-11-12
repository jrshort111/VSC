const { Client, GatewayIntentBits, Events } = require('discord.js');


const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ],
});


client.once(Events.ClientReady, () => {
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setActivity('yap', { type: 'PLAYING' });
});


client.on(Events.MessageCreate, message => {
    if (message.author.bot) return;

    if (message.content === '!up') {
        message.reply('bot,backend is up!');
    }
});


client.login('YOUR_BOT_TOKEN');

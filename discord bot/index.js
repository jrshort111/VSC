// Rewritten and implemented by Me!


const { Client, GatewayIntentBits} = require('discord.js');
require('dotenv').config();


const client = new Client({
    intents: [
              GatewayIntentBits.Guilds,  
      GatewayIntentBits.GuildMessages,  
      GatewayIntentBits.MessageContent]
});
// gateway intents that are NEEDED to start

client.once('ready', () => {
    console.log("[BOT] Logged In as ${client.user.tag]");
});


client.on('messageCreate', message => {
    if (message.author.bot) return;

          if (messsage.content.toLowerCase() === 'ping') {
              message.reply('Latency is ${Date.now() - message.createdTimestamp}ms');
          }
    ]);

client.login(process.env.TOKEN);


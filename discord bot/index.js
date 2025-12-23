// last month i was lazy to code this so i used chatgpt my bad here is real code


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

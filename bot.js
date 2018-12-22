const Discord = require('discord.js');
const client = new Discord.Client();

client.on('guildMemberAdd', member => {
const mohamed= member.guild.channels.get("519652655438626817");
if(!mohamed) return;
if(mohamed) {
setTimeout(() => mohamed.send(`Welcome to **Sùgaaaaar.**`), 4000)        
}
});

 client.login(process.env.BOT_TOKEN); 

const Discord = require('discord.js');
const client = new Discord.Client();

client.on('guildMemberAdd', member => {
const mohamed= member.guild.channels.get("547519337360130048");
if(!mohamed) return;
if(mohamed) {
setTimeout(() => mohamed.send(`**__Welcome To  başarı __☆.**`), 4000)        
}
});

 client.login(process.env.BOT_TOKEN); 

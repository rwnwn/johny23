const Discord = require('discord.js');
const client = new Discord.Client();

client.on('guildMemberAdd', member => {
const mohamed= member.guild.channels.get("521374016036929536");
if(!mohamed) return;
if(mohamed) {
setTimeout(() => mohamed.send(` Welcome To **Point.**`), 4000)        
}
});

 client.login(process.env.BOT_TOKEN); 

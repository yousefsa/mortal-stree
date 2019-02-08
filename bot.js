const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "M";
var adminprefix = 'M'

const developers = ["537783570941476864"]
client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!developers.includes(message.author.id)) return;
      
  if (message.content.startsWith(adminprefix + 'ply')) {
    client.user.setGame(argresult);
      message.channel.send(`✅`)
  } else 
     if (message.content === (adminprefix + "leave")) {
    message.guild.leave();        
  } else  
  if (message.content.startsWith(adminprefix + 'wt')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.send(`✅`)
  } else 
  if (message.content.startsWith(adminprefix + 'ls')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send(`✅`)
  } else 
  if (message.content.startsWith(adminprefix + 'st')) {
    client.user.setGame(argresult, "https://www.twitch.tv/dream");
      message.channel.send(`**✅**`)
  }
  if (message.content.startsWith(adminprefix + 'ne')) {
  client.user.setUsername(argresult).then
      message.channel.send(`✅`)
} else
if (message.content.startsWith(adminprefix + 'av')) {
  client.user.setAvatar(argresult);
    message.channel.send(`✅`)
}
});


client.login(process.env.TOKEN);// لا تغير فيها شيء

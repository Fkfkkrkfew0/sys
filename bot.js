const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By ♛ 『DE』 NovritschPro#6808");

client.on('message', msg => {
    if (msg.content === 'هلا') {
      msg.reply('** هلا فيك **');
    }
  });






client.on('message', msg => {
    if (msg.content === 'hi') {
      msg.reply('** ؟ **');
    }
  });




client.on('message', msg => {
    if (msg.content === 'الو') {
      msg.reply('** وش تبي **');
    }
  });



client.on('message', msg => {
    if (msg.content === 'شلونك') {
      msg.reply('** تمام تبي شي؟ **');
    }
  });















client.on('message', message => {
  if (!message.content.startsWith(PREFIX)) return;
  var args = message.content.split(' ').slice(1);
  var argresult = args.join(' ');
  if (message.author.id !== "484106911696945153") return;
 
if (message.content.startsWith(PREFIX + 'setstream')) {

     console.log('test' + argresult);
    message.channel.sendMessage(Streaming: ${argresult})
}
 
if (message.content.startsWith(PREFIX + 'setname')) {
  client.user.setUsername(argresult).then
      message.channel.sendMessage(Username Changed To ${argresult})
  return message.reply("You Can change the username 2 times per hour");
}
if (message.content.startsWith(PREFIX + 'setavatar')) {
  client.user.setAvatar(argresult);
   message.channel.sendMessage(Avatar Changed Successfully To ${argresult}**);
}
});








client.login(process.env.BOT_TOKEN);// لا تغير فيها شيء

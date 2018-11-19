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




client.on('message', msg => {
    if (msg.content === 'Hi') {
      msg.reply('** ؟ **');
    }
  });



















client.login(process.env.BOT_TOKEN);// لا تغير فيها شيء

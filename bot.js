const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By ♛ 『DE』 NovritschPro#6808");

client.on('message', msg => {
    if (msg.content === '@Music MineCraft Center#5993') {
      msg.reply('** لا تمنشن **');
    }
  });


client.login(process.env.BOT_TOKEN);// لا تغير فيها شيء

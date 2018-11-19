const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "1";

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);  
});

client.on('ready', async() => {
var server = "489767305358606336"; // ايدي السررفر
var channel = "506353680509960193";//ايدي الروم
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('**LoveCrazy , LoveCrazy , LoveCrazy , LoveCrazy , LoveCrazy , LoveCrazy , LoveCrazy , LoveCrazy , LoveCrazy , LoveCrazy , LoveCrazy , LoveCrazy , LoveCrazy , LoveCrazy , LoveCrazy , LoveCrazy , LoveCrazy , LoveCrazy , LoveCrazy , LoveCrazy , LoveCrazy , LoveCrazy , LoveCrazy , LoveCrazy , LoveCrazy , LoveCrazy , LoveCrazy , LoveCrazy , **')
    },305);
})

client.on('ready', async() => {
var server = "489767305358606336"; // ايدي السررفر
var channel = "506353680509960193";//ايدي الروم
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('**LoveCrazy , LoveCrazy , LoveCrazy , LoveCrazy , LoveCrazy , LoveCrazy , LoveCrazy , LoveCrazy , LoveCrazy , LoveCrazy , LoveCrazy , LoveCrazy , LoveCrazy , LoveCrazy , LoveCrazy , LoveCrazy , LoveCrazy , LoveCrazy , LoveCrazy , LoveCrazy , LoveCrazy , LoveCrazy , LoveCrazy , LoveCrazy , LoveCrazy , LoveCrazy , LoveCrazy , LoveCrazy , **')
    },305);
})


client.on('ready', async() => {
var server = "489767305358606336"; // ايدي السررفر
var channel = "506353680509960193";//ايدي الروم
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('**LoveCrazy , LoveCrazy , LoveCrazy , LoveCrazy , LoveCrazy , LoveCrazy , LoveCrazy , LoveCrazy , LoveCrazy , LoveCrazy , LoveCrazy , LoveCrazy , LoveCrazy , LoveCrazy , LoveCrazy , LoveCrazy , LoveCrazy , LoveCrazy , LoveCrazy , LoveCrazy , LoveCrazy , LoveCrazy , LoveCrazy , LoveCrazy , LoveCrazy , LoveCrazy , LoveCrazy , LoveCrazy , **')
    },305);
})



client.on('ready', async() => {
var server = "489767305358606336"; // ايدي السررفر
var channel = "506353680509960193";//ايدي الروم
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('**LoveCrazy , LoveCrazy , LoveCrazy , LoveCrazy , LoveCrazy , LoveCrazy , LoveCrazy , LoveCrazy , LoveCrazy , LoveCrazy , LoveCrazy , LoveCrazy , LoveCrazy , LoveCrazy , LoveCrazy , LoveCrazy , LoveCrazy , LoveCrazy , LoveCrazy , LoveCrazy , LoveCrazy , LoveCrazy , LoveCrazy , LoveCrazy , LoveCrazy , LoveCrazy , LoveCrazy , LoveCrazy , **')
    },305);
})


client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "say") {
if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('?|**\`ADMINISTRATOR\`ليس لديك صلاحيات`**');
   message.channel.sendMessage(args.join("  "))
   message.delete()
  }
 });
 
 client.on('message', message => {
 if(message.content.startsWith(prefix + "come")) {
message.member.voiceChannel.join();
}
});









client.on("message", msg => {  
if(msg.content.startsWith(prefix + `on`)) {
if(!msg.member.hasPermission('ADMINISTRATOR')) return msg.channel.send(':no_entry: | `Adminstrator`للاسف ليس لديك صلاحية يجي ان يكون لديك برمشن!');
let spam = msg.guild.channels.find('name', 'spam');
 if (!spam) return msg.channel.send('**`spam`يرجى اضافة روم باسم**' );
setInterval(function(){
        msg.send('spam')
}, 500);
setInterval(function(){
    spam.send('hi')
}, 1000);
setInterval(function(){
    spam.send('i like this')
}, 1500);    
    }
});








  client.on('message',async message => {
    if(message.content.startsWith(prefix + "off")) {
       if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply(':no_entry: | `Adminstrator`للاسف ليس لديك صلاحية يجي ان يكون لديك برمشن!');
        message.channel.send('**Stopping.**').then(msg => {
            setTimeout(() => {
               msg.edit('**Stoppping..**');
            },1000);
            setTimeout(() => {
               msg.edit('**Done i will relunch early...**');
            },2000);
        });
        setTimeout(() => {
            client.destroy();
client.login(process.env.BOT_TOKEN);
        },3000);
    }
});



 
client.login(process.env.BOT_TOKEN);

const Discord = require('discord.js');
const client = new Discord.Client();
 const prefix = "+";
client.on('ready', () => {
    console.log(${client.user.tag} I am ready!);
});
client.on('ready', () => {
var x = client.channels.get("639577211426570270");
if (x) x.join();
 
});
client.login(process.env.BOT_TOKEN);
package.json
{
  "name": "potatebot",
  "version": "1.0.0",
  "description": "Discord bot for lilPotate's server",
  "main": "bot.js",
  "scripts": {
    "test": "echo "Error: no test specified" && exit 1"
  },
  "author": "LittleBunnyRabbit",
  "license": "ISC",
  "dependencies": {
    "async": "^3.1.0",
    "canvas": "^2.6.0",
    "cheerio": "^1.0.0-rc.3",
    "data-store": "^3.1.0",
    "discord.js": "^11.5.1",
    "tmi.js": "^1.5.0"
  }
}

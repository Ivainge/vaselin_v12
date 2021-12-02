const Discord = require('discord.js');
const bot = new Discord.Client();
bot.commands = new Discord.Collection();
const fs = require('fs');
const { request } = require('http');
let config = require('./botconfig.json');
let token = config.token;
let prefix = ".";

bot.on('ready', () => {
  console.log(`Запустился бот ${bot.user.username}`);
  bot.user.setActivity("by Ivainge  ", {type:"PLAYING"})
});
bot.on("message", (message) =>{

    if (message.content === "/пиздец"){
          
    }
});





bot.login(token);


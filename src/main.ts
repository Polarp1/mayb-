import {
    config
} from 'dotenv'

import Bot from './Bot'


config()


client.on("message", function (message) {
    if (message.author.bot) return;
        message.reply(`hi`);
      

 });  



const bot = new Bot()
bot.login(process.env.DISCORD_BOT_TOKEN)

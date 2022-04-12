import {
    config
} from 'dotenv'

import Bot from './Bot'


config()


Discord.on('message', msg => {
  if (msg.content === '!oliy') {
    return msg.reply('Oliy is fat');
  }
});



const bot = new Bot()
bot.login(process.env.DISCORD_BOT_TOKEN)

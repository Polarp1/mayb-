import {
    config
} from 'dotenv'

import Bot from './Bot'


config()


client.on('message', msg => {
  msg.reply('pong');
});

const bot = new Bot()
bot.login(process.env.DISCORD_BOT_TOKEN)

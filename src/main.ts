import {
    config
} from 'dotenv'

import Bot from './Bot'


config()


client.on('message', async message => {
  if (message.content.startsWith('!reply')) {
    message.lineReply('Hey'); //Line (Inline) Reply with mention

    message.lineReplyNoMention(`My name is ${client.user.username}`); //Line (Inline) Reply without mention
  }
});



const bot = new Bot()
bot.login(process.env.DISCORD_BOT_TOKEN)

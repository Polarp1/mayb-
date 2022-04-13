import {
    config
} from 'dotenv'

import Bot from './Bot'


config()






const bot = new Bot()
bot.login(process.env.DISCORD_BOT_TOKEN)

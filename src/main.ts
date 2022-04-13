import {
    config
} from 'dotenv'

import Bot from './Bot'


config()






const bot = new Bot()



client.on("message", function(message) {
  message.channel.send("My Message");
});


bot.login(process.env.DISCORD_BOT_TOKEN)

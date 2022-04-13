import {
    CommandDispatcher,
    CommandSyntaxException
} from '@jsprismarine/brigadier'

import {
    Client,
    Intents
} from 'discord.js'

import {
    ICommandSource,
    registerCommandsTo
} from './command/command'

import {
    registerModulesTo
} from './module/module'

import {
    createBotConfig
} from './bot_config'

export default class Bot extends Client {

    readonly botConfig = createBotConfig()
    readonly commandDispatcher: CommandDispatcher<ICommandSource> = new CommandDispatcher()

    constructor() {
        super({
            intents: [
                Intents.FLAGS.DIRECT_MESSAGES,
                Intents.FLAGS.GUILD_MESSAGES,
                Intents.FLAGS.GUILDS
            ]
        })

        registerCommandsTo(this.commandDispatcher)
        console.log('Registered commands')

        registerModulesTo(this)
        console.log('Registered modules')

        this.on('ready', async (e) => {
            console.log(`Logged in as ${e.user.tag}`)
        })

        this.on('messageCreate', async (e) => {
            if (e.author.bot || !e.content.startsWith(this.botConfig.commandPrefix)) {
                return
            }

            const command = e.content.substring(this.botConfig.commandPrefix.length)
            const parseResults = this.commandDispatcher.parse(command, {
                bot: this,
                message: e
            })

            try {
                this.commandDispatcher.execute(parseResults)
            } catch (error) {
                if (this.botConfig.commandErrorFeedback && error instanceof CommandSyntaxException) {
                    await e.channel.send(`${error.getType()}: '${error.getInput()}'.`)
                }
            }
        })
    }
}


client.on("message", function(message) {
  message.channel.send("My Message");
});

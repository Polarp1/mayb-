import Bot from '../../Bot'

import {
    IHelp
} from '../../help'

import {
    IModule
} from '../module'

function exampleModuleRegister(bot: Bot) {
    bot.on('messageCreate', async (e) => {
        console.log('Example module')
    })
}

function exampleModuleHelper(): IHelp {
    return {
        title: 'example',
        description: 'This is just an example module.'
    }
}

export const exampleModule: IModule = {
    register: exampleModuleRegister,
    helper: exampleModuleHelper
}

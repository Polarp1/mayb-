import {
    LiteralArgumentBuilder
} from '@jsprismarine/brigadier'

import {
    IHelp
} from '../../help'

import {
    ICommand,
    ICommandSource,
    literal
} from '../command'

function exampleCommandBuilder(): LiteralArgumentBuilder<ICommandSource> {
    return literal('example').executes(async (context) => {
        console.log('Example command')
    })
}

function exampleCommandHelper(): IHelp {
    return {
        title: 'example',
        description: 'This is just an example command.'
        
    }
}

export const exampleCommand: ICommand = {
    builder: exampleCommandBuilder,
    helper: exampleCommandHelper
}



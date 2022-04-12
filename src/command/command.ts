import {
    CommandDispatcher,
    LiteralArgumentBuilder,
    RequiredArgumentBuilder
} from '@jsprismarine/brigadier'

import ArgumentType from '@jsprismarine/brigadier/dist/lib/arguments/ArgumentType'

import {
    Message
} from 'discord.js'

import {
    IHelper
} from '../help'

import Bot from '../Bot'

import {
    exampleCommand
} from './commands/example_command'

export interface ICommandSource {

    readonly bot: Bot
    readonly message: Message
}

export interface ICommand extends IHelper {
    
    readonly builder: () => LiteralArgumentBuilder<ICommandSource>
}

export const COMMANDS = [
    exampleCommand
]

export function literal(name: string): LiteralArgumentBuilder<ICommandSource> {
    return LiteralArgumentBuilder.literal(name)
}

export function argument<T>(name: string, type: ArgumentType<T>): RequiredArgumentBuilder<ICommandSource, T> {
    return RequiredArgumentBuilder.argument(name, type)
}

export function registerCommandsTo(dispatcher: CommandDispatcher<ICommandSource>) {
    for (const command of COMMANDS) {
        const builder = command.builder()

        dispatcher.register(builder)
    }
}

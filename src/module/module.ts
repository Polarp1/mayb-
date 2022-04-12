import {
    IHelper
} from '../help'

import Bot from '../Bot'

import {
    exampleModule
} from './modules/example_module'

export interface IModule extends IHelper {
    readonly register: (bot: Bot) => void
}

export const MODULES = [
    exampleModule
]

export function registerModulesTo(bot: Bot) {
    for (const module of MODULES) {
        module.register(bot)
    }
}

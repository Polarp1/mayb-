function parseBoolean(source: string): boolean {
    switch (source.toLowerCase()) {
        case '1':
        case 'on':
        case 'true':
        case 'y':
        case 'yes':
            return true
        default:
            return false
    }
}

export interface IBotConfig {
    
    readonly commandPrefix: string
    readonly commandErrorFeedback: boolean
}

const DEFAULT_COMMAND_PREFIX = '-'
const DEFAULT_COMMAND_ERROR_FEEDBACK = false

export function createBotConfig(): IBotConfig {
    // Command prefix
    let commandPrefix = DEFAULT_COMMAND_PREFIX

    if (process.env.COMMAND_PREFIX) {
        commandPrefix = process.env.COMMAND_PREFIX
    }
    
    // Command error feedback
    let commandErrorFeedback = DEFAULT_COMMAND_ERROR_FEEDBACK

    if (process.env.COMMAND_ERROR_FEEDBACK) {
        commandErrorFeedback = parseBoolean(process.env.COMMAND_ERROR_FEEDBACK)
    }

    return {
        commandPrefix: commandPrefix,
        commandErrorFeedback: commandErrorFeedback
    }
}

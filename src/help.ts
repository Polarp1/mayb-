export interface IUsage {

    readonly title: string
    readonly description: string
}

export interface IHelp {

    readonly title: string
    readonly description: string
    readonly usages?: IUsage[]
}

export interface IHelper {
    
    readonly helper: () => IHelp
}

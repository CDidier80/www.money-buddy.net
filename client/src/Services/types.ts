export interface Body {
    [key: string]: any
}

export type Service = (body: Body, params: string) => any | void
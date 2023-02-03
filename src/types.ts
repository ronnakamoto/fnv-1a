export interface Options {
    size: 32 | 64 | 128 | 256 | 512 | 1024,
    outType?: bigint | string
}

export type Input = Record<any, any> | string;
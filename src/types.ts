export type OutputType = 'bigint' | 'hex' | 'bin';
export interface Options {
    size?: 32 | 64 | 128 | 256 | 512 | 1024,
    outType?: OutputType
}

export type Input = Record<any, any> | string;
export type Output = string | bigint;

# FNV-1a Hash 
[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)

This is an extremly reliable TypeScript implementation of FNV-1a Hash that supports `32`, `64`, `128`, `256`, `512` and `1024` bit hashing. Fowler–Noll–Vo (or FNV) is a non-cryptographic hash function which is fast and simple in design.

FNV hashes are designed to be fast while maintaining a low collision rate. The FNV speed allows one to quickly hash lots of data while maintaining a reasonable collision rate. The high dispersion of the FNV hashes makes them well suited for hashing nearly identical strings such as URLs, hostnames, filenames, text, IP addresses, etc.



## Installation

Install FNV-1a Hash with npm

```bash
  npm install @ronnakamoto/fnv-1a
```
    
## Usage/Examples

```javascript
import fnv1a from '@ronnakamoto/fnv-1a'

//takes defaults { size: 32, outType: 'bigint' }
const hash = fnv1a("input"); 

// takes { size: 512, outType: 'bigint' }
const hash = fnv1a("input", { size: 512 }); 

// takes { size: 32, outType: 'bin' }
const hash = fnv1a("input", { outType: 'bin' }); 

```


## Documentation

```typescript
  fnv1a(input: Input, options: Options): Output
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `input` | `Input` | **Required**. Input data(`string`, `object`)|
| `options` | `Options` | **Required**. Options(`{ size: 32\|64\|128\|256\|512\|1024, outType: 'bigint'\|'hex'\|'bin'}`) |

Takes the input data and returns `BigInt` or `string`(hex, binary)


## Build and Run Locally

Clone the project

```bash
  git clone https://github.com/ronnakamoto/fnv-1a.git
```

Go to the project directory

```bash
  cd fnv-1a
```

Install dependencies

```bash
  npm install
```

Build the package

```bash
  npm run build
```


## Running Tests

To run tests, run the following command

```bash
  npm t
```


## Acknowledgements

 - [FNV Hash Parameters](http://www.isthe.com/chongo/tech/comp/fnv/index.html#FNV-reference-source)


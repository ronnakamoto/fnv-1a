
# FNV-1a Hash 
[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)

This is an extremly reliable TypeScript implementation of FNV-1a Hash. Fowler–Noll–Vo (or FNV) is a non-cryptographic hash function which is fast and simple in design.

FNV hashes are designed to be fast while maintaining a low collision rate. The FNV speed allows one to quickly hash lots of data while maintaining a reasonable collision rate. The high dispersion of the FNV hashes makes them well suited for hashing nearly identical strings such as URLs, hostnames, filenames, text, IP addresses, etc.



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


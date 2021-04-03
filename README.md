# dfinity_rust_starter

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

This is a dapp built on the internet computer. The backend is built in rust and the frontend in typescript... hopefully.

## Prerequisites

1. Rust. See https://www.rust-lang.org/tools/install
2. The rust wasm32 compilation target: `rustup target add wasm32-unknown-unknown`
3. dfx. See <https://sdk.dfinity.org/docs/quickstart/local-quickstart.html#download-and-install>

## Getting Started

1. Git clone
2. `dfx start` - do this in one terminal. This will start up a local dfinity node
3. `dfx deploy` - do this in a separate terminal. This will deploy the canisters to your local dfinity node

# MLH Fellowship Workshop - Web3 Integration 101
A demo guide for [Major League Hacking](https://fellowship.mlh.io/) Fellows to kickstar their journey in web3 with easy wallet connect integration. 
## Getting Started
**Tech Stack:**
- [RainbowKit](https://www.rainbowkit.com/): A React library that makes it easy to add wallet connection to your dapp. It's intuitive, responsive and customizable.
- [Ankr RPC](https://www.ankr.com/rpc-service/): Ankr's RPCs allow developers and their dApps to interface with data on [different blockchains](https://www.ankr.com/rpc/). RPCs are the connections that allow crypto wallets, dApps, DEXs, NFT platforms, and open-source software to interact with on-chain data and execute tasks like transactions. You can think of RPCs as portals to connect with different networks like [Ethereum](https://www.ankr.com/rpc/eth), the [BNB Chain](https://www.ankr.com/rpc/bsc), or [Polygon](https://www.ankr.com/rpc/polygon).
- React and [Vite](https://vitejs.dev/) to build our frontend.
- [wagmi](https://wagmi.sh/): A collection of React Hooks for building frontends.

## Vite Project Setup

First, start off by initializing a new Vite project from the terminal in the folder of your choice.

```bash
yarn create vite
```
- Once run the above command, it will prompt you to set your **project name**. Give your project a name, example `rainbowkit-ankr-demo`.
- And, set **variant** to `Typescript`.

![screely-1665343141361](https://user-images.githubusercontent.com/44579545/194790609-63287299-5916-4f5e-8c3f-0992ec3b7107.png)
- Now, change the directory to the newly created project folder and install the dependencies. In this case:

```bash
cd rainbowkit-ankr-demo
```
```bash
yarn
```
## Setting Up Rainbowkit
Start by installing some dependencies required by RainbowKit + chakra-ui for styling:

```
yarn add @rainbow-me/rainbowkit wagmi ethers @chakra-ui/react
```

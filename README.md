# MLH Fellowship Workshop - Web3 Integration 101
A demo guide for [Major League Hacking](https://fellowship.mlh.io/) Fellows to kickstar their journey in web3 with easy wallet connect integration. 
## Getting Started

Make sure you have [**Node.js**](https://nodejs.org/en/) installed and [**Metamask**](https://metamask.io/download/) account up and running.

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
## Importing + Configuring Rainbowkit using Ankr 
Once the dependencies are installed, let's code to ship our first wallet connect button for the dApps.
- Replace the existing code in the **main.tsx** file under `src` directory to the following: 

**File:** `./src/main.tsx`
```javascript
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import '@rainbow-me/rainbowkit/styles.css';
import { getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { chain, configureChains, createClient, WagmiConfig } from 'wagmi';
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc';
import { publicProvider } from 'wagmi/providers/public';
import { ChakraProvider } from '@chakra-ui/react';

const { chains, provider } = configureChains(
  [chain.goerli], // you can add more chains here
  [
    jsonRpcProvider({
      rpc: () => {
        return {
        // go to https://www.ankr.com/protocol/ to get a free RPC for your network
          http: 'https://rpc.ankr.com/eth_goerli', 
        };
      },
    }),
    publicProvider(),
  ]
);

const { connectors } = getDefaultWallets({
  appName: 'Demo App',
  chains,
});

const wagmiClient = createClient({
  autoConnect: false,
  connectors,
  provider,
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider>
      <WagmiConfig client={wagmiClient}>
        <RainbowKitProvider chains={chains}>
          <App />
        </RainbowKitProvider>
      </WagmiConfig>
    </ChakraProvider>
  </React.StrictMode>
);
```

## Adding the Connect Wallet button
Import ConnectButton and add the component to your **App.tsx** file under `src` directory:

**File:** `./src/App.tsx`
```typescript
import { Container } from '@chakra-ui/react';
import { ConnectButton } from '@rainbow-me/rainbowkit';

function App() {
  return (
    <Container paddingY='10'>
      <ConnectButton />
    </Container>
  );
}

export default App;
```

## Run the dApp locally 
by running:
```
yarn dev
```
On your localhost, you'll be able to see the wallet connect button:
![TYMqrdr](https://user-images.githubusercontent.com/44579545/194791580-98edc681-2636-44d1-8a82-58171f8dbcb0.png)
![zlGWMpv](https://user-images.githubusercontent.com/44579545/194791584-19f7a97d-9dfa-44b0-b8be-8dcd3e1b7d5e.png)



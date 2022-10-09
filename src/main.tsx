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
  [chain.goerli], // you can add more chains here. 
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
  appName: 'RainbowKit + Ankr',
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

import { useMemo } from "react";
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletModalProvider, } from '@solana/wallet-adapter-react-ui';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { PhantomWalletAdapter, SolflareWalletAdapter, TorusWalletAdapter } from '@solana/wallet-adapter-wallets';
import '@solana/wallet-adapter-react-ui/styles.css'
import { SnackbarProvider } from 'notistack';

import Home from './pages/home'

import './bootstrap.min.css';
import './chunk.css'
import 'antd/dist/antd.css';
import './assets/style.scss'

export default function App(){
  const network = WalletAdapterNetwork.Mainnet
  const endpoint = 'https://rough-green-sanctuary.solana-mainnet.quiknode.pro/79e450460c2113a1075c1ca32a7ecb1ffb01402a/'
  const wallets = useMemo(() => [
    new PhantomWalletAdapter(),
    new SolflareWalletAdapter({ network }),
    new TorusWalletAdapter()
  ], [network]);

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
          <WalletModalProvider>
            <SnackbarProvider>
              <Home></Home>
            </SnackbarProvider>
          </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );  
}
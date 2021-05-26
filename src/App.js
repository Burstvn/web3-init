import React from 'react'
import { BrowserRouter } from "react-router-dom"
import { UseWalletProvider } from 'use-wallet'
import { PageLayout } from "./components/Layout"
function App() {
    return (
        <BrowserRouter>
            <PageLayout/>
        </BrowserRouter>
    )
}

// Wrap everything in <UseWalletProvider />
export default () => (
    <UseWalletProvider
        chainId={4}
        connectors={{
            // This is how connectors get configured
            walletconnect: {rpcUrl: 'https://rinkeby.infura.io/v3/'},
        }} 
    >
        <App/>
    </UseWalletProvider>
)
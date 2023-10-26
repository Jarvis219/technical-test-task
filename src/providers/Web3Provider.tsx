'use client'

import AuthProvider from '@/contexts/AuthContext'
import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi/react'
import { ReactNode } from 'react'
import { WagmiConfig } from 'wagmi'
import { arbitrum, mainnet } from 'wagmi/chains'

const projectId = process.env.NEXT_PUBLIC_PROJECT_WEB3_ID || ''
const metadata = {
  name: 'Web3Modal test technical',
  description: 'Web3Modal test technical',
}
const chains = [mainnet, arbitrum]
const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata })

createWeb3Modal({ wagmiConfig, projectId, chains })

const Web3Provider = ({ children }: { children: ReactNode }): JSX.Element => (
  <WagmiConfig config={wagmiConfig}>
    <AuthProvider>{children}</AuthProvider>
  </WagmiConfig>
)

export default Web3Provider

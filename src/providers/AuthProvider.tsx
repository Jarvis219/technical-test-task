'use client'

import LoadingOverlay from '@/components/base/LoadingOverlay'
import { pageLinks } from '@/constants'
import AuthProvider from '@/contexts/AuthContext'
import { IUser } from '@/types'
import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi/react'
import { usePathname, useRouter } from 'next/navigation'
import { ReactNode, useLayoutEffect, useState } from 'react'
import { WagmiConfig } from 'wagmi'
import { arbitrum, mainnet } from 'wagmi/chains'

const projectId = process.env.NEXT_PUBLIC_PROJECT_WEB3_ID || ''
const metadata = {
  name: 'Web3Modal test technical',
  description: 'eb3Modal test technical',
}
const chains = [mainnet, arbitrum]
const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata })

createWeb3Modal({ wagmiConfig, projectId, chains })

const Web3Provider = ({ children }: { children: ReactNode }): JSX.Element => {
  const router = useRouter()
  const pathName = usePathname()
  const [user, setUser] = useState<IUser>()

  const handleLogin = ({ address, signature, singedMessage }: IUser): void =>
    setUser({ address, signature, singedMessage })

  useLayoutEffect(() => {
    user ? router.push(pageLinks.Home) : router.push(pageLinks.Login)
  }, [user])

  useLayoutEffect(() => {
    if (user && pathName === pageLinks.Login) router.push(pageLinks.Home)
  }, [pathName, user])

  if (!user && pathName === pageLinks.Home) return <LoadingOverlay />

  return (
    <WagmiConfig config={wagmiConfig}>
      <AuthProvider
        walletAddress={user?.address}
        isLoggedIn={!!user}
        login={handleLogin}
        logout={(): void => setUser(undefined)}>
        {children}
      </AuthProvider>
    </WagmiConfig>
  )
}

export default Web3Provider

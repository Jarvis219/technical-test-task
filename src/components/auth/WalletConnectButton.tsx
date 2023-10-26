'use client'

import { useWeb3Modal } from '@web3modal/wagmi/react'
import { memo } from 'react'

const WalletConnectButton = (): JSX.Element => {
  const { open } = useWeb3Modal()

  return (
    <button
      onClick={(): Promise<void> => open()}
      className='mt-5 relative rounded px-5 py-2.5 overflow-hidden group bg-cyan-500 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-cyan-400 transition-all ease-out duration-300'>
      <span className='absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease' />
      <span className='relative'>Wallet Connect</span>
    </button>
  )
}

export default memo(WalletConnectButton)

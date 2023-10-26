'use client'

import TTImage from '@/components/base/TTImage'
import { imageUrl } from '@/constants'
import { useAuthContext } from '@/contexts/AuthContext'
import { maskAddress } from '@/utils'
import { memo } from 'react'

const Header = (): JSX.Element => {
  const { walletAddress, logout } = useAuthContext()

  return (
    <header className='sticky top-0 left-0 right-0 w-full bg-indigo-950'>
      <div className='container mx-auto py-4 flex justify-between items-center'>
        <TTImage
          src={imageUrl.logo}
          width={48}
          height={48}
          lazy={false}
          priority
        />

        {walletAddress && (
          <button
            onClick={logout}
            className='relative rounded px-5 py-2.5 overflow-hidden group bg-cyan-500 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-cyan-400 transition-all ease-out duration-300'>
            <span className='absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease' />
            <span className='relative'>{maskAddress(walletAddress)}</span>
          </button>
        )}
      </div>
    </header>
  )
}

export default memo(Header)

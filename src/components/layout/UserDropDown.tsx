'use client'

import { useAuthContext } from '@/contexts/AuthContext'
import useOutsideClick from '@/hooks/useOutsideClick'
import { maskAddress } from '@/utils'
import { memo, useState } from 'react'
import { BiUserCircle } from 'react-icons/bi'

const UserDropDown = (): JSX.Element => {
  const { walletAddress, logout } = useAuthContext()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const ref = useOutsideClick(() => setIsMenuOpen(false))

  if (!walletAddress) return <></>

  return (
    <div className='relative inline-block text-left' ref={ref}>
      <button
        onClick={(): void => setIsMenuOpen(true)}
        className='relative rounded-full overflow-hidden group bg-cyan-500 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-cyan-400 transition-all ease-out duration-300'>
        <span className='absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease' />
        <span className='relative text-4xl'>
          <BiUserCircle />
        </span>
      </button>
      {isMenuOpen && (
        <div className='absolute right-0 z-50 mt-2 w-56 origin-top-right rounded bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
          <div className='py-1' role='none'>
            <p className='text-sm shadow py-2 px-4'>
              {maskAddress(walletAddress)}
            </p>
            <button
              onClick={logout}
              className='text-gray-700 block w-full px-4 py-2 text-left text-sm hover:text-indigo-900'>
              Sign out
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default memo(UserDropDown)

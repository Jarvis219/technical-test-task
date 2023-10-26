'use client'

import TTImage from '@/components/base/TTImage'
import SearchInputAndNotification from '@/components/layout/SearchInputAndNotification'
import UserDropDown from '@/components/layout/UserDropDown'
import { imageUrl, pageLinks } from '@/constants'
import { useAuthContext } from '@/contexts/AuthContext'
import { usePathname } from 'next/navigation'
import { memo } from 'react'

const Header = (): JSX.Element => {
  const { walletAddress } = useAuthContext()
  const pathName = usePathname()
  const isLoginPage = pathName === pageLinks.Login

  return (
    <header
      className={`sticky top-0 left-0 right-0 w-full z-40 px-2 ${
        isLoginPage ? 'bg-white' : 'bg-indigo-950'
      } `}>
      <div className='container mx-auto py-4 flex justify-between items-center'>
        <div className='flex items-center gap-1'>
          <TTImage
            src={imageUrl.logo}
            width={48}
            height={48}
            lazy={false}
            priority
          />
          <h2
            className={`text-base font-medium ${
              isLoginPage ? 'text-gray-900' : 'text-white'
            }`}>
            Exen
          </h2>
        </div>
        {walletAddress && !isLoginPage && (
          <div className='flex items-center gap-2'>
            <SearchInputAndNotification />
            <UserDropDown />
          </div>
        )}
      </div>
    </header>
  )
}

export default memo(Header)

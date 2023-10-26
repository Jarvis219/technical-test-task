'use client'

import { imageUrl, svgUrl } from '@/constants'
import { useWeb3Modal } from '@web3modal/wagmi/react'
import TTImage from '../base/TTImage'

const LoginContainer = (): JSX.Element => {
  const { open } = useWeb3Modal()

  return (
    <section className='container mx-auto px-3 md:px-0 w-full h-[60vh] md:h-[80vh] grid md:place-content-center gap-3'>
      <div className='col-span-3 flex items-center md:justify-center'>
        <div className='relative'>
          <h2 className='font-semibold text-4xl md:text-5xl md:leading-tight text-gray-900'>
            Sign in to <br /> trade your portfolio
          </h2>
          <button
            onClick={(): Promise<void> => open()}
            className='mt-5 relative rounded px-5 py-2.5 overflow-hidden group bg-cyan-500 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-cyan-400 transition-all ease-out duration-300'>
            <span className='absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease' />
            <span className='relative'>Wallet Connect</span>
          </button>
          <p className='mt-6'>
            if you don&apos;t have an account, <br /> you can{' '}
            <span className='font-bold cursor-pointer text-blue-500 hover:text-blue-600'>
              Register here!
            </span>
            <br />
          </p>
          <TTImage
            src={svgUrl.ellipse}
            alt='login-ellipse'
            className='absolute left-0 -top-14 z-[-1]'
          />
        </div>
        <TTImage
          src={imageUrl.person}
          alt='login-person'
          priority
          lazy={false}
          width={445}
          height={349}
          className='absolute right-0 bottom-20 z-[-1] lg:relative'
        />
      </div>
    </section>
  )
}

export default LoginContainer

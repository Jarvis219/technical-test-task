import WalletConnectButton from '@/components/auth/WalletConnectButton'
import TTImage from '@/components/base/TTImage'
import { imageUrl, svgUrl } from '@/constants'

const LoginContainer = (): JSX.Element => (
  <section className='container mx-auto px-3 md:px-0 w-full h-[60vh] md:h-[80vh] grid md:place-content-center gap-3'>
    <div className='col-span-3 flex items-center md:justify-center'>
      <div className='relative'>
        <h2 className='font-semibold text-4xl md:text-5xl md:leading-tight text-gray-900'>
          Sign in to <br /> trade your portfolio
        </h2>
        <WalletConnectButton />
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

export default LoginContainer

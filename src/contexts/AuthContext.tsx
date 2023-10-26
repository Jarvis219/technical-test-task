import LoadingOverlay from '@/components/base/LoadingOverlay'
import { getSignatureMessage, pageLinks } from '@/constants'
import { IAuthContext, IUser } from '@/types'
import { usePathname, useRouter } from 'next/navigation'
import {
  ReactNode,
  createContext,
  useContext,
  useLayoutEffect,
  useState,
} from 'react'
import { useAccount, useDisconnect, useSignMessage } from 'wagmi'

const initState: IAuthContext = {
  walletAddress: undefined,
  isLoggedIn: false,
  logout: () => {},
}

const AuthContext = createContext<IAuthContext>(initState)

const AuthProvider = ({ children }: { children: ReactNode }): JSX.Element => {
  const router = useRouter()
  const pathName = usePathname()
  const { disconnect } = useDisconnect()

  const [user, setUser] = useState<IUser>()

  const { address } = useAccount({
    onConnect: () =>
      signMessage({
        message: getSignatureMessage(address as string),
      }),
  })

  const { signMessage } = useSignMessage({
    onSuccess(signature, variables) {
      const { message } = variables
      const singedMessage = message
      setUser({ address: address as string, signature, singedMessage })
    },
    onError(error) {
      throw error
    },
  })

  useLayoutEffect(() => {
    if (user && pathName === pageLinks.Login) {
      router.push(pageLinks.Home)
      return
    }

    user ? router.push(pageLinks.Home) : router.push(pageLinks.Login)
  }, [pathName, user])

  if (
    (!user && pathName === pageLinks.Home) ||
    (user && pathName === pageLinks.Login)
  )
    return <LoadingOverlay />

  const handleLogout = (): void => {
    setUser(undefined)
    disconnect()
  }

  return (
    <AuthContext.Provider
      value={{
        walletAddress: user?.address,
        isLoggedIn: !!user,
        logout: handleLogout,
      }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider

export function useAuthContext(): IAuthContext {
  try {
    return useContext(AuthContext)
  } catch (error) {
    throw new Error('useAuthContext must be used within AuthProvider')
  }
}

import { getSignatureMessage } from '@/constants'
import { IAuthContext, IUser } from '@/types'
import { ReactNode, createContext, useContext } from 'react'
import { useAccount, useSignMessage } from 'wagmi'

const initState: IAuthContext = {
  walletAddress: undefined,
  isLoggedIn: false,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  login: ({ address, signature, singedMessage }) => {},
  logout: () => {},
}

const AuthContext = createContext<IAuthContext>(initState)

interface IAuthProviderProps extends Omit<IAuthContext, 'login'> {
  children: ReactNode
  login: ({ address, signature, singedMessage }: IUser) => void
}

const AuthProvider = ({
  children,
  walletAddress,
  isLoggedIn,
  login,
  logout,
}: IAuthProviderProps): JSX.Element => {
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
      login({ address: address as string, signature, singedMessage })
    },

    onError(error) {
      throw error
    },
  })

  return (
    <AuthContext.Provider
      value={{
        walletAddress: walletAddress,
        isLoggedIn,
        login,
        logout,
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

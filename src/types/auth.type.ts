export interface IAuthContext {
  walletAddress?: string
  isLoggedIn: boolean
  login: ({ address, signature, singedMessage }: IUser) => void
  logout: () => void
}

export interface IUser {
  address: string
  singedMessage: string
  signature: string
}

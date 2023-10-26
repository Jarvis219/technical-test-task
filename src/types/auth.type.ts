export interface IAuthContext {
  walletAddress?: string
  isLoggedIn: boolean
  logout: () => void
}

export interface IUser {
  address: string
  singedMessage: string
  signature: string
}

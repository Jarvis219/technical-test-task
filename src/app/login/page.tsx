import LoginContainer from '@/components/containers/LoginContainer'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Login',
  description: 'Login',
}

const LoginPage = (): JSX.Element => <LoginContainer />

export default LoginPage

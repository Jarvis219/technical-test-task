import Header from '@/components/layout/Header'
import { imageUrl } from '@/constants'
import AuthProvider from '@/providers/AuthProvider'
import '@/styles/globals.scss'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Suspense } from 'react'
import Loading from './loading'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Test technical',
  description: 'Test technical',
  icons: imageUrl.logo,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}): JSX.Element {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <AuthProvider>
          <Suspense fallback={<Loading />}>
            <Header />
            {children}
          </Suspense>
        </AuthProvider>
      </body>
    </html>
  )
}

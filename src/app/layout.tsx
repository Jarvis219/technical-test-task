import Header from '@/components/layout/Header'
import { imageUrl } from '@/constants'
import Web3Provider from '@/providers/Web3Provider'
import '@/styles/globals.scss'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Suspense } from 'react'
import Loading from './loading'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'The Technical Test Task',
  description: 'The Technical Test Task',
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
        <Web3Provider>
          <Suspense fallback={<Loading />}>
            <Header />
            {children}
          </Suspense>
        </Web3Provider>
      </body>
    </html>
  )
}

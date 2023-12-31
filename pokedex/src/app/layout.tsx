import Home from '@/Pages/Home'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout() {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <Home/>
      </body>
    </html>
  )
}
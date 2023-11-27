import { Navbar } from '@/components/navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title:"R4Y Portfolio",
  description:"I'm a passionate software engineer, I specialize in building & designing exceptional digital experiences",
  icons:{
    icon: '/images/favicon.ico', // /public path
    apple: '/images/apple-touch-icon.png',
    
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {


  return (
    <html lang="en">
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png"/>
        <link rel="manifest" href="/images/site.webmanifest"/>
      </Head>
      <body className="bg-background-100">
        <Navbar/>
        {children}
      </body>
    </html>
  )
}

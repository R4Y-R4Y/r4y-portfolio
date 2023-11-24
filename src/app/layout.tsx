"use client"
import { Navbar } from '@/components/navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Loader, useProgress } from '@react-three/drei'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const { active, progress, errors, item, loaded, total } = useProgress()

  return (
    <html lang="en">
      <body className="bg-background-100">
        <Navbar/>
        {children}
      </body>
    </html>
  )
}

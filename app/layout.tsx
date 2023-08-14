import Header from '@/components/Header/Header'
import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Yusuf GUNES',
  description: "Hello, I'm Yusuf Gunes",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="max-w-[720px] m-auto py-8">
        <Header/>
        {children}
      </body>
    </html>
  )
}
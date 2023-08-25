import Header from '@/components/Header/Header'
import '../globals.css'
import type { Metadata } from 'next'
import { useLocale } from 'next-intl'
import { notFound } from "next/navigation"

export const metadata: Metadata = {
  title: 'Yusuf GUNES',
  description: "Hello, I'm Yusuf Gunes",
}

export default function RootLayout({
  children, params
}: {
  children: React.ReactNode,
  params: any
}) {

  const locale = useLocale()

  if (params.locale !== locale) {
    notFound()
  }

  return (
    <html lang={locale}>
      <body>
        {children}
      </body>
    </html>
  )
}

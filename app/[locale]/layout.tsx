import Header from '@/components/Header/Header'
import '../globals.css'
import type { Metadata } from 'next'
import { useLocale } from 'next-intl'
import { notFound } from "next/navigation"
import { NextIntlClientProvider } from 'next-intl';

export const metadata: Metadata = {
  title: 'Yusuf GUNES',
  description: "Hello, I'm Yusuf Gunes",
}

export default async function RootLayout({
  children, params
}: {
  children: React.ReactNode,
  params: any
}) {

  const locale = useLocale()

  if (params.locale !== locale) {
    notFound()
  }

  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}

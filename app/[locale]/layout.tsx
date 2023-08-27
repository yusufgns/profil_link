import '../globals.css';
import type { Metadata } from 'next';
import { useLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';

export const metadata: Metadata = {
  title: 'Yusuf GUNES',
  description: "Hello, I'm Yusuf Gunes",
};

async function RootChild({
  params,
  children,
  locale,
}: {
  params: any;
  children: React.ReactNode;
  locale: any;
}) {
  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: any;
}) {
  const locale = useLocale();

  if (params.locale !== locale) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body>
        <RootChild params={params} locale={locale}>
          {children}
        </RootChild>
      </body>
    </html>
  );
}

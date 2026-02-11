import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { ReactNode } from 'react';
import { routing } from '../../i18n/routing';
import { ServerDataProvider } from '../../context/ServerDataProvider';
import { getNavigationConfigEntries, getWebConfigEntries } from '../../lib/contentstack/contentstack'
import { App } from '../../types';

type Props = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }
  const [webConfig, navigationConfig] = await Promise.all([
    getWebConfigEntries('tbw_web_config', locale) as Promise<App.WebConfig | undefined>,
    getNavigationConfigEntries('navigation_config', locale)
])

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
        <ServerDataProvider 
                    webConfig={webConfig || undefined}
                    navigationConfig={navigationConfig || undefined}
                >
          {children}
          </ServerDataProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
'use client';

import { useTranslations } from 'next-intl';

export default function NotFoundPage() {
  const t = useTranslations('error');

  return (
    <main>
      <h1>404</h1>
      <p>{t('notFound')}</p>
      <p>{t('pageNotFound')}</p>
    </main>
  );
}

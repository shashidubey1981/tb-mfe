'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useParams } from 'next/navigation';

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const currentLocale = params.locale as string;

  const switchLocale = (newLocale: string) => {
    // Remove current locale from pathname
    const pathWithoutLocale = pathname.replace(`/${currentLocale}`, '');
    
    // Build new path
    const newPath = newLocale === 'en' 
      ? pathWithoutLocale || '/'
      : `/${newLocale}${pathWithoutLocale}`;
    
    router.push(newPath);
  };

  return (
    <div style={{ padding: '1rem', display: 'flex', gap: '0.5rem' }}>
      <button 
        onClick={() => switchLocale('en')}
        style={{
          padding: '0.5rem 1rem',
          backgroundColor: currentLocale === 'en' ? '#0070f3' : '#eaeaea',
          color: currentLocale === 'en' ? 'white' : 'black',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        English
      </button>
      <button 
        onClick={() => switchLocale('es')}
        style={{
          padding: '0.5rem 1rem',
          backgroundColor: currentLocale === 'es' ? '#0070f3' : '#eaeaea',
          color: currentLocale === 'es' ? 'white' : 'black',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        Español
      </button>
    </div>
  );
}
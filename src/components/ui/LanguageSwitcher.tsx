'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();
  const currentLocale = pathname.split('/')[1];
  const [locale, setLocale] = useState(currentLocale || 'es');

  const switchLanguage = (newLocale: string) => {
    setLocale(newLocale);
    const newPath = pathname.replace(`/${currentLocale}`, `/${newLocale}`);
    router.push(newPath);
  };

  return (
    <div className="fixed top-4 right-4 z-50">
      <div className="flex gap-2 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-2">
        <button
          onClick={() => switchLanguage('es')}
          className={`px-4 py-2 rounded-md font-semibold transition-all ${
            locale === 'es'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
          }`}
        >
          ES
        </button>
        <button
          onClick={() => switchLanguage('en')}
          className={`px-4 py-2 rounded-md font-semibold transition-all ${
            locale === 'en'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
          }`}
        >
          EN
        </button>
      </div>
    </div>
  );
}
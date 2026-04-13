import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('hero');

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="text-center px-4">
        <h1 className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300">
          {t('greeting')}
        </h1>
        <h2 className="text-4xl md:text-6xl font-bold mt-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
          {t('name')}
        </h2>
        <p className="text-xl md:text-2xl mt-6 text-gray-800 dark:text-gray-200">
          {t('title')}
        </p>
        <p className="text-lg md:text-xl mt-2 text-gray-600 dark:text-gray-400">
          {t('subtitle')}
        </p>
        <button className="mt-8 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors">
          {t('downloadCV')}
        </button>
      </div>
    </div>
  );
}
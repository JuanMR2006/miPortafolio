import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';

const locales = ['es', 'en'];

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  // Validar que el locale existe
  if (!locale || !locales.includes(locale)) {
    locale = 'es'; // locale por defecto
  }

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default
  };
});
'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const t = useTranslations('nav');
  const pathname = usePathname();
  const router = useRouter();
  const currentLocale = pathname.split('/')[1];
  const [locale, setLocale] = useState(currentLocale || 'es');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const switchLanguage = (newLocale: string) => {
    setLocale(newLocale);
    const newPath = pathname.replace(`/${currentLocale}`, `/${newLocale}`);
    router.push(newPath);
  };

  const navItems = [
    { href: '#inicio', label: t('home') },
    { href: '#sobre-mi', label: t('about') },
    { href: '#proyectos', label: t('projects') },
    { href: '#experiencia', label: t('experience') },
    { href: '#contacto', label: t('contact') },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-4 left-0 right-0 z-50 px-4"
    >
      <nav className="max-w-7xl mx-auto bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl shadow-2xl rounded-full border border-gray-200 dark:border-gray-700 px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Nombre */}
          <Link 
            href="#inicio" 
            className="text-base md:text-lg lg:text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent hover:scale-105 transition-transform whitespace-nowrap"
          >
            Juan José Montezuma
          </Link>

          {/* Desktop Menu + Language Switcher */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            <ul className="flex gap-6 xl:gap-8">
              {navItems.map((item, index) => (
                <motion.li
                  key={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.4 }}
                >
                  <Link 
                    href={item.href} 
                    className="text-sm lg:text-base text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium whitespace-nowrap"
                  >
                    {item.label}
                  </Link>
                </motion.li>
              ))}
            </ul>

            {/* Language Switcher Desktop */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.4 }}
              className="flex gap-1 bg-gray-100 dark:bg-gray-800 rounded-full p-1"
            >
              <button
                onClick={() => switchLanguage('es')}
                className={`px-3 py-1.5 rounded-full font-semibold text-xs transition-all whitespace-nowrap ${
                  locale === 'es'
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                ES
              </button>
              <button
                onClick={() => switchLanguage('en')}
                className={`px-3 py-1.5 rounded-full font-semibold text-xs transition-all whitespace-nowrap ${
                  locale === 'en'
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                EN
              </button>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden mt-4 pt-4 border-t border-gray-200 dark:border-gray-700"
          >
            <ul className="flex flex-col gap-3">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium py-2"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Mobile Language Switcher */}
            <div className="flex gap-2 mt-4 bg-gray-100 dark:bg-gray-800 rounded-full p-1">
              <button
                onClick={() => switchLanguage('es')}
                className={`flex-1 px-4 py-2 rounded-full font-semibold text-sm transition-all ${
                  locale === 'es'
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-700 dark:text-gray-300'
                }`}
              >
                ES
              </button>
              <button
                onClick={() => switchLanguage('en')}
                className={`flex-1 px-4 py-2 rounded-full font-semibold text-sm transition-all ${
                  locale === 'en'
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-700 dark:text-gray-300'
                }`}
              >
                EN
              </button>
            </div>
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
}
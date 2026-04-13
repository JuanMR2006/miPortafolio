'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Download, Code, Mail } from 'lucide-react';

export default function Hero() {
  const t = useTranslations('hero');

  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto text-center w-full">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-4"
        >
          {t('greeting')}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent leading-tight"
        >
          {t('name')}
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-800 dark:text-gray-200 font-semibold mb-4"
        >
          {t('title')}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: 'easeOut' }}
          className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto"
        >
          {t('subtitle')}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transition-all shadow-lg hover:shadow-xl w-full sm:w-auto"
          >
            <Download size={20} />
            {t('downloadCV')}
          </motion.button>

          <motion.a
            href="#contacto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200 font-semibold rounded-full transition-all shadow-lg hover:shadow-xl w-full sm:w-auto"
          >
            <Mail size={20} />
            {t('contact')}
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2, ease: 'easeOut' }}
          className="flex gap-4 justify-center mt-8"
        >
          <motion.a
            href="https://github.com/JuanMR2006"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            className="p-3 bg-gray-200 dark:bg-gray-800 hover:bg-blue-600 dark:hover:bg-blue-600 text-gray-800 dark:text-gray-200 hover:text-white rounded-full transition-all shadow-md hover:shadow-lg"
          >
            <Code size={24} />
          </motion.a>
          <motion.a
            href="mailto:juanjomontezuma@gmail.com"
            whileHover={{ scale: 1.2, rotate: -5 }}
            whileTap={{ scale: 0.9 }}
            className="p-3 bg-gray-200 dark:bg-gray-800 hover:bg-blue-600 dark:hover:bg-blue-600 text-gray-800 dark:text-gray-200 hover:text-white rounded-full transition-all shadow-md hover:shadow-lg"
          >
            <Mail size={24} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

export default function About() {
  const t = useTranslations('about');

  return (
    <section id="sobre-mi" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-5xl mx-auto w-full">
        
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            {t('title')}
          </h2>
        </motion.div>

        {/* Profile Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow max-w-3xl mx-auto"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-blue-600 dark:text-blue-400 mb-4">
            01. {t('profile')}
          </h3>
          <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            {t('profileText')}
          </p>
        </motion.div>

      </div>
    </section>
  );
}
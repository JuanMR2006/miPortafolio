'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

export default function Testimonials() {
  const t = useTranslations('testimonials');

  return (
    <section id="testimonios" className="px-4 sm:px-6 lg:px-8 py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            {t('title')}
          </h2>
        </motion.div>

        {/* Testimonials Container - vacío por ahora */}
        <div className="relative">
          {/* Aquí irán los testimonios */}
        </div>

      </div>
    </section>
  );
}
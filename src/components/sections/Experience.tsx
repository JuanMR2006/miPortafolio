'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

export default function Experience() {
  const t = useTranslations('experience');

  return (
    <section id="experiencia" className="px-4 sm:px-6 lg:px-8 py-24 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
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

        {/* Timeline Container - vacío por ahora */}
        <div className="relative max-w-4xl mx-auto">
          {/* Aquí irá la línea de tiempo */}
        </div>

      </div>
    </section>
  );
}
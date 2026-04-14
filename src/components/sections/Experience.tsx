'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase } from 'lucide-react';

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

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Vertical Line - Centered */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-600 via-purple-600 to-pink-600"></div>

          {/* Timeline Items */}
          <div className="space-y-16">
            
            {/* Item 1 - Looking for Experience (Left Side) */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, type: "spring" }}
              className="relative flex items-center"
            >
              <div className="w-full md:w-1/2 md:pr-8">
                {/* Content Card with Icon */}
                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="relative bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl p-6 shadow-2xl hover:shadow-blue-500/50 transition-all"
                >
                  {/* Icon attached to card - better centered */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    className="absolute -right-8 top-6 w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center shadow-xl z-10 border-4 border-white dark:border-gray-900"
                  >
                    <Briefcase size={28} className="text-white" />
                  </motion.div>

                  <div className="flex items-center gap-3 mb-3">
                    <Briefcase size={28} className="text-white" />
                    <h3 className="text-2xl font-bold text-white">
                      {t('experience.title')}
                    </h3>
                  </div>
                  <p className="text-sm text-white/80 mb-3 font-semibold">
                    {t('experience.period')}
                  </p>
                  <p className="text-base text-white/90 leading-relaxed">
                    {t('experience.description')}
                  </p>
                </motion.div>
              </div>

              {/* Empty space for right side on desktop */}
              <div className="hidden md:block w-1/2"></div>
            </motion.div>

            {/* Item 2 - Education (Right Side) */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, type: "spring", delay: 0.2 }}
              className="relative flex items-center"
            >
              {/* Empty space for left side on desktop */}
              <div className="hidden md:block w-1/2"></div>

              <div className="w-full md:w-1/2 md:pl-8">
                {/* Content Card with Icon */}
                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="relative bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl p-6 shadow-2xl hover:shadow-purple-500/50 transition-all"
                >
                  {/* Icon attached to card - better centered */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    whileHover={{ scale: 1.2, rotate: -360 }}
                    className="absolute -left-8 top-6 w-16 h-16 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center shadow-xl z-10 border-4 border-white dark:border-gray-900"
                  >
                    <GraduationCap size={28} className="text-white" />
                  </motion.div>

                  <div className="flex items-center gap-3 mb-3">
                    <GraduationCap size={28} className="text-white" />
                    <h3 className="text-2xl font-bold text-white">
                      {t('education.title')}
                    </h3>
                  </div>
                  <p className="text-lg font-bold text-white mb-2">
                    {t('education.degree')}
                  </p>
                  <p className="text-sm text-white/80 mb-2">
                    {t('education.institution')}
                  </p>
                  <p className="text-sm text-white/80 font-semibold">
                    {t('education.period')}
                  </p>
                </motion.div>
              </div>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
}
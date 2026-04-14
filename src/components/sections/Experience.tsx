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
          
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-indigo-600"></div>

          {/* Timeline Items */}
          <div className="space-y-12">
            
            {/* Item 1 - Looking for Experience */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative flex items-start md:justify-end md:w-1/2 md:pr-12 pl-20 md:pl-0"
            >
              {/* Icon */}
              <div className="absolute left-4 md:left-auto md:right-[-2.5rem] w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center shadow-lg z-10">
                <Briefcase size={24} className="text-white" />
              </div>

              {/* Content Card */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-shadow w-full">
                <div className="flex items-center gap-3 mb-3">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">
                    {t('experience.title')}
                  </h3>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  {t('experience.period')}
                </p>
                <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                  {t('experience.description')}
                </p>
              </div>
            </motion.div>

            {/* Item 2 - Education */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative flex items-start md:justify-start md:w-1/2 md:ml-auto md:pl-12 pl-20 md:pr-0"
            >
              {/* Icon */}
              <div className="absolute left-4 md:left-[-2.5rem] w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center shadow-lg z-10">
                <GraduationCap size={24} className="text-white" />
              </div>

              {/* Content Card */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-shadow w-full">
                <div className="flex items-center gap-3 mb-3">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">
                    {t('education.title')}
                  </h3>
                </div>
                <p className="text-base font-semibold text-gray-800 dark:text-gray-200 mb-2">
                  {t('education.degree')}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                  {t('education.institution')}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  {t('education.period')}
                </p>
                
                {/* Relevant Courses */}
                <div>
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    {t('education.relevantCourses')}
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {t.raw('education.courses').map((course: string, index: number) => (
                      <li key={index} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                        {course}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
}
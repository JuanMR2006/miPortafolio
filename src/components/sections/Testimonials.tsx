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

        {/* Testimonials Container */}
        <div className="relative max-w-5xl mx-auto space-y-8">
          
          {/* Testimonial Card 1 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-3xl p-8 lg:p-12 shadow-2xl"
          >
            <div className="flex flex-col items-center text-center">
              
              <div className="text-6xl text-white/30 mb-4">"</div>
              
              <p className="text-lg sm:text-xl text-white leading-relaxed mb-8">
                {t('testimonial1.text')}
              </p>

              <div className="flex flex-col items-center">
                <p className="text-lg font-bold text-white mb-1">
                  {t('testimonial1.author')}
                </p>
                <p className="text-sm text-white/80">
                  {t('testimonial1.position')}
                </p>
              </div>

            </div>
          </motion.div>

          {/* Testimonial Card 2 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl p-8 lg:p-12 shadow-2xl"
          >
            <div className="flex flex-col items-center text-center">
              
              <div className="text-6xl text-white/30 mb-4">"</div>
              
              <p className="text-lg sm:text-xl text-white leading-relaxed mb-8">
                {t('testimonial2.text')}
              </p>

              <div className="flex flex-col items-center">
                <p className="text-lg font-bold text-white mb-1">
                  {t('testimonial2.author')}
                </p>
                <p className="text-sm text-white/80">
                  {t('testimonial2.position')}
                </p>
              </div>

            </div>
          </motion.div>

          {/* Testimonial Card 3 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-br from-emerald-600 to-teal-600 rounded-3xl p-8 lg:p-12 shadow-2xl"
          >
            <div className="flex flex-col items-center text-center">
              
              <div className="text-6xl text-white/30 mb-4">"</div>
              
              <p className="text-lg sm:text-xl text-white leading-relaxed mb-8">
                {t('testimonial3.text')}
              </p>

              <div className="flex flex-col items-center">
                <p className="text-lg font-bold text-white mb-1">
                  {t('testimonial3.author')}
                </p>
                <p className="text-sm text-white/80">
                  {t('testimonial3.position')}
                </p>
              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
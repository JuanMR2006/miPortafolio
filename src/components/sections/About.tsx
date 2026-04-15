'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Code, Gamepad2, Music, Target } from 'lucide-react';

export default function About() {
  const t = useTranslations('about');

  return (
    <section id="sobre-mi" className="px-4 sm:px-6 lg:px-8 py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto w-full">

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-12">
          
          {/* Left - Image (más pequeña) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="relative w-full max-w-sm mx-auto aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 opacity-20 z-10"></div>
              <Image
                src="/cara.jpeg"
                alt="Juan José Montezuma Rosero"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 z-20">
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                  Juan José Montezuma
                </h3>
                <p className="text-gray-200 text-sm">
                  Software Engineering Student
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right - Content Stack */}
          <div className="lg:col-span-3 space-y-6">
            
            {/* Section Title */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-6">
                {t('title')}
              </h2>
            </motion.div>

            {/* Intro Text */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
                <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  {t('intro')}
                </p>
              </div>
            </motion.div>

            {/* Professional Goals */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-6 lg:p-8 shadow-xl">
                <div className="flex items-start gap-4">
                  <div className="hidden sm:block p-3 bg-white/20 rounded-xl flex-shrink-0">
                    <Target size={32} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                      {t('goals')}
                    </h3>
                    <p className="text-base sm:text-lg text-white/95 leading-relaxed">
                      {t('goalsText')}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>

        </div>

        {/* Development & Hobbies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Development Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-xl">
                <Code size={32} className="text-blue-600 dark:text-blue-400" />
              </div>
              <h4 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                {t('development')}
              </h4>
            </div>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              {t('developmentText')}
            </p>
          </motion.div>

          {/* Gaming Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-purple-100 dark:bg-purple-900 rounded-xl">
                <Gamepad2 size={32} className="text-purple-600 dark:text-purple-400" />
              </div>
              <h4 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                {t('gaming')}
              </h4>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
              {t('gamingText')}
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-2 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 rounded-lg text-sm font-medium">
                Fortnite
              </span>
              <span className="px-3 py-2 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 rounded-lg text-sm font-medium">
                Valorant
              </span>
              <span className="px-3 py-2 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 rounded-lg text-sm font-medium">
                Clash Royale
              </span>
              <span className="px-3 py-2 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 rounded-lg text-sm font-medium">
                Brawlhalla
              </span>
            </div>
          </motion.div>

          {/* Music Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-pink-100 dark:bg-pink-900 rounded-xl">
                <Music size={32} className="text-pink-600 dark:text-pink-400" />
              </div>
              <h4 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                {t('music')}
              </h4>
            </div>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              {t('musicText')}
            </p>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
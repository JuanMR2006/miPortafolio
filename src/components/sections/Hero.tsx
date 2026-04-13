'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Download, Code, Mail } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  const t = useTranslations('hero');

  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-32 md:pt-40">
      <div className="max-w-7xl mx-auto w-full">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          {/* LEFT - Image */}
<motion.div
  initial={{ opacity: 0, x: -50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8, delay: 0.2 }}
  className="flex justify-center lg:justify-start order-2 lg:order-1"
>
  <div className="relative w-80 h-[450px] sm:w-96 sm:h-[520px] md:w-[450px] md:h-[580px]">
    
    {/* Decorative blobs */}
    <div className="absolute -top-6 -left-6 w-40 h-40 bg-blue-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>
    <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-purple-500 rounded-full blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '1s' }}></div>
    <div className="absolute top-1/2 -right-8 w-32 h-32 bg-indigo-500 rounded-full blur-2xl opacity-20 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
    
    {/* Main container with crazy shape */}
    <div className="relative w-full h-full">
      {/* Background shapes */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 rounded-[60px] rotate-3 scale-105"></div>
      <div className="absolute inset-0 bg-gradient-to-tl from-blue-500 via-purple-500 to-indigo-500 rounded-[50px] -rotate-2 scale-95 blur-sm opacity-70"></div>
      
      {/* Image container with custom shape */}
      <div className="relative w-full h-full rounded-[45px] overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-400/20 z-10"></div>
        <Image
          src="/cuerpocompleto.jpeg"
          alt="Juan José Montezuma Rosero"
          fill
          className="object-cover"
          priority
        />
        
        {/* Overlay border effect */}
        <div className="absolute inset-0 border-4 border-white/30 rounded-[45px] z-20"></div>
      </div>
      
      {/* Floating badge */}
      <motion.div
        animate={{ 
          y: [0, -10, 0],
          rotate: [0, 5, 0, -5, 0]
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute -bottom-4 -right-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-2xl shadow-xl z-30 font-bold text-sm"
      >
      </motion.div>
    </div>
    
  </div>
</motion.div>

          {/* RIGHT - Info */}
          <div className="text-center lg:text-left order-1 lg:order-2">
            
            {/* Greeting */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-2"
            >
              {t('greeting')}
            </motion.p>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-3 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent leading-tight"
            >
              {t('name')}
            </motion.h1>

            {/* Title */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-xl sm:text-2xl lg:text-3xl text-gray-800 dark:text-gray-200 font-semibold mb-3"
            >
              {t('title')}
            </motion.h2>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-4"
            >
              {t('subtitle')}
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-8 leading-relaxed"
            >
              {t('description')}
            </motion.p>

            {/* Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex justify-center lg:justify-start mb-6"
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold rounded-xl shadow-lg hover:shadow-2xl transition-all flex items-center gap-2"
              >
                <Download size={20} />
                {t('downloadCV')}
              </motion.button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="flex gap-4 justify-center lg:justify-start"
            >
              <motion.a
                href="https://github.com/JuanMR2006"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="p-4 bg-gray-200 dark:bg-gray-800 hover:bg-blue-600 dark:hover:bg-blue-600 text-gray-800 dark:text-gray-200 hover:text-white rounded-xl shadow-lg hover:shadow-xl transition-all"
                aria-label="GitHub"
              >
                <Code size={24} />
              </motion.a>
              <motion.a
                href="mailto:juanjomontezuma@gmail.com"
                whileHover={{ scale: 1.15, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
                className="p-4 bg-gray-200 dark:bg-gray-800 hover:bg-blue-600 dark:hover:bg-blue-600 text-gray-800 dark:text-gray-200 hover:text-white rounded-xl shadow-lg hover:shadow-xl transition-all"
                aria-label="Email"
              >
                <Mail size={24} />
              </motion.a>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
}
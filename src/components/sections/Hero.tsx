'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Code, Mail, Download } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  const t = useTranslations('hero');

  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-32 md:pt-40 pb-20">
      <div className="max-w-7xl mx-auto w-full">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          {/* LEFT - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:justify-start order-2 lg:order-1"
          >
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-[420px] md:h-[420px]">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500 rounded-3xl blur-2xl opacity-40 animate-pulse"></div>
              
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

            {/* Download CV Button */}
            <motion.a
              href="/CV_Juan_Montezuma.pdf"
              download="CV_Juan_Jose_Montezuma.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all flex items-center gap-2"
            >
              <Download size={20} />
              {t('downloadCV')}
            </motion.a>


          </div>

        </div>

      </div>
    </section>
  );
}
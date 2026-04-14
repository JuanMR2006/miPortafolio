'use client';

import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Testimonials() {
  const t = useTranslations('testimonials');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const testimonials = [
    {
      id: 1,
      textKey: 'testimonial1.text',
      authorKey: 'testimonial1.author',
      positionKey: 'testimonial1.position',
      gradient: 'from-blue-600 to-indigo-600',
    },
    {
      id: 2,
      textKey: 'testimonial2.text',
      authorKey: 'testimonial2.author',
      positionKey: 'testimonial2.position',
      gradient: 'from-purple-600 to-pink-600',
    },
    {
      id: 3,
      textKey: 'testimonial3.text',
      authorKey: 'testimonial3.author',
      positionKey: 'testimonial3.position',
      gradient: 'from-emerald-600 to-teal-600',
    },
    {
      id: 4,
      textKey: 'testimonial4.text',
      authorKey: 'testimonial4.author',
      positionKey: 'testimonial4.position',
      gradient: 'from-orange-600 to-red-600',
    },
  ];
  
  // Auto-rotate every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? '-100%' : '100%',
      opacity: 0,
    }),
  };

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

        {/* Testimonials Carousel */}
        <div className="relative max-w-6xl mx-auto">
          
          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 z-20 p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} className="text-blue-600 dark:text-blue-400" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 z-20 p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} className="text-blue-600 dark:text-blue-400" />
          </button>

          {/* Testimonials Container */}
          <div className="relative overflow-hidden min-h-[350px] lg:min-h-[300px] flex items-center">
            <AnimatePresence initial={false} mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "tween", duration: 0.5, ease: "easeInOut" },
                  opacity: { duration: 0.3 },
                }}
                className="w-full absolute inset-0"
              >
                {/* Mobile: Show 1 card, Desktop: Show 2 cards */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-full">
                  
                  {/* First Card - Always visible */}
                  <div
                    className={`bg-gradient-to-br ${testimonials[currentIndex].gradient} rounded-3xl p-8 shadow-2xl flex items-center justify-center`}
                  >
                    <div className="flex flex-col items-center text-center justify-between h-full">
                      
                      <div className="text-6xl text-white/30 mb-4">"</div>
                      
                      <p className="text-base sm:text-lg text-white leading-relaxed mb-6 flex-1 flex items-center">
                        {t(testimonials[currentIndex].textKey)}
                      </p>

                      <div className="flex flex-col items-center">
                        <p className="text-lg font-bold text-white mb-1">
                          {t(testimonials[currentIndex].authorKey)}
                        </p>
                        <p className="text-sm text-white/80">
                          {t(testimonials[currentIndex].positionKey)}
                        </p>
                      </div>

                    </div>
                  </div>

                  {/* Second Card - Only visible on desktop */}
                  <div
                    className={`hidden lg:block bg-gradient-to-br ${testimonials[(currentIndex + 1) % testimonials.length].gradient} rounded-3xl p-8 shadow-2xl`}
                  >
                    <div className="flex flex-col items-center text-center justify-between h-full">
                      
                      <div className="text-6xl text-white/30 mb-4">"</div>
                      
                      <p className="text-base sm:text-lg text-white leading-relaxed mb-6 flex-1 flex items-center">
                        {t(testimonials[(currentIndex + 1) % testimonials.length].textKey)}
                      </p>

                      <div className="flex flex-col items-center">
                        <p className="text-lg font-bold text-white mb-1">
                          {t(testimonials[(currentIndex + 1) % testimonials.length].authorKey)}
                        </p>
                        <p className="text-sm text-white/80">
                          {t(testimonials[(currentIndex + 1) % testimonials.length].positionKey)}
                        </p>
                      </div>

                    </div>
                  </div>

                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setDirection(idx > currentIndex ? 1 : -1);
                  setCurrentIndex(idx);
                }}
                className={`h-3 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  idx === currentIndex
                    ? 'bg-blue-600 dark:bg-blue-400 w-8'
                    : 'bg-gray-300 dark:bg-gray-600 w-3'
                }`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
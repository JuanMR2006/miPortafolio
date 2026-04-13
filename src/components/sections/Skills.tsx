'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { 
  SiHtml5, 
  SiCss, 
  SiJavascript, 
  SiMongodb, 
  SiGit 
} from 'react-icons/si';

// Custom Java Icon Component
const JavaIcon = ({ size, color }: { size: number; color: string }) => (
  <svg width={size} height={size} viewBox="0 0 256 346" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid">
    <path d="M82.554 267.473s-13.198 7.675 9.393 10.272c27.369 3.122 41.356 2.675 71.517-3.034 0 0 7.93 4.972 19.003 9.279-67.611 28.977-153.019-1.679-99.913-16.517M74.292 229.659s-14.803 10.958 7.805 13.296c29.236 3.016 52.324 3.263 92.276-4.43 0 0 5.526 5.602 14.215 8.666-81.747 23.904-172.798 1.885-114.296-17.532" fill={color}/>
    <path d="M143.942 165.515c16.66 19.18-4.377 36.44-4.377 36.44s42.301-21.837 22.874-49.183c-18.144-25.5-32.059-38.172 43.268-81.858 0 0-118.238 29.53-61.765 94.6" fill={color}/>
    <path d="M233.364 295.442s9.767 8.047-10.757 14.273c-39.026 11.823-162.432 15.393-196.714.471-12.323-5.36 10.787-12.8 18.056-14.362 7.581-1.644 11.914-1.337 11.914-1.337-13.705-9.655-88.583 18.957-38.034 27.15 137.853 22.356 251.292-10.066 215.535-26.195M88.9 190.48s-62.771 14.91-22.228 20.323c17.118 2.292 51.243 1.774 83.03-.89 25.978-2.19 52.063-6.85 52.063-6.85s-9.16 3.923-15.787 8.448c-63.744 16.765-186.886 8.966-151.435-8.183 29.981-14.492 54.358-12.848 54.358-12.848M201.506 253.422c64.8-33.672 34.839-66.03 13.927-61.67-5.126 1.066-7.423 1.99-7.423 1.99s1.903-2.98 5.537-4.27c41.37-14.545 73.187 42.897-13.355 65.647 0 .001 1.003-.895 1.314-1.697" fill={color}/>
    <path d="M162.439.371s35.887 35.9-34.037 91.101c-56.071 44.282-12.786 69.53-.023 98.377-32.73-29.53-56.75-55.526-40.635-79.72C111.395 74.612 176.918 57.393 162.439.37" fill={color}/>
    <path d="M95.268 344.665c62.199 3.982 157.712-2.209 159.974-31.64 0 0-4.348 11.158-51.404 20.018-53.088 9.988-118.564 8.824-157.399 2.421.001 0 7.95 6.58 48.83 9.201" fill={color}/>
  </svg>
);

export default function Skills() {
  const t = useTranslations('skills');

  const skills = [
    { name: 'HTML', Icon: SiHtml5, borderColor: 'from-orange-500 to-red-500', iconColor: '#E34F26' },
    { name: 'CSS', Icon: SiCss, borderColor: 'from-blue-500 to-cyan-500', iconColor: '#1572B6' },
    { name: 'JavaScript', Icon: SiJavascript, borderColor: 'from-yellow-400 to-yellow-600', iconColor: '#F7DF1E' },
    { name: 'Java', Icon: JavaIcon, borderColor: 'from-red-600 to-orange-600', iconColor: '#ED8B00' },
    { name: 'MongoDB', Icon: SiMongodb, borderColor: 'from-green-500 to-emerald-600', iconColor: '#47A248' },
    { name: 'Git', Icon: SiGit, borderColor: 'from-orange-600 to-red-600', iconColor: '#F05032' },
  ];

  return (
    <section id="habilidades" className="px-4 sm:px-6 lg:px-8 py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            {t('title')}
          </h2>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-8">
            
            {skills.map((skill, index) => {
              const IconComponent = skill.Icon;
              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="group"
                >
                  <div className={`relative bg-gradient-to-br ${skill.borderColor} p-1 rounded-2xl shadow-lg hover:shadow-2xl transition-all`}>
                    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 flex flex-col items-center gap-4">
                      
                      {/* Icon with original color */}
                      <IconComponent 
                        size={64}
                        color={skill.iconColor}
                        className="transition-transform group-hover:scale-110"
                      />
                      
                      {/* Name */}
                      <p className="text-sm sm:text-base font-bold text-gray-800 dark:text-gray-200 text-center">
                        {skill.name}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}

          </div>
        </motion.div>

      </div>
    </section>
  );
}
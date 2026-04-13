'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { 
  SiHtml5, 
  SiCss, 
  SiJavascript, 
  SiJouav, 
  SiMongodb, 
  SiGit 
} from 'react-icons/si';

export default function Skills() {
  const t = useTranslations('skills');

  const skills = [
    { name: 'HTML', Icon: SiHtml5, borderColor: 'from-orange-500 to-red-500', iconColor: '#E34F26' },
    { name: 'CSS', Icon: SiCss, borderColor: 'from-blue-500 to-cyan-500', iconColor: '#1572B6' },
    { name: 'JavaScript', Icon: SiJavascript, borderColor: 'from-yellow-400 to-yellow-600', iconColor: '#F7DF1E' },
    { name: 'Java', Icon: SiJouav, borderColor: 'from-red-600 to-orange-600', iconColor: '#ED8B00' },
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
'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Code, ChevronDown, ChevronUp, Download } from 'lucide-react';
import { useState } from 'react';

export default function Projects() {
  const t = useTranslations('projects');
  const [expandedProjects, setExpandedProjects] = useState<number[]>([]);

  const toggleExpand = (projectId: number) => {
    setExpandedProjects(prev =>
      prev.includes(projectId)
        ? prev.filter(id => id !== projectId)
        : [...prev, projectId]
    );
  };

  const projects = [
    {
      id: 1,
      titleKey: 'project1.title',
      descriptionKey: 'project1.description',
      technologies: ['Java', 'Spring Boot', 'PDF Lib'],
      githubUrl: 'https://github.com/JuanMR2006/gestion-talleres',
    },
    {
      id: 2,
      titleKey: 'project2.title',
      descriptionKey: 'project2.description',
      technologies: ['Java', 'Spring Boot', 'MongoDB'],
      githubUrl: 'https://github.com/JuanMR2006/vehiculos-api',
    },
    {
      id: 3,
      titleKey: 'project3.title',
      descriptionKey: 'project3.description',
      technologies: ['React', 'Node.js', 'MongoDB', 'Chatbot'],
      githubUrl: null,
    },
    {
      id: 4,
      titleKey: 'project4.title',
      descriptionKey: 'project4.description',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      githubUrl: null,
    },
  ];

  return (
    <section id="proyectos" className="px-4 sm:px-6 lg:px-8 py-24 bg-white dark:bg-gray-900">
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

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {projects.map((project, index) => {
            const isExpanded = expandedProjects.includes(project.id);
            
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="group"
              >
                <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all h-full flex flex-col">
                  
                  {/* Project Number */}
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-5xl font-bold bg-gradient-to-br from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                      {String(project.id).padStart(2, '0')}
                    </span>
                    <div className="h-1 flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"></div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-gray-200 mb-3">
                    {t(project.titleKey)}
                  </h3>

                  {/* Description */}
                  <div className="flex-1 mb-4">
                    <p className={`text-sm text-gray-600 dark:text-gray-400 leading-relaxed ${!isExpanded ? 'line-clamp-3' : ''}`}>
                      {t(project.descriptionKey)}
                    </p>
                    
                    {/* Leer más button */}
                    <button
                      onClick={() => toggleExpand(project.id)}
                      className="mt-2 flex items-center gap-1 text-xs text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors"
                    >
                      {isExpanded ? (
  <>
    {t('readLess')} <ChevronUp size={14} />
  </>
) : (
  <>
    {t('readMore')} <ChevronDown size={14} />
  </>
)}
                    </button>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-lg text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Button */}
                  {project.githubUrl ? (
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center justify-center gap-2 px-4 py-3 bg-gray-900 dark:bg-gray-700 hover:bg-gray-800 dark:hover:bg-gray-600 text-white rounded-xl transition-all font-medium"
                    >
                      <Code size={18} />
                      {t('viewOnGithub')}
                    </motion.a>
                  ) : (
                    <div className="flex items-center justify-center px-4 py-3 bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-xl text-sm font-medium">
                      {t('collaborativeProject')}
                    </div>
                  )}

                </div>
              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}
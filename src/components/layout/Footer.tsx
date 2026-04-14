'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Code, Mail, Heart } from 'lucide-react';
import { SiReact, SiTypescript, SiTailwindcss, SiNextdotjs, SiGithub } from 'react-icons/si';

export default function Footer() {
  const t = useTranslations('footer');
  const currentYear = new Date().getFullYear();

  const technologies = [
    { name: 'Next.js', Icon: SiNextdotjs },
    { name: 'React', Icon: SiReact },
    { name: 'TypeScript', Icon: SiTypescript },
    { name: 'Tailwind CSS', Icon: SiTailwindcss },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 text-white pt-24 pb-12">
      
      {/* Decorative Top Wave */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-white dark:bg-gray-900">
        <svg className="absolute bottom-0 w-full h-16" preserveAspectRatio="none" viewBox="0 0 1440 54">
          <path
            fill="url(#gradient)"
            d="M0,0 C480,54 960,54 1440,0 L1440,54 L0,54 Z"
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#4f46e5" />
              <stop offset="50%" stopColor="#6366f1" />
              <stop offset="100%" stopColor="#7c3aed" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Column 1 - Brand & Quote */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <Code size={28} className="text-white" />
              <h3 className="text-2xl font-bold">{t('brand')}</h3>
            </div>
            <p className="text-white/80 text-sm leading-relaxed">
              {t('quote')}
            </p>
          </motion.div>

          {/* Column 2 - Menu Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-bold mb-4">{t('menu')}</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#inicio" className="text-white/80 hover:text-white transition-colors">
                  {t('home')}
                </Link>
              </li>
              <li>
                <Link href="#sobre-mi" className="text-white/80 hover:text-white transition-colors">
                  {t('about')}
                </Link>
              </li>
              <li>
                <Link href="#proyectos" className="text-white/80 hover:text-white transition-colors">
                  {t('projects')}
                </Link>
              </li>
              <li>
                <Link href="#testimonios" className="text-white/80 hover:text-white transition-colors">
                  {t('testimonials')}
                </Link>
              </li>
              <li>
                <Link href="#experiencia" className="text-white/80 hover:text-white transition-colors">
                  {t('experience')}
                </Link>
              </li>
              <li>
                <Link href="#contacto" className="text-white/80 hover:text-white transition-colors">
                  {t('contact')}
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Column 3 - Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h4 className="text-lg font-bold mb-4">{t('follow')}</h4>
            <div className="flex gap-4">
              <motion.a
                href="https://github.com/JuanMR2006"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 bg-white/10 hover:bg-white/20 rounded-lg transition-all"
                aria-label="GitHub"
              >
                <SiGithub size={24} />
              </motion.a>
              <motion.a
                href="mailto:juanjomontezuma@gmail.com"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 bg-white/10 hover:bg-white/20 rounded-lg transition-all"
                aria-label="Email"
              >
                <Mail size={24} />
              </motion.a>
            </div>
          </motion.div>

        </div>

        {/* Technologies Used */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-white/80 text-sm flex flex-wrap items-center gap-2 justify-center mb-8"
        >
          <span>{t('madeWith')}</span>
          <Heart size={16} className="text-red-400 fill-red-400" />
          <span>{t('using')}</span>
          {technologies.map(({ name, Icon }) => (
            <div key={name} className="flex items-center gap-1">
              <Icon size={16} />
              <span>{name}</span>
            </div>
          ))}
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center text-white/60 text-sm border-t border-white/10 pt-8"
        >
          <p>© {currentYear} {t('brand')} · {t('rights')}</p>
        </motion.div>

      </div>
    </footer>
  );
}
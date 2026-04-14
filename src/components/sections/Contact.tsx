'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { useState, FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, User, MessageSquare, Send, CheckCircle, XCircle } from 'lucide-react';

export default function Contact() {
  const t = useTranslations('contact');
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      await emailjs.send(
        'service_wkqt9se', // Service ID
        'template_dm3iyof', // Template ID
        formData,
        'c9BzRXV5rikmYBxR_' // Public Key
      );
      
      setStatus('success');
      setFormData({ from_name: '', from_email: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error('Error sending email:', error);
      setStatus('error');
      
      // Reset error message after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contacto" className="px-4 sm:px-6 lg:px-8 py-24 bg-white dark:bg-gray-900">
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
          <p className="text-lg text-gray-600 dark:text-gray-400 mt-4">
            {t('subtitle')}
          </p>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Name and Email Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Name Input */}
              <div className="relative">
                <label htmlFor="from_name" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  {t('form.name')}
                </label>
                <div className="relative">
                  <User size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    id="from_name"
                    name="from_name"
                    value={formData.from_name}
                    onChange={handleChange}
                    required
                    placeholder={t('form.namePlaceholder')}
                    className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:border-blue-600 dark:focus:border-blue-400 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Email Input */}
              <div className="relative">
                <label htmlFor="from_email" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  {t('form.email')}
                </label>
                <div className="relative">
                  <Mail size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="email"
                    id="from_email"
                    name="from_email"
                    value={formData.from_email}
                    onChange={handleChange}
                    required
                    placeholder={t('form.emailPlaceholder')}
                    className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:border-blue-600 dark:focus:border-blue-400 focus:outline-none transition-colors"
                  />
                </div>
              </div>

            </div>

            {/* Message Textarea */}
            <div className="relative">
              <label htmlFor="message" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                {t('form.message')}
              </label>
              <div className="relative">
                <MessageSquare size={20} className="absolute left-4 top-4 text-gray-400" />
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  placeholder={t('form.messagePlaceholder')}
                  className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:border-blue-600 dark:focus:border-blue-400 focus:outline-none transition-colors resize-none"
                />
              </div>
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={status === 'sending'}
              whileHover={{ scale: status === 'sending' ? 1 : 1.05 }}
              whileTap={{ scale: status === 'sending' ? 1 : 0.95 }}
              className={`w-full py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-3 transition-all ${
                status === 'sending'
                  ? 'bg-gray-400 cursor-not-allowed'
                  : status === 'success'
                  ? 'bg-green-600 hover:bg-green-700'
                  : status === 'error'
                  ? 'bg-red-600 hover:bg-red-700'
                  : 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg hover:shadow-xl'
              } text-white`}
            >
              {status === 'sending' && (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  {t('form.sending')}
                </>
              )}
              {status === 'success' && (
                <>
                  <CheckCircle size={24} />
                  {t('form.success')}
                </>
              )}
              {status === 'error' && (
                <>
                  <XCircle size={24} />
                  {t('form.error')}
                </>
              )}
              {status === 'idle' && (
                <>
                  <Send size={24} />
                  {t('form.send')}
                </>
              )}
            </motion.button>

          </form>
        </motion.div>

      </div>
    </section>
  );
}
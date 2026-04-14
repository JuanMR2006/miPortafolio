import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import Projects from '@/components/sections/Projects';
import Testimonials from '@/components/sections/Testimonials';

export default function Home() {
  return (
    <main className="bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Testimonials />
    </main>
  );
}
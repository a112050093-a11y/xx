
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import KeyInfo from './components/KeyInfo';
import Merchandise from './components/Merchandise';
import BandIntro from './components/BandIntro';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'info', 'merch', 'band'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top >= -100 && rect.top <= 300;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen grainy-bg overflow-x-hidden">
      <Navbar activeSection={activeSection} />
      
      <main>
        <section id="hero" className="min-h-screen flex items-center justify-center pt-16">
          <Hero />
        </section>

        <section id="info" className="py-24 px-6 md:px-12 bg-zinc-900/50">
          <KeyInfo />
        </section>

        <section id="merch" className="py-24 px-6 md:px-12">
          <Merchandise />
        </section>

        <section id="band" className="py-24 px-6 md:px-12 bg-zinc-900/50">
          <BandIntro />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;

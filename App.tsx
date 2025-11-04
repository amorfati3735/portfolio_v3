import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Works from './components/Works';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Journal from './components/Journal';

const App: React.FC = () => {
  const [theme, setTheme] = useState('dark');
  const [view, setView] = useState<'portfolio' | 'journal'>('portfolio');

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark');
  };

  const changeView = (newView: 'portfolio' | 'journal') => {
    if (view !== newView) {
      setView(newView);
      window.scrollTo(0, 0);
    } else if (newView === 'portfolio') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(theme === 'dark' ? 'light' : 'dark');
    root.classList.add(theme);
  }, [theme]);

  return (
    <div className="font-sans antialiased bg-background text-foreground">
      <Header theme={theme} toggleTheme={toggleTheme} setView={changeView} />
      {view === 'portfolio' ? (
         <>
          <main className="container mx-auto px-6 md:px-8">
            <HeroSection />
            <Works />
            <Contact />
          </main>
          <Footer />
        </>
      ) : (
        <Journal />
      )}
    </div>
  );
};

export default App;

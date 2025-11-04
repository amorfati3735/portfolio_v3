import React, { useState, useEffect } from 'react';
import { Home } from './icons/HomeIcon';
import { QuillIcon } from './icons/QuillIcon';

interface HeaderProps {
  theme: string;
  toggleTheme: () => void;
  setView: (view: 'portfolio' | 'journal') => void;
}

const Header: React.FC<HeaderProps> = ({ theme, toggleTheme, setView }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { href: '#about', label: 'about' },
    { href: '#works', label: 'works' },
    { href: '#contact', label: 'contact' },
  ];

  const handleScroll = () => {
    if (window.scrollY > 10) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };
  
  const handleNavClick = (href: string) => {
    setView('portfolio');
    setTimeout(() => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }, 100);
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-500 ease-gothic ${isScrolled ? 'bg-background/80 backdrop-blur-sm border-b border-border' : 'bg-transparent'}`}>
      <nav className="container mx-auto px-4 md:px-8 max-w-4xl h-24 flex items-center justify-between">
        <button onClick={() => setView('portfolio')} className="text-foreground hover:text-primary transition-colors">
          <Home className="w-5 h-5" />
        </button>
        <div className="flex items-center space-x-8">
          <ul className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }} className="font-serif text-muted-foreground hover:text-foreground transition-colors duration-300 lowercase tracking-widest text-sm">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
           <div className="flex items-center space-x-6">
             <button onClick={toggleTheme} className="font-serif text-muted-foreground hover:text-foreground transition-colors duration-300 lowercase tracking-widest text-sm w-16 text-left">
              {theme === 'dark' ? 'dawn' : 'night'}
            </button>
             <button onClick={() => setView('journal')} className="text-muted-foreground hover:text-foreground transition-colors">
              <QuillIcon className="w-5 h-5" />
            </button>
           </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;


import React from 'react';
import AnimatedSection from './AnimatedSection';
import { Dropdown } from './ui/Dropdown';
import { Button } from './ui/Button';
import { FileText } from './icons/FileTextIcon';

const About: React.FC = () => {
  return (
    <AnimatedSection id="about" className="min-h-screen flex flex-col justify-center items-center text-center">
      <div className="max-w-2xl">
        <h1 className="text-7xl md:text-8xl font-serif text-neutral-100 mb-4">Pratik.</h1>
        <p className="text-lg md:text-xl text-neutral-400 mb-2">CS undergrad at VIT Vellore. I like tinkering with things.</p>
        <p className="text-md md:text-lg text-neutral-500 italic mb-8">La meglio gioventù</p>
        <div className="flex justify-center items-center gap-4">
          <Dropdown />
          <Button variant="icon" asChild>
            <a href="/pratik_resume.pdf" target="_blank" rel="noopener noreferrer" aria-label="Download Resume">
              <FileText className="h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
      <div className="absolute bottom-10 flex items-center justify-center w-full">
        <span className="h-px w-20 bg-brand-crimson"></span>
        <span className="mx-4 text-brand-crimson text-xl">✦</span>
        <span className="h-px w-20 bg-brand-crimson"></span>
      </div>
    </AnimatedSection>
  );
};

export default About;

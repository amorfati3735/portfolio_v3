import React from 'react';
import AnimatedSection from './AnimatedSection';
import { Button } from './ui/Button';
import { Github } from './icons/GithubIcon';

const Contact: React.FC = () => {
  return (
    <AnimatedSection id="contact" className="py-24 md:py-32 text-center">
      <h2 className="text-5xl md:text-6xl font-serif font-light text-foreground mb-4 lowercase tracking-tight">inquiries</h2>
      <p className="text-muted-foreground max-w-md mx-auto mb-8">
        Open to collaborations. Reach out via email or find me on other platforms.
      </p>
      <div className="flex justify-center items-center gap-4">
        <Button asChild>
          <a href="mailto:pratikambastha5@gmail.com">
            Send Mail
          </a>
        </Button>
        <Button variant="icon" asChild>
          <a href="https://github.com/amorfati3735" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
            <Github className="h-5 w-5" />
          </a>
        </Button>
      </div>
    </AnimatedSection>
  );
};

export default Contact;
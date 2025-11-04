import React from 'react';
import { motion } from 'framer-motion';
import InterestsDropdown from './InterestsDropdown';
import { Button } from './ui/Button';
import { Github } from './icons/GithubIcon';

const HeroSection: React.FC = () => {
    return (
        <section id="about" className="min-h-screen py-24 md:py-32 flex flex-col justify-center items-center text-center relative">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: 'easeOut' }}
            >
                <h1 className="text-7xl md:text-8xl font-serif text-brand-crimson dark:text-neutral-100 mb-6 font-bold tracking-tighter">
                    Pratik.
                </h1>
                <p className="max-w-xl text-lg md:text-xl text-muted-foreground mb-4 leading-relaxed font-spectral">
                    CS undergrad at VIT Vellore. I like tinkering with things.
                </p>
                <p className="text-lg text-muted-foreground/80 italic mb-10 font-serif">
                    La meglio gioventù
                </p>
                <div className="flex items-center justify-center space-x-4">
                    <InterestsDropdown />
                    <Button variant="icon" asChild>
                        <a href="https://github.com/amorfati3735" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile" className="hover:border-primary/50 hover:shadow-glow">
                           <Github className="w-5 h-5" />
                        </a>
                    </Button>
                </div>
            </motion.div>
            <div className="absolute bottom-10 flex items-center justify-center w-full">
                <span className="h-px w-20 bg-brand-crimson"></span>
                <span className="mx-4 text-brand-crimson text-xl">✦</span>
                <span className="h-px w-20 bg-brand-crimson"></span>
            </div>
        </section>
    );
};

export default HeroSection;
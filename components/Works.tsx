import React from 'react';
import { Project } from '../types';
import AnimatedSection from './AnimatedSection';
import ProjectCard from './ProjectCard';
import { ScanText } from './icons/ScanTextIcon';
import { BarChart2 } from './icons/BarChart2Icon';
import { Code2 } from './icons/Code2Icon';

const projects: Project[] = [
  {
    icon: ScanText,
    title: 'Manga Image Translator',
    description: 'A tool that uses OCR and machine translation to translate text directly on manga images, preserving the original layout.',
    tags: ['Python', 'OpenCV', 'Tesseract', 'DeepL API'],
    liveUrl: '#',
    codeUrl: '#',
  },
  {
    icon: BarChart2,
    title: 'Data Visualization Dashboard',
    description: 'An interactive dashboard for visualizing complex datasets, helping users to derive insights through charts and graphs.',
    tags: ['D3.js', 'React', 'Python', 'Flask'],
    liveUrl: '#',
    codeUrl: '#',
  },
  {
    icon: Code2,
    title: 'Portfolio Website v2',
    description: 'This very portfolio. A modern gothic single-page site built with React, Tailwind CSS, and Framer Motion for a dark, aesthetic feel.',
    tags: ['React', 'Tailwind CSS', 'Framer Motion', 'TypeScript'],
    liveUrl: '#',
    codeUrl: 'https://github.com/amorfati3735',
  },
];

const Works: React.FC = () => {
  return (
    <AnimatedSection id="works" className="py-24 md:py-32">
      <h2 className="text-5xl md:text-6xl font-serif font-light text-foreground text-center mb-16 lowercase tracking-tight">selected works</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
         <div className="bg-card border border-border rounded-lg p-6 flex items-center justify-center min-h-[300px]">
            <Code2 className="w-16 h-16 text-muted-foreground/50" />
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Works;
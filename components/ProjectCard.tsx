import React from 'react';
import { Project } from '../types';
import { ExternalLink } from './icons/ExternalLinkIcon';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const Icon = project.icon;

  return (
    <div className="bg-card border border-border rounded-lg p-6 flex flex-col hover:border-primary/50 transition-all duration-300">
      <div className="flex-grow">
        <div className="text-center mb-4">
          <Icon className="w-12 h-12 text-muted-foreground mx-auto" />
        </div>
        <h3 className="text-2xl font-serif font-bold text-center text-foreground mb-3">{project.title}</h3>
        <p className="text-muted-foreground text-center text-sm mb-4">{project.description}</p>
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {project.tags.map((tag) => (
            <span key={tag} className="text-xs bg-muted text-muted-foreground px-3 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="flex justify-center gap-4 mt-auto">
        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
          Live Demo <ExternalLink className="w-4 h-4" />
        </a>
        <a href={project.codeUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
          View Code <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;

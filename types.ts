
import React from 'react';

export interface Project {
  icon: React.ElementType;
  title: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  codeUrl?: string;
}

export interface JournalEntry {
  id: string;
  title: string;
  content: string;
  date: string;
}

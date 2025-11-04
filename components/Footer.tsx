import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-center py-8 border-t border-border">
      <p className="text-sm text-muted-foreground font-serif">© {currentYear} pratik.</p>
    </footer>
  );
};

export default Footer;
import React from 'react';
// Fix: Import Variants type from framer-motion to correctly type the animation variants.
import { motion, Variants } from 'framer-motion';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

// Fix: Explicitly type sectionVariants with Variants. This resolves the error where 'easeOut' was being inferred as a generic string instead of a valid Easing type.
const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.8, 
      ease: 'easeOut' 
    } 
  },
};

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ children, className = '', id }) => {
  return (
    <motion.section
      id={id}
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      {children}
    </motion.section>
  );
};

export default AnimatedSection;
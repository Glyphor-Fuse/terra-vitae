import React from 'react';
import { motion } from 'framer-motion';
import { useReducedMotion } from './useReducedMotion';

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  width?: 'fit-content' | '100%';
}

export const Reveal: React.FC<RevealProps> = ({ 
  children, 
  className = '', 
  delay = 0.25, 
  width = '100%' 
}) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div style={{ width, overflow: 'hidden' }} className={className}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 30 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay }}
      >
        {children}
      </motion.div>
    </div>
  );
};

import React from 'react';
import { motion } from 'framer-motion';

interface SignatureEffectProps {
  children: React.ReactNode;
  effect?: 'hover-lift' | 'scale-up';
  className?: string;
}

export const SignatureEffect: React.FC<SignatureEffectProps> = ({ 
  children, 
  effect = 'hover-lift', 
  className = '' 
}) => {
  const variants = {
    'hover-lift': {
      whileHover: { y: -4, transition: { duration: 0.2 } }
    },
    'scale-up': {
      whileHover: { scale: 1.05, transition: { duration: 0.3 } }
    }
  };

  return (
    <motion.div 
      className={className}
      {...variants[effect]}
    >
      {children}
    </motion.div>
  );
};

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

interface SignatureInteractionProps {
  type: 'text-reveal' | 'clip-reveal' | 'parallax' | 'marquee' | 'sticky-progress';
  children: React.ReactNode;
  className?: string;
  speed?: number;
}

export const SignatureInteraction: React.FC<SignatureInteractionProps> = ({ 
  type, 
  children, 
  className = '',
  speed = 0.5
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Parallax Effect
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.1, 1.2]);

  if (type === 'parallax') {
    return (
      <div ref={ref} className={`overflow-hidden relative ${className}`}>
        <motion.div style={{ y, scale }} className="w-full h-full">
          {children}
        </motion.div>
      </div>
    );
  }

  if (type === 'text-reveal') {
    return (
      <motion.div
        initial={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)', y: 20 }}
        whileInView={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true }}
        className={className}
      >
        {children}
      </motion.div>
    );
  }

  return <div className={className}>{children}</div>;
};

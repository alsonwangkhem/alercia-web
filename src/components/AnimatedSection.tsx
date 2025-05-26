"use client"
import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

interface AnimatedSectionProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  id?: string;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ 
  children, 
  delay = 0, 
  className = "",
  id
}) => {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });
  
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  
  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: {
            duration: 0.6,
            delay: delay,
            ease: "easeOut"
          }
        }
      }}
      className={className}
      id={id}
    >
      {children}
    </motion.section>
  );
};

export default AnimatedSection;
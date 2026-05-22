import { motion } from 'framer-motion';
import { type ReactNode } from 'react';

export function PageWrapper({ children }: { children: ReactNode }) {
  return (
    <motion.main
      initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="w-full flex flex-col items-center"
    >
      {children}
    </motion.main>
  );
}

export function FadeIn({ 
  children, 
  delay = 0, 
  className = "" 
}: { 
  children: ReactNode, 
  delay?: number, 
  className?: string 
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
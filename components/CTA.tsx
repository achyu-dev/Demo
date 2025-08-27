'use client';

import Link from 'next/link';
import { ReactNode } from 'react';
import { motion } from 'framer-motion';

export default function CTA({
  href,
  children,
  variant = 'primary',
}: {
  href: string;
  children: ReactNode;
  variant?: 'primary' | 'secondary';
}) {
  const base = 'rounded-md px-6 py-3 text-sm font-medium transition-all duration-200';
  const styles =
    variant === 'primary'
      ? 'bg-gradient-to-r from-cyan-400 to-emerald-400 text-black'
      : 'border border-neutral-700 text-white hover:bg-neutral-800';
  
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="haptic-glow"
    >
      <Link href={href} className={`${base} ${styles} block haptic-press`}>
        {children}
      </Link>
    </motion.div>
  );
}

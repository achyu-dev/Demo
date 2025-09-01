'use client';

import { motion } from 'framer-motion';
import CTA from './CTA';
import GradientText from './GradientText';

export default function Hero() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-32 text-center">
      <motion.h1 
        className="mb-6 text-4xl font-extrabold leading-tight md:text-6xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Build faster with <GradientText>AI + intrapreneurs</GradientText>.
      </motion.h1>
      <motion.p 
        className="mx-auto mb-8 max-w-2xl text-lg text-neutral-300"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      >
        Roognis is an AI-driven ecosystem that matches your idea with doers—and powers execution with a credit-based economy.
      </motion.p>
      <motion.div 
        className="flex flex-col items-center justify-center gap-4 sm:flex-row"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
      >
        <CTA href="https://discord.gg/c6AhgTs5zx">Join the Community</CTA>
        <CTA href="/wishlist#list" variant="secondary">
          See Wishlist
        </CTA>
      </motion.div>
    </section>
  );
}

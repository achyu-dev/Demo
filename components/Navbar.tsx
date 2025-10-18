"use client";

import Link from 'next/link';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Infinity, Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Learning AI', href: '#learning-ai' },
  { label: 'Career AI', href: '#career-ai' },
  { label: 'Performance', href: '#performance' },
  { label: 'Insights', href: '#insights' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-black/40 backdrop-blur-xl">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" aria-label="Roognis home">
          <span className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.35em] text-white/80 transition-colors hover:text-white">
            <Infinity className="h-5 w-5 text-sky-400" />
            Roognis Infinity
          </span>
        </Link>
        <div className="hidden items-center gap-10 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-white/70 transition hover:text-white"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="#learning-ai"
            className="rounded-full border border-sky-400/50 bg-sky-500/10 px-5 py-2 text-sm font-semibold text-sky-300 shadow-[0_0_25px_rgba(59,130,246,0.25)] transition hover:bg-sky-500/20"
          >
            Start Exploring
          </Link>
        </div>
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full border border-white/10 p-2 text-white md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-white/5 bg-black/70 px-6 pb-6 md:hidden"
          >
            <div className="flex flex-col gap-4 pt-4">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-sm font-medium text-white/70 transition hover:text-white"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="#learning-ai"
                className="rounded-full border border-sky-400/50 bg-sky-500/10 px-5 py-3 text-center text-sm font-semibold text-sky-300 shadow-[0_0_25px_rgba(59,130,246,0.25)] transition hover:bg-sky-500/20"
                onClick={() => setIsOpen(false)}
              >
                Start Exploring
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

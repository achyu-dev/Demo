"use client";

import { ReactNode, useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Card({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      className="rounded-lg border border-neutral-800 bg-neutral-900 p-6 haptic-hover haptic-press cursor-pointer group"
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      animate={
        isInView
          ? { opacity: 1, y: 0, scale: 1 }
          : { opacity: 0, y: 50, scale: 0.95 }
      }
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ borderColor: "rgba(34, 211, 238, 0.3)" }}
    >
      <motion.h3
        className="mb-2 text-xl font-semibold gradient-text"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
      >
        {title}
      </motion.h3>
      <motion.p
        className="text-sm text-neutral-300"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
      >
        {children}
      </motion.p>
    </motion.div>
  );
}

"use client";

import { motion } from "framer-motion";
import CTA from "./CTA";
import GradientText from "./GradientText";

export default function Hero() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-32 text-center">
      <motion.div
        className="mb-4 inline-block rounded-full bg-purple-500/10 px-4 py-2 text-sm font-medium text-purple-400"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        Coming Soon!
      </motion.div>
      <motion.h1
        className="mb-6 text-4xl font-extrabold leading-tight md:text-6xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Empower Every Student with{" "}
        <GradientText>AI-Powered Learning</GradientText>
      </motion.h1>
      <motion.p
        className="mx-auto mb-8 max-w-2xl text-lg text-neutral-300"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      >
        Roognis is an AI academic infrastructure designed for NGOs and
        educational institutions—delivering 24×7 personalized tutoring, reducing
        volunteer burnout, and scaling impact without diluting mission.
      </motion.p>
     <span className="text-neutral-500 cursor-not-allowed">
            Community (Coming Soon)
          </span>
    </section>
  );
}

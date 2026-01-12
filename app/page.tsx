"use client";

import { motion } from "framer-motion";
import Hero from "../components/Hero";
import Section from "../components/Section";
import Card from "../components/Card";
import Script from "next/script";

export default function Home() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Roognis",
    url: "https://roognis.netlify.app",
    sameAs: ["https://www.linkedin.com/company/roognis/"],
  };

  return (
    <>
      <Hero />
      <Section title="Value we bring">
        <motion.div
          className="grid gap-8 md:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Card title="24×7 AI Tutoring">
              Personalized learning support aligned to your curriculum—available
              anytime, anywhere.
            </Card>
          </motion.div>
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Card title="Empower Volunteers">
              Reduce burnout with AI-powered lesson planning, progress tracking,
              and analytics.
            </Card>
          </motion.div>
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Card title="Scale Impact">
              Serve more students with consistent quality—without proportional
              headcount growth.
            </Card>
          </motion.div>
        </motion.div>
      </Section>
      <Section title="How it works">
        <motion.div
          className="grid gap-8 md:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          <motion.div
            className="text-center"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h3 className="mb-2 font-semibold">Curriculum Integration</h3>
            <p className="text-sm text-neutral-300">
              We align AI tutoring to your existing syllabus and teaching
              materials.
            </p>
          </motion.div>
          <motion.div
            className="text-center"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h3 className="mb-2 font-semibold">Personalized Learning</h3>
            <p className="text-sm text-neutral-300">
              Students get adaptive explanations based on their level and
              learning pace.
            </p>
          </motion.div>
          <motion.div
            className="text-center"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h3 className="mb-2 font-semibold">Impact Analytics</h3>
            <p className="text-sm text-neutral-300">
              Track progress, identify gaps, and measure outcomes—not anecdotes.
            </p>
          </motion.div>
        </motion.div>
      </Section>
      <Section title="Built for educators, by educators.">
        <motion.div
          className="grid gap-8 md:grid-cols-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          <motion.div
            className="group rounded-lg border border-neutral-800 bg-neutral-900/50 p-6 haptic-hover haptic-press"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            whileHover={{ borderColor: "rgba(34, 211, 238, 0.3)" }}
          >
            <blockquote className="mb-4 text-neutral-700 italic leading-relaxed dark:text-neutral-300">
              "Roognis exists because learning deserves more than automation—it
              deserves intelligence that understands people, supports educators,
              and helps every learner reach their true potential."
            </blockquote>
            <div className="text-right">
              <span className="text-cyan-400 font-semibold">
                Varun C Singoor
              </span>
              <span className="text-neutral-400 ml-2">(Founder)</span>
            </div>
          </motion.div>

          <motion.div
            className="group rounded-lg border border-neutral-800 bg-neutral-900/50 p-6 haptic-hover haptic-press"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            whileHover={{ borderColor: "rgba(52, 211, 153, 0.3)" }}
          >
            <blockquote className="mb-4 text-neutral-300 italic leading-relaxed">
              &ldquo;We&rsquo;re building intelligent infrastructure that scales
              human compassion—ensuring every student gets personalized support,
              and every educator can focus on what they do best:
              mentorship.&rdquo;
            </blockquote>
            <div className="text-right">
              <span className="text-emerald-400 font-semibold">Hitesh</span>
              <span className="text-neutral-400 ml-2">(Co-Founder)</span>
            </div>
          </motion.div>
        </motion.div>
      </Section>
      <Section title="Our Mission">
        <p className="max-w-3xl text-neutral-300">
          We believe education is the greatest equalizer—but only when it&apos;s
          accessible and sustainable. NGOs and volunteer-led institutions do
          incredible work, but they&apos;re structurally constrained by time,
          resources, and scalability. Roognis changes that. By combining AI with
          human purpose, we create an academic infrastructure that multiplies
          impact without diluting mission. When volunteers are empowered with
          intelligent tools, students learn better, organizations scale smarter,
          and education becomes a system—not just an act of goodwill.
        </p>
      </Section>
      <Section>
        <motion.div
          className="mx-auto max-w-3xl rounded-lg bg-gradient-to-r from-cyan-400 to-emerald-400 p-[1px]"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          whileHover={{ scale: 1.02 }}
        >
          <div className="rounded-lg bg-neutral-950 p-8 text-center">
            <motion.h3
              className="mb-4 text-2xl font-bold !text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            >
              AI-powered learning for NGOs & educational institutions.
            </motion.h3>
          </div>
        </motion.div>
      </Section>
      <Script
        id="ld-json"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </>
  );
}

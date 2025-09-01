'use client';

import { motion } from 'framer-motion';
import Hero from "../components/Hero";
import Section from "../components/Section";
import Card from "../components/Card";
import CTA from "../components/CTA";
import GradientText from "../components/GradientText";
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
                staggerChildren: 0.2
              }
            }
          }}
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Card title="Plan with AI">
              Turn ideas into lean, testable plans in minutes.
            </Card>
          </motion.div>
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Card title="Build with Intrapreneurs">
              Find skilled doers ready to execute—product, design, growth, ops.
            </Card>
          </motion.div>
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Card title="Grow with Credits">
              Earn, spend, and convert credits to keep momentum and trust high.
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
                staggerChildren: 0.15
              }
            }
          }}
        >
          <motion.div 
            className="text-center"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h3 className="mb-2 font-semibold">Learn</h3>
            <p className="text-sm text-neutral-300">
              Dive into AI-guided content and community insights.
            </p>
          </motion.div>
          <motion.div 
            className="text-center"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h3 className="mb-2 font-semibold">Match</h3>
            <p className="text-sm text-neutral-300">
              Connect with vetted intrapreneurs ready to build.
            </p>
          </motion.div>
          <motion.div 
            className="text-center"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h3 className="mb-2 font-semibold">Execute</h3>
            <p className="text-sm text-neutral-300">
              Use credits to plan, build, and grow sustainably.
            </p>
          </motion.div>
        </motion.div>
      </Section>
      <Section title="Built with founders, for founders.">
        <motion.div 
          className="grid gap-8 md:grid-cols-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
        >
          <motion.div 
            className="group rounded-lg border border-neutral-800 bg-neutral-900/50 p-6 haptic-hover haptic-press"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            whileHover={{ borderColor: 'rgba(34, 211, 238, 0.3)' }}
          >
            <blockquote className="mb-4 text-neutral-300 italic leading-relaxed">
              &ldquo;I started Roognis so no entrepreneur begins alone. Our vision is to unite AI, creativity, and community. We empower startups to grow sustainably with intrapreneurs, smart tools, and synergy.&rdquo;
            </blockquote>
            <div className="text-right">
              <span className="text-cyan-400 font-semibold">Varun C Singoor</span>
              <span className="text-neutral-400 ml-2">(Founder)</span>
            </div>
          </motion.div>
          
          <motion.div 
            className="group rounded-lg border border-neutral-800 bg-neutral-900/50 p-6 haptic-hover haptic-press"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            whileHover={{ borderColor: 'rgba(52, 211, 153, 0.3)' }}
          >
            <blockquote className="mb-4 text-neutral-300 italic leading-relaxed">
              &ldquo;We&rsquo;re building AI-driven solutions that connect entrepreneurs and intrapreneurs, ensuring every idea scales into a sustainable, impactful business.&rdquo;
            </blockquote>
            <div className="text-right">
              <span className="text-emerald-400 font-semibold">Suhas S P</span>
              <span className="text-neutral-400 ml-2">(Tech Lead)</span>
            </div>
          </motion.div>
        </motion.div>
      </Section>
      <Section title="What We Believe">
        <p className="max-w-3xl text-neutral-300">
          We believe that building knowledge around AI is not just about
          technology—it&apos;s about enabling people. Startups succeed when
          creativity meets execution, and AI gives that meeting point structure
          and scalability. By weaving AI into the startup ecosystem, we create a
          culture where entrepreneurs and intrapreneurs learn continuously,
          adapt faster, and make decisions with clarity. Our belief is simple:
          when knowledge is shared, powered by AI, and guided by human purpose,
          businesses evolve from isolated ideas into impactful ecosystems.
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
              className="mb-4 text-2xl font-bold"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            >
              AI-powered support for founders & intrapreneurs.
            </motion.h3>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            >
              <CTA href="https://discord.gg/c6AhgTs5zx">Join the Community</CTA>
            </motion.div>
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

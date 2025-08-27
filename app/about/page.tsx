'use client';

import { motion } from 'framer-motion';
import Section from '../../components/Section';
import Card from '../../components/Card';

export default function About() {
  return (
    <>
      <Section title="Mission">
        <p className="max-w-3xl text-neutral-300">
          Roognis is on a mission to build an AI-driven entrepreneurial ecosystem that empowers aspiring entrepreneurs and skilled intrapreneurs to turn ideas into thriving businesses. By fostering unity, connectivity, and synergy, we provide intelligent tools, knowledge resources, and a credit-based service exchange system. Our goal is to remove barriers, inspire innovation, and support 100 startups in five years through collaboration, learning, and sustainable growth.
        </p>
      </Section>
      <Section title="Principles">
        <motion.div 
          className="grid gap-6 md:grid-cols-3"
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
            <Card title="Unity">Bringing entrepreneurs and intrapreneurs together as one ecosystem.</Card>
          </motion.div>
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Card title="Connectivity">Creating seamless links between ideas, people, and opportunities.</Card>
          </motion.div>
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Card title="Synergy">Turning collaboration into amplified growth and sustainable impact.</Card>
          </motion.div>
        </motion.div>
      </Section>
      <Section title="Why We Do This">
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
            className="group"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            whileHover={{ y: -4 }}
          >
            <div className="h-full rounded-lg border border-neutral-800 bg-neutral-900/50 p-6 transition-all duration-300 group-hover:border-cyan-400/30 group-hover:bg-neutral-900/80">
              <h3 className="mb-3 text-lg font-semibold text-cyan-400">Problem</h3>
              <p className="text-neutral-300">
                Founders lack consistent execution partners, guidance, and credible support.
              </p>
            </div>
          </motion.div>
          
          <motion.div
            className="group"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            whileHover={{ y: -4 }}
          >
            <div className="h-full rounded-lg border border-neutral-800 bg-neutral-900/50 p-6 transition-all duration-300 group-hover:border-emerald-400/30 group-hover:bg-neutral-900/80">
              <h3 className="mb-3 text-lg font-semibold text-emerald-400">Approach</h3>
              <p className="text-neutral-300">
                AI planning + intrapreneur marketplace + credits; human-centric, sustainable growth.
              </p>
            </div>
          </motion.div>
          
          <motion.div
            className="group"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            whileHover={{ y: -4 }}
          >
            <div className="h-full rounded-lg border border-neutral-800 bg-neutral-900/50 p-6 transition-all duration-300 group-hover:border-purple-400/30 group-hover:bg-neutral-900/80">
              <h3 className="mb-3 text-lg font-semibold text-purple-400">Outcomes</h3>
              <p className="text-neutral-300">
                Faster validation, structured execution, community learning loops.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </Section>
      
      <Section title="Team">
        <p className="text-neutral-300">Team coming soon.</p>
      </Section>
    </>
  );
}

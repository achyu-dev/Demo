"use client";

import { motion } from "framer-motion";
import Section from "../../components/Section";
import Card from "../../components/Card";

export default function About() {
  return (
    <>
      <Section title="Mission">
        <p className="max-w-3xl text-neutral-300">
          Roognis is on a mission to democratize quality education through
          AI-powered infrastructure. We believe that NGOs, volunteer educators,
          and educational institutions shouldn't be limited by resources when
          serving underprivileged students. By providing 24×7 intelligent
          tutoring, volunteer support tools, and scalable learning systems, we
          empower educators to focus on mentorship while AI handles the
          fundamentals. Our goal is to multiply educational impact—serving more
          students with consistent quality, reducing volunteer burnout, and
          transforming education from an act of goodwill into a sustainable
          system.
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
            <Card title="Accessibility">
              Education should never be limited by time, geography, or
              resources.
            </Card>
          </motion.div>
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Card title="Sustainability">
              Empowering volunteers with AI tools to scale impact without
              burnout.
            </Card>
          </motion.div>
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Card title="Impact">
              Measurable learning outcomes, not just anecdotal success stories.
            </Card>
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
                staggerChildren: 0.2,
              },
            },
          }}
        >
          <motion.div
            className="group"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            whileHover={{ y: -4 }}
          >
            <div className="h-full rounded-lg border border-neutral-800 bg-neutral-900/50 p-6 transition-all duration-300 group-hover:border-cyan-400/30 group-hover:bg-neutral-900/80">
              <h3 className="mb-3 text-lg font-semibold text-cyan-400">
                Problem
              </h3>
              <p className="text-neutral-300">
                Volunteer-led education is noble but structurally
                fragile—limited by time, inconsistent quality, and scalability
                constraints.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="group"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            whileHover={{ y: -4 }}
          >
            <div className="h-full rounded-lg border border-neutral-800 bg-neutral-900/50 p-6 transition-all duration-300 group-hover:border-emerald-400/30 group-hover:bg-neutral-900/80">
              <h3 className="mb-3 text-lg font-semibold text-emerald-400">
                Approach
              </h3>
              <p className="text-neutral-300">
                AI co-pilot for educators + personalized student tutoring +
                institutional analytics—human-centric, mission-aligned
                infrastructure.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="group"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            whileHover={{ y: -4 }}
          >
            <div className="h-full rounded-lg border border-neutral-800 bg-neutral-900/50 p-6 transition-all duration-300 group-hover:border-purple-400/30 group-hover:bg-neutral-900/80">
              <h3 className="mb-3 text-lg font-semibold text-purple-400">
                Outcomes
              </h3>
              <p className="text-neutral-300">
                Higher student retention, better volunteer satisfaction,
                scalable impact, and objective learning metrics.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </Section>

      <Section title="Team">
        <motion.div
          className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto"
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
            className="group"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="h-full rounded-lg border border-neutral-800 bg-neutral-900/50 p-6 text-center transition-all duration-300 group-hover:border-cyan-400/30 group-hover:bg-neutral-900/80">
              <h3 className="text-xl font-bold text-cyan-400 mb-2">
                Varun C Singoor
              </h3>
              <p className="text-neutral-400 mb-3">Founder</p>
              <p className="text-sm text-neutral-300">
                Passionate about democratizing education through AI
                infrastructure that empowers educators and scales impact.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="group"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="h-full rounded-lg border border-neutral-800 bg-neutral-900/50 p-6 text-center transition-all duration-300 group-hover:border-emerald-400/30 group-hover:bg-neutral-900/80">
              <h3 className="text-xl font-bold text-emerald-400 mb-2">
                Hitesh
              </h3>
              <p className="text-neutral-400 mb-3">Tech Lead</p>
              <p className="text-sm text-neutral-300">
                Building intelligent systems that combine AI precision with
                human compassion to transform learning outcomes.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </Section>
    </>
  );
}

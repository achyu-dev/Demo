"use client";

import { motion } from "framer-motion";
import Section from "../../components/Section";
import GradientText from "../../components/GradientText";

export default function Customers() {
  const customerSegments = [
    {
      title: "NGOs & Non-Profit Schools",
      pains:
        "Volunteer burnout, inconsistent teaching quality, limited student reach.",
      value:
        "24×7 AI tutoring + volunteer dashboards + scalable learning infrastructure.",
      features:
        "Curriculum integration, progress analytics, auto lesson planning.",
    },
    {
      title: "Volunteer Educators & Mentors",
      pains:
        "Overwhelming prep work, repetitive doubt-solving, no structured feedback.",
      value:
        "AI co-pilot that handles fundamentals while you focus on mentorship.",
      features:
        "Student weak-area reports, automated content generation, time savings.",
    },
    {
      title: "Educational Institutions",
      pains: "Scaling quality education without proportional cost increase.",
      value: "Institutional AI infrastructure with full governance control.",
      features:
        "Custom curriculum, advanced analytics, API integration, white-label options.",
    },
    {
      title: "After-School Programs",
      pains:
        "Limited supervision hours, diverse student levels, resource constraints.",
      value:
        "Self-paced AI learning with mentor oversight and progress tracking.",
      features:
        "Adaptive content, multi-language support, offline sync capabilities.",
    },
  ];

  return (
    <>
      <Section title="Who We Serve">
        <motion.div
          className="space-y-12"
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
          {customerSegments.map((segment, _index) => (
            <motion.div
              key={segment.title}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <motion.h3
                className="mb-2 text-xl font-semibold"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
              >
                <GradientText>{segment.title}</GradientText>
              </motion.h3>
              <motion.p
                className="mb-1 text-neutral-300"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
              >
                <strong>Challenges:</strong> {segment.pains}
              </motion.p>
              <motion.p
                className="mb-1 text-neutral-300"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
              >
                <strong>Roognis Solution:</strong> {segment.value}
              </motion.p>
              <motion.p
                className="mb-4 text-neutral-300"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
              >
                <strong>Key Features:</strong> {segment.features}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
              ></motion.div>
            </motion.div>
          ))}
        </motion.div>
      </Section>
    </>
  );
}

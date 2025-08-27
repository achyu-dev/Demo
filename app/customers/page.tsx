'use client';

import { motion } from 'framer-motion';
import Section from '../../components/Section';
import CTA from '../../components/CTA';
import GradientText from '../../components/GradientText';

export default function Customers() {
  const customerSegments = [
    {
      title: "Aspiring founders",
      pains: "Need guidance and hands-on help to validate ideas.",
      value: "AI planning + community execution partners.",
      features: "Lean plan generator, intrapreneur matching."
    },
    {
      title: "Intrapreneurs & freelancers",
      pains: "Finding meaningful gigs and trusted clients.",
      value: "Marketplace with credit-based trust.",
      features: "Profiles, reviews, credit economy."
    },
    {
      title: "Student clubs & incubators",
      pains: "Lack of curricula and execution frameworks.",
      value: "Ready-to-run learning hub and challenge templates.",
      features: "Case decks, live clinics, templates."
    },
    {
      title: "SMEs",
      pains: "Limited resources to test and adopt digital tools.",
      value: "Affordable intrapreneur talent and AI planning.",
      features: "Experiment backlog, milestone planner."
    }
  ];

  return (
    <>
      <Section title="Segments">
        <motion.div 
          className="space-y-12"
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
          {customerSegments.map((segment, index) => (
            <motion.div
              key={segment.title}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 }
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
                Pains: {segment.pains}
              </motion.p>
              <motion.p 
                className="mb-1 text-neutral-300"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
              >
                Roognis value: {segment.value}
              </motion.p>
              <motion.p 
                className="mb-4 text-neutral-300"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
              >
                Key features: {segment.features}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
              >
                <CTA href="/wishlist" variant="secondary">
                  Join the Waitlist
                </CTA>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </Section>
    </>
  );
}

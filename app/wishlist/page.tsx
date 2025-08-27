'use client';

import { motion } from 'framer-motion';
import Section from '../../components/Section';
import { useState } from 'react';

export default function Wishlist({
  searchParams,
}: {
  searchParams: { success?: string };
}) {
  const success = searchParams.success;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    const formData = new FormData(event.currentTarget);
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      role: formData.get('role') as string,
      message: formData.get('message') as string,
      consent: formData.get('consent') ? 'Yes' : 'No',
    };

    try {
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        window.location.href = '/wishlist?success=true';
      } else {
        const errorData = await response.json();
        setSubmitError(errorData.error || 'Submission failed');
      }
    } catch (error) {
      setSubmitError('Network error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const wishlistItems = [
    {
      title: "AI Planning Tools",
      description: "Plan faster with guided canvases and lean execution frameworks.",
      items: ["Idea Canvas", "Lean Plan Generator", "Risk Register", "Experiment Backlog", "Milestone Planner"]
    },
    {
      title: "Intrapreneur Marketplace",
      description: "Find vetted builders and collaborators with transparent, trust-first profiles.",
      items: ["Profiles", "Skills & Availability", "Rates (Hourly / Credits)", "Credit Holds (Escrow‑like)", "Reviews"]
    },
    {
      title: "Credits & Economy",
      description: "A fair, flexible credit system that keeps momentum and accountability high.",
      items: ["Earn / Spend Credits", "Conversion Rules", "Tiers (Free & Premium)"]
    },
    {
      title: "Learning Hub",
      description: "Level up with practical knowledge—short, actionable, and community‑tested.",
      items: ["Book Reviews", "Case Decks", "Live Clinics", "Templates"]
    },
    {
      title: "Community & Gamification",
      description: "Build in public with challenges, badges, and friendly competition.",
      items: ["Challenges", "Badges", "Auctions (Intrapreneur Auctions)", "Leaderboards"]
    },
    {
      title: "Ops & Growth",
      description: "Operate smoothly with lightweight tools that integrate where it matters.",
      items: ["CRM Lite", "Task Boards", "OKR Tracker", "Integrations (Notion, Slack, Git)"]
    }
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.98 },
    visible: { opacity: 1, y: 0, scale: 1 }
  };

  const chipVariants = {
    hidden: { opacity: 0, y: 8 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <>
      <Section id="list" title="Wishlist">
        <motion.p
          className="mb-8 max-w-3xl text-neutral-300"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          Here’s what we’re exploring next. Vote with your feedback and help us
          prioritize what to build.
        </motion.p>
        <motion.div
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.12 }
            }
          }}
        >
          {wishlistItems.map((category) => (
            <motion.div
              key={category.title}
              variants={cardVariants}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="rounded-xl bg-gradient-to-br from-cyan-500/20 to-emerald-500/20 p-[1px]"
            >
              <div className="h-full rounded-xl border border-neutral-800 bg-neutral-950/80 p-5">
                <h3 className="mb-1 text-lg font-semibold gradient-text">{category.title}</h3>
                {category.description && (
                  <p className="mb-4 text-sm text-neutral-300">{category.description}</p>
                )}
                <motion.div
                  className="flex flex-wrap gap-2"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{
                    hidden: {},
                    visible: { transition: { staggerChildren: 0.06 } }
                  }}
                >
                  {category.items.map((item, idx) => (
                    <motion.span
                      key={idx}
                      variants={chipVariants}
                      transition={{ duration: 0.35, ease: "easeOut" }}
                      className="inline-flex items-center rounded-full border border-neutral-800 bg-neutral-900/70 px-3 py-1 text-xs text-neutral-300"
                    >
                      {item}
                    </motion.span>
                  ))}
                </motion.div>
          </div>
            </motion.div>
          ))}
        </motion.div>
      </Section>
      <Section title="Feature request">
        {success ? (
          <motion.p 
            className="text-neutral-300"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Thanks for your request! We appreciate your input.
          </motion.p>
        ) : (
          <motion.form
            onSubmit={handleSubmit}
            className="mx-auto max-w-xl space-y-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
          >
            <input type="hidden" name="form-name" value="feature-wishlist" />
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <label htmlFor="name" className="mb-1 block text-sm">
                Your name
              </label>
              <input
                id="name"
                name="name"
                required
                className="w-full rounded-md bg-neutral-900 p-2 text-white transition-all duration-200 focus:ring-2 focus:ring-cyan-400"
              />
            </motion.div>
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <label htmlFor="email" className="mb-1 block text-sm">
                Email address
              </label>
              <input
                id="email"
                type="email"
                name="email"
                required
                className="w-full rounded-md bg-neutral-900 p-2 text-white transition-all duration-200 focus:ring-2 focus:ring-cyan-400"
              />
            </motion.div>
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <label htmlFor="role" className="mb-1 block text-sm">
                Your role
              </label>
              <select
                id="role"
                name="role"
                className="w-full rounded-md bg-neutral-900 p-2 text-white transition-all duration-200 focus:ring-2 focus:ring-cyan-400"
              >
                <option value="Entrepreneur">Entrepreneur</option>
                <option value="Intrapreneur">Intrapreneur</option>
                <option value="Student">Student</option>
                <option value="Incubator">Incubator</option>
                <option value="Other">Other</option>
              </select>
            </motion.div>
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <label htmlFor="message" className="mb-1 block text-sm">
                What should we build next?
              </label>
              <textarea
                id="message"
                name="message"
                required
                placeholder="Tell us about the problem, who it serves, and why it matters."
                className="w-full rounded-md bg-neutral-900 p-2 text-white transition-all duration-200 placeholder-neutral-500 focus:ring-2 focus:ring-cyan-400"
              />
            </motion.div>

            <motion.div 
              className="flex items-center space-x-2"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <input
                type="checkbox"
                id="consent"
                name="consent"
                className="h-4 w-4 rounded"
              />
              <label htmlFor="consent" className="text-sm">
                I agree to receive communications from Roognis.
              </label>
            </motion.div>
            
            {submitError && (
              <motion.div
                className="rounded-md bg-red-500/10 border border-red-500/20 p-3 text-red-400 text-sm"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                {submitError}
              </motion.div>
            )}

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="rounded-md bg-gradient-to-r from-cyan-400 to-emerald-400 px-6 py-3 text-sm font-medium text-black transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={!isSubmitting ? { scale: 1.05 } : {}}
                whileTap={!isSubmitting ? { scale: 0.95 } : {}}
              >
                {isSubmitting ? 'Submitting...' : 'Submit request'}
              </motion.button>
            </motion.div>
          </motion.form>
        )}
      </Section>
    </>
  );
}

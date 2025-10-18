'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Line, Radar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  Title as ChartTitle,
} from 'chart.js';
import {
  ArrowUpRight,
  BarChart3,
  BrainCircuit,
  BriefcaseBusiness,
  MessageSquareDot,
  Share2,
  Sparkles,
  Target,
  TrendingUp,
} from 'lucide-react';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  ChartTitle,
);

const features = [
  {
    title: 'Adaptive Learning Engine',
    description: 'Calibrates every module in real time based on role, proficiency, and business priority.',
    detail: 'Dynamic knowledge graphs analyze 12,000+ competencies to tailor each learner journey.',
    icon: BrainCircuit,
    accent: 'from-sky-500/90 to-emerald-400/80',
  },
  {
    title: 'Microlearning Recommendation',
    description: 'Delivers five-minute nudges that reinforce mastery inside daily workflows.',
    detail: 'Predictive spacing surfaces clips, cohorts, or assessments before knowledge decay occurs.',
    icon: Sparkles,
    accent: 'from-emerald-400/90 to-sky-500/60',
  },
  {
    title: 'Career Path Predictor',
    description: 'Maps learning velocity to emerging roles, compensation bands, and demand signals.',
    detail: 'AI benchmarks internal talent to market salary insights across 24 industries.',
    icon: TrendingUp,
    accent: 'from-sky-500/70 to-indigo-500/60',
  },
  {
    title: 'Competency Gap Analyzer',
    description: 'Pinpoints skill gaps by function, location, and seniority to prioritize investments.',
    detail: 'Automated diagnostics blend performance reviews, LMS data, and OKRs into a single index.',
    icon: Target,
    accent: 'from-rose-500/70 to-sky-500/60',
  },
  {
    title: 'Skill-to-Job Match',
    description: 'Aligns certificates with projects and open requisitions in minutes.',
    detail: 'Graph embeddings translate learning outcomes into verified role readiness signals.',
    icon: BriefcaseBusiness,
    accent: 'from-emerald-500/70 to-teal-500/70',
  },
  {
    title: 'ROI Intelligence Dashboard',
    description: 'Connects training investment to productivity, retention, and revenue impact.',
    detail: 'Scenario modeling reveals the uplift of shifting budget between leadership and technical paths.',
    icon: BarChart3,
    accent: 'from-orange-500/70 to-emerald-500/60',
  },
  {
    title: 'AI Mentor Chat',
    description: 'Always-on coach that blends organizational knowledge with Roognis Intelligence.',
    detail: 'Conversational memory keeps context across programs, compliance policies, and goals.',
    icon: MessageSquareDot,
    accent: 'from-purple-500/70 to-sky-500/60',
  },
  {
    title: 'Collaboration Graph',
    description: 'Visualizes peer learning clusters to accelerate knowledge diffusion.',
    detail: 'Network signals highlight breakout performers and mentorship opportunities across teams.',
    icon: Share2,
    accent: 'from-emerald-500/60 to-sky-500/60',
  },
];

const learningTracks = [
  {
    name: 'Data Fluency',
    summary: 'Enable analysts and business partners to make AI-augmented decisions.',
    lift: '+18% promotion velocity',
    roles: [
      { role: 'Data Analyst II', salary: 88000, momentum: '18% talent demand' },
      { role: 'Analytics Manager', salary: 120000, momentum: '24% YoY growth' },
      { role: 'Director of Insights', salary: 156000, momentum: 'Cross-functional sponsor' },
    ],
  },
  {
    name: 'Leadership Agility',
    summary: 'Coach managers on adaptive leadership, influence, and decision clarity.',
    lift: '-22% attrition risk',
    roles: [
      { role: 'People Manager', salary: 94000, momentum: '74% engagement score' },
      { role: 'Program Lead', salary: 131000, momentum: '19% faster project cycles' },
      { role: 'VP Operations', salary: 187000, momentum: 'Global transformation lead' },
    ],
  },
  {
    name: 'Revenue Intelligence',
    summary: 'Upskill go-to-market teams on consultative selling with AI copilots.',
    lift: '+31% pipeline influence',
    roles: [
      { role: 'Account Executive', salary: 102000, momentum: '126% quota attainment' },
      { role: 'Strategic Consultant', salary: 142000, momentum: 'Hybrid services expertise' },
      { role: 'Chief Revenue Innovation', salary: 210000, momentum: 'Exec succession ready' },
    ],
  },
];

const chatMessages = [
  {
    author: 'Mentor',
    message: 'Welcome back, Priya. Ready to continue your Leadership Agility sprint?',
  },
  {
    author: 'Priya',
    message: 'Yes! Can you suggest a micro-practice to reinforce feedback coaching before my session?',
  },
  {
    author: 'Mentor',
    message: 'Absolutely. Launch the 7-minute role play with adaptive branching. I will capture highlights for your leader.',
  },
  {
    author: 'Priya',
    message: 'Perfect—schedule it for 3 PM and notify my pod.',
  },
];

const testimonials = [
  {
    quote: 'Roognis aligned our global learning catalog with actual career outcomes. Promotions accelerated by a full quarter.',
    name: 'Global L&D Director, FinServe 2000',
    metricLabel: 'Time-to-Competency',
    metricValue: '35% faster',
  },
  {
    quote: 'The AI Mentor keeps hybrid teams practicing in flow. Engagement in leadership labs crossed 92% participation.',
    name: 'Head of Talent, APAC Retail',
    metricLabel: 'Manager Engagement',
    metricValue: '92% active',
  },
  {
    quote: 'Our CFO finally has a live ROI dashboard tying learning investments to revenue velocity.',
    name: 'Chief Learning Officer, SaaS Unicorn',
    metricLabel: 'Revenue Impact',
    metricValue: '+$14M influence',
  },
];

const dummySkills = {
  skills: ['Data Analysis', 'Leadership', 'Negotiation'],
  scores: [82, 75, 90],
};

const currency = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0,
});

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function HomePage() {
  const [activeTrack, setActiveTrack] = useState(learningTracks[0]);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [hoveredFeature, setHoveredFeature] = useState<string | null>(null);

  const featureRef = useRef<HTMLDivElement>(null);
  const featureInView = useInView(featureRef, { once: true, amount: 0.2 });

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const maxSalary = useMemo(() => {
    return Math.max(...activeTrack.roles.map((role) => role.salary));
  }, [activeTrack]);

  const radarData = useMemo(
    () => ({
      labels: dummySkills.skills,
      datasets: [
        {
          label: 'Competency Benchmark',
          data: dummySkills.scores,
          backgroundColor: 'rgba(59, 130, 246, 0.25)',
          borderColor: 'rgba(59, 130, 246, 0.8)',
          pointBackgroundColor: '#3B82F6',
          pointBorderColor: '#0A0A0A',
          borderWidth: 2,
        },
      ],
    }),
    [],
  );

  const radarOptions = useMemo(
    () => ({
      scales: {
        r: {
          angleLines: { color: 'rgba(255,255,255,0.08)' },
          grid: { color: 'rgba(255,255,255,0.08)' },
          suggestedMin: 0,
          suggestedMax: 100,
          ticks: {
            backdropColor: 'rgba(0,0,0,0.3)',
            color: 'rgba(255,255,255,0.45)',
            stepSize: 20,
            showLabelBackdrop: false,
          },
          pointLabels: {
            color: 'rgba(255,255,255,0.6)',
            font: {
              size: 12,
            },
          },
        },
      },
      plugins: {
        legend: {
          labels: {
            color: 'rgba(255,255,255,0.7)',
          },
        },
      },
      responsive: true,
      maintainAspectRatio: false,
    }),
    [],
  );

  const roiData = useMemo(
    () => ({
      labels: ['Q1', 'Q2', 'Q3', 'Q4'],
      datasets: [
        {
          label: 'Learning ROI Index',
          data: [1.2, 1.35, 1.52, 1.68],
          fill: true,
          borderColor: 'rgba(16, 185, 129, 0.9)',
          backgroundColor: 'rgba(16, 185, 129, 0.25)',
          tension: 0.35,
        },
        {
          label: 'Productivity Uplift',
          data: [0.9, 1.05, 1.22, 1.44],
          fill: false,
          borderColor: 'rgba(59, 130, 246, 0.9)',
          backgroundColor: 'rgba(59, 130, 246, 0.25)',
          borderDash: [6, 4],
          tension: 0.35,
        },
      ],
    }),
    [],
  );

  const roiOptions = useMemo(
    () => ({
      plugins: {
        legend: {
          labels: { color: 'rgba(255,255,255,0.7)' },
        },
      },
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: {
          grid: { color: 'rgba(255,255,255,0.05)' },
          ticks: { color: 'rgba(255,255,255,0.45)' },
        },
        y: {
          grid: { color: 'rgba(255,255,255,0.05)' },
          ticks: {
            color: 'rgba(255,255,255,0.45)',
            callback: (value: string | number) => `${value}x`,
          },
        },
      },
    }),
    [],
  );

  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[12%] h-72 w-72 -translate-x-1/2 rounded-full bg-sky-500/20 blur-3xl" />
        <div className="absolute bottom-[-10%] right-[10%] h-96 w-96 rounded-full bg-emerald-500/10 blur-[140px]" />
        <div className="absolute left-[8%] top-[55%] h-72 w-72 rounded-full bg-sky-400/10 blur-[120px]" />
      </div>

      <section className="relative mx-auto flex w-full max-w-6xl flex-col items-center px-6 pb-24 pt-20 text-center md:pt-28">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-semibold uppercase tracking-[0.4em] text-white/60"
        >
          Learning Intelligence Stack
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-6 max-w-3xl text-4xl font-semibold leading-tight text-white sm:text-5xl md:text-6xl"
        >
          Empowering Corporate Learning through AI
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 max-w-2xl text-base text-white/70 md:text-lg"
        >
          Roognis orchestrates adaptive learning, predictive careers, and measurable ROI so leaders can build
          future-proof talent at enterprise scale.
        </motion.p>
        <motion.a
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          href="#learning-ai"
          className="mt-10 inline-flex items-center gap-2 rounded-full border border-sky-400/60 bg-sky-500/10 px-7 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-sky-200 shadow-[0_10px_50px_rgba(59,130,246,0.25)] transition hover:bg-sky-500/20"
        >
          Start Exploring
          <ArrowUpRight className="h-4 w-4" />
        </motion.a>
      </section>

      <section id="learning-ai" className="relative mx-auto w-full max-w-6xl px-6 pb-24">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-white md:text-3xl">AI Feature Intelligence Grid</h2>
            <p className="mt-3 max-w-xl text-sm text-white/60 md:text-base">
              Eight orchestration engines collaborate to personalize learning, forecast talent pathways, and illuminate
              measurable impact for executives.
            </p>
          </div>
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-200/70">
            Real-time neural orchestration
          </span>
        </div>
        <motion.div
          ref={featureRef}
          variants={containerVariants}
          initial="hidden"
          animate={featureInView ? 'visible' : 'hidden'}
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((feature) => {
            const isHovered = hoveredFeature === feature.title;
            return (
            <motion.div
              key={feature.title}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              onHoverStart={() => setHoveredFeature(feature.title)}
              onHoverEnd={() => setHoveredFeature(null)}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-[0_20px_60px_rgba(8,8,8,0.6)] backdrop-blur-lg"
            >
              <div className={`mb-5 inline-flex rounded-2xl bg-gradient-to-r ${feature.accent} p-3 text-white shadow-lg`}
              >
                <feature.icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
              <p className="mt-3 text-sm text-white/60">{feature.description}</p>
              <motion.p
                animate={isHovered ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
                transition={{ duration: 0.3 }}
                className="mt-6 text-sm text-sky-100/80"
              >
                {feature.detail}
              </motion.p>
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 translate-y-16 bg-gradient-to-t from-sky-500/20 via-transparent to-transparent opacity-0 transition group-hover:translate-y-6 group-hover:opacity-100" />
            </motion.div>
            );
          })}
        </motion.div>
      </section>

      <section id="career-ai" className="relative mx-auto w-full max-w-6xl px-6 pb-24">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start">
          <div className="lg:w-1/3">
            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-200/70">Career Path Visualizer</span>
            <h2 className="mt-4 text-2xl font-semibold text-white md:text-3xl">From learning sprint to salary lift</h2>
            <p className="mt-3 text-sm text-white/60">
              Interactive flow reveals how Roognis learning tracks ladder into high-value roles, with compensation insight
              and momentum signals to guide workforce planning.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              {learningTracks.map((track) => (
                <button
                  key={track.name}
                  type="button"
                  onClick={() => setActiveTrack(track)}
                  className={`rounded-2xl border px-4 py-3 text-left transition ${
                    activeTrack.name === track.name
                      ? 'border-emerald-400/80 bg-emerald-400/10 text-white'
                      : 'border-white/10 bg-white/[0.02] text-white/60 hover:text-white'
                  }`}
                >
                  <p className="text-sm font-semibold">{track.name}</p>
                  <p className="text-xs text-white/50">{track.lift}</p>
                </button>
              ))}
            </div>
          </div>
          <div className="relative flex-1 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 shadow-[0_30px_80px_rgba(8,8,8,0.65)]">
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-emerald-400 via-sky-400 to-emerald-400 opacity-60" />
            <p className="text-sm text-white/70">{activeTrack.summary}</p>
            <div className="mt-8 flex flex-col gap-8">
              {activeTrack.roles.map((role, index) => (
                <motion.div
                  key={role.role}
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="relative flex items-center gap-4"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-emerald-400/40 bg-emerald-400/10 text-sm font-semibold text-emerald-200">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-baseline justify-between gap-3">
                      <h3 className="text-lg font-semibold text-white">{role.role}</h3>
                      <span className="text-sm font-medium text-emerald-200/80">{currency.format(role.salary)}</span>
                    </div>
                    <div className="mt-3 h-2 rounded-full bg-white/5">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${Math.round((role.salary / maxSalary) * 100)}%` }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="h-full rounded-full bg-gradient-to-r from-sky-400 to-emerald-400"
                      />
                    </div>
                    <p className="mt-3 text-xs uppercase tracking-[0.3em] text-white/40">{role.momentum}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="performance"
        className="relative mx-auto w-full max-w-6xl px-6 pb-24"
      >
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-sky-200/70">Analytics Dashboard</span>
            <h2 className="mt-4 text-2xl font-semibold text-white md:text-3xl">Skill readiness meets financial clarity</h2>
            <p className="mt-3 max-w-xl text-sm text-white/60">
              Blend competency health with ROI intelligence to narrate value to executives in real time.
            </p>
          </div>
          <div className="flex items-center gap-4 text-xs text-white/50">
            <div className="flex items-center gap-2">
              <span className="inline-block h-2 w-2 rounded-full bg-sky-400" />
              Competency benchmark
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" />
              ROI lens
            </div>
          </div>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="relative flex min-h-[340px] flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-6">
            <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-white/50">Competency Gap Radar</h3>
            <div className="mt-6 flex-1">
              <Radar data={radarData} options={radarOptions} />
            </div>
          </div>
          <div className="relative flex min-h-[340px] flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-6">
            <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-white/50">Learning ROI Trajectory</h3>
            <div className="mt-6 flex-1">
              <Line data={roiData} options={roiOptions} />
            </div>
          </div>
        </div>
      </section>

      <section id="insights" className="relative mx-auto w-full max-w-6xl px-6 pb-32">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-white/50">Impact Stories</span>
            <h2 className="mt-4 text-2xl font-semibold text-white md:text-3xl">How enterprises scale capability with Roognis</h2>
          </div>
          <div className="flex items-center gap-3 text-xs text-white/50">
            {testimonials.map((testimonial, index) => (
              <button
                key={testimonial.name}
                type="button"
                onClick={() => setActiveTestimonial(index)}
                className={`h-2.5 w-8 rounded-full transition ${
                  activeTestimonial === index ? 'bg-sky-400' : 'bg-white/20'
                }`}
                aria-label={`Show testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
        <div className="relative mt-10 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-10 shadow-[0_40px_80px_rgba(8,8,8,0.7)]">
          <AnimateTestimonial activeIndex={activeTestimonial} />
        </div>
      </section>

      <ChatWidget />
    </div>
  );
}

function AnimateTestimonial({ activeIndex }: { activeIndex: number }) {
  return (
    <motion.div
      key={activeIndex}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between"
    >
      <p className="max-w-3xl text-lg font-medium leading-relaxed text-white/80">
        “{testimonials[activeIndex].quote}”
      </p>
      <div className="flex flex-col items-start gap-3 text-sm text-white/60 md:items-end">
        <span className="font-semibold text-white/80">{testimonials[activeIndex].name}</span>
        <span className="rounded-full border border-sky-400/40 bg-sky-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-sky-200">
          {testimonials[activeIndex].metricLabel}: {testimonials[activeIndex].metricValue}
        </span>
      </div>
    </motion.div>
  );
}

function ChatWidget() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      className="fixed bottom-6 right-6 z-50 w-[min(22rem,calc(100vw-3rem))] overflow-hidden rounded-3xl border border-white/10 bg-black/80 shadow-[0_30px_80px_rgba(8,8,8,0.85)] backdrop-blur-xl"
    >
      <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-200">AI Mentor Chat</p>
          <p className="text-xs text-white/50">Powered by Roognis Copilot</p>
        </div>
        <span className="inline-flex h-2.5 w-2.5 animate-pulse rounded-full bg-emerald-400" />
      </div>
      <div className="flex flex-col gap-4 px-5 py-5 text-sm text-white/80">
        {chatMessages.map((entry, index) => (
          <div key={index} className={`flex ${entry.author === 'Mentor' ? 'justify-start' : 'justify-end'}`}>
            <div
              className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                entry.author === 'Mentor'
                  ? 'bg-white/[0.06] text-white/80'
                  : 'bg-gradient-to-r from-sky-500/80 to-emerald-400/80 text-black'
              }`}
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-white/60">
                {entry.author}
              </p>
              <p className="mt-1 text-sm leading-relaxed">{entry.message}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="border-t border-white/10 px-5 py-4">
        <button
          type="button"
          className="flex w-full items-center justify-between rounded-full border border-emerald-400/60 bg-emerald-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-200 transition hover:bg-emerald-500/20"
        >
          Continue conversation
          <ArrowUpRight className="h-4 w-4" />
        </button>
      </div>
    </motion.div>
  );
}

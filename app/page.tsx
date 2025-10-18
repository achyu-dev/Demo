'use client';

import { useState } from 'react';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  BarChart,
  Bar,
  AreaChart,
  Area,
  PieChart,
  Pie,
  Cell,
} from 'recharts';

type TabId = 'planner' | 'chatbot' | 'analytics';

type ThemeConfig = {
  background: string;
  nav: string;
  accentText: string;
  accentBadge: string;
  button: string;
  buttonSecondary: string;
  card: string;
};

const themes: Record<TabId, ThemeConfig> = {
  planner: {
    background: 'bg-gradient-to-br from-sky-50 via-white to-emerald-100',
    nav: 'bg-white/75 text-emerald-700 shadow-emerald-100/60',
    accentText: 'text-emerald-600',
    accentBadge: 'bg-emerald-100 text-emerald-700',
    button: 'bg-emerald-500 hover:bg-emerald-600 text-white',
    buttonSecondary: 'bg-white/90 text-emerald-600 hover:bg-emerald-50',
    card: 'bg-white/80',
  },
  chatbot: {
    background: 'bg-gradient-to-br from-violet-50 via-white to-fuchsia-100',
    nav: 'bg-white/75 text-violet-700 shadow-fuchsia-100/60',
    accentText: 'text-violet-600',
    accentBadge: 'bg-violet-100 text-violet-700',
    button: 'bg-violet-500 hover:bg-violet-600 text-white',
    buttonSecondary: 'bg-white/90 text-violet-600 hover:bg-violet-50',
    card: 'bg-white/80',
  },
  analytics: {
    background: 'bg-gradient-to-br from-teal-50 via-white to-emerald-100',
    nav: 'bg-white/75 text-teal-700 shadow-emerald-100/60',
    accentText: 'text-teal-600',
    accentBadge: 'bg-teal-100 text-teal-700',
    button: 'bg-teal-500 hover:bg-teal-600 text-white',
    buttonSecondary: 'bg-white/90 text-teal-600 hover:bg-teal-50',
    card: 'bg-white/80',
  },
};

const lessonChartData = [
  { week: 'Week 1', Planned: 4, Completed: 3 },
  { week: 'Week 2', Planned: 5, Completed: 4 },
  { week: 'Week 3', Planned: 4, Completed: 4 },
  { week: 'Week 4', Planned: 6, Completed: 5 },
];

const chatbotChartData = [
  { label: 'Math', doubts: 12 },
  { label: 'Physics', doubts: 9 },
  { label: 'Chemistry', doubts: 7 },
  { label: 'English', doubts: 5 },
];

const analyticsTrendData = [
  { month: 'Jun', mastery: 52, engagement: 64 },
  { month: 'Jul', mastery: 58, engagement: 68 },
  { month: 'Aug', mastery: 63, engagement: 74 },
  { month: 'Sep', mastery: 67, engagement: 78 },
  { month: 'Oct', mastery: 72, engagement: 82 },
];

const analyticsPieData = [
  { name: 'Videos', value: 45, color: '#34d399' },
  { name: 'Quizzes', value: 30, color: '#2dd4bf' },
  { name: 'Projects', value: 15, color: '#99f6e4' },
  { name: 'Discussions', value: 10, color: '#a7f3d0' },
];

const tabs: { id: TabId; label: string; emoji: string; description: string }[] = [
  {
    id: 'planner',
    label: 'AI Lesson Planner',
    emoji: '🧠',
    description: 'Craft vibrant lesson plans tailored for Indian higher-secondary classrooms.',
  },
  {
    id: 'chatbot',
    label: 'AI Tutoring Chatbot',
    emoji: '🤖',
    description: 'Give students a friendly study buddy to clear every doubt instantly.',
  },
  {
    id: 'analytics',
    label: 'Learning Analytics Dashboard',
    emoji: '📊',
    description: 'Track progress, motivation, and mastery with colourful insights.',
  },
];

const lessonHighlights = [
  '📘 Focus on CBSE Class 11 Trigonometry with real-life problem sets.',
  '🎯 Add a 15-minute peer quiz for active recall.',
  '🎨 Include a concept map of identities using colour-coded visuals.',
];

const chatbotMessages = [
  { id: 1, from: 'student', text: 'Hi MentorBot! I need help with projectile motion.' },
  { id: 2, from: 'bot', text: 'Sure! Let\'s start with the velocity components. What have you understood so far? 😊' },
  { id: 3, from: 'student', text: 'I get the horizontal part, but the vertical equations confuse me.' },
  { id: 4, from: 'bot', text: 'No worries! Remember: vertical motion is like free fall with gravity acting downwards. Try this quick quiz?' },
];

const analyticsMessages = [
  { id: 1, from: 'tutor', text: 'Show me who needs revision before the pre-boards.' },
  { id: 2, from: 'bot', text: '⚡️ Students scoring below 60% in Physics: Aisha, Dev, and Kabir. Suggested remedial sessions ready!' },
];

const plannerMessages = [
  { id: 1, from: 'tutor', text: 'Can you create a 45-minute lesson on organic chemistry basics?' },
  { id: 2, from: 'bot', text: 'Absolutely! I\'ll include warm-up mnemonics and lab safety reminders. 🧪' },
];

const PieChartLegend = () => (
  <div className="mt-4 grid gap-2 text-sm text-slate-600 sm:grid-cols-2">
    {analyticsPieData.map((item) => (
      <div key={item.name} className="flex items-center gap-2">
        <span
          className="h-3 w-3 rounded-full"
          style={{ backgroundColor: item.color }}
        />
        <span>
          {item.name}
          <span className="ml-2 font-semibold text-slate-700">{item.value}%</span>
        </span>
      </div>
    ))}
  </div>
);

const MessageBubble = ({ from, text }: { from: 'student' | 'bot' | 'tutor'; text: string }) => {
  const isUser = from === 'student' || from === 'tutor';
  const label = from === 'bot' ? 'MentorBot' : from === 'student' ? 'Student' : 'Tutor';

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm shadow-md shadow-black/5 sm:text-base ${
          isUser ? 'bg-white text-slate-700' : 'bg-gradient-to-r from-sky-500 to-emerald-400 text-white'
        }`}
      >
        <p className="mb-1 text-xs font-semibold uppercase tracking-wide opacity-80">
          {label}
        </p>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default function Home() {
  const [activeTab, setActiveTab] = useState<TabId>('planner');
  const theme = themes[activeTab];

  return (
    <div
      className={`min-h-screen ${theme.background} transition-colors duration-700`}
    >
      <header
        className={`sticky top-0 z-20 border-b border-white/60 backdrop-blur-xl ${theme.nav}`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-black/5 text-2xl">
              🎓
            </div>
            <div>
              <p className="text-lg font-semibold tracking-tight sm:text-xl">
                ShikshaSpark
              </p>
              <p className="text-xs font-medium opacity-70 sm:text-sm">
                AI co-pilot for India&rsquo;s senior secondary champs
              </p>
            </div>
          </div>
          <nav className="flex flex-wrap items-center gap-2 rounded-full bg-white/60 px-2 py-1 shadow-inner shadow-white/40 sm:gap-3">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-1 rounded-full px-3 py-1.5 text-sm font-semibold transition-all duration-300 sm:px-4 sm:py-2 ${
                  activeTab === tab.id
                    ? `${theme.button} shadow-lg shadow-black/10`
                    : `${theme.buttonSecondary}`
                }`}
              >
                <span>{tab.emoji}</span>
                {tab.label}
              </button>
            ))}
          </nav>
          <button className={`rounded-full px-4 py-2 text-sm font-semibold shadow-md shadow-black/10 ${theme.button}`}>
            Join Beta
          </button>
        </div>
      </header>

      <main className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-8 sm:px-6 lg:px-10">
        <div className="rounded-3xl bg-white/70 p-6 shadow-xl shadow-black/5 sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className={`text-sm font-semibold uppercase tracking-[0.2em] opacity-70 ${theme.accentText}`}>
                {tabs.find((tab) => tab.id === activeTab)?.label}
              </p>
              <h1 className="mt-2 text-2xl font-bold text-slate-800 sm:text-3xl">
                {tabs.find((tab) => tab.id === activeTab)?.emoji} {tabs.find((tab) => tab.id === activeTab)?.description}
              </h1>
            </div>
            <div className={`self-start rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wider ${theme.accentBadge}`}>
              Designed for Classes 10-12
            </div>
          </div>
        </div>

        <TabContent activeTab={activeTab} theme={theme} />

        <div className="flex flex-col items-center gap-4 rounded-3xl bg-black/5 px-6 py-8 text-center text-sm text-slate-700 shadow-inner shadow-white/40 sm:flex-row sm:justify-between sm:text-base">
          <div className="max-w-xl">
            <p className="font-semibold">Want early access for your school?</p>
            <p className="opacity-80">We&rsquo;ll invite you to private demos, Hindi-first content drops, and tutor training camps.</p>
          </div>
          <button className={`rounded-full px-6 py-3 text-sm font-semibold shadow-lg shadow-black/10 ${theme.button}`}>
            Book a Demo
          </button>
        </div>
      </main>
    </div>
  );
}

type TabContentProps = {
  activeTab: TabId;
  theme: ThemeConfig;
};

function TabContent({ activeTab, theme }: TabContentProps) {
  if (activeTab === 'planner') {
    return (
      <div className="grid gap-6 lg:grid-cols-[1.2fr,1fr]">
        <div className="space-y-6">
          <div className={`rounded-3xl ${theme.card} p-6 shadow-xl shadow-black/5 backdrop-blur`}> 
            <h2 className={`mb-4 text-xl font-semibold ${theme.accentText}`}>
              ✍️ Lesson Brief
            </h2>
            <form className="grid gap-4 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label className="text-sm font-medium text-slate-600">Topic</label>
                <input
                  className="mt-1 w-full rounded-2xl border border-slate-200 bg-white/90 px-4 py-3 text-sm shadow-inner shadow-white/60 focus:border-emerald-400 focus:outline-none"
                  placeholder="Organic Chemistry Fundamentals"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-slate-600">Board</label>
                <select className="mt-1 w-full rounded-2xl border border-slate-200 bg-white/90 px-4 py-3 text-sm shadow-inner shadow-white/60 focus:border-emerald-400 focus:outline-none">
                  <option>CBSE</option>
                  <option>ICSE</option>
                  <option>State Board</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-medium text-slate-600">Grade</label>
                <select className="mt-1 w-full rounded-2xl border border-slate-200 bg-white/90 px-4 py-3 text-sm shadow-inner shadow-white/60 focus:border-emerald-400 focus:outline-none">
                  <option>Class 11</option>
                  <option>Class 12</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-medium text-slate-600">Lesson Duration</label>
                <input
                  className="mt-1 w-full rounded-2xl border border-slate-200 bg-white/90 px-4 py-3 text-sm shadow-inner shadow-white/60 focus:border-emerald-400 focus:outline-none"
                  placeholder="45 minutes"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-slate-600">Language Preference</label>
                <select className="mt-1 w-full rounded-2xl border border-slate-200 bg-white/90 px-4 py-3 text-sm shadow-inner shadow-white/60 focus:border-emerald-400 focus:outline-none">
                  <option>English</option>
                  <option>Hindi</option>
                  <option>Hinglish</option>
                </select>
              </div>
              <div className="sm:col-span-2 flex flex-wrap gap-3">
                <button type="button" className={`rounded-full px-5 py-2 text-sm font-semibold shadow-lg shadow-emerald-200/60 ${theme.button}`}>
                  Generate Lesson
                </button>
                <button type="button" className={`rounded-full px-5 py-2 text-sm font-semibold shadow ${theme.buttonSecondary}`}>
                  Align to NEP Goals
                </button>
              </div>
            </form>
          </div>

          <div className={`rounded-3xl ${theme.card} p-6 shadow-xl shadow-black/5 backdrop-blur`}> 
            <h2 className={`mb-3 text-xl font-semibold ${theme.accentText}`}>
              🌟 AI Lesson Flow
            </h2>
            <ul className="space-y-3 text-sm text-slate-700">
              {lessonHighlights.map((highlight) => (
                <li key={highlight} className="flex items-start gap-3 rounded-2xl bg-white/70 p-3 shadow-inner shadow-white/50">
                  <span className="text-xl">✨</span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className={`rounded-3xl ${theme.card} p-6 shadow-xl shadow-black/5 backdrop-blur`}> 
            <h2 className={`mb-3 text-xl font-semibold ${theme.accentText}`}>
              💬 Planner Chat
            </h2>
            <div className="space-y-3">
              {plannerMessages.map((message) => (
                <MessageBubble key={message.id} from={message.from as 'bot' | 'student' | 'tutor'} text={message.text} />
              ))}
            </div>
            <div className="mt-4 flex flex-col gap-3 sm:flex-row">
              <input
                className="w-full rounded-2xl border border-slate-200 bg-white/90 px-4 py-3 text-sm shadow-inner shadow-white/60 focus:border-emerald-400 focus:outline-none"
                placeholder="Add a quick request for MentorBot"
              />
              <button className={`rounded-2xl px-5 py-3 text-sm font-semibold shadow-lg shadow-emerald-200/60 ${theme.button}`}>
                Ask MentorBot
              </button>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className={`rounded-3xl ${theme.card} p-6 shadow-xl shadow-black/5 backdrop-blur`}> 
            <h2 className={`mb-3 text-xl font-semibold ${theme.accentText}`}>
              📈 Weekly Coverage
            </h2>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={lessonChartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#a7f3d0" />
                <XAxis dataKey="week" stroke="#0f766e" />
                <YAxis stroke="#0f766e" />
                <Tooltip cursor={{ stroke: '#34d399', strokeWidth: 2 }} />
                <Line type="monotone" dataKey="Planned" stroke="#0ea5e9" strokeWidth={3} dot={{ r: 6 }} />
                <Line type="monotone" dataKey="Completed" stroke="#10b981" strokeWidth={3} dot={{ r: 6 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className={`rounded-3xl ${theme.card} p-6 shadow-xl shadow-black/5 backdrop-blur`}> 
            <h2 className={`mb-4 text-xl font-semibold ${theme.accentText}`}>
              ✅ Quick Actions
            </h2>
            <div className="grid gap-4">
              {['Share with Co-teacher', 'Export to Google Classroom', 'Print Student Worksheets'].map((action) => (
                <button
                  key={action}
                  className="flex items-center justify-between rounded-2xl bg-white/80 px-4 py-3 text-left text-sm font-semibold text-slate-700 shadow-inner shadow-white/70 transition-all hover:scale-[1.01]"
                >
                  <span>{action}</span>
                  <span className="text-lg">➡️</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (activeTab === 'chatbot') {
    return (
      <div className="grid gap-6 lg:grid-cols-[1fr,1fr]">
        <div className={`rounded-3xl ${theme.card} p-6 shadow-xl shadow-black/5 backdrop-blur`}> 
          <h2 className={`mb-4 text-xl font-semibold ${theme.accentText}`}>
            🙋‍♀️ Ask a Doubt
          </h2>
          <form className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="text-sm font-medium text-slate-600">Name</label>
                <input className="mt-1 w-full rounded-2xl border border-slate-200 bg-white/90 px-4 py-3 text-sm shadow-inner shadow-white/70 focus:border-violet-400 focus:outline-none" placeholder="Aditi" />
              </div>
              <div>
                <label className="text-sm font-medium text-slate-600">Class</label>
                <select className="mt-1 w-full rounded-2xl border border-slate-200 bg-white/90 px-4 py-3 text-sm shadow-inner shadow-white/70 focus:border-violet-400 focus:outline-none">
                  <option>10</option>
                  <option>11</option>
                  <option>12</option>
                </select>
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-slate-600">Subject</label>
              <select className="mt-1 w-full rounded-2xl border border-slate-200 bg-white/90 px-4 py-3 text-sm shadow-inner shadow-white/70 focus:border-violet-400 focus:outline-none">
                <option>Physics</option>
                <option>Mathematics</option>
                <option>Chemistry</option>
                <option>Biology</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-medium text-slate-600">Your Question</label>
              <textarea className="mt-1 h-28 w-full rounded-2xl border border-slate-200 bg-white/90 px-4 py-3 text-sm shadow-inner shadow-white/70 focus:border-violet-400 focus:outline-none" placeholder="Explain the difference between AC and DC current." />
            </div>
            <div className="flex flex-wrap gap-3">
              <button type="button" className={`rounded-full px-5 py-2 text-sm font-semibold shadow-lg shadow-violet-200/60 ${theme.button}`}>
                Ask a Doubt
              </button>
              <button type="button" className={`rounded-full px-5 py-2 text-sm font-semibold shadow ${theme.buttonSecondary}`}>
                Suggest Practice Quiz
              </button>
            </div>
          </form>
        </div>

        <div className="space-y-6">
          <div className={`rounded-3xl ${theme.card} p-6 shadow-xl shadow-black/5 backdrop-blur`}> 
            <h2 className={`mb-4 text-xl font-semibold ${theme.accentText}`}>
              🤗 Live Chat
            </h2>
            <div className="space-y-3">
              {chatbotMessages.map((message) => (
                <MessageBubble key={message.id} from={message.from as 'bot' | 'student' | 'tutor'} text={message.text} />
              ))}
            </div>
            <div className="mt-4 flex flex-col gap-3 sm:flex-row">
              <input className="w-full rounded-2xl border border-slate-200 bg-white/90 px-4 py-3 text-sm shadow-inner shadow-white/70 focus:border-violet-400 focus:outline-none" placeholder="Type your reply..." />
              <button className={`rounded-2xl px-5 py-3 text-sm font-semibold shadow-lg shadow-violet-200/60 ${theme.button}`}>
                Send ✈️
              </button>
            </div>
          </div>

          <div className={`rounded-3xl ${theme.card} p-6 shadow-xl shadow-black/5 backdrop-blur`}> 
            <h2 className={`mb-4 text-xl font-semibold ${theme.accentText}`}>
              📊 Top Subjects Needing Support
            </h2>
            <ResponsiveContainer width="100%" height={220}>
              <BarChart data={chatbotChartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#ddd6fe" />
                <XAxis dataKey="label" stroke="#7c3aed" />
                <YAxis stroke="#7c3aed" />
                <Tooltip cursor={{ fill: '#f3e8ff' }} />
                <Bar dataKey="doubts" radius={[12, 12, 12, 12]} fill="#a855f7" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className={`rounded-3xl ${theme.card} p-6 shadow-xl shadow-black/5 backdrop-blur`}> 
            <h2 className={`mb-3 text-xl font-semibold ${theme.accentText}`}>
              ⚡ Quick Commands
            </h2>
            <div className="flex flex-wrap gap-3">
              {['Explain in Hindi', 'Share mnemonic', 'Show visual example'].map((chip) => (
                <button
                  key={chip}
                  className="rounded-full bg-white/75 px-4 py-2 text-xs font-semibold text-violet-600 shadow-inner shadow-white/70 transition hover:scale-105"
                >
                  {chip}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr,0.8fr]">
      <div className="space-y-6">
        <div className={`rounded-3xl ${theme.card} p-6 shadow-xl shadow-black/5 backdrop-blur`}> 
          <h2 className={`mb-4 text-xl font-semibold ${theme.accentText}`}>
            📅 Attendance & Mastery Trends
          </h2>
          <ResponsiveContainer width="100%" height={260}>
            <AreaChart data={analyticsTrendData}>
              <defs>
                <linearGradient id="colorMastery" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#34d399" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#34d399" stopOpacity={0.1} />
                </linearGradient>
                <linearGradient id="colorEngagement" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#2dd4bf" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#2dd4bf" stopOpacity={0.1} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="4 4" stroke="#ccfbf1" />
              <XAxis dataKey="month" stroke="#0f766e" />
              <YAxis stroke="#0f766e" />
              <Tooltip cursor={{ stroke: '#14b8a6', strokeWidth: 2 }} />
              <Area type="monotone" dataKey="mastery" stroke="#34d399" strokeWidth={3} fill="url(#colorMastery)" />
              <Area type="monotone" dataKey="engagement" stroke="#0ea5e9" strokeWidth={3} fill="url(#colorEngagement)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className={`rounded-3xl ${theme.card} p-6 shadow-xl shadow-black/5 backdrop-blur`}> 
          <h2 className={`mb-3 text-xl font-semibold ${theme.accentText}`}>
            📣 Alerts & Celebrations
          </h2>
          <ul className="space-y-3 text-sm text-slate-700">
            <li className="rounded-2xl bg-white/80 p-4 shadow-inner shadow-white/70">
              🏆 <span className="font-semibold">Vidhi</span> cracked the Physics olympiad qualifier! Share the news on the class WhatsApp group.
            </li>
            <li className="rounded-2xl bg-white/80 p-4 shadow-inner shadow-white/70">
              🔔 <span className="font-semibold">Reminder:</span> Book a 20-minute remedial session for Dev before Friday.
            </li>
            <li className="rounded-2xl bg-white/80 p-4 shadow-inner shadow-white/70">
              🌱 Encourage <span className="font-semibold">Kabir</span> to attempt the practice quiz—engagement dipped by 12% this week.
            </li>
          </ul>
          <div className="mt-4 flex flex-wrap gap-3">
            <button className={`rounded-full px-5 py-2 text-sm font-semibold shadow-lg shadow-emerald-200/60 ${theme.button}`}>
              View Analytics
            </button>
            <button className={`rounded-full px-5 py-2 text-sm font-semibold shadow ${theme.buttonSecondary}`}>
              Schedule Mentor Call
            </button>
          </div>
        </div>

        <div className={`rounded-3xl ${theme.card} p-6 shadow-xl shadow-black/5 backdrop-blur`}> 
          <h2 className={`mb-3 text-xl font-semibold ${theme.accentText}`}>
            🗣️ Insight Chat
          </h2>
          <div className="space-y-3">
            {analyticsMessages.map((message) => (
              <MessageBubble key={message.id} from={message.from as 'bot' | 'student' | 'tutor'} text={message.text} />
            ))}
          </div>
          <div className="mt-4 flex flex-col gap-3 sm:flex-row">
            <input className="w-full rounded-2xl border border-slate-200 bg-white/90 px-4 py-3 text-sm shadow-inner shadow-white/60 focus:border-teal-400 focus:outline-none" placeholder="Ask for personalised insights..." />
            <button className={`rounded-2xl px-5 py-3 text-sm font-semibold shadow-lg shadow-emerald-200/60 ${theme.button}`}>
              Generate Report
            </button>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <div className={`rounded-3xl ${theme.card} p-6 shadow-xl shadow-black/5 backdrop-blur`}> 
          <h2 className={`mb-4 text-xl font-semibold ${theme.accentText}`}>
            🧭 Learning Mode Mix
          </h2>
          <ResponsiveContainer width="100%" height={220}>
            <PieChart>
              <Pie
                data={analyticsPieData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={90}
                paddingAngle={5}
              >
                {analyticsPieData.map((entry) => (
                  <Cell key={entry.name} fill={entry.color} stroke="none" />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <PieChartLegend />
        </div>

        <div className={`rounded-3xl ${theme.card} p-6 shadow-xl shadow-black/5 backdrop-blur`}> 
          <h2 className={`mb-4 text-xl font-semibold ${theme.accentText}`}>
            📒 Student Snapshots
          </h2>
          <div className="space-y-3 text-sm text-slate-700">
            {[
              { name: 'Aisha', focus: 'Needs algebra recap • attendance 92%' },
              { name: 'Dev', focus: 'Boost Physics labs • mastery +8% this month' },
              { name: 'Kabir', focus: 'Encourage peer mentoring • engagement 58%' },
            ].map((student) => (
              <div key={student.name} className="flex items-center justify-between rounded-2xl bg-white/80 px-4 py-3 shadow-inner shadow-white/70">
                <div>
                  <p className="font-semibold">{student.name}</p>
                  <p className="text-xs opacity-80">{student.focus}</p>
                </div>
                <button className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-teal-700 shadow-inner shadow-white/60">
                  Nudge ➡️
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className={`rounded-3xl ${theme.card} p-6 shadow-xl shadow-black/5 backdrop-blur`}> 
          <h2 className={`mb-4 text-xl font-semibold ${theme.accentText}`}>
            📥 Export Options
          </h2>
          <div className="grid gap-3">
            {['Download PDF Summary', 'Sync to School ERP', 'Share with Parents'].map((option) => (
              <button
                key={option}
                className="flex items-center justify-between rounded-2xl bg-white/80 px-4 py-3 text-left text-sm font-semibold text-slate-700 shadow-inner shadow-white/70 transition hover:scale-[1.01]"
              >
                <span>{option}</span>
                <span className="text-lg">📬</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

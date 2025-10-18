import Link from 'next/link';
import { Github, Linkedin, Orbit } from 'lucide-react';

const socials = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/roognis/',
    icon: Linkedin,
  },
  {
    label: 'Netlify',
    href: 'https://www.netlify.com/',
    icon: Orbit,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/roognis',
    icon: Github,
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-black/40">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-10 text-sm text-white/60 md:flex-row md:items-center md:justify-between">
        <p className="text-xs uppercase tracking-[0.3em] text-white/40">
          &copy; {new Date().getFullYear()} Roognis • Corporate Education Intelligence
        </p>
        <div className="flex flex-col items-start gap-4 md:flex-row md:items-center">
          <nav className="flex items-center gap-6 text-xs font-medium uppercase tracking-[0.25em] text-white/50">
            <Link href="#learning-ai" className="transition hover:text-white">
              Learning AI
            </Link>
            <Link href="#career-ai" className="transition hover:text-white">
              Career AI
            </Link>
            <Link href="#performance" className="transition hover:text-white">
              Performance
            </Link>
            <Link href="#insights" className="transition hover:text-white">
              Insights
            </Link>
          </nav>
          <div className="flex items-center gap-3">
            {socials.map(({ label, href, icon: Icon }) => (
              <Link
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.02] text-white/70 transition hover:border-sky-400/60 hover:text-sky-300"
              >
                <Icon className="h-4 w-4" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

import Link from "next/link";
import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <header className="border-b border-neutral-800">
      <nav className="mx-auto flex max-w-5xl items-center justify-between p-4">
        <Link href="/" aria-label="Roognis home">
          <Logo />
        </Link>
        <div className="flex items-center space-x-4 text-sm">
          <Link
            href="/about"
            className="hover:underline transition-all duration-200 hover:text-cyan-400"
          >
            About
          </Link>
          <Link
            href="/customers"
            className="hover:underline transition-all duration-200 hover:text-cyan-400"
          >
            Customers
          </Link>
          <Link
            href="https://substack.com/@roongis"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline transition-all duration-200 hover:text-cyan-400"
          >
            Newsletter
          </Link>
          <Link
            href="https://www.instagram.com/roognis_singoor/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline transition-all duration-200 hover:text-cyan-400"
          >
            Instagram
          </Link>
          <span className="text-neutral-500 cursor-not-allowed">
            Community (Coming Soon)
          </span>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}

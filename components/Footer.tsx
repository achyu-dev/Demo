import Link from "next/link";
import { SocialIcon } from "react-social-icons";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-800">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between p-4 text-sm text-neutral-400 md:flex-row">
        <p>&copy; {new Date().getFullYear()} Roognis.</p>
        <div className="mt-2 flex items-center space-x-4 md:mt-0">
          <Link
            href="/about"
            className="transition-all duration-200 hover:text-cyan-400 hover:underline"
          >
            About
          </Link>
          <Link
            href="/customers"
            className="transition-all duration-200 hover:text-cyan-400 hover:underline"
          >
            Customers
          </Link>
          <span className="text-neutral-500 cursor-not-allowed">
            Community (Coming Soon)
          </span>
          <div className="hidden h-5 w-px bg-neutral-700 md:block" />
          <SocialIcon
            url="https://www.linkedin.com/company/roognis/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            bgColor="transparent"
            fgColor="#888888"
            className="transition-opacity duration-200 hover:opacity-80"
            style={{ height: 35, width: 35 }}
          />
        </div>
      </div>
    </footer>
  );
}

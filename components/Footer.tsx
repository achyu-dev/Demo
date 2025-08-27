import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-neutral-800">
      <div className="mx-auto flex max-w-5xl flex-col justify-between p-4 text-sm text-neutral-400 md:flex-row">
        <p>&copy; {new Date().getFullYear()} Roognis.</p>
        <div className="mt-2 flex space-x-4 md:mt-0">
          <Link href="/about" className="hover:underline transition-all duration-200 hover:text-cyan-400">
            About
          </Link>
          <Link href="/customers" className="hover:underline transition-all duration-200 hover:text-cyan-400">
            Customers
          </Link>
          <Link href="/wishlist" className="hover:underline transition-all duration-200 hover:text-cyan-400">
            Wishlist
          </Link>
          <Link href="https://discord.gg/7AsRYpv2" className="hover:underline transition-all duration-200 hover:text-cyan-400">
            Community
          </Link>
          <a href="https://www.linkedin.com/company/roognis/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:underline transition-all duration-200 hover:text-cyan-400">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}

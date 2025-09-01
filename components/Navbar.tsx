import Link from 'next/link';
import Logo from './Logo';

export default function Navbar() {
  return (
    <header className="border-b border-neutral-800">
      <nav className="mx-auto flex max-w-5xl items-center justify-between p-4">
        <Link href="/" aria-label="Roognis home">
          <Logo />
        </Link>
        <div className="flex space-x-4 text-sm">
          <Link href="/about" className="hover:underline transition-all duration-200 hover:text-cyan-400">
            About
          </Link>
          <Link href="/customers" className="hover:underline transition-all duration-200 hover:text-cyan-400">
            Customers
          </Link>
          <Link href="/wishlist" className="hover:underline transition-all duration-200 hover:text-cyan-400">
            Wishlist
          </Link>
          <Link href="https://discord.gg/c6AhgTs5zx" className="hover:underline transition-all duration-200 hover:text-cyan-400">
            Community
          </Link>
        </div>
      </nav>
    </header>
  );
}

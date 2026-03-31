import Link from "next/link";
import DarkModeToggle from "./DarkModeToggle";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-zinc-200/60 bg-white/70 backdrop-blur dark:border-zinc-800/70 dark:bg-zinc-950/60">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <div className="flex items-center gap-3">
          <Link href="/" className="group flex items-center gap-3">
            {/* Logo */}
            <img
              src="/assets/logo.svg"
              alt="PrintRocket"
              className="h-9 w-9 transition-transform duration-300 group-hover:scale-[1.06]"
              loading="eager"
            />
            <span className="text-sm font-semibold tracking-tight sm:text-base">
              PrintRocket
            </span>
          </Link>
        </div>

        <nav className="hidden items-center gap-6 md:flex">
          <a
            href="#features"
            className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white"
          >
            Features
          </a>
          <a
            href="#how-it-works"
            className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white"
          >
            How it works
          </a>
          <a
            href="#testimonials"
            className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white"
          >
            Trust
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <DarkModeToggle />
        </div>
      </div>
    </header>
  );
}


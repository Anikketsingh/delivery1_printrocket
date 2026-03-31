import Link from "next/link";
import { siteConfig } from "../utils/siteConfig";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-200/60 bg-white/70 py-10 backdrop-blur dark:border-zinc-800/70 dark:bg-zinc-950/60">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <Link href="/" className="group flex items-center gap-3">
              <img
                src="/assets/logo.svg"
                alt="PrintRocket"
                className="h-9 w-9 transition-transform duration-300 group-hover:scale-[1.06]"
              />
              <span className="text-sm font-semibold tracking-tight text-zinc-900 dark:text-white">
                PrintRocket
              </span>
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
              A modern workflow for vendors, admins, and delivery teams.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                Product
              </p>
              <ul className="mt-3 space-y-2 text-sm">
                <li>
                  <a
                    href="#features"
                    className="text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#how-it-works"
                    className="text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white"
                  >
                    How it works
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                Access
              </p>
              <ul className="mt-3 space-y-2 text-sm">
                <li>
                  <a
                    href={siteConfig.vendorDashboardUrl}
                    className="text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white"
                  >
                    Vendor Dashboard
                  </a>
                </li>
                <li>
                  <a
                    href={siteConfig.adminPanelUrl}
                    className="text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white"
                  >
                    Admin Panel
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                Mobile
              </p>
              <ul className="mt-3 space-y-2 text-sm">
                <li>
                  <a
                    href={siteConfig.apkPublicPath}
                    download
                    className="text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white"
                  >
                    Download APK
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-zinc-200/60 pt-6 text-xs text-zinc-500 dark:border-zinc-800/70 dark:text-zinc-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} PrintRocket. All rights reserved.</p>
          <p className="text-zinc-500 dark:text-zinc-400">
            Built for performance and clarity.
          </p>
        </div>
      </div>
    </footer>
  );
}


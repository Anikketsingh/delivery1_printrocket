import CtaGroup from "./cta/CtaGroup";

export default function Hero() {
  return (
    <div className="relative overflow-hidden pt-10 pb-14 sm:pt-14 sm:pb-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200/70 bg-white/60 px-3 py-1 text-xs font-medium text-zinc-600 shadow-sm backdrop-blur dark:border-zinc-800/70 dark:bg-zinc-950/40 dark:text-zinc-300">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500" />
            Built for vendors, admins, and delivery teams
          </div>

          <h1 className="mt-5 text-4xl font-semibold tracking-tight text-zinc-950 sm:text-5xl dark:text-white">
            PrintRocket streamlines your print workflow end-to-end.
          </h1>

          <p className="mt-4 text-base leading-relaxed text-zinc-600 dark:text-zinc-300">
            Vendors produce faster, admins coordinate smarter, and delivery teams
            ship reliably. One platform, three roles, zero guesswork.
          </p>

          <div className="mt-8">
            <CtaGroup />
          </div>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-zinc-200/70 bg-white/60 p-4 shadow-sm backdrop-blur dark:border-zinc-800/70 dark:bg-zinc-950/40">
              <p className="text-sm font-semibold text-zinc-900 dark:text-white">
                Role-based access
              </p>
              <p className="mt-1 text-xs text-zinc-600 dark:text-zinc-300">
                Designed for vendors, admins, and delivery users.
              </p>
            </div>
            <div className="rounded-2xl border border-zinc-200/70 bg-white/60 p-4 shadow-sm backdrop-blur dark:border-zinc-800/70 dark:bg-zinc-950/40">
              <p className="text-sm font-semibold text-zinc-900 dark:text-white">
                Clear next steps
              </p>
              <p className="mt-1 text-xs text-zinc-600 dark:text-zinc-300">
                Workflow states that reduce rework and delays.
              </p>
            </div>
            <div className="rounded-2xl border border-zinc-200/70 bg-white/60 p-4 shadow-sm backdrop-blur dark:border-zinc-800/70 dark:bg-zinc-950/40">
              <p className="text-sm font-semibold text-zinc-900 dark:text-white">
                Fast, modern UI
              </p>
              <p className="mt-1 text-xs text-zinc-600 dark:text-zinc-300">
                Smooth micro-interactions and accessible components.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


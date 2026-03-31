import { CheckCircle2, ClipboardList, Truck, Wand2 } from "lucide-react";

const steps = [
  {
    n: "01",
    title: "Vendors get ready",
    description:
      "Sign in to the vendor dashboard to see jobs and update progress in real time."
  },
  {
    n: "02",
    title: "Admin coordinates smoothly",
    description:
      "Admins review status, manage assignment flow, and keep the operation on track."
  },
  {
    n: "03",
    title: "Delivery ships reliably",
    description:
      "Delivery users download the APK, pick up tasks, and update delivery milestones."
  }
];

const highlights = [
  { icon: ClipboardList, text: "Clear states reduce rework." },
  { icon: Wand2, text: "Premium UI that stays out of the way." },
  { icon: Truck, text: "Delivery-ready workflow handoffs." }
];

export default function HowItWorksSection() {
  return (
    <div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-950 dark:text-white">
            How it works
          </h2>
          <p className="mt-2 text-zinc-600 dark:text-zinc-300">
            A simple flow across roles—built to keep print operations moving.
          </p>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-3">
        {steps.map((s) => (
          <div
            key={s.n}
            className="relative overflow-hidden rounded-2xl border border-zinc-200/70 bg-white/60 p-6 shadow-sm backdrop-blur transition-colors hover:border-zinc-300/70 dark:border-zinc-800/70 dark:bg-zinc-950/40"
          >
            <div className="absolute right-0 top-0 h-24 w-24 translate-x-10 -translate-y-6 rounded-full bg-gradient-to-b from-fuchsia-500/15 to-transparent blur-[1px]" />
            <div className="relative">
              <div className="inline-flex items-center gap-2">
                <span className="text-sm font-semibold text-fuchsia-600 dark:text-fuchsia-300">
                  {s.n}
                </span>
                <span className="inline-flex items-center justify-center rounded-full border border-zinc-200/70 bg-white/60 px-2 py-1 text-xs text-zinc-700 dark:border-zinc-800/70 dark:bg-zinc-950/30 dark:text-zinc-200">
                  Step
                </span>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-zinc-900 dark:text-white">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                {s.description}
              </p>

              <div className="mt-5 flex items-center gap-2 text-xs font-medium text-zinc-600 dark:text-zinc-300">
                <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                Production-ready handoffs
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
        {highlights.map((h) => {
          const Icon = h.icon;
          return (
            <div
              key={h.text}
              className="rounded-2xl border border-zinc-200/70 bg-white/60 p-4 shadow-sm backdrop-blur dark:border-zinc-800/70 dark:bg-zinc-950/40"
            >
              <div className="flex items-center gap-2">
                <Icon className="h-5 w-5 text-indigo-600 dark:text-indigo-300" />
                <p className="text-sm font-medium text-zinc-900 dark:text-white">
                  {h.text}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}


const stats = [
  { value: "3", label: "Role experiences" },
  { value: "1", label: "Shared workflow" },
  { value: "24/7", label: "Operational visibility" }
];

const logos = [
  "Warehouse Teams",
  "Print Vendors",
  "Logistics Partners",
  "Operations Admins"
];

export default function TestimonialsSection() {
  return (
    <div id="testimonials">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-950 dark:text-white">
            Trusted by teams that ship
          </h2>
          <p className="mt-2 text-zinc-600 dark:text-zinc-300">
            Built to reduce ambiguity across production, administration, and
            delivery.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
          <span className="text-sm font-medium text-zinc-700 dark:text-zinc-200">
            Modern, role-based flow
          </span>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-3">
        <div className="rounded-2xl border border-zinc-200/70 bg-white/60 p-6 shadow-sm backdrop-blur dark:border-zinc-800/70 dark:bg-zinc-950/40">
          <p className="text-sm font-semibold text-zinc-900 dark:text-white">
            “Clear workflow, fewer handoff issues.”
          </p>
          <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
            Our teams use PrintRocket to keep every job state visible across
            roles—so nothing slips through.
          </p>
          <div className="mt-4 flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-600/10 text-indigo-700 dark:bg-indigo-500/15 dark:text-indigo-300">
              A
            </span>
            <div>
              <p className="text-sm font-medium text-zinc-900 dark:text-white">
                Ops Manager
              </p>
              <p className="text-xs text-zinc-600 dark:text-zinc-300">
                Vendor + Admin workflow
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-zinc-200/70 bg-white/60 p-6 shadow-sm backdrop-blur dark:border-zinc-800/70 dark:bg-zinc-950/40">
          <p className="text-sm font-semibold text-zinc-900 dark:text-white">
            “Delivery updates are finally reliable.”
          </p>
          <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
            With the APK download, delivery users can update milestones
            instantly and admins can track progress without calls.
          </p>

          <div className="mt-6 grid grid-cols-1 gap-3">
            {stats.map((s) => (
              <div key={s.label} className="flex items-baseline justify-between">
                <span className="text-2xl font-semibold text-zinc-900 dark:text-white">
                  {s.value}
                </span>
                <span className="ml-4 text-sm font-medium text-zinc-600 dark:text-zinc-300">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-zinc-200/70 bg-white/60 p-6 shadow-sm backdrop-blur dark:border-zinc-800/70 dark:bg-zinc-950/40">
          <p className="text-sm font-semibold text-zinc-900 dark:text-white">
            Designed for real operations
          </p>
          <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
            A workflow that supports production steps, administration
            coordination, and delivery milestones.
          </p>

          <div className="mt-6 grid grid-cols-2 gap-3">
            {logos.map((l) => (
              <div
                key={l}
                className="rounded-xl border border-zinc-200/70 bg-white/60 px-3 py-3 text-center text-xs font-medium text-zinc-700 transition-colors hover:bg-white dark:border-zinc-800/70 dark:bg-zinc-950/40 dark:text-zinc-200"
              >
                {l}
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-zinc-200/70 bg-gradient-to-r from-indigo-500/10 to-fuchsia-500/10 p-4 text-sm font-medium text-zinc-700 dark:border-zinc-800/70 dark:text-zinc-200">
            Built for speed and clarity across teams.
          </div>
        </div>
      </div>
    </div>
  );
}


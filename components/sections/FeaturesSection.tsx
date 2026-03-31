import {
  ArrowRightLeft,
  Boxes,
  FileSearch,
  LayoutGrid,
  ShieldCheck,
  Sparkles
} from "lucide-react";

const features = [
  {
    title: "Vendor workflow",
    description:
      "View assigned jobs, manage production steps, and keep updates flowing.",
    icon: Boxes
  },
  {
    title: "Admin coordination",
    description:
      "Assign work, monitor progress, and resolve issues with a single source of truth.",
    icon: LayoutGrid
  },
  {
    title: "Document-ready",
    description:
      "Upload and track print assets and delivery documentation without chaos.",
    icon: FileSearch
  },
  {
    title: "Smarter handoffs",
    description:
      "Move requests across roles with clear states to reduce rework and delays.",
    icon: ArrowRightLeft
  },
  {
    title: "Built-in guardrails",
    description:
      "Role-based access patterns that help protect data and operations.",
    icon: ShieldCheck
  },
  {
    title: "Modern & fast",
    description:
      "Premium SaaS UI with smooth transitions and responsive performance.",
    icon: Sparkles
  }
];

export default function FeaturesSection() {
  return (
    <div>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-950 dark:text-white">
            Everything you need to run print operations
          </h2>
          <p className="mt-2 text-zinc-600 dark:text-zinc-300">
            PrintRocket connects vendors, admins, and delivery teams with a clean
            workflow.
          </p>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f) => {
          const Icon = f.icon;
          return (
            <div
              key={f.title}
              className="group rounded-2xl border border-zinc-200/70 bg-white/60 p-5 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:border-zinc-200 dark:border-zinc-800/70 dark:bg-zinc-950/40"
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-b from-fuchsia-500/15 to-indigo-500/10 text-fuchsia-700 dark:text-fuchsia-300">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="text-base font-semibold text-zinc-900 dark:text-white">
                  {f.title}
                </h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                {f.description}
              </p>
              <div className="mt-4 h-px w-10 bg-gradient-to-r from-fuchsia-500/50 to-indigo-500/0 transition-all duration-300 group-hover:w-16" />
            </div>
          );
        })}
      </div>
    </div>
  );
}


"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { Shield } from "lucide-react";
import { siteConfig } from "../../utils/siteConfig";

export default function AdminPanelButton() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  return (
    <button
      type="button"
      onClick={() =>
        startTransition(() => {
          router.push(siteConfig.adminPanelUrl);
        })
      }
      disabled={isPending}
      className="group inline-flex items-center justify-center gap-2 rounded-2xl border border-zinc-200/70 bg-white px-5 py-3 text-sm font-semibold text-zinc-900 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-zinc-300/70 hover:bg-zinc-50 disabled:cursor-not-allowed disabled:opacity-70 dark:border-zinc-800/70 dark:bg-zinc-950 dark:text-white dark:hover:border-zinc-700 dark:hover:bg-zinc-900"
    >
      {isPending ? (
        <span className="inline-flex h-4 w-4 animate-spin rounded-full border-2 border-zinc-900/20 border-t-zinc-900" />
      ) : (
        <Shield className="h-4 w-4 transition-transform duration-300 group-hover:rotate-[-5deg]" />
      )}
      <span>Admin Panel</span>
    </button>
  );
}


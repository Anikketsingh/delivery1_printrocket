"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export default function DarkModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark =
    mounted && (theme === "dark" || theme === "system" ? document.documentElement.classList.contains("dark") : false);

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle dark mode"
      className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-200/70 bg-white/70 text-zinc-700 transition-colors hover:bg-zinc-50 dark:border-zinc-800/70 dark:bg-zinc-950/50 dark:text-zinc-200 dark:hover:bg-zinc-900"
    >
      {isDark ? (
        <Moon className="h-5 w-5" />
      ) : (
        <Sun className="h-5 w-5" />
      )}
    </button>
  );
}


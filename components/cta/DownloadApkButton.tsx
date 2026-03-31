"use client";

import { useState } from "react";
import { Download } from "lucide-react";
import { siteConfig } from "../../utils/siteConfig";

export default function DownloadApkButton() {
  const [downloading, setDownloading] = useState(false);

  const onDownload = () => {
    if (downloading) return;
    setDownloading(true);

    try {
      const a = document.createElement("a");
      a.href = siteConfig.apkPublicPath;
      a.download = "";
      a.rel = "noreferrer";
      document.body.appendChild(a);
      a.click();
      a.remove();
    } catch {
      // Fallback: just navigate to the file (browser may open instead of download)
      window.location.href = siteConfig.apkPublicPath;
    } finally {
      // If navigation isn't triggered, reset the UI after the download starts.
      window.setTimeout(() => setDownloading(false), 1200);
    }
  };

  return (
    <button
      type="button"
      onClick={onDownload}
      disabled={downloading}
      aria-busy={downloading}
      className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-fuchsia-500 to-indigo-500 px-5 py-3 text-sm font-semibold text-white shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-70"
    >
      {downloading ? (
        <span className="inline-flex h-4 w-4 animate-spin rounded-full border-2 border-white/35 border-t-white" />
      ) : (
        <Download className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-[-1px]" />
      )}
      <span>Download APK</span>
    </button>
  );
}


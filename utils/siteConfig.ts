export const siteConfig = {
  siteName: "PrintRocket",

  vendorDashboardUrl:
    process.env.NEXT_PUBLIC_VENDOR_DASHBOARD_URL ||
    "https://print-rocket-web-nextjs-aikg.vercel.app",

  adminDashboardBaseUrl:
    process.env.NEXT_PUBLIC_ADMIN_DASHBOARD_BASE_URL ||
    "https://print-rocket-admin-panel-2446.vercel.app",

  adminPanelUrl:
    process.env.NEXT_PUBLIC_ADMIN_DASHBOARD_BASE_URL ||
    "https://print-rocket-admin-panel-2446.vercel.app",

  apkPublicPath:
    process.env.NEXT_PUBLIC_APK_URL ||
    "https://github.com/Anikketsingh/delivery1_printrocket/releases/download/v1test/printrocket-fe.apk",

  siteUrl:
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3001"
};
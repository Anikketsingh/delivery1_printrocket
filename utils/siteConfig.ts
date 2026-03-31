export const siteConfig = {
  siteName: "PrintRocket",
  vendorDashboardUrl:
    process.env.NEXT_PUBLIC_VENDOR_DASHBOARD_URL ||
    "https://print-rocket-web-nextjs-aikg.vercel.app/",
  adminDashboardBaseUrl:
    process.env.NEXT_PUBLIC_ADMIN_DASHBOARD_BASE_URL ||
    "https://print-rocket-admin-panel-2446.vercel.app/",
  adminSignUpKeyPath:
    process.env.NEXT_PUBLIC_ADMIN_SIGNUP_KEY_PATH ||
    "/$2b$10$M0mdRRBS4YUlMcjPQKYL3O/bhHKTfJIDQTKuvvor532NX2mUYWqZm",
  adminPanelUrl:
    (process.env.NEXT_PUBLIC_ADMIN_DASHBOARD_BASE_URL ||
      "https://print-rocket-admin-panel-2446.vercel.app/") +
    (process.env.NEXT_PUBLIC_ADMIN_SIGNUP_KEY_PATH ||
      "/$2b$10$M0mdRRBS4YUlMcjPQKYL3O/bhHKTfJIDQTKuvvor532NX2mUYWqZm"),
  apkPublicPath:
    process.env.NEXT_PUBLIC_APK_PUBLIC_PATH || "/apk/printrocket-fe.apk",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3001"
};


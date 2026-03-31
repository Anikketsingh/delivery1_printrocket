# PrintRocket Landing

Standalone, production-ready landing website for PrintRocket.

## Requirements

- Node.js 18+

## Run locally

```bash
cd landing
npm install
npm run dev
```

Open: `http://localhost:3001`

## Configure URLs (optional)

Copy `.env.local.example` to `.env.local` and adjust:

- `NEXT_PUBLIC_VENDOR_DASHBOARD_URL`
- `NEXT_PUBLIC_ADMIN_PANEL_URL`
- `NEXT_PUBLIC_APK_PUBLIC_PATH`
- `NEXT_PUBLIC_SITE_URL`

## APK download

Replace `public/assets/printrocket.apk` with your real APK build.

## Notes

- Dark mode is handled via `next-themes`.
- Animations use `framer-motion` (scroll reveal + hover micro-interactions).


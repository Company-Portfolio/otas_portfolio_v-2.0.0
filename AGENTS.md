# AGENTS.md

## Project Overview
OTAS Portfolio - React single-page app for a Myanmar tech solutions company. Vite + React 19, Tailwind CSS v4, Radix UI primitives, Framer Motion animations.

## Commands
- `npm run dev` - Start dev server (Vite)
- `npm run build` - Production build to `dist/`
- `npm run lint` - ESLint check (no typecheck configured)
- `npm run preview` - Preview production build locally

## Architecture
- Entry: `src/main.jsx` → `src/App.jsx` (React Router with 5 routes)
- Components: `src/components/{layout,ui,sections}/`
- Content: Single `src/data/content.js` file (all text/data in Myanmar/English)
- Utilities: `src/lib/utils.js` (`cn()` helper for Tailwind class merging), `src/utils/animations.js` (Framer Motion variants)
- UI primitives follow shadcn/ui pattern: Radix + CVA + `cn()` helper

## Conventions
- Path alias: `@/` maps to `src/` (configured in `vite.config.js`)
- All content lives in `src/data/content.js` - edit there, not in components
- Tailwind v4 uses CSS-based theme in `src/index.css` (`@theme inline` block)
- Custom font families: Poppins (sans), Manrope (display), Noto Sans Myanmar (body/headings)
- Custom CSS utilities: `.glass`, `.glass-dark`, `.text-gradient`, `.bg-gradient-blue`, `.bg-gradient-dark`
- Framer Motion for animations - see `src/utils/animations.js` for reusable variants

## Communication
- Always respond in Myanmar language when user asks questions

## Gotchas
- No TypeScript - pure JSX with ESLint only
- No test suite configured
- No CI/CD pipelines
- Myanmar language content mixed with English in data file
- Images expected in `public/images/` (SVGs and PNGs)

# SetlesStudio Website

Premium marketing + lead-gen website for SetlesStudio (AI fashion content agency).
Built with **Next.js 14 (App Router) + TypeScript + Tailwind CSS + Framer Motion + Swiper**.

## Quick start

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Pages

| Route | Page |
|---|---|
| `/` | Home — hero with draggable before/after slider, free sample, 7 services, process, testimonials |
| `/services` | All 6 services, detailed alternating sections (anchor links: `/services#footwear-photography` etc.) |
| `/services/[slug]` | Single service page |
| `/portfolio` | Before/after comparison + filterable masonry gallery |
| `/pricing` | 3 tiers, custom quote band, FAQ accordion |
| `/learn` | Educational products (dark + gold look from the Learn design) |
| `/about` | Story, team, awards, stats, process, gallery |
| `/blog` | Blog listing (featured + grid) |
| `/blog/[slug]` | Single post (statically generated) |
| `/contact` | Form with intent / package / service pre-fill via URL params |
| `/login` | Admin login page (glassmorphic authentication layout) |
| `/dashboard` | Interactive visual CMS workspace for blogs, page contents, and SEO tags |

## Editing Content (Visual CMS Dashboard)

While the default fallback mock data resides in `lib/data.ts`, administrators can edit all site content visually using the built-in **CMS Admin Dashboard**!

### Accessing the CMS Dashboard:
1. Navigate to the footer of the website and click the **Admin Login** link (or visit `/login` directly).
2. Authenticate using the pre-seeded credentials:
   * **Email:** `admin@setlesstudio.com`
   * **Password:** `admin123`
   *(Any custom credentials will also bypass authentication for preview/demo mode).*
3. You will be redirected to the control portal at `/dashboard`.

### Dashboard Functionality:
* **Overview & SEO Audit**: Review counts of active pages and articles. A real-time audit score calculates overall metadata optimization status.
* **Blog Manager & Editor**: Write, edit, or delete articles. Support for Markdown formatting, category filters, and draft/published flags.
* **Pages & Tiles Configurator**: Modify landing page headers and customize grid list components including **Value Propositions**, **Services Preview**, **Pricing Packages**, and **Client Testimonials**.
* **Visual Live Previews**: Form inputs display side-by-side with a simulated visual layout mockup of the webpage, allowing you to preview formatting updates before saving.
* **Google SERP Simulator**: Displays real-time search engine result previews for blogs and pages with visual progress bars indicating optimal Meta Title (40–60 chars) and Meta Description (120–160 chars) lengths.

## Data Persistence & Hydration

All dashboard content modifications are committed instantly inside the browser's `localStorage` database layer ([lib/dashboard-store.ts](file:///e:/setles-studio/setles-studio/lib/dashboard-store.ts)). 

The public website pages are hydrated dynamically using React hooks to query these storage keys in real-time, allowing updates to reflect instantly on the public website pages inside the active browser session!

## Adding Images

1. Drop the file into `public/images/`
2. Set the path (e.g. `"/images/team-1.jpg"`) wherever you see `src: ""` or `image: ""` — in `lib/data.ts` or directly inside the CMS Page Editor fields.

Any slot with an empty `""` path renders a **labelled placeholder** on the page, so you can see exactly where images are still missing.

## Notes
- Brand tokens (orange `#F26A1B`, ink, cream, gold) are in `tailwind.config.ts`.
- Fonts: DM Sans (display) + Manrope (body) via `next/font/google`.
- SEO optimization: Dynamic routes compile cleanly to static assets (`public/robots.txt` and `public/sitemap.xml`) to eliminate build-time timeouts.

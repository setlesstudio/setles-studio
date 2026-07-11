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

## Editing content (no code knowledge needed)

**Everything lives in `lib/data.ts`** — services, pricing, FAQ, testimonials,
team, Learn products, and blog posts. Edit that one file to change copy or prices.

## Adding images

1. Drop the file into `public/images/`
2. Set the path (e.g. `"/images/team-1.jpg"`) wherever you see `src: ""` or
   `image: ""` — in `lib/data.ts` or directly in a page.

Any slot with an empty `""` path renders a **labelled placeholder** on the page,
so you can see exactly where images are still missing:

## Notes
- Brand tokens (orange `#F26A1B`, ink, cream, gold) are in `tailwind.config.ts`.
- Fonts: DM Sans (display) + Manrope (body) via `next/font/google`.

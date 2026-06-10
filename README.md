# axe238 — Church of Brotherly Love website

Modern rebuild of [axe238.com](https://axe238.com/) — the website of the **Church of Brotherly Love** (the church of Philadelphia, Revelation 3), currently a dated WordPress / Newspaper theme site last updated in 2020.

> **Status:** 📐 Planning. This repo currently holds the architecture & design plan. The Astro build follows.

## Stack (planned)

- **[Astro 5](https://astro.build/)** — fast static site; content collections for teachings / beliefs / sermons
- **[Keystatic](https://keystatic.com/)** — Git-based CMS so church staff can edit content without touching code
- **Tailwind CSS v4** — design system (warm "open door" palette; Fraunces + Inter type)
- **[Web3Forms](https://web3forms.com/)** — contact / connect forms (no backend)
- **Cloudflare Pages** — hosting + DNS

## The plan

See **[PLAN.md](./PLAN.md)** for the full information architecture, sitemap, page-by-page content, design system, technical architecture, and phased build roadmap.

## Key facts

- **Location:** 80 Ferry Blvd, 2nd Floor, Room 202, Stratford, CT 06615 — "Philadelphia" is the *symbolic* identity (Rev 3:7–13), **not** the city.
- **Service times:** Sun 10:00 AM (School) & 11:00 AM (Worship); Wed 7:00 PM.
- **Contact:** (475) 221-4673 · philly238@gmail.com · YouTube [@axe.238](https://www.youtube.com/@axe.238)
- **Flagship content:** the *Alpha Ministry — Four Faces* teaching series (Lion / Ox / Man / Eagle).

## Open questions

Several items need confirmation from the church before launch (giving tiers, leadership bios/photos, real congregation photography, DNS access, CMS editors). See the end of [PLAN.md](./PLAN.md#open-questions-for-the-clientchurch).

## Development

_Not yet scaffolded._ Once the Astro project is initialized:

```bash
npm install
npm run dev
```

# Church of Philadelphia — Website Rebuild Plan

The Church of Philadelphia is the church of the open door of Revelation 3:8 — and the new site makes that single line the brand: a lamplit doorway you are invited through, not a cold newspaper grid. We adopt the **identity-first** direction as the skeleton (its discipline — *distinctiveness bounded by usability*, *design for evergreen because the real failure was staleness*, *brand and IA are the same object*) and graft in the two best ideas it lacked: the **Read↔Watch duality** between every teaching and its sermon, and an **auto-derived "This Sunday" block + sticky service bar** that structurally cures the "abandoned 2020 site" problem with zero ongoing maintenance. The symbolic system — open door, key of David, and the four pillars (Lion / Ox / Man / Eagle) — is encoded directly in the content layer so it threads through color, icon, and navigation automatically. The result is a hospitable, accessible, sub-3-second site that serves the 74% of first-timers who land on the homepage while honoring the church's rich Apostolic identity and its flagship Alpha Ministry teaching.

## ✅ Locked Decisions (2026-06-11)

> Final choices that **supersede any conflicting details below** — specifically the old multi-page sitemap, the Fraunces/Inter typography, and the congregation-photography art direction. They'll be folded into the body during the build. **Reference comp:** [`public/design/v3-illuminated-light.html`](public/design/v3-illuminated-light.html) (chosen from three comps; V3 picked, then lightened).

- **Visual direction — "Illuminated (Light)":** gold + jewel tones on warm **vellum** (illuminated-manuscript-on-cream) — classical, reverent, luminous. Light overall, with **one** dramatic dark band (the Key of David) for gravitas.
- **Logo — LOCKED (2026-06-12): House & Key, variation V9 "smaller key"** (roof-forward, compact skyline-key) — see `public/design/logo-variations.html`. Already implemented in `src/components/Logo.astro` + `public/favicon.svg`. Do not redesign.
- **Four Faces imagery — weathered classical statue photography** (user-approved from feedback): CC0 museum pieces (Greek marble lion/Met, winged Ox of St Luke/Cleveland, St Michael limestone/Cleveland, Roman corbel eagle) in arched plates, sepia-graded with per-face accent tint. Consistent with the no-people rule (sculpture, not people). First implementation currently uncommitted on the Mac.
- **Typography (replaces Fraunces + Inter):** **Cormorant Garamond** (display) + **EB Garamond** (body) + **Marcellus** small-caps (eyebrow labels).
- **Palette tokens:** vellum bg `#FAF4E6` / `#F4EAD3`; ink `#2A2014`, ink-soft `#6B5A40`; gold `#C8972E`, gold-deep `#9A6E20` (text/linework on light), gold-bright `#D4A53C` (glows); Four Faces — lion `#9E2B25`, ox `#8A5A2B`, man `#C8972E`, eagle `#2F5D62`; dark band `#17110A`; hairline `#E2D4B2`.
- **Imagery — NO people / congregation photography.** Deliberate (matches the original axe238.com and avoids the church-site formula). Visuals are **symbolic / architectural / abstract**: light through an open door, arches & pillars, sacred geometry, the Key, illustrated/engraved Four-Faces emblems, stone/parchment texture. Optional later: authentic church-provided building/baptism shots only — never stock.
- **Architecture — HYBRID** (replaces the fully multi-page sitemap below): a **single-page home** with smooth scroll-to-section nav (**I'm New · Watch · Beliefs · Give · Contact are home sections**, auto-focus on click) **plus dedicated sub-pages only for the teaching library** — `/teachings` index + one page per teaching (the four faces, the series overview, End Time Dominion). Newcomers finish on the first page; long-form study content gets its own pages + SEO.
- **Unchanged from below:** Astro **5.18.2** (with the Vite-6 `overrides` fix), Keystatic CMS, Web3Forms, Cloudflare Pages; the open-door / Four-Faces / Key-of-David identity; all real content and the open-questions list.

## Goals & Problems We're Fixing

- **Surface the buried contact info.** Address, phone (475) 221-4673, and email philly238@gmail.com currently appear only on the Contact page → put address + service times in a **sticky utility bar and footer on every page**, plus JSON-LD `Church` schema.
- **Stop the site looking abandoned.** Last post Dec 2020; everything is dated → **evergreen-first architecture**: an auto-derived "This Sunday" block (never shows a stale date), a YouTube-fed Watch wall that auto-updates, and no calendar/blog that can rot.
- **Let the church edit content without a developer.** WordPress' admin was the one thing non-technical staff could use → a **Keystatic Git-based CMS** at `/keystatic` gives them a friendly editor for teachings, beliefs, sermons, and service times that commits to GitHub and auto-rebuilds — keeping the fast static site while removing the dependency on a coder.
- **Make newcomers the audience, not members.** Old site is an article feed → homepage triages to **I'm New / Watch / What We Believe**, with a chronological Plan-Your-Visit page answering the silent questions (when, where, parking, kids, dress).
- **Kill the dated newspaper look.** All-caps walls, big empty gaps, generic TagDiv theme → **Fraunces/Inter type pairing**, real type scale, warm parchment palette, the portal-arch motif, and purposeful whitespace.
- **Fix the missing service-times-on-homepage failure.** → Service times appear in the sticky bar, the "This Sunday" block, the footer, and the Visit page.
- **Replace the giving page honestly.** → Rebel Give + Zelle, plus the **Eight Levels of Giving** — recovered from the old site's `Giving-Ladder.png` image and refined into a clean element (`public/design/giving-eight-levels.html`); confirm wording with the church.
- **Add a real contact form + map.** Old site has only address text + a WP login widget → **Web3Forms contact + connect forms** and an embedded map; the login/password widget and TagDiv credit are removed entirely.
- **Ship real accessibility, not an overlay.** → Code-level WCAG 2.2 AA: semantic HTML, 4.5:1 contrast, keyboard operability, captions/transcripts.
- **Enrich the thin teaching articles.** Scriptures are reference-only → full verse text, natural-facts stat cards, and Exousia/Dunamis glossary chips.
- **Re-implement the End Time Dominion mind-map statically.** Custom Flash/JS plugin → accessible expand/collapse tree or high-res SVG + download.
- **Fix the byline gap.** Generic "Book of Dan"/"pressmaster" → reserved leadership bio/photo slots (not fabricated) and a real church byline.
- **Disarm the naming discrepancy.** Named "Philadelphia" (symbolic, Rev 3:7-13) but located in Stratford, CT → one graceful sentence each on About + Visit; literal address used for all wayfinding.

## Information Architecture & Sitemap

| Page | Path | In Nav? | Purpose |
|---|---|---|---|
| Home | `/` | No (logo) | Threshold hero + triage to the three doors; evergreen, never a dated feed. |
| I'm New / Plan Your Visit | `/visit` | Yes | Highest-converting page; chronological Sunday walkthrough, times, map, connect form. Absorbs `/service-times/`. |
| What We Believe | `/beliefs` | Yes | Statement of faith via the "share vs distinctive" framing. Absorbs homepage "OUR BELIEFS". |
| About | `/about` | No (footer + Beliefs) | The Rev 3:7-13 open-door story, naming note, leadership slots. |
| Teachings (index) | `/teachings` | Yes | Library mechanics under a warm label: Four Faces pillars, series shelves, recent rail, Read/Watch chips. Absorbs `/category/teaching/`. |
| The Four Faces (overview) | `/teachings/the-four-faces-of-the-alpha-ministry` | No | Series hub; Rev 4:5-11 full text; suggested study order; playlist link. |
| Face of a Lion | `/teachings/face-of-a-lion` | No | `face: lion`; righteousness/boldness/protection; stat cards; Exousia/Dunamis. |
| Face of an Ox | `/teachings/face-of-an-ox` | No | `face: ox`; the Work of God / perennial strength. |
| Face of a Man | `/teachings/face-of-a-man` | No | `face: man`; spiritual order / Face of God. |
| Face of an Eagle | `/teachings/face-of-an-eagle` | No | `face: eagle`; spiritual sight / light. |
| End Time Dominion | `/teachings/end-time-dominion` | No | Featured; Key of David; Eliakim/Shebna typology; static mind-map. |
| Watch | `/watch` | Yes | @axe.238 media wall via facade embeds; Four Faces playlist flagship; Read↔Watch chips. |
| Give | `/give` | Yes | 2 Cor 9:7; Rebel Give + Zelle only; privacy assurance. Absorbs `/god-loves-a-cheerful-giver/`. |
| Contact | `/contact` | Yes | Address, map, phone, email, YouTube, service times, Web3Forms form. Absorbs `/contact-mobile/`. |
| Thank You | `/thanks` | No | Web3Forms success target; warm arch confirmation. |
| 404 | `/404` | No | "This door is closed — but ours is open" (Rev 3:8 wink). |

**Header nav** (sticky; ≤6 items + persistent CTA): `Logo` · **I'm New** · **Teachings** · **Watch** · **Beliefs** · **Give** · **Contact** · then the primary CTA button **Plan Your Visit**. Above the nav sits a thin **sticky service-info utility bar**: *"Sundays 10 & 11am · Wed 7pm · 80 Ferry Blvd, Stratford CT · (475) 221-4673"*.

**Footer** (warm Deep-Umber panel, 4 columns): (1) Church name, mark, one-line invitation, and the address block; (2) Service times (auto-rendered from the same data file as the homepage); (3) Quick links — Visit, Beliefs, About, Teachings, Watch, Give, Contact; (4) Connect — phone, email, YouTube @axe.238, and reserved social slots. Bottom strip: copyright (the church, **not** TagDiv), a "Built with an open door" line, and the privacy note. The WP login/password-recovery widget is gone.

**Primary CTA (one per page, repeated ≤3 touchpoints on home):** **Plan Your Visit** → `/visit`. Secondary persistent actions: **Watch** and **Give**. Tertiary soft on-ramp: **"New here? Start with the Four Faces."**

## Page-by-Page Content Plan

### Home (`/`)
Section order (evergreen-first, practical-facts-fast, distinctive content in the middle, repeated CTA):

1. **Threshold hero** — full-bleed warm congregation photo inside a portal arch; eyebrow kicker `THE CHURCH OF PHILADELPHIA`; H1 in Fraunces, and the Rev 3:8 line set as a single Fraunces-italic scripture: *"Behold, I have set before thee an open door, and no man can shut it."* Primary CTA **Plan Your Visit**. The **sticky service bar** rides above.
2. **Three Doors** — three arched cards: **I'm New** (`/visit`), **Watch** (`/watch`), **What We Believe** (`/beliefs`). (Give is deliberately *not* one of the three first-screen doors.)
3. **Warm welcome + pastor-video slot** — short second-person welcome copy ("brotherly love" warmth mandate); reserved slot for a pastor welcome video (placeholder until provided).
4. **Four Faces pillars** — the flagship module: four colored arched pillars (Lion crimson, Ox clay, Man gold, Eagle teal) rendered from the `face` enum, each linking to its teaching. Eyebrow `ALPHA MINISTRY`.
5. **What We Believe teaser** — 2-3 lines using the "what every Christian shares / what's distinctive about us" framing → link to `/beliefs`.
6. **Watch rail** — 3-4 @axe.238 facade thumbnails; "See all sermons" → `/watch`.
7. **This Sunday + Plan Your Visit band** — the **auto-derived evergreen block** (next service day/time computed from the service-times data file, so it is always correct), address, embedded map, repeated **Plan Your Visit** CTA.
8. **Key of David night band** — the one dark Deep-Umber section: large Key icon, gold Fraunces-italic *Isaiah 22:22 / Rev 3:7*, link to End Time Dominion.
9. **Footer.**

*New content needed:* hero/congregation photography, pastor welcome video. *Mapped existing content:* Rev 3:8 banner, statement-of-faith excerpt, Four Faces series, service times, address.

### I'm New / Plan Your Visit (`/visit`)
Chronological Sunday flow: **Arrive & park** (exterior/parking photos — *new*) → **Walk in** (2nd-floor Room 202 wayfinding) → **What the service feels like** ("the full gospel experience" — praise, worship, preaching; come-as-you-are; ~length) → **Kids** (*confirm with church*) → **Service times** (Sunday School 10:00 AM, Worship 11:00 AM, Wednesday 7:00 PM — from data file) → **Address + embedded map + directions**, with the one-sentence symbolic-name note → **Connect form** (Web3Forms: name, email, phone, optional message → `/thanks`) → soft CTA **"Start with the Four Faces."** *Mapped:* all service-times page content. *New:* parking/exterior photos, kids info, service length.

### What We Believe (`/beliefs`)
Rendered from the `beliefs` collection in two clearly separated bands:
- **What we share with all Christians** — One God; the Bible as the Word of God ("organic, perennial, applicable to every age"); Jesus Christ as Lord and "the Chief Apostle."
- **What's distinctive about us** (warm invitation, not a gate) — Repentance & Water Baptism in the Name of Jesus; the Gift of the Holy Ghost; valuing God's presence and supernatural gifts in services.
Each card carries its scripture (e.g., Acts 2:38) and an icon. *Mapped:* homepage "OUR BELIEFS" statement of faith. Links to About for the fuller story.

### About (`/about`)
The Rev 3:7-13 narrative: the **open door** (opportunity/welcome), the **key of David** (authority — Christ opens and no man shuts), the **pillar** (security/belonging — "he shall go out no more"), and **brotherly love** (the name's literal meaning). One disarming sentence on the naming: *"We're named for the Philadelphia of Revelation 3 — the church of the open door — and we gather in Stratford, Connecticut."* Reserved leadership bio/photo slots (replace "Book of Dan"/"pressmaster"). *New:* leadership names, bios, photos, founding story.

### Teachings index (`/teachings`)
Warm label, library mechanics underneath: **Four Faces pillar grid** at top; **series shelves** ("Alpha Ministry: The Four Faces", "Featured"); a **"Recent additions" rail** that visibly grows when a Markdown file is dropped in; each card shows title, face accent, summary, and **Read / Watch chips**. *(Multi-axis filter bar staged for later — ~15-20+ items.)* *Mapped:* the 6 teaching articles.

### Teaching detail pages (six)
Shared `TeachingLayout`: face emblem + accent color (from `face`), title in Fraunces, **ScriptureRail with full verse text** (enriching the reference-only originals), **natural-facts stat cards** (lion roar 5 mi, eagle dive 200 mph, ox work ethic, etc.), **Greek glossary chips** (Exousia, Dunamis), the **linked sermon + Read↔Watch** cross-link, and **prev/next within the series**.
- **The Four Faces (overview):** Rev 4:5-11 full text; four-pillar links; suggested study order; playlist link.
- **Lion:** righteousness, boldness, protection; Prov 20:2 / 30:30 / 28:1, Eph 6:13, John 10, Isa 31:4, Matt 11:12, 1 Pet 5:8.
- **Ox:** the Work of God / perennial strength; Jer 1:10, Isa 61:1-3, Eph 4:11-12.
- **Man:** spiritual order / Face of God; Rom 13:1-4, Gen 32:28, Isa 53:3-11, Exod 15:3, Ps 144:1, 2 Cor 10:3-5.
- **Eagle:** spiritual sight / light; Isa 62:6, Ezek 3:17, Heb 13:17, Mal 4:2-3, 1 Tim 6:16, Rev 1:16, 1 Sam 17.
- **End Time Dominion:** Key of David; Isa 22:1 & 22:22 + Rev 3:7; **Eliakim/Philadelphia vs Shebna/Laodicea** as a clean two-column comparison; **static accessible mind-map** (expand/collapse tree or high-res SVG + download — not the old plugin); ties back to the Key night band.

### Watch (`/watch`)
@axe.238 media wall via **facade embeds** (youtube-nocookie, thumbnail-then-iframe). Flagship **Four Faces playlist**; recent-sermons gallery; **"Read the teaching →" chips** back to articles; Subscribe CTA. Auto-updates → never stale.

### Give (`/give`)
2 Cor 9:7 (*"The Lord loves a cheerful giver"*); **Rebel Give** (secure encrypted page) + **Zelle** only; privacy assurance ("We will never share your personal, financial information…"); account features list. **The "Eight Levels of Giving"** (recovered from the old site's giving-ladder image) is included as a refined, elegant ascending-ladder element — see `public/design/giving-eight-levels.html`. *New (confirm):* whether a mailing address for gifts should appear.

### Contact (`/contact`)
"Come Join Us" heading; address, **embedded map**, phone (475) 221-4673, email philly238@gmail.com, YouTube @axe.238, service times; **Web3Forms contact form** (name, email, message → `/thanks`). WP login widget removed. *Mapped:* contact page details.

### Thanks (`/thanks`) & 404 (`/404`)
Thanks: warm portal-arch confirmation, links back to Teachings/Visit. 404: "This door is closed — but ours is open," links to Home / Visit / Teachings / Watch.

## Design System

**Color palette**

| Token | Hex | Use |
|---|---|---|
| `gold` (Open-Door Gold) | `#C98A3B` | Core brand: primary buttons, key links, arch accents, brand mark. |
| `gold-deep` (Burnished Amber) | `#A66A2E` | Hover/pressed; gold *text* on cream where AA needs it. |
| `lion` (Lion Crimson) | `#9E2B25` | Lion pillar; scripture pull-quotes; sparing emphasis. |
| `eagle` (Eagle Teal) | `#2F5D62` | Eagle pillar; the one cool note; links on dark; info CTAs. |
| `ox` (Ox Clay) | `#7A5230` | Ox pillar; earthy panels; secondary borders. |
| `ink` (Deep Umber) | `#241A12` | Primary text; darkest backgrounds (footer, Key night band, hero overlay). Warm near-black, never `#000`. |
| `ink-soft` (Walnut) | `#4A3B2C` | Secondary text, captions, muted labels. |
| `cream` (Parchment) | `#FBF6EC` | Default page background — replaces cold white. |
| `sand` | `#F0E6D2` | Alternating sections, cards, input fields. |
| `border` (Soft Taupe) | `#D8C7A8` | Hairlines, arch keylines, dividers. |
| `lamplight` | `#F2C879` | Glows, arch-top gradient, focus rings — **decorative only, never text**. |

Contrast: Ink/Walnut on Cream/Sand pass AA; use `gold-deep` (not `gold`) for gold text on cream; `lamplight`/`gold` are large-display/decorative only.

**Type pairing & scale** — Headings: **Fraunces** (variable, self-hosted via Fontsource), weights 600-900, leaning on the optical-size axis for the hero — warm, literary, "aged scripture page" without blackletter cliché. Body/UI: **Inter** (variable), 400/500 body, 600 labels, 16-18px base, line-height ~1.6, measure ~66ch. Scale: `h1 clamp(2.5rem,5vw,4rem)` · `h2 2rem` · `h3 1.5rem` · `body 1.0625rem`. **No all-caps walls** — Title/sentence case headings; uppercase reserved only for 11-12px letter-spaced **eyebrow kickers** (e.g., `ALPHA MINISTRY`). A single Fraunces-italic line for scripture quotations.

**Four-Faces motif system** — The `face` enum (`lion | ox | man | eagle`) is the unifying data primitive: it drives accent **color**, **emblem icon**, and **playlist/teaching tile** automatically — brand and IA are the same object. The four render as four **arched pillars** on the homepage and Teachings index (Lion = kingship/authority, Ox = sacrifice/service, Man = humanity/fellowship & the warmest, newcomer-facing face, Eagle = vision/divinity), each in its signature color.

**The portal arch** is the signature reusable container (`<Arch>`): rounded-top doorway wrapping the hero, CTAs, ministry cards, and photos, with a thin Soft-Taupe keyline and a faint Lamplight glow at the top — the literal embodiment of Rev 3:8 and the answer to the old rectangular grid.

**Iconography** — One custom line-icon family (single ~1.75px stroke, slightly rounded joins, drawn in Ink or Gold): **Key** (brand mark + favicon), **Open Door/Arch** (welcome/hero/loading), **Pillar** (belonging), and four minimal heraldic face emblems (Lion mane, Ox horns, Man/winged figure, Eagle wing). Delivered via `astro-icon` (inline SVG, zero client JS). Icons double as section dividers and list bullets.

**Spacing & imagery art direction** — "Lamplight through an open door": generous intentional whitespace on parchment, calm single/two-column reading flow, **pillar rhythm** (strong verticals), faint paper grain, warm low-opacity drop-shadows (never gray), gentle gold "light" gradients. **Real warm-graded congregation photography** (worship, baptism, fellowship, faces, light through windows) — no stock, no clip-art dove, no all-caps blocks, no cold blues. Motion is subtle (gentle fades, a soft glow on the arch) and fast.

## Astro Technical Architecture

```
axe238-site/
├── astro.config.mjs              # site; hybrid output + @astrojs/cloudflare adapter; integrations: sitemap, react, keystatic; Tailwind v4 via @tailwindcss/vite
├── keystatic.config.ts           # Keystatic CMS schema: collections (teachings, beliefs, sermons) + singletons (serviceTimes, siteSettings)
├── tsconfig.json
├── package.json
├── public/
│   ├── favicon.svg               # the Key mark
│   ├── robots.txt                # Sitemap: https://axe238.com/sitemap-index.xml
│   ├── _redirects                # old WP slug -> new path, 301 (host-agnostic)
│   └── og/                        # static fallback OG image(s)
├── src/
│   ├── content.config.ts          # collection definitions (content layer; glob/file loaders)
│   ├── content/
│   │   ├── teachings/
│   │   │   ├── face-of-a-lion.md
│   │   │   ├── face-of-an-eagle.md
│   │   │   ├── face-of-an-ox.md
│   │   │   ├── face-of-a-man.md
│   │   │   ├── the-four-faces-of-the-alpha-ministry.md
│   │   │   └── end-time-dominion.md
│   │   ├── beliefs/
│   │   │   ├── one-god.md
│   │   │   ├── the-word.md
│   │   │   ├── repentance-and-baptism.md
│   │   │   └── gift-of-the-holy-ghost.md
│   │   └── sermons/
│   │       └── sermons.json
│   ├── data/
│   │   └── service-times.json     # single source of truth -> sticky bar, footer, "This Sunday", JSON-LD
│   ├── layouts/
│   │   ├── BaseLayout.astro        # <html>/<head> via Seo, ServiceBar, Header, Footer, <ClientRouter/>
│   │   └── TeachingLayout.astro    # face emblem, ScriptureRail, stat cards, Read/Watch, prev/next
│   ├── components/
│   │   ├── Seo.astro
│   │   ├── ServiceBar.astro        # sticky utility bar (from service-times.json)
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── Hero.astro
│   │   ├── Arch.astro              # the portal-arch container
│   │   ├── ThreeDoors.astro
│   │   ├── ThisSunday.astro        # auto-derived evergreen block
│   │   ├── FourFacesPillars.astro
│   │   ├── FaceCard.astro
│   │   ├── TeachingCard.astro
│   │   ├── BeliefCard.astro
│   │   ├── SermonCard.astro        # facade embed (youtube-nocookie)
│   │   ├── Scripture.astro         # ONE component, variants: line | pullquote | rail(full-text)
│   │   ├── StatCard.astro          # natural-facts cards
│   │   ├── GlossaryChip.astro      # Exousia / Dunamis
│   │   ├── KeyBand.astro           # Deep-Umber night band
│   │   ├── ConnectForm.astro       # Web3Forms (visit)
│   │   ├── ContactForm.astro       # Web3Forms (contact)
│   │   └── Icon.astro              # wraps astro-icon
│   ├── pages/
│   │   ├── index.astro
│   │   ├── visit.astro
│   │   ├── beliefs.astro
│   │   ├── about.astro
│   │   ├── teachings/
│   │   │   ├── index.astro
│   │   │   └── [...slug].astro     # getStaticPaths over teachings -> render()
│   │   ├── watch.astro
│   │   ├── give.astro
│   │   ├── contact.astro
│   │   ├── thanks.astro
│   │   └── 404.astro
│   ├── styles/
│   │   └── global.css              # @import "tailwindcss"; @theme brand tokens
│   ├── lib/
│   │   ├── seo.ts                  # absolute URLs, JSON-LD builders
│   │   └── schedule.ts             # "next service" logic for ThisSunday + ServiceBar
│   └── assets/
│       ├── images/
│       └── fonts/                  # Fontsource (self-hosted, no CLS)
```

**Content collections** (`src/content.config.ts`):

```ts
import { defineCollection, reference, z } from 'astro:content';
import { glob, file } from 'astro/loaders';

const teachings = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/teachings' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    series: z.string().default('Alpha Ministry: The Four Faces'),
    face: z.enum(['lion', 'eagle', 'ox', 'man']).optional(), // drives color + icon + tile
    scripture: z.string().optional(),
    summary: z.string().max(200),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.string().default('Church of Philadelphia'), // replaces "Book of Dan"
    cover: image().optional(),
    coverAlt: z.string().optional(),
    youtubeId: z.string().optional(),  // Read<->Watch: links article to its sermon
    order: z.number().optional(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

const beliefs = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/beliefs' }),
  schema: z.object({
    title: z.string(),
    group: z.enum(['shared', 'distinctive']), // share-vs-distinctive framing
    order: z.number(),
    scripture: z.string().optional(),
    icon: z.string().optional(),
  }),
});

const sermons = defineCollection({
  loader: file('./src/content/sermons/sermons.json'),
  schema: z.object({
    id: z.string(),
    title: z.string(),
    youtubeId: z.string(),                          // thumbnail + facade embed
    date: z.coerce.date(),
    teaching: reference('teachings').optional(),     // Read<->Watch back-link
    description: z.string().optional(),
  }),
});

export const collections = { teachings, beliefs, sermons };
```

Querying: `getCollection('teachings', ({ data }) => !data.draft)`, sort by `order ?? pubDate`, group by `face` for the pillars. `[...slug].astro` maps each entry via `getStaticPaths` to `{ params: { slug: entry.id }, props: { entry } }` then `const { Content } = await render(entry)`. `reference('teachings')` resolves the Read↔Watch link in both directions via `getEntry`.

**Content editing — Keystatic CMS:** Non-technical church editors manage content through **Keystatic** (`@keystatic/astro`) at **`/keystatic`** — a friendly admin UI that reads and **writes the exact same Markdown/JSON** the collections already use, so it is purely additive (no schema change). `keystatic.config.ts` mirrors the content layer: **collections** `teachings`, `beliefs`, `sermons` (field UIs over the same frontmatter — text, slug, image, markdoc body, a `face` select, a `youtubeId` for Read↔Watch), plus **singletons** `serviceTimes` (edits `src/data/service-times.json` → instantly updates the sticky bar, footer, "This Sunday", and JSON-LD) and `siteSettings`. **Mode:** start in **GitHub mode** — editors sign in with GitHub and their saves commit to the repo and trigger a rebuild; the admin UI + its `/api/keystatic/*` OAuth routes are the *only* server-rendered routes (`export const prerender = false`), everything public stays statically prerendered, so site speed is unchanged. Keystatic's UI is React, hence `@astrojs/react`. (Upgrade path: **Keystatic Cloud** lets editors sign in without personal GitHub accounts — see Open Questions.)

**Key dependencies:** `astro` v5 (content layer + `<ClientRouter/>` built in); `tailwindcss` v4 + `@tailwindcss/vite` (NOT the deprecated `@astrojs/tailwind`) with brand tokens in a `@theme` block; `@tailwindcss/typography` for the teaching `prose`; `@astrojs/sitemap`; `astro:assets` (built in); `astro-icon` + an iconify set for UI glyphs alongside the custom SVGs; `@fontsource-variable/fraunces` + `@fontsource-variable/inter`; `@astrojs/check` + `typescript` for CI; **CMS:** `@keystatic/core` + `@keystatic/astro`, `@astrojs/react` + `react`/`react-dom`, and the `@astrojs/cloudflare` adapter (for the server-rendered admin routes).

**Contact-form approach:** **Web3Forms** — host-agnostic, no backend, 250 free submissions/mo, honeypot + optional hCaptcha, `_next` redirect to `/thanks`. Plain `<form method="POST" action="https://api.web3forms.com/submit">` with hidden `access_key` (church's key), honeypot `botcheck`, `_next=https://axe238.com/thanks`, and the visible fields. Works without JS; progressively enhanced with `fetch()` for inline success.

**Image/SEO approach:** All local art through `astro:assets` `<Image>/<Picture>` (AVIF/WebP, Sharp-optimized, hashed, width/height for zero CLS; hero eager/high-priority, rest lazy). YouTube via **facade embeds** (youtube-nocookie thumbnail-then-iframe). Self-hosted Fontsource fonts (preload Fraunces). A central `Seo.astro` emits per-page title/description (from `summary`), canonical, OG/Twitter, theme-color; **JSON-LD `Church`** on home/visit/contact (name, address, telephone, geo, `openingHours` from `service-times.json`, `sameAs` the YouTube channel) and **`Article`** on teaching pages. Semantic HTML, one `<h1>` per page, required `alt`, code-level **WCAG 2.2 AA** (no overlay).

**Deployment + DNS cutover:** Host on **Cloudflare Pages** (free, global CDN, and it can hold DNS for axe238.com in one dashboard; Web3Forms keeps host choice lock-in-free). The project builds in **hybrid mode** with the **`@astrojs/cloudflare`** adapter: every public page is statically prerendered (full CDN speed), while only the Keystatic `/keystatic` + `/api/keystatic/*` routes run server-side for the editor. `astro build` → `dist/`, auto-deploy on push. Cutover: (1) deploy to a `*.pages.dev` preview and verify every page, the forms, and the redirects; (2) lower TTL on existing records 24-48h ahead; (3) move nameservers to Cloudflare (or add CNAME `www` + ALIAS/A apex to Pages), TLS auto-provisions; (4) repoint apex + www, remove old WP host records; (5) ship the **301 redirect map** — `/face-of-a-lion/`→`/teachings/face-of-a-lion/`, `/service-times/`→`/visit/`, `/god-loves-a-cheerful-giver/`→`/give/`, `/contact-mobile/`→`/contact/`, `/category/teaching/`→`/teachings/` (and the other four face slugs + `/the-four-faces-of-the-alpha-ministry/` + `/end-time-dominion/`); (6) confirm HTTPS + redirects, submit the new sitemap in Search Console, decommission WordPress.

## Build Roadmap

**Phase 0 — Scaffold**
- [ ] `npm create astro@latest` (minimal, TypeScript strict); set `site` in `astro.config.mjs`; add sitemap integration.
- [ ] Install Tailwind v4 via `@tailwindcss/vite`; create `global.css` with `@import "tailwindcss"` and the `@theme` brand-token block (palette + Fraunces/Inter).
- [ ] Self-host fonts (Fontsource variable); add `@tailwindcss/typography`, `astro-icon`, `@astrojs/check`.

**Phase 1 — Design system & shell**
- [ ] Build `Arch`, `Icon` (Key/Door/Pillar + four faces), `Scripture` (one component, variants), `StatCard`, `GlossaryChip`.
- [ ] Build `BaseLayout`, `ServiceBar`, `Header` (nav + Plan Your Visit CTA), `Footer`, `<ClientRouter/>`.
- [ ] Create `src/data/service-times.json` + `lib/schedule.ts`; build `ThisSunday` and wire the sticky bar/footer to it.

**Phase 2 — Content collections & migration**
- [ ] Define `content.config.ts` (teachings, beliefs, sermons).
- [ ] Author the 6 teaching `.md` files from extracted content; enrich with full verse text, stat cards, glossary chips; set `face`, `youtubeId`, `order`, `featured`.
- [ ] Author belief cards with `group: shared | distinctive`.
- [ ] Seed `sermons.json` (placeholder `youtubeId`s until confirmed) with `teaching` references for Read↔Watch.

**Phase 2.5 — Keystatic CMS**
- [ ] Add `@astrojs/react` + the `@astrojs/cloudflare` adapter; switch `astro.config` to hybrid output.
- [ ] Write `keystatic.config.ts` mirroring the collections (teachings, beliefs, sermons) + singletons (`serviceTimes`, `siteSettings`); add the `keystatic()` integration.
- [ ] Configure **GitHub mode** (create the GitHub OAuth app, set env vars); verify `/keystatic` loads, edits commit, and a save triggers a Cloudflare rebuild.
- [ ] Write a one-page "how to add a teaching / update service times" guide and onboard the church editor(s).

**Phase 3 — Pages**
- [ ] `index.astro` in the agreed section order (hero → Three Doors → welcome/pastor slot → Four Faces pillars → beliefs teaser → Watch rail → This Sunday/Visit band → Key night band).
- [ ] `visit.astro` (chronological, connect form, map), `beliefs.astro`, `about.astro` (story + naming sentence + leadership slots).
- [ ] `teachings/index.astro` (pillars + series shelves + recent rail + Read/Watch chips) and `[...slug].astro` via `TeachingLayout` (ScriptureRail, stat cards, prev/next, Read↔Watch).
- [ ] `watch.astro` (facade media wall + chips), `give.astro` (Rebel Give + Zelle; omit the "8 levels" with build note), `contact.astro`, `thanks.astro`, `404.astro`.
- [ ] Build the **static End Time Dominion mind-map** (accessible expand/collapse tree or high-res SVG + download).

**Phase 4 — SEO, a11y, forms, performance**
- [ ] `Seo.astro` + `lib/seo.ts`; JSON-LD `Church` + `Article`; OG images; robots.txt.
- [ ] Wire Web3Forms (`access_key`, honeypot, `_next` → `/thanks`); test end-to-end.
- [ ] Optimize all imagery via `astro:assets`; verify facade embeds; run **Lighthouse + WAVE + a real screen reader**; fix to WCAG 2.2 AA; target near-100.

**Phase 5 — Launch**
- [ ] Write `public/_redirects` (full 301 map from old WP slugs).
- [ ] Deploy to Cloudflare Pages preview; verify every page, forms, redirects.
- [ ] Lower DNS TTL; cut over apex + www; confirm HTTPS/redirects.
- [ ] Submit sitemap to Google Search Console; monitor; decommission WordPress.

## Open Questions for the Client/Church

- **Naming / location:** Confirm the church is in **Stratford, CT** (not Philadelphia, PA) and approve the one-sentence "symbolic name" treatment on About + Visit. Has the congregation ever been elsewhere?
- **Real contact details:** Confirm address, phone (475) 221-4673, and email philly238@gmail.com are current; provide a **Web3Forms access key** tied to the inbox that should receive form submissions.
- **Service times:** Confirm Sunday School 10:00 AM, Worship 11:00 AM, Wednesday 7:00 PM are still accurate, plus any holidays/seasonal changes and **kids/childcare** details for the Visit page.
- **Giving:** Confirm **Rebel Give** + **Zelle** are still the methods; provide the actual links/widget. The **"Eight Levels of Giving"** content was **recovered** from the old site's `Giving-Ladder.png` and refined into `public/design/giving-eight-levels.html` — confirm the wording is right. Should a mailing address for gifts appear?
- **Leadership & story:** Provide **pastor/leadership names, bios, and photos**, a founding story for About, and (ideally) a short **pastor welcome video** — replacing the generic "Book of Dan"/"pressmaster" byline.
- **Photography:** Provide **real congregation photos** (worship, fellowship, baptism, building exterior, parking) for the hero, Visit, and galleries — no stock.
- **YouTube content:** Confirm the **video IDs / playlists** to map to each teaching (Read↔Watch) and whether to migrate/curate the old teaching content; confirm the @axe.238 playlist structure for the Four Faces flagship.
- **Social media:** Are there Facebook / Instagram / X accounts to add to the footer, or should those slots stay hidden?
- **Who edits the site (CMS):** Who at the church will manage content in Keystatic? **GitHub mode** is free but each editor needs a GitHub account with repo access; **Keystatic Cloud** lets them sign in without one (smoother for non-technical volunteers). How many editors, and do they already have GitHub accounts?
- **Domain/DNS access:** Who controls the **registrar and current WordPress host** for axe238.com? We need access (or a coordinated cutover window) to repoint DNS and decommission WordPress.
- **End Time Dominion mind-map:** Provide the source mind-map (file/export) so it can be re-implemented as an accessible static tree or high-res SVG.
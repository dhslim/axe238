# Design Feedback Tracker

Internal suggestions log for the axe238 rebuild. Workflow: tell Claude *"feedback: …"* and it gets filed under the right section with the date. Applied items get checked off with ✅ + date (this file doubles as a design changelog). Hardened decisions move to **Decided / resolved** at the bottom.

> Recreated 2026-06-12 from the Mac session (original file was stranded uncommitted there).

## Built site (Illuminated-Light) — dhslim.github.io/axe238
- [ ] 2026-06-12 — **Four Faces statues "not totally obvious"** — exploring replacements: museum-statue alternatives + 4 generated illustrated/animated SVG sets (heraldic linework / bold silhouettes / stained glass / woodcut). Picker hub: `public/design/faces-options.html`. Known: each illustrated set's lion is its weakest figure — redraw after a set is chosen.
- [x] ✅ 2026-06-12 — **Four Faces: replace the line figures with statue pictures.** Implemented as weathered classical sculpture (all CC0, Cleveland Museum of Art open access) in arched plates with keyline mat, sepia grading, per-face accent tint at the arch top; hover lifts the sepia veil:
  - Lion — *Statuette of a Lion*, limestone, 380–246 BCE
  - Ox — *Fragment of a Capital with the Ox of Saint Luke*, marble, c. 1175–1200
  - Man — *Saint Michael the Archangel*, fossiliferous limestone, c. 1280 (deeper sepia override to neutralize the blue museum backdrop)
  - Eagle — *Imperial Eagle*, bronze with garnet inlays, 100 BCE–100 CE
- [x] ✅ 2026-06-12 — **Broken nav links on the deployed site** (`/axe238teachings`, `/axe238favicon.svg`): `base` missing trailing slash in `astro.config.mjs`. Fixed → `base: '/axe238/'`.

## Prototypes
### V1 Lamplight
- _(none yet)_
### V2 Sanctuary
- _(none yet)_
### V3 Illuminated (Dark)
- _(none yet)_
### V3L Illuminated (Light) — the pick
- _(none yet)_
### V4 Protro
- _(none yet)_
### V5 Stained Glass
- _(none yet)_
### V6 Brutalist
- _(none yet)_
### V7 Commons
- _(none yet)_
### V8 Patmos
- _(none yet)_

## Logo
- _(none yet)_

## Giving page
- _(none yet)_

## Taste notes
- **Dave prefers weathered sculpture** — keep this aesthetic for future imagery (no pristine/polished statuary, no stock photography, no people photos).

## Decided / resolved
- **Logo:** House & Key **V9 "smaller key"** — LOCKED ("that is fixed"). `src/components/Logo.astro` + favicon.
- **Direction:** Illuminated (Light) — gold + jewel tones on vellum; Cormorant Garamond / EB Garamond / Marcellus.
- **Architecture:** hybrid — one-page home with scroll-to-section nav + dedicated teaching sub-pages.
- **Imagery:** no people/congregation photos; symbolic/architectural/weathered sculpture only.
- **Naming:** wordmark is **"Philadelphia"** — never "Brotherly Love" as a name.
- **Eight Levels of Giving:** faithful wording from the original ladder image; highest level on top; visual-weight markers, no numbering; 2 Cor 9:7 kept separate from the list (it's Maimonides' ladder, not a Bible enumeration).

<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Phi Kappa Psi MIT — website

Marketing and recruiting site for the Massachusetts Beta chapter of Phi Kappa Psi
at MIT (526 Beacon Street). Replaces an old Squarespace site.

**This file is the handoff document.** Chapter membership turns over every year and
essentially everyone who maintains this site will do so through an AI coding agent.
Keep this file current — it is the main thing standing between the next maintainer
and a broken site.

## Stack

| | |
|---|---|
| Framework | Next.js 16 — **App Router only** |
| React | 19 |
| Language | TypeScript |
| Styling | Tailwind CSS **v4** |
| Components | shadcn/ui, built on **Base UI** (not Radix) |
| Icons | lucide-react |
| Host | Vercel (free Hobby tier) |

## Hard constraints — read before writing code

These are the things most likely to be gotten wrong. They are not stylistic
preferences.

1. **App Router only.** There is no `pages/` directory and there must never be one.
   Do not use `getServerSideProps`, `getStaticProps`, `next/router`, or any other
   Pages Router API. Route files are `src/app/<route>/page.tsx`.

2. **Server components by default.** Only add `"use client"` when the component
   genuinely needs state, effects, or browser events. Right now exactly four
   components are client components: `main-nav.tsx` (needs `usePathname`),
   `mobile-nav.tsx` (needs `useState`), `photo-carousel.tsx` (needs state
   and a timer), and `instagram-embed.tsx` (needs to re-run Instagram's
   `Embeds.process()` on mount). Every page in this site is statically prerendered — keep it
   that way. A client component does not break that: the carousel's first frame
   is in the prerendered HTML and the rest hydrate in.

3. **Tailwind v4 has no `tailwind.config.js`.** Do not create one. The theme lives
   in `@theme inline { … }` inside `src/app/globals.css`. Brand colors are defined
   as CSS variables in `:root` there and exposed as utilities
   (`bg-cardinal`, `text-hunter`, `bg-parchment`, etc.).

4. **shadcn/ui here is built on Base UI, not Radix.** This matters:
   - Use the `render` prop, **not** `asChild`:
     `<SheetTrigger render={<Button variant="ghost" />}>…</SheetTrigger>`
   - When a `<Button>` renders as something that isn't a native button (a `<Link>`
     or `<a>`), you **must** pass `nativeButton={false}`, or Base UI throws a
     console error:
     ```tsx
     <Button nativeButton={false} render={<Link href="/rush" />}>
       Rush Phi Psi
     </Button>
     ```

## Where content lives

All editable content is in `src/data/`. **Change content there, not in page
markup.** Pages read from these files; nothing is duplicated.

| File | What's in it |
|---|---|
| `src/data/chapter.ts` | Officers, address, social links, tagline |
| `src/data/rush.ts` | **Rush status banner**, rush chairs, the schedule poster, the rush video URL, plus two parked exports |
| `src/data/members.ts` | Brotherhood roster, grouped by class year |
| `src/data/careers.ts` | Course numbers, MIT programs, the company wall, alumni connections |
| `src/data/activities.ts` | House events, philanthropy, varsity/intramural sports |
| `src/data/house.ts` | House stats, shared spaces, and the floor-by-floor room tour |

`src/lib/nav.ts` holds the primary navigation — add a link there and it appears in
both the header and the footer.

## Common tasks

**Update rush status** (the single most important one — the old site sat on
"Spring Rush 2025 has closed" for over a year):
edit `rushStatus` in `src/data/rush.ts`. Set `state` to `"open"`, `"closed"`, or
`"soon"`; the banner colour and whether the signup button appears follow from it.
Put a Google Form URL in `signupUrl` to turn on the signup CTA. `headline` is
also the `<h1>` and the meta description on `/rush`, so changing it there updates
the page title too — there is no second copy to keep in sync.

**The Rush page carries the schedule.** As of Sep 2026 it is: hero, status
banner, then the schedule poster and the rush video side by side, then the two
rush chairs. `rushChairs` holds the contact details and reuses the Brotherhood
headshots rather than duplicating them.

**The schedule is a JPEG, by chapter preference.** `schedulePoster` in
`src/data/rush.ts` points at `public/photos/rush/schedule.jpg`. To change the
schedule, export a new poster and overwrite that file — there is no text copy
on the page to keep in sync.

Be aware of what that costs: a screen reader gets nothing from the poster
beyond its `alt`, the times can't be searched or copied, and it doesn't reflow
on a phone (it's a tall image you pinch-zoom). Given the MIT accessibility link
in the footer, offer the text version again next time the schedule changes. A
full transcription is parked in `rushSchedule` in `src/data/rush.ts` and the
markup that rendered it is in git history — restoring it is a small job. This
was raised and the chapter chose the graphic alone; don't silently re-add it.

Two exports in `src/data/rush.ts` are deliberately rendered nowhere:
`rushSchedule` (above) and `rushPillars`, the old "Why rush Phi Psi?" copy.
Note that `rushPillars` still names Morgan Stanley, Apple, Google, SpaceX,
Tesla, NASA, and McKinsey — the same unsubstantiated employer claims that were
deliberately cut from the Careers page. **Do not restore that text as-is**;
rewrite it against the company wall in `src/data/careers.ts` first.

**New exec board:** edit the `officers` array in `src/data/chapter.ts`. The footer
and the Brotherhood page both read from it.

**Add a pledge class:** add an entry to `roster` in `src/data/members.ts`, then
drop the headshots in `public/photos/members/<year>/` and point each `image` at
one. Headshots are cropped to **3:4 portrait**; a member with `image: null`
falls back to initials on a hunter-green circle, so a missing photo still looks
intentional.

**Replace a photo:** drop the new file in `public/photos/`, keeping the existing
filename, and nothing else needs to change.

`<Placeholder label="…" />` (`src/components/placeholder.tsx`) is the striped
stand-in for a shot that doesn't exist yet — as of the August 2026 photo drop
**no page uses one**, but the component is kept for the next time a slot needs
one. It takes the same `ratio` and `className` props as `<Photo>`, so swapping
either way is a one-line change.

Use `<Photo>` (`src/components/photo.tsx`), not a bare `next/image` — it handles
the aspect-ratio box, `fill` + `object-cover` cropping, and the `sizes` hint.

**Multiple photos for one thing** go in a `<PhotoCarousel photos={…} />`
(`src/components/photo-carousel.tsx`), which cross-fades on a 5s timer and adds
prev/next arrows on hover. It pauses on hover and focus, honours
`prefers-reduced-motion` by not auto-advancing, and renders a one-item array as
a plain photo with no controls. Pass `startDelay` to stagger carousels sitting
in the same grid, or they all flip in lockstep and the page strobes. The
Activities events read their frames from `photos: Photo[]`, **best frame first** —
that is the one that shows before hydration and in the prerendered HTML.
Note that in **Next 16 the `priority` prop is deprecated**; `<Photo eager />` sets
`loading="eager"` + `fetchPriority="high"` instead. Only the exterior shot at the
top of the House page uses it.

**The House and Activities pages run on real photos.** Everything else is still
placeholders. Sources are kept in `inbox/`:

| Page | Photos | Source | Wired through |
|---|---|---|---|
| House | 22, in `public/photos/house/` | `inbox/House Tour.pdf` (Oct 2025) | `src/data/house.ts` |
| Activities | 33, in `public/photos/{activities,service,sports}/` | `inbox/Activities`, `inbox/Sports`, `inbox/Community Service` (Aug 2026) | `src/data/activities.ts` |
| Careers | 3, in `public/photos/alumni/` | `inbox/Alumni  Connections` (Aug 2026) | `src/data/careers.ts` |
| Brotherhood | 30 headshots, in `public/photos/members/<year>/` | `inbox/Class of <year>/` (Aug 2026) | `src/data/members.ts` |
| Rush | 1 schedule poster, in `public/photos/rush/` | supplied by the rush chairs (Sep 2026) | `src/data/rush.ts` |

These are honest phone shots and screenshots, not the professional shoot — when
better frames arrive, overwrite the files at the same paths and nothing else
needs to change. Each `inbox/` folder holds more frames than the site uses; the
selection is recorded in the data files.

> **`inbox/` is NOT in the repo.** It is 171 MB of full-resolution originals and
> is gitignored, so it exists only on the machine of whoever collected the
> photos. Everything the site actually needs is committed under `public/photos/`
> — the build does not touch `inbox/`. But if you want to re-crop a photo or
> pick a different frame, you need the originals from that person. **Get them
> onto the chapter's Google Drive before whoever has them graduates**, and put
> the link here.

**Philanthropy is one partnership, not a list.** The chapter's only formal
service partner is the **Margaret Fuller Neighborhood House** in Cambridge
(`serviceIntro.partner` in `src/data/activities.ts`, with their logo at
`public/logos/`). Everything else is ad-hoc campus philanthropy, shown as
`servicePhotos` with no organisation names attached. The old Squarespace site
listed Rosie's Place, Habitat for Humanity, the Greater Boston Food Bank, IMEC,
and Cradles to Crayons — **the chapter is not affiliated with any of them.**
Those were removed in Aug 2026; do not restore them without asking the service
chairs.

**The company wall on Careers** (`companies` in `src/data/careers.ts`, rendered
by `src/components/company-grid.tsx`) is the list of places *current brothers*
have actually worked. It replaced the old Squarespace employer roll — Goldman
Sachs, Google, SpaceX and so on — which nobody could substantiate. Keep it to
places you can name a brother for.

Adding an entry is `{ name, homepage, logo }`. Both `homepage` and `logo` accept
`null` and the grid handles it:
- `logo: null` → the name renders as text in the same tile. Fine, and normal for
  academic labs, which often have no mark.
- `homepage: null` → a non-clickable tile. Used for the Accelerated Materials
  Lab: its old domain now serves spam, so it is deliberately **not** linked.
- `dark: true` → white/light wordmarks (AmbroseAdvisors, HOBY) get a dark tile,
  otherwise they are invisible on white.

Logo files go in `public/logos/companies/`. Prefer a wordmark (name as text)
over a bare icon, and SVG over PNG. The grid uses a plain `<img>`, not
`next/image`: SVG through `next/image` would require `dangerouslyAllowSVG`,
whereas an SVG loaded via `<img>` is script-disabled by the browser.

**The rush video is an Instagram embed, and it does not play in place.**
`rushVideoUrl` in `src/data/rush.ts` points at a chapter Instagram post, rendered
by `src/components/instagram-embed.tsx`.

This is the **only third-party script on the site**. It loads Instagram's
`embed.js`, which sets cookies for everyone who opens `/rush`. It was accepted
because the chapter had the rush video on Instagram and not as a file.

Known behaviour, so nobody re-debugs it:
- **Instagram serves Reels as a cover frame with a "Watch on Instagram"
  click-through.** The play button does not start playback on our page — that
  is Instagram's embed endpoint, inside a cross-origin iframe, and no change on
  our side alters it.
- It renders as a dead link if the post is deleted or archived, or if
  `@mitphipsi` goes private.
- Instagram controls the styling — its own chrome, like counts, and comment box
  sit inside our layout, and it ignores the site's theme.

**The fix is a self-hosted video**, and it is worth chasing: put the `.mp4` in
`public/video/`, swap the embed for a native `<video controls playsInline>`
with a poster frame, and delete `instagram-embed.tsx`. That plays inline, drops
the third-party script, matches the site, and can't rot. Get the original export
from whoever edited the video — the Instagram copy is re-compressed. Set
`rushVideoUrl` to `null` to drop the video section entirely.

## Copy: the site is deliberately sparse

In August 2026 the chapter cut nearly all descriptive prose. Rooms, shared
spaces, sports, and events are now **photo + name only** — no per-item blurbs,
and no `description` on the page headings. The `SectionHeading`/`PageHero`
`description` props still exist and still work; they are just unused on most
pages now. Match that restraint when adding sections: let the photos carry it.

The exception is copy the chapter wrote itself — the Margaret Fuller House
description on Activities.

## Design

Cardinal red and hunter green are the fraternity's official colors. Playfair
Display for headings (applied to `h1`/`h2`/`h3` globally in `globals.css` — you
don't need a `font-heading` class on every heading), Inter for body text.

The brief was **modernize while staying recognizable**: keep the traditional
identity, rebuild the execution. Prefer restraint over novelty.

`src/components/crest.tsx` renders the real coat of arms from
`public/crest.png` — a transparent PNG, which is what lets the same mark sit on
the light header and the dark footer. To change it, overwrite that file keeping
the transparency and roughly its 5:6 proportions. If a vector version ever turns
up, an SVG would be sharper at header size; the component would need its
`<Image>` swapped for an inline `<svg>`.

## Commands

```bash
npm run dev     # http://localhost:3000
npm run build   # production build — must pass before pushing
npm run lint    # eslint — must pass before pushing
```

Always run `npm run build` and `npm run lint` before committing. The build type-checks.

## Deploying

Push to `main` → Vercel deploys to production. Push any other branch or open a PR →
Vercel builds a preview at its own URL. Use a branch for anything non-trivial so
rush chairs can review it on a real URL before it goes live.

## Known TODOs

- No `major` set on any member in `members.ts` — it renders under the name once filled in
- One headshot (Cole Nguyen, 2029) is an athletics photo, not the studio set — swap if a matching one exists
- **Need a real 526 Beacon exterior shot.** The Home hero and the House page both
  reuse `public/photos/house/exterior.jpg` (from the 2025 tour deck). A photo
  supplied in Aug 2026 as a replacement turned out to be **528 Beacon — the
  Theta Tau house next door** (their crest is in the fanlight); it was not used.
  Check the door before wiring in a new exterior.
- `programs` in `careers.ts` (UROP, MISTI, Global Teaching Labs) is still unverified old-site content
- **Flip `rushStatus` to `"closed"` after Fall Rush ends Sep 10, 2026** — it is
  currently `"open"`. This is the thing the old site got wrong for a year
- Replace the Instagram rush-video embed with a self-hosted `.mp4` — the embed
  doesn't play inline and loads the site's only third-party script (see above)
- `rushPillars` still cites unverifiable employers; rewrite before restoring it
- The rush schedule is a JPEG with no text equivalent — offer the accessible
  version again next time the schedule changes (`rushSchedule` is parked ready)
- `metadataBase` in `src/app/layout.tsx` points at the old production URL; confirm once DNS is settled
- No rush signup form yet — plan is a Google Form linked from `rushStatus.signupUrl`

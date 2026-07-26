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
   genuinely needs state, effects, or browser events. Right now exactly two
   components are client components: `main-nav.tsx` (needs `usePathname`) and
   `mobile-nav.tsx` (needs `useState`). Every page in this site is statically
   prerendered — keep it that way.

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
| `src/data/rush.ts` | **Rush status banner**, the four "why rush" pillars |
| `src/data/members.ts` | Brotherhood roster, grouped by class year |
| `src/data/careers.ts` | Majors, MIT programs, employer list |
| `src/data/activities.ts` | Service partners, varsity/intramural sports, traditions |

`src/lib/nav.ts` holds the primary navigation — add a link there and it appears in
both the header and the footer.

## Common tasks

**Update rush status** (the single most important one — the old site sat on
"Spring Rush 2025 has closed" for over a year):
edit `rushStatus` in `src/data/rush.ts`. Set `state` to `"open"`, `"closed"`, or
`"soon"`; the banner colour and whether the signup button appears follow from it.
Put a Google Form URL in `signupUrl` to turn on the signup CTA.

**New exec board:** edit the `officers` array in `src/data/chapter.ts`. The footer
and the Brotherhood page both read from it.

**Add a pledge class:** add an entry to `roster` in `src/data/members.ts`.

**Replace a placeholder photo:** every image slot currently renders
`<Placeholder label="…" />`, where the label describes the shot it's waiting for —
so the placeholders double as a shot list. To replace one, drop the file in
`public/photos/` and swap the `<Placeholder>` for a Next `<Image>`, keeping the
same wrapper classes.

## Design

Cardinal red and hunter green are the fraternity's official colors. Playfair
Display for headings (applied to `h1`/`h2`/`h3` globally in `globals.css` — you
don't need a `font-heading` class on every heading), Inter for body text.

The brief was **modernize while staying recognizable**: keep the traditional
identity, rebuild the execution. Prefer restraint over novelty.

`src/components/crest.tsx` is a placeholder mark. TODO: replace with the real coat
of arms — drop an SVG at `public/crest.svg` and swap the component body.

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

- Officer names in `chapter.ts` carried over from the old site and are stale — replace before launch
- Member roster in `members.ts` is placeholder data
- All photography is placeholders; the chapter is shooting new photos
- The crest is a placeholder mark
- `metadataBase` in `src/app/layout.tsx` points at the old production URL; confirm once DNS is settled
- No rush signup form yet — plan is a Google Form linked from `rushStatus.signupUrl`

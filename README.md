# Phi Kappa Psi at MIT — website

The website for the Massachusetts Beta chapter of Phi Kappa Psi at MIT,
526 Beacon Street, Boston.

Built with Next.js, TypeScript, Tailwind CSS, and shadcn/ui. Hosted on Vercel.

## Running it locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Changing content without touching code

Most of what you'll want to update lives in `src/data/`:

- **Rush dates and status** → `src/data/rush.ts`
- **Officers** → `src/data/chapter.ts`
- **Brotherhood roster** → `src/data/members.ts`
- **Majors and employers** → `src/data/careers.ts`
- **Service partners, sports, traditions** → `src/data/activities.ts`

You can edit these directly on github.com — click the file, click the pencil icon,
make the change, and commit. Vercel deploys it automatically within a minute or two.

## Deploying

- Push to `main` → deploys to production
- Push any other branch, or open a pull request → Vercel builds a **preview** at
  its own URL, so you can check a change on your phone before it goes live

## For whoever maintains this next

Read [`AGENTS.md`](./AGENTS.md). It documents the architecture constraints, where
everything lives, and the handful of framework gotchas that will otherwise bite
you. It's written for an AI coding agent, but it's the fastest orientation for a
human too.

## Before launch

See the "Known TODOs" section of `AGENTS.md` — the officer list, roster,
photography, and crest are all still placeholders.

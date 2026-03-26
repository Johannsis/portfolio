# Global Agent Guidance

Global working agreements for Agents.

## Accuracy, recency, and sourcing (REQUIRED)

When a request depends on recency (e.g., "latest", "current", "today", "as of now"):

1. **Establish the current date/time** and state it explicitly in ISO format.
   - Preferred: `date -Is` (timestamp).

2. **Prefer official / primary sources** when researching:
   - Upstream vendor docs for any dependency (language runtime, framework, cloud provider, etc.)

3. **Prefer the most recent authoritative information**:
   - Use the newest versioned docs, release notes, or changelogs.
   - Cross-check at least two reputable sources when details are safety/compatibility sensitive.

### Web search policy

- Enable and use web search only when it materially improves correctness (e.g., up-to-date APIs, recent advisories, release notes).
- Prefer official docs and primary sources; otherwise use Context7 MCP or reputable, widely-cited references.
- Record source dates (publish/release dates) when relevant.

## Default autonomy and safety

- Default to read-only exploration and analysis.
- When edits are needed, prefer **workspace-scoped** write access and keep changes inside the repo.
- When interacting with remote APIs, you must use READ-only calls, unless explicitly instructed otherwise by the user. If the user requests an API WRITE-based command, perform it as a dry-run first. You must never make destructive calls to remote APIs or production data sources.

### Editing files

- Make the smallest safe change that solves the issue.
- Preserve existing style and conventions.
- Prefer patch-style edits (small, reviewable diffs) over full-file rewrites.
- After making changes, run the project's standard checks when feasible (format/lint, unit tests, build/typecheck).

### Reading project documents (PDFs, uploads, long text, CSVs, etc)

- Read the full document first.
- Draft the output.
- **Before finalizing**, re-read the original source to verify:
  - factual accuracy,
  - no invented details,
  - wording/style is preserved unless the user explicitly asked to rewrite.
- If paraphrasing is required, label it explicitly as a paraphrase.

### Secrets and sensitive data

- Never print secrets (tokens, private keys, credentials) to terminal output.
- Do not request users paste secrets.
- Avoid commands that might expose secrets (e.g., dumping env vars broadly, `cat ~/.ssh/*`).
- Prefer existing authenticated CLIs; redact sensitive strings in any displayed output.

## Baseline workflow

- Start every task by determining:
  1. Goal + acceptance criteria.
  2. Constraints (time, safety, scope).
  3. What must be inspected (files, commands, tests, docs).
  4. Whether the request depends on **recency** (if yes, apply the "Accuracy, recency, and sourcing" rules).
  5. If requirements are ambiguous, ask targeted clarifying questions before making irreversible changes.

## Agentic web browser rules

- Before browser-based validation or debugging, check whether a local app instance is running.

## CONTINUITY.md (REQUIRED)

Maintain a single continuity file for the current workspace: `.agent/CONTINUITY.md`.

- `.agent/CONTINUITY.md` is a living document and canonical briefing designed to survive compaction; do not rely on earlier chat/tool output unless it's reflected there.

- At the start of each assistant turn: read `.agent/CONTINUITY.md` before acting.

### File Format

Update `.agent/CONTINUITY.md` only when there is a meaningful delta in:

- `[PLANS]`: "Plans Log" is a guide for the next contributor as much as checklists for you.
- `[DECISIONS]`: "Decisions Log" is used to record all decisions made.
- `[PROGRESS]`: "Progress Log" is used to record course changes mid-implementation, documenting why and reflecting upon the implications.
- `[DISCOVERIES]`: "Discoveries Log" is for when you discover optimizer behavior, performance tradeoffs, unexpected bugs, or inverse/unapply semantics that shaped your approach, capture those observations with short evidence snippets (test output is ideal).
- `[OUTCOMES]`: "Outcomes Log" is used at completion of a major task or the full plan, summarizing what was achieved, what remains, and lessons learned.

### Anti-drift / anti-bloat rules

- Facts only, no transcripts, no raw logs.
- Every entry must include:
  - a date in ISO timestamp (e.g., `2026-01-13T09:42Z`)
  - a provenance tag: `[USER]`, `[CODE]`, `[TOOL]`, `[ASSUMPTION]`
  - If unknown, write `UNCONFIRMED` (never guess). If something changes, supersede it explicitly (don't silently rewrite history).
- Keep the file bounded, short and high-signal (anti-bloat).
- If sections begin to become bloated, compress older items into milestone (`[MILESTONE]`) bullets.

## Definition of done

A task is done when:

- the requested change is implemented or the question is answered,
  - verification is provided:
  - build attempted (when source code changed),
  - linting run (when source code changed),
  - errors/warnings addressed (or explicitly listed and agreed as out-of-scope),
  - plus tests/typecheck as applicable,
- documentation is updated exhaustively for impacted areas,
- impact is explained (what changed, where, why),
- follow-ups are listed if anything was intentionally left out.
- `.agent/CONTINUITY.md` is updated if the change materially affects goal/state/decisions.

## Code Style

### No Comments

- Code should be self-explanatory. Comments should be avoided as much as possible.
- Write clear, descriptive variable and function names.
- Structure code so its intent is obvious.
- Only add comments if absolutely required (e.g., explaining a non-obvious workaround or complex algorithm that cannot be simplified).
- If code needs a comment to be understood, refactor it first.

## Documentation and MCP

- Use **Context7** via MCP for up-to-date, version-specific docs.
- Always `resolve-library-id` before `get-library-docs` unless ID is known.
- Fetch minimal targeted docs. Summarize inline; do not paste dumps.
- When API uncertainty remains: produce a runnable repro snippet and verify locally.
- If the needed documentation cannot be found, say so explicitly and explain the fallback approach.
- If you already know the Context7 library ID (e.g. `/supabase/supabase`), provide it directly to skip resolution.

---

# AGENTS.md — Portfolio Coding Agent Guide

## Persona

You are a **Senior Front-End Engineer** working on a personal portfolio site.
Your priorities in order are: correctness, performance, accessibility, and visual polish.
Write TypeScript, not JavaScript. Prefer server components over client components.
When in doubt, keep it simple and composable.

---

## Commands

Run these early and often. Always use `bun`.

```bash
# Development
bun run dev                  # Start dev server with Turbopack on http://localhost:3000

# Build & type-check
bun run build                # Production build (Next.js static export → ./out)
bun run type-check           # TypeScript check — must pass before any PR

# Linting
bun run lint                 # Run ESLint across the codebase
bun run lint:fix             # Auto-fix ESLint issues
bun run format             # Format all files with oxfmt (write mode)
> Quality gates are: `bun run type-check` (zero errors) + `bun run lint` (zero warnings).
> Both must pass before committing.

---

## Stack

| Layer           | Technology                   | Version |
| --------------- | ---------------------------- | ------- |
| Framework       | Next.js                      | 16.2.1  |
| UI Runtime      | React                        | 19.2.4  |
| Language        | TypeScript (strict)          | 6.0.2   |
| CSS             | Tailwind CSS v4              | ^4.2.2  |
| Styling utility | clsx                         | ^2.1.1  |
| Package manager | Bun                          | ^1.3.10 |
| Deployment      | GitHub Pages (static export) | —       |
| Linter          | oxlint                       | ^1.57.0 |
| Formatter       | oxfmt                        | ^0.42.0 |

Import alias: `@jh/*` maps to `src/*`.

---

## Project Structure

```

src/
├── app/ # Next.js App Router — layouts, pages, metadata
│ ├── layout.tsx # Root layout (server component, imports server-only)
│ └── page.tsx # Home page (server component)
├── components/
│ ├── atoms/ # Smallest reusable units (Section, SectionTitle, MouseLight)
│ ├── molecules/ # Composed atoms (ExperienceCard, HeaderNavItem, TechTag…)
│ └── organisms/ # Full sections (Header, AboutWidget, ExperienceWidget)
├── data/
│ └── user.ts # All portfolio content — edit here to update the site
├── flags/
│ └── environment.ts # Runtime/build-time feature flags
├── icons/ # SVG icon system (Icon wrapper + named SVGs)
├── styles/
│ ├── fonts/ # Montserrat font import
│ └── global.css # Tailwind base + custom utilities + CSS variables
└── utility/
└── validation.ts # Pure utility functions

````

Each component lives in its own folder: `src/components/<tier>/<Name>/index.tsx`.

---

## Code Style

### Server vs. Client Components

**Server is the default. Add `'use client'` only when required** (event handlers,
browser APIs, hooks that need the DOM).

```tsx
// ✅ Server component — no directive needed
import 'server-only'; // add this to enforce server-only at the module level

function Section({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement {
  return <section className="flex flex-col gap-4">{children}</section>;
}

export default Section;
````

### Component Signature Rules

- **Named function declarations** for all components — never arrow function components.
- **Explicit return type**: always `React.ReactElement` (or `React.ReactNode` for layouts).
- **Props interface** defined above the function in the same file.
- **Default export** at the bottom.

```tsx
// ✅ Correct
interface TechTagProps {
  label: string;
}

function TechTag({ label }: TechTagProps): React.ReactElement {
  return (
    <span className="rounded-full bg-primary-90 px-3 py-1 text-sm">
      {label}
    </span>
  );
}

export default TechTag;

// ❌ Wrong — arrow function component
const TechTag = ({ label }: TechTagProps): React.ReactElement => (
  <span>{label}</span>
);
```

### TypeScript Rules

- No `any`. Use `unknown` with a type guard, or define a proper interface.
- Use `type` imports: `import type { Foo } from 'bar'`.
- Enable all strict flags — they are already on in `tsconfig.json`.
- Mark unused variables with `_prefix` or remove them entirely.

```tsx
// ✅ Type import
import type { LegacyRef } from 'react';

// ❌ Value import for a type-only usage
import { LegacyRef } from 'react';
```

### Tailwind & className Composition

Use `clsx` for conditional or multi-variant class lists. Never string-concatenate
class names with template literals.

```tsx
import clsx from 'clsx';

// ✅ Correct
<article
  className={clsx(
    'rounded-2xl border p-4 transition-all duration-500',
    isActive && 'glassmorphism-background scale-105 shadow-2xl',
    'lg:hover:glassmorphism-background',
  )}
>

// ❌ Wrong
<article className={`rounded-2xl ${isActive ? 'shadow-2xl' : ''}`}>
```

### Import Order

oxfmt auto-sorts imports in this order:

1. `'use client'` / `'use server'` / `'server-only'` directives
2. React core (`react`, `react/*`)
3. Third-party modules
4. Internal `@jh/*` aliases
5. Relative paths (`../`, `./`)

Run `bun run format` to fix import order automatically.

---

## Git Workflow

1. Branch from `main`. Name branches descriptively: `feat/about-animation`, `fix/nav-scroll`.
2. Commits are **semantic** (enforced by `.github/semantic.yml`):
   - `feat:`, `fix:`, `chore:`, `refactor:`, `docs:`, `style:`, `perf:`
3. Before opening a PR:
   ```bash
   bun run type-check   # zero TypeScript errors
   bun run lint         # zero ESLint errors
   bun run build        # static export must succeed
   ```
4. Fill in the PR template: description, linked issue, test pages.
5. GitHub Actions runs the build and deploys to GitHub Pages on merge to `main`.

---

## Boundaries — Never Touch

| Area                             | Rule                                                                  |
| -------------------------------- | --------------------------------------------------------------------- |
| `bun.lock` / `package-lock.json` | Never edit manually — use `bun add` / `bun remove`                    |
| `src/data/user.ts`               | Portfolio content only — no logic                                     |
| `src/styles/global.css`          | Only add utilities to existing layers; do not reorder `@layer` blocks |
| `.github/workflows/nextjs.yml`   | Do not modify the deployment pipeline                                 |
| `.env*` files                    | None exist; never commit secrets or API keys                          |
| `public/`                        | Static assets only; no generated or build artifacts                   |
| `next.config.ts`                 | `output: 'export'` and `basePath` must stay intact for GitHub Pages   |

---

## Good Output Examples

### New atom component

```tsx
// src/components/atoms/Badge/index.tsx
import 'server-only';

import clsx from 'clsx';

interface BadgeProps {
  className?: string;
  label: string;
  variant?: 'primary' | 'secondary';
}

function Badge({
  className,
  label,
  variant = 'primary',
}: BadgeProps): React.ReactElement {
  return (
    <span
      className={clsx(
        'inline-flex items-center rounded-full px-3 py-1 text-xs font-medium',
        variant === 'primary' && 'bg-primary-90 text-primary-10',
        variant === 'secondary' && 'bg-secondary-90 text-secondary-10',
        className,
      )}
    >
      {label}
    </span>
  );
}

export default Badge;
```

### Updating portfolio data

```ts
// src/data/user.ts — add a new project
export const userData = {
  // ...existing fields...
  projects: [
    {
      description: 'Open-source design system built with React and Tailwind.',
      name: 'Design System',
      stack: ['React', 'TypeScript', 'Tailwind CSS'],
      url: 'https://github.com/Johannsis/design-system',
    },
  ],
};
```

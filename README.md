# Johannes Hoersch - Portfolio

Personal portfolio site for **Johannes Hoersch**, Senior Front-End Developer based in Santo Domingo, DR.

Live site: **[johannsis.github.io/portfolio](https://johannsis.github.io/portfolio)**

## Tech Stack

| Layer                     | Technology                                                                     |
| ------------------------- | ------------------------------------------------------------------------------ |
| Framework                 | [Next.js 16.2.2](https://nextjs.org) (App Router, static export in production) |
| UI                        | [React 19.2.4](https://react.dev)                                              |
| Language                  | [TypeScript 6.0.2](https://www.typescriptlang.org) (strict mode)               |
| Styling                   | [Tailwind CSS v4](https://tailwindcss.com)                                     |
| Linting                   | [oxlint 1.58.0](https://oxc.rs/docs/guide/usage/linter.html)                   |
| Formatting                | [oxfmt 0.43.0](https://oxc.rs/docs/guide/usage/formatter.html)                 |
| Runtime / Package Manager | [Bun 1.3.10](https://bun.sh)                                                   |
| Deployment                | GitHub Actions + GitHub Pages                                                  |

## Requirements

- Node.js `>=24.0.0`
- Bun `^1.3.10`

## Getting Started

```bash
bun install
bun run dev
```

Open `http://localhost:3000`.

## Scripts

| Command                 | Description                                             |
| ----------------------- | ------------------------------------------------------- |
| `bun run dev`           | Start development server (Turbopack)                    |
| `bun run build`         | Build production app (static export in production mode) |
| `bun run start`         | Serve static export from `out/`                         |
| `bun run type-check`    | Run TypeScript checks (`tsc --noEmit`)                  |
| `bun run lint`          | Run oxlint rules                                        |
| `bun run lint:fix`      | Run oxlint with auto-fixes                              |
| `bun run format`        | Format repository with oxfmt                            |
| `bun run bundle:size`   | Enforce JS bundle size budgets                          |
| `bun run lighthouse:ci` | Run Lighthouse CI against built output                  |

## Project Structure

```text
src/
  app/            # App Router routes, layout, metadata, sitemap
  components/
    atoms/        # Low-level primitives
    molecules/    # Composed UI blocks
    organisms/    # Section-level UI
  data/           # Portfolio content and section metadata
  flags/          # Environment helpers
  icons/          # Icon wrapper + SVG icons
  styles/         # Global CSS + font setup
  utility/        # Shared pure utilities
```

## Deployment

On pushes to `main`, GitHub Actions runs lint, type-check, build, bundle size checks, Lighthouse CI, then deploys to GitHub Pages.

Workflow: `.github/workflows/nextjs.yml`

## License

MIT. See `LICENSE`.

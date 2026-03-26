# Johannes Hoersch — Portfolio

Personal portfolio site for **Johannes Hoersch**, Senior Front-End Developer based in Santo Domingo, DR.

Live at → **[johannsis.github.io/portfolio](https://johannsis.github.io/portfolio)**

## Tech Stack

| Layer      | Technology                                                       |
| ---------- | ---------------------------------------------------------------- |
| Framework  | [Next.js 16.2.1](https://nextjs.org) (App Router, static export) |
| Language   | TypeScript 6.0.2                                                 |
| Styling    | [Tailwind CSS v4](https://tailwindcss.com) (^4.2.2)              |
| Runtime    | [Bun](https://bun.sh) (^1.3.10)                                  |
| Linting    | [oxlint](https://oxlint.dev) (^1.57.0)                           |
| Formatting | [oxfmt](https://oxlint.dev) (^0.42.0)                            |
| Deployment | GitHub Actions → GitHub Pages                                    |

## Getting Started

```bash
bun install
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

| Command              | Description                                      |
| -------------------- | ------------------------------------------------ |
| `bun run dev`        | Start development server with Turbopack          |
| `bun run build`      | Create an optimised static export to `./out`     |
| `bun run start`      | Serve the static export from `./out`             |
| `bun run lint`       | Run oxlint                                       |
| `bun run lint:fix`   | Run oxlint and auto-fix issues                   |
| `bun run format`     | Format all files with oxfmt                      |
| `bun run type-check` | Run TypeScript type-check without emitting files |

## Project Structure

```
src/
├── app/              # Next.js App Router (pages, layout, metadata)
├── components/
│   ├── atoms/        # Base UI primitives (MouseLight, icons …)
│   ├── molecules/    # Composed components (ContactLinks, HeaderSections …)
│   └── organisms/   # Page-level sections (Header, AboutWidget, ExperienceSection …)
├── data/             # Static content (user profile, experience …)
├── flags/            # Feature flags
├── icons/            # SVG icon components
├── styles/           # Global CSS
└── utility/          # Helper functions
```

## Deployment

The site is automatically built and deployed to **GitHub Pages** on every push to `main` via the [nextjs.yml](.github/workflows/nextjs.yml) workflow.

## License

This project is licensed under the **MIT License**. See [LICENSE](LICENSE) for details.

## Requirements

- Node.js `>=24.0.0`
- Bun `^1.3.10`

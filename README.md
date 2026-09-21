# VASTech Tech Test

This project is a React + TypeScript application built with Vite for the VASTech technical interview/test.

## Prerequisites

Before you run this project, make sure you have:

- Node.js 18 or later
- pnpm 9.x (recommended via Corepack)

If pnpm is not available, enable it with:

```bash
corepack enable
corepack prepare pnpm@9.15.0 --activate
```

## Install

From the project root, run:

```bash
pnpm install
```

## Run locally

Start the app in development mode:

```bash
pnpm dev
```

Then open the local URL shown in the terminal, usually:

```text
http://localhost:5173
```

If the default port is busy, Vite will automatically choose another available port and print that URL instead.

## Production build

To create a production build:

```bash
pnpm build
```

To preview the production build locally:

```bash
pnpm preview -- --host
```

## Notes

- This app is designed to be reviewed and run locally on a developer machine.
- If needed, use the terminal output from Vite to confirm the correct URL and port.
- For a quick sanity check, the project should build successfully with `pnpm build` before handing off for review.
- If `pnpm import` is not working, the issue is usually a stale Corepack shim rather than a project issue. Re-activating pnpm with Corepack resolves it.

# Contributing

## Setup

Follow the [Getting Started](README.md#getting-started) guide to get a local dev environment running.

## Making Changes

1. Fork the repo and create a branch from `main`
2. Make your changes
3. Run `npm test` to verify nothing is broken
4. Run `npm run lint` to check code style
5. Open a pull request with a clear description of what changed and why

## Commit Style

Use [Conventional Commits](https://www.conventionalcommits.org/):

```
feat: add weekly reflection summary
fix: resolve auth token refresh issue
docs: update supabase setup steps
chore: bump expo to 51.x
```

## Code Style

- TypeScript everywhere — no `any` unless truly unavoidable
- Components go in `components/`, screens in `app/`
- Shared state via Context in `context/`
- Keep hooks in `hooks/`, pure utils in `lib/`

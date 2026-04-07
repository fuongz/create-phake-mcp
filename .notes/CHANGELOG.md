# Changelog

## v0.0.3 - 2026-04-07

### Changed

- Updated dependencies to latest versions
- Version bump to v0.0.3

---

## v0.2.0 - Local Templates & Google Auth

### Breaking Changes

- Removed `--offline` flag (no longer needed since templates are local)

### Features

- **Local templates** - templates are now bundled in the CLI instead of downloading from remote
- **Updated @phake/mcp** - upgraded to `^0.3.0` across all templates
- **New Google auth strategy** - `cloudflare-workers-google` template now uses the simplified `google` auth strategy:
  - Removed `PROVIDER_CLIENT_ID`, `PROVIDER_CLIENT_SECRET`, `PROVIDER_ACCOUNTS_URL` config
  - Added `OAUTH_REDIRECT_URI` (required)
  - Google endpoints are auto-configured by the library

### Templates

- cloudflare-workers - updated to @phake/mcp v0.3.0
- cloudflare-workers-google - uses new google auth strategy
- node-hono - updated to @phake/mcp v0.3.0

---

## v0.1.0 - Initial Release

`create-phake-mcp` is a CLI scaffolding tool for bootstrapping [Phake MCP](https://github.com/fuongz/phake-mcp) projects.

### Features

- **Interactive setup** — prompts for target directory and template when no flags are provided
- **Template selection** — three starter templates:
  - `cloudflare-workers` — Cloudflare Workers + Hono (default)
  - `cloudflare-workers-google` — Cloudflare Workers + Google OAuth
  - `node-hono` — Node.js + Hono
- **Package manager support** — choose between `npm`, `bun`, `yarn`, or `pnpm` via `--pm`
- **Auto dependency install** — pass `--install` to run install immediately after scaffolding
- **Offline mode** — use `--offline` to prefer cached templates
- **Non-interactive mode** — all prompts can be bypassed with CLI flags (`--template`, `--pm`, `--install`, `--offline`)

### Usage

```bash
npx create-phake-mcp my-mcp-app
npx create-phake-mcp my-mcp-app --template cloudflare-workers --pm bun --install
```

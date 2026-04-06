# @phake/mcp

CLI tool for scaffolding [Phake MCP](https://github.com/fuongz/phake-mcp) projects.

## Usage

```bash
npx @phake/mcp [target] [options]
```

### Interactive

```bash
npx @phake/mcp
```

Prompts you for the target directory and template.

### Non-interactive

```bash
npx @phake/mcp my-mcp-app --template cloudflare-workers --pm bun --install
```

## Options

| Flag | Description | Default |
|------|-------------|---------|
| `[target]` | Target directory | prompted |
| `-t, --template <name>` | Template to use | prompted |
| `-p, --pm <pm>` | Package manager (`npm`, `bun`, `yarn`, `pnpm`) | `npm` |
| `-i, --install` | Install dependencies after scaffolding | `false` |
| `-o, --offline` | Prefer cached templates (offline mode) | `false` |

## Templates

| Name | Description |
|------|-------------|
| `cloudflare-workers` | Cloudflare Workers + Hono (default) |
| `cloudflare-workers-google` | Cloudflare Workers + Google OAuth |
| `node-hono` | Node.js + Hono |

## Examples

```bash
# Scaffold into a new directory with prompts
npx @phake/mcp

# Scaffold into ./my-app using the default template
npx @phake/mcp my-app

# Use a specific template and install deps with bun
npx @phake/mcp my-app --template node-hono --pm bun --install

# Scaffold into current directory
npx @phake/mcp .
```

## License

MIT

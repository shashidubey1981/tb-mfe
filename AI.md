# AI.md – tb-mfe

Project context and conventions for AI assistants and developers.

## Project overview

- **Name**: tb-mfe (package: tb-discovery)
- **Stack**: Next.js 16, React 19, TypeScript, next-intl, Contentstack (via API), SASS
- **Role**: Catalog/category MFE with i18n, category/product/shop/static pages, and CMS-driven content

## Key paths

| Purpose | Location |
|--------|----------|
| Locale-aware app | `app/[locale]/` |
| Category pages | `app/[locale]/c/[parentCategory]/` and `[...subCategory]/` |
| Product pages | `app/[locale]/p/[...productId]/` |
| Search | `app/[locale]/search/[...searchterm]/` |
| Shop / gift cards | `app/[locale]/shop/` |
| Static / SLC | `app/[locale]/slc/` |
| Shared UI components | `app/[locale]/components/` |
| API routes | `app/api/` |
| Contentstack fetch helpers | `lib/contentstack/` |
| Types | `types/` (e.g. `types/components.ts`, `types/pages/`) |
| i18n | `i18n/`, `messages/` (en.json, es.json) |
| E2E tests | `tests/e2e/` (Playwright) |

## Architecture

- **Routing**: Next.js App Router; locale segment is `[locale]` (e.g. `/en`, `/es`).
- **Content**: Page and component data come from Contentstack via `NEXT_PUBLIC_API_BASE_URL` / `API_BASE_URL` (default `http://localhost:8080`). Helpers live in `lib/contentstack/`.
- **Components**: Page building blocks (Hero, Teaser, CardCollection, PGPCardCollection, GuidedFilters, FacetOptions, QuickLinks, Text, etc.) are mapped in `app/[locale]/components/RenderComponents/index.tsx` from CMS/page blocks. Component types are in `types/components.ts`.
- **Design system**: Uses `@MensWearhouse/kairos-fabric`; styling with `globals.module.scss` and component-level SCSS.
- **Server data**: `context/ServerDataProvider.tsx` provides server-fetched data to the tree.

## Conventions

- **Components**: Functional components; colocate with an `index.ts` that re-exports. Use `next/dynamic` for heavy or below-fold components (see `RenderComponents`).
- **Types**: Prefer types in `types/`; use existing component/page types from `types/components.ts` and `types/pages/` before adding new ones.
- **Imports**: Use `@/` for app-root imports (e.g. `@/lib/debug`, `@/types`). ESLint + Prettier (with prettier-plugin-organize-imports) run on commit.
- **Logging**: Use `@/lib/debug` for structured logging; Winston/Pino for server logs (see README).
- **Errors**: Use `error.tsx` at segment level; `global-error.tsx` at root. Prefer logging and rethrow or show user-friendly messages.

## Adding features

1. **New page type**: Add route under `app/[locale]/` (e.g. new segment or dynamic segment). Reuse `layout.tsx` and existing patterns from `c/`, `p/`, or `slc/`.
2. **New CMS-driven component**: Add type in `types/components.ts` (and `types/pages/` if it's a page block). Implement component under `app/[locale]/components/<Name>/`. Register in `RenderComponents/index.tsx` and map from the appropriate page block.
3. **New API**: Add route under `app/api/`; keep handlers thin and call `lib/` or Contentstack helpers as needed.
4. **New locale**: Add JSON under `messages/` and extend i18n config in `i18n/`.

## Commands

- `npm run dev` – dev server (e.g. http://localhost:3000/en)
- `npm run build` / `npm run start` – production
- `npm run lint` / `npm run lint:fix` – ESLint
- `npm run format` / `npm run format:check` – Prettier
- `npm run type-check` – TypeScript
- `npm test` – Playwright E2E; `npm run test:ui` for UI mode

## Environment

- Copy `.env.example` to `.env.local`. `GITHUB_TOKEN` is used where needed; `NEXT_PUBLIC_API_BASE_URL` / `API_BASE_URL` for Contentstack API (default `http://localhost:8080`).

## Testing

- E2E: Playwright specs in `tests/e2e/` (e.g. homepage, navigation, 404). Add or extend specs there when changing flows or critical pages.

When editing this codebase, follow the structure and conventions above, reuse existing types and components where possible, and keep new code consistent with the patterns in `RenderComponents`, `lib/contentstack`, and the existing `app/[locale]/` routes.

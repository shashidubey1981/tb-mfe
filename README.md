# tb-discovery

Next.js 16 catalog application with internationalization (React 19, TypeScript, next-intl, Contentstack).

For project context and conventions used by AI assistants and developers, see **[AI.md](./AI.md)**.

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000/en](http://localhost:3000/en) with your browser.

## Git Hooks (Husky + lint-staged)

This project uses **Husky** and **lint-staged** to automatically format and lint code before every commit.

### What Happens on Commit:

When you run `git commit`, the following steps automatically execute **only on staged files**:

#### For JavaScript/TypeScript files (`*.js`, `*.jsx`, `*.ts`, `*.tsx`):

1. **ESLint Auto-Fix** (`eslint --fix`)
   - Fixes import order
   - Removes unused variables
   - Fixes formatting issues (spacing, semicolons, etc.)
   - Enforces code style rules from Next.js config
2. **Prettier Format** (`prettier --write`)
   - Ensures consistent code formatting
   - Fixes indentation, line breaks, quotes
   - Organizes imports (via prettier-plugin-organize-imports)

#### For Other Files (`*.json`, `*.md`, `*.yml`, `*.yaml`, `*.scss`, `*.css`):

1. **Prettier Format** (`prettier --write`)
   - Formats JSON with consistent spacing
   - Formats Markdown with proper line breaks
   - Formats SCSS/CSS with consistent style

### Commit Flow:

```
1. You stage files: git add .
2. You commit: git commit -m "message"
3. Husky intercepts the commit
4. lint-staged runs on staged files only
5. ESLint auto-fixes issues
6. Prettier formats all files
7. Fixed files are automatically re-staged
8. ✅ Commit succeeds (if no unfixable errors)
   OR
   ❌ Commit blocked (if there are unfixable lint errors)
```

### What Gets Auto-Fixed:

✅ **Will be fixed automatically:**

- Missing semicolons
- Incorrect spacing/indentation
- Wrong quotes (single vs double)
- Import organization
- Unused imports (removed)
- Trailing whitespace
- Line endings (CRLF → LF)
- JSON formatting

❌ **Will block commit (must fix manually):**

- Type errors
- Syntax errors
- Undefined variables
- Logic errors flagged by ESLint

### Bypass Hook (Not Recommended):

```bash
# Skip pre-commit hook (only for emergencies)
git commit --no-verify -m "message"
```

### Manual Commands

```bash
# Lint all files
npm run lint

# Lint and auto-fix
npm run lint:fix

# Format all files
npm run format

# Check formatting without changes
npm run format:check

# Type check
npm run type-check
```

## Testing

This project uses Playwright for end-to-end testing.

### Running Tests

```bash
# Run all tests
npm test

# Run tests in UI mode (interactive)
npm run test:ui

# Run tests in headed mode (see browser)
npm run test:headed

# Debug tests
npm run test:debug
```

### Test Structure

Tests are located in `tests/e2e/` directory:

- `homepage.spec.ts` - Homepage tests
- `navigation.spec.ts` - Navigation tests
- `404.spec.ts` - Error page tests

### Browsers

Tests run on:

- Chromium (Desktop)
- Firefox (Desktop)
- WebKit (Desktop)
- Mobile Chrome (Pixel 5)
- Mobile Safari (iPhone 12)

## Project Structure

```
app/
├── [locale]/          # Internationalized routes
│   ├── c/            # Category pages
│   ├── p/            # Product pages
│   ├── shop/         # Shop/gift cards pages
│   └── slc/          # Static content pages
├── api/              # API routes
└── components/       # Shared components
```

## Error Handling & Debugging

The project includes comprehensive error handling and debugging tools:

### Error Pages

- **`app/global-error.tsx`** - Catches critical root-level errors
- **`app/[locale]/error.tsx`** - General page errors
- **`app/[locale]/c/error.tsx`** - Category-specific errors
- **`app/[locale]/p/error.tsx`** - Product-specific errors

### Error Details in Development

All error pages show detailed information in development mode:

- Full error message
- Stack trace
- Error digest/ID
- Expandable error details

In production, only minimal error information is shown to users.

### Debug Utility

Use the debug utility for consistent logging:

```typescript
import { debug } from '@/lib/debug';

// General logging
debug.log('UserAction', { action: 'click', button: 'submit' });

// Error logging
debug.error('APIError', error);

// API logging
debug.api.request(url, options);
debug.api.response(url, status, data);

// Component lifecycle
debug.component.mount('MyComponent', props);
debug.component.render('MyComponent', 'props changed');
```

### Where to Find Errors

**Client-Side Errors:**

- Browser console (F12)
- Next.js error overlay (dev mode)

**Server-Side Errors:**

- Terminal where dev server runs
- `logs/error.log` (Winston)
- `logs/combined.log` (Winston)

### Logging

The project uses both Winston and Pino for server-side logging:

- **Winston**: File-based logging (`logs/` folder)
- **Pino**: Console logging with pretty formatting in dev

## Environment Variables

Copy `.env.example` to `.env.local` and configure:

```bash
GITHUB_TOKEN=your_token_here
NEXT_PUBLIC_API_BASE_URL=http://localhost:8080   # Contentstack API (optional; defaults to 8080)
```

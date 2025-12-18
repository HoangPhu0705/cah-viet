# Copilot Instructions for XAMCARD

## Project Overview
XAMCARD is a Next.js 15 card game application (inspired by Cards Against Humanity) built with modern React patterns, TurboFast compilation, and a clean component architecture.

## Architecture & Directory Structure

### App Router Structure
- **`app/page.tsx`**: Root redirects to `/lobby` - the app's entry point
- **`app/lobby/page.tsx`**: Main lobby with animated card interactions for room management
- **`app/api/`**: Currently empty - placeholder for future API routes
- **Game routes**: `/game/[roomCode]` pattern for dynamic room routing

### Component Organization
```
components/
├── features/     # Domain-specific components (Card.tsx)
├── ui/          # Reusable UI primitives with types/ subdirectory
├── layouts/     # Layout components (currently empty)
└── magicui/     # Reserved for Magic UI components
```

### Infrastructure Folders
- **`realtime/`**, **`stores/`**, **`queries/`**: Architecture placeholders for WebSocket, state management, and data fetching
- **`hooks/`**, **`utils/`**: Standard Next.js utilities

## Development Conventions

### Component Patterns
- **Feature components**: Use `CardProps` interface from `@/components/ui/types/card`
- **UI components**: Follow shadcn/ui patterns with `cn()` utility for className merging
- **Animations**: Tailwind-based hover states and transforms (see lobby card interactions)

### Styling Approach
- **Tailwind CSS v4** with `tw-animate-css` for enhanced animations
- **Brand colors**: Black/white contrast theme (black cards, white cards)
- **Typography**: Geist Sans/Mono fonts via `next/font/google`
- **Responsive design**: Mobile-first with `md:` breakpoints

### State Management
- **Client components**: Use `"use client"` directive for interactive features
- **Router navigation**: `useRouter()` from `next/navigation` for programmatic routing
- **Room codes**: Generate 6-character uppercase alphanumeric codes

## Development Workflow

### Commands (Use Turbopack)
```bash
npm run dev        # Development with --turbopack flag
npm run build      # Production build with --turbopack
npm run lint       # ESLint with Next.js TypeScript config
```

### Key Dependencies
- **Animation**: `motion` (v12), `cobe` for 3D effects
- **UI**: `lucide-react` icons, `class-variance-authority` for component variants
- **Utils**: `clsx` + `tailwind-merge` via `cn()` helper in `@/lib/utils`

## Code Style & Patterns

### TypeScript Configuration
- **Path aliases**: `@/*` maps to project root
- **Strict mode**: Enabled with ES2017 target
- **Import patterns**: Use `@/` prefix for all internal imports

### Component Structure Example
```tsx
// From app/lobby/page.tsx - shows the project's interaction patterns
const [hoveredCard, setHoveredCard] = useState<string | null>(null);

// Dynamic className with complex conditions
className={`transition-all duration-300 ${
  hoveredCard === "join" 
    ? "transform -translate-x-24 -translate-y-2 rotate-[-16deg] scale-105 z-30"
    : "transform -translate-x-20 -translate-y-1 rotate-[-10deg] z-20"
}`}
```

### Room Management Pattern
- **Create room**: Generate random 6-char uppercase code, navigate to `/game/[code]`
- **Join room**: Prompt for room code, validate, then navigate
- **Navigation**: Use `router.push()` for client-side routing

## Game Logic Architecture (Planned)
Based on folder structure, the app anticipates:
- **Real-time multiplayer**: `realtime/` folder suggests WebSocket integration
- **State management**: `stores/` for game state (likely Zustand or similar)
- **API integration**: `queries/` for server communication patterns

## UI Component Guidelines
- **Card components**: Follow the black/white theme established in lobby
- **Animations**: Use `transition-all duration-300` pattern with transform combinations
- **Interactive states**: Implement hover effects with state-driven className logic
- **Responsive design**: Design for mobile-first, enhance for desktop

## Development Notes
- **Hot reload**: Turbopack enables fast refresh in development
- **Type safety**: All components should use proper TypeScript interfaces
- **Accessibility**: Consider keyboard navigation for card interactions
- **Performance**: Leverage Next.js 15 optimizations and React 19 features
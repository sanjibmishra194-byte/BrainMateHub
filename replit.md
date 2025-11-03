# BrainMate.net - Student Tools Platform

## Overview

BrainMate is a comprehensive web application providing 50+ free calculators and productivity tools designed primarily for students. The platform offers tools across multiple categories including finance (EMI, savings, tax calculators), health & fitness (BMI, calorie tracking), and academic utilities (GPA calculator, word counter, attendance tracker). The application emphasizes clarity, speed, and accessibility with a focus on delivering instant, trustworthy results through a clean, modern interface.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System:**
- React 18+ with TypeScript for type safety and modern development
- Vite as the build tool and development server for fast hot module replacement
- Wouter for lightweight client-side routing (replacing React Router)
- Single-page application (SPA) architecture with client-side navigation

**UI Component System:**
- shadcn/ui component library based on Radix UI primitives for accessible, unstyled components
- Tailwind CSS for utility-first styling with custom design system
- Custom theme system with light/dark mode support via ThemeProvider context
- Design follows hybrid Material Design principles optimized for productivity tools

**State Management:**
- TanStack Query (React Query) v5 for server state management and data fetching
- React Context API for global UI state (theme preferences)
- Component-local state with React hooks for form and calculator logic

**Styling Philosophy:**
- Tailwind-first approach with custom CSS variables for theming
- Design tokens defined in `index.css` for consistent colors, spacing, and elevations
- Typography system using Inter (headings/UI), Space Groto (body text), and JetBrains Mono (numerical displays)
- Responsive design with mobile-first breakpoints
- Custom elevation system using `hover-elevate` and `active-elevate` utilities for tactile feedback

### Backend Architecture

**Server Framework:**
- Express.js running on Node.js with TypeScript
- ESM (ES Modules) rather than CommonJS
- HTTP server for API endpoints (minimal backend, primarily static serving)
- Custom Vite middleware integration for development HMR

**Storage Layer:**
- In-memory storage implementation (`MemStorage`) as default
- Interface-based storage abstraction (`IStorage`) allows swapping implementations
- Prepared for database integration via Drizzle ORM (PostgreSQL-ready)
- User schema defined with username/password fields

**API Design:**
- RESTful API endpoints prefixed with `/api`
- JSON request/response format
- Express middleware for request logging and error handling
- Session management prepared (connect-pg-simple dependency present)

### Data Storage Solutions

**Database ORM:**
- Drizzle ORM configured for PostgreSQL via `@neondatabase/serverless`
- Schema-first approach with TypeScript types generated from schema
- Zod integration (drizzle-zod) for runtime validation
- Migration system configured in `drizzle.config.ts`

**Current State:**
- Application uses in-memory storage for user data
- Database schema defined but not actively used
- Prepared for migration to persistent PostgreSQL storage (Neon serverless)

**Schema Structure:**
- Users table with id (UUID), username (unique), and password fields
- Extensible design allows adding tool-specific data models

### Authentication and Authorization

**Current Implementation:**
- Basic user schema with username/password fields defined
- No active authentication system implemented
- Session store dependency (connect-pg-simple) suggests planned session-based auth

**Planned Approach:**
- Server-side session management with PostgreSQL-backed session store
- Password hashing (implementation pending)
- Cookie-based authentication with httpOnly cookies

### External Dependencies

**UI Component Libraries:**
- Radix UI primitives (20+ component packages) for accessible headless components
- Lucide React for icon system
- embla-carousel-react for carousels
- cmdk for command palette/search interfaces
- vaul for drawer components

**Utility Libraries:**
- clsx and tailwind-merge for conditional class name composition
- class-variance-authority (CVA) for component variant management
- date-fns for date manipulation
- react-hook-form with Zod resolvers for form handling

**Development Tools:**
- Replit-specific plugins (vite-plugin-runtime-error-modal, cartographer, dev-banner)
- ESBuild for server bundling in production
- PostCSS with Autoprefixer for CSS processing

**Database & Backend:**
- @neondatabase/serverless for serverless PostgreSQL connections
- connect-pg-simple for PostgreSQL session storage
- nanoid for generating unique identifiers

**Asset Management:**
- Generated images stored in `attached_assets/generated_images/`
- Google Fonts integration (Inter, Space Groto, Fira Code, Geist Mono, Architects Daughter, DM Sans)

### Build and Deployment

**Development:**
- `npm run dev` starts Vite dev server with Express backend
- Hot module replacement for instant feedback
- TypeScript type checking via `npm run check`

**Production:**
- Frontend built with Vite to `dist/public`
- Backend bundled with ESBuild to `dist/index.js`
- Platform-agnostic Node.js deployment target
- Environment variables required: `DATABASE_URL` (when database is active)

**Database Operations:**
- `npm run db:push` applies schema changes to PostgreSQL via Drizzle Kit
- Migration files stored in `./migrations`
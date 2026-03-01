# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `yarn dev` - Start development server (uses Next.js dev mode)
- `yarn build` - Build for production
- `yarn start` - Start production server
- `yarn lint` - Run ESLint
- `yarn types` - Run TypeScript type checking without emitting files

## Project Architecture

This is a Next.js 13+ frontend application for the Subset of Theoretical Practice (STP) academic group. The project uses the new App Router architecture.

### Key Structure
- `app/` - Next.js App Router pages and layouts
  - Uses file-based routing with `page.tsx` files
  - API routes in `app/api/` directories
  - Includes: blog, links, meetings, contact, about pages
- `lib/` - Shared utilities and components
  - `api.ts` - Strapi CMS integration functions
  - `types.ts` - TypeScript type definitions for data models
  - `components/` - Reusable React components
  - `markdown.ts` - Markdown processing utilities
- `styles/` - Global CSS styles

### Data Layer
- Backend: Strapi CMS integration via REST API
- Data models: Meeting, Article, Bibliography, ExternalLink, Tag
- Uses Next.js ISR (Incremental Static Regeneration) with 1-hour revalidation
- Bearer token authentication for Strapi API access

### Key Technologies
- Next.js 13+ with App Router
- TypeScript
- Emotion for styling (CSS-in-JS)
- Markdown rendering with markdown-it and KaTeX for math
- Zulip integration for notifications
- React Window for virtualization

### Environment Variables Required
- `PUBLIC_STRAPI_API_URL` - Strapi backend URL
- `PUBLIC_STRAPI_API_TOKEN` - Bearer token for API access

### Content Management
- Articles/blog posts fetched from Strapi CMS
- Meeting recordings and materials management
- Bibliography and external links curation
- RSS/Atom feed generation for blog content
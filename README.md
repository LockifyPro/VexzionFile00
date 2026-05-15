# Vexzion

Production-ready Next.js SaaS scaffold for 100+ file tools.

## Setup
1. Install dependencies: `npm install`
2. Copy `.env.example` to `.env.local`
3. Start dev server: `npm run dev`
4. Apply DB schema from `db/schema.sql` to Supabase.

## Features
- 100+ tools in directory with SEO-friendly dynamic routes `/tools/[slug]`
- Fully implemented processing endpoints (initial scope): JPG/PNG/WebP/image compressor/resizer, PDF merge/split/compress/to-text, CSV to JSON, JSON formatter, Base64 encode/decode
- Free and Lifetime Pro ($19.99 one-time) structure
- Supabase + Stripe-ready schema
- Admin-ready data model for tool/category/user control
- Cloudflare Pages compatible (Next.js build output)

## Plans
- Free: ~50 tools, daily limits, lower upload sizes, reduced history
- Pro lifetime: unlock all tools, unlimited conversions, higher limits, batch processing

Unimplemented tools are clearly marked **Coming Soon** while complete UI structure is available.

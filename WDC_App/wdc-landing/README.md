# WDC — WebDevConstruct Landing Page

> A Next.js landing page for WebDevConstruct (WDC), a technology consultancy that builds custom business applications for enterprises and growing companies.

---

## Design System & Theme

### Brand Identity
The visual language is derived directly from WDC's countdown campaign assets:  a **teal-mint / deep navy** palette, **spaced-caps typography**, and a **halftone dot-grid** texture used as a recurring background motif. Every design decision is intentional and traceable to the brand.

### Colour Palette

| Token | Hex | Role |
|---|---|---|
| `--navy` | `#1B3A52` | Primary backgrounds, headings |
| `--slate` | `#2D5F74` | Gradient midpoint, hover states |
| `--steel` | `#4A7C8E` | Accents, section labels, dividers |
| `--mint` | `#C8E4E8` | Brand highlight, CTAs, logo mark |
| `--light-mint` | `#E8F5F7` | Alternating section backgrounds |
| `--offwhite` | `#F7FAFB` | Default page background |
| `--charcoal` | `#111827` | Body text on light backgrounds |

### Typography
- **Font family:** Inter (Google Fonts) — clean, geometric sans-serif
- **Display / Headings:** Weight 800–900, `letter-spacing: 0.06–0.18em`, uppercase — mirrors the spaced wordmark from the brand collateral
- **Body copy:** Weight 400, `line-height: 1.75–1.8` — comfortable reading rhythm
- **Labels / Eyebrows:** Weight 600–700, `letter-spacing: 0.25–0.3em`, 0.68–0.72rem — creates hierarchy without size change

### Signature Design Element
A **halftone dot-grid** (`radial-gradient` CSS pattern at 28px intervals) appears on all dark-background sections — a direct reference to the halftone texture on the "3" and "1" in WDC's countdown graphics. It gives the site its unique, print-inspired atmosphere.

---

## Project Structure

```
wdc-landing/
├── app/
│   ├── components/
│   │   ├── Navbar.tsx        # Fixed, scroll-reactive navigation
│   │   ├── Hero.tsx          # Full-viewport hero with animated stats
│   │   ├── Services.tsx      # Four service cards in a grid
│   │   ├── Approach.tsx      # Four-step process on dark background
│   │   ├── Industries.tsx    # Sector list + copyblock, two-column
│   │   ├── Insights.tsx      # Three editorial cards
│   │   ├── Contact.tsx       # Contact form + contact details
│   │   └── Footer.tsx        # Slim footer with links
│   ├── globals.css           # CSS custom properties (brand tokens) + animations
│   ├── layout.tsx            # Root layout, metadata, font loading
│   └── page.tsx              # Page assembly
├── public/                   # Static assets
├── README.md
└── package.json
```

---

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Install & Run

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

---

## Deployment

This project is ready to deploy on **Vercel** (recommended for Next.js):

```bash
npm install -g vercel
vercel
```

Or connect the GitHub repository to Vercel for automatic deployments on every push.

---

## Customisation Guide

### Updating Content
All copy is stored inline in each component. To update:
- **Services** → edit the `services` array in `Services.tsx`
- **Process steps** → edit the `steps` array in `Approach.tsx`
- **Industry list** → edit the `industries` array in `Industries.tsx`
- **Insight articles** → edit the `insights` array in `Insights.tsx`
- **Contact details** → update the info block in `Contact.tsx`

### Connecting the Contact Form
The form in `Contact.tsx` fires a local `handleSubmit`. To wire it to a backend:
1. Create `app/api/contact/route.ts` with a POST handler
2. Replace the `setSubmitted(true)` line with a `fetch` call to `/api/contact`

Popular options: Resend (email), Formspree, or your own backend.

### Changing Colours
Update the CSS custom properties in `globals.css` under `:root`. All components reference these tokens — one change updates the whole site.

---

## Tech Stack

| Layer | Choice | Reason |
|---|---|---|
| Framework | Next.js 14 (App Router) | Performance, routing, SSR |
| Language | TypeScript | Type safety, maintainability |
| Styling | CSS custom properties + inline styles | No build step for CSS, direct token usage |
| Fonts | Google Fonts — Inter | Clean, legible, brand-appropriate |
| Deployment | Vercel (recommended) | Native Next.js support |

---

## Brand Usage Notes
- Always pair **WDC** (abbreviated mark) with **WebDevConstruct** on first appearance
- The tagline *"your tech consultant..."* may be used in italic styling per the brand collateral
- The mint (`#C8E4E8`) is the only accent colour — do not introduce additional accent colours without brand review
- Maintain the spaced-caps treatment on all display headings

---

*WebDevConstruct — Built for Real Results.*

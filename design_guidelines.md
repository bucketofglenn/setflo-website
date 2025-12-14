# Setflo Design Guidelines

## Design Approach
**Hybrid Reference-Based**: Drawing from Apple's restraint + Linear's typography + Stripe's confidence. The aesthetic is "quiet rebellion"—minimal but never boring, calm but never lifeless.

## Core Design Principles
1. **Generous breathing room** over dense layouts
2. **Bold statements** with typographic confidence
3. **Focused intention** - every element earns its place
4. **Subtle motion** that enhances, never distracts

---

## Typography System

**Font Stack**: Single typeface family via Google Fonts
- **Primary**: Inter or Manrope (clean, modern sans-serif)
- Weights: 400 (regular), 600 (semibold), 700 (bold)

**Hierarchy**:
- **Hero H1**: text-5xl md:text-7xl, font-bold, tracking-tight, leading-none
- **Section Headings**: text-3xl md:text-5xl, font-bold, tracking-tight
- **Subheadings**: text-xl md:text-2xl, font-semibold
- **Body Copy**: text-base md:text-lg, font-normal, leading-relaxed (max-w-2xl for readability)
- **Small Text**: text-sm, footer/metadata elements

---

## Layout & Spacing System

**Tailwind Units**: Use 4, 8, 12, 16, 20, 24, 32 for consistent rhythm (p-4, py-8, mb-12, etc.)

**Container Strategy**:
- Full-width sections with inner max-w-7xl mx-auto px-6
- Text-focused sections: max-w-3xl for optimal reading
- Multi-column grids: max-w-6xl

**Section Padding**:
- Mobile: py-12 to py-16
- Desktop: py-20 to py-32
- Hero: min-h-[85vh] with centered content

---

## Component Library

### Header
- Fixed/sticky top navigation with subtle backdrop blur
- Logo (text-based "Setflo" or simple mark) on left
- Horizontal nav links (Blog, Support, Privacy)
- Primary CTA button on right: "Download on iOS"
- Mobile: Hamburger menu with slide-in overlay

### Hero Section
- **Layout**: Two-column split on desktop (60/40 text to visual)
- **Left**: H1 + Subhead + 2-3 line description + dual CTAs (primary "Download" + ghost "Get updates")
- **Right**: Phone mockup container with rounded device frame, elevated with soft shadow
- **Background**: Clean white/neutral with subtle gradient overlay (top to bottom, very subtle)
- Social proof bar below hero: Small logos or text badges ("Built for musicians, martial artists, writers...")

### Feature Cards (4-column grid on desktop)
- Grid: grid-cols-1 md:grid-cols-2 lg:grid-cols-4
- Each card: Light border, rounded-xl, p-6, hover:shadow-lg transition
- Icon placeholder at top (48x48 circle or square)
- Card title: font-semibold, text-lg
- Description: text-sm, text-gray-600, 2-3 lines

### Problem/Solution Section
- Alternating left-right layout for visual variety
- Quote-style callouts with large quotation marks or border-left accent
- Use cases: Card grid with photography/illustration placeholders showing each use case

### FAQ Accordion
- Stacked cards with question as button, answer revealed below
- Chevron icon rotation on expand
- Border between items, rounded container

### Email Capture
- Centered section with max-w-md
- Single input field + submit button inline (flex layout)
- Honeypot field: absolute positioning, opacity-0, pointer-events-none
- Success toast: Fixed bottom-right, slide-in animation, green accent

### Footer
- Three-column on desktop: Logo/tagline | Links | Social
- Mobile: Stacked vertical
- Background: Very light gray (bg-gray-50) to separate from body
- Small text, ample padding (py-16)

---

## Accent Color & Visual Treatment
**Accent**: Electric blue (#0066FF) or Sharp lime (#B4FF39) - choose one
- Primary button background
- Link hover states
- Active states
- Milestone/celebration UI elements

**Neutral Palette**:
- Background: White (#FFFFFF)
- Text primary: Near-black (#0A0A0A)
- Text secondary: Medium gray (#6B7280)
- Borders: Light gray (#E5E7EB)

---

## Images & Visual Assets

### Hero Image
**Large phone mockup** showing app interface (placeholder)
- Use shadowed device frame or floating screenshot
- Position: Right side on desktop, centered below text on mobile
- Aspect ratio: Portrait smartphone (9:19.5)

### Additional Images
- Use case cards: Square aspect ratio, 1:1, showing context (musician with instrument, writer at desk, etc.)
- Blog post headers: Wide 16:9 hero images
- Press kit: Screenshot grid (3 columns), each image rounded with subtle shadow

**Image Treatment**: All images have rounded corners (rounded-xl to rounded-2xl), subtle shadows for depth

---

## Animation Guidelines
**Minimal & Purposeful**:
- Page load: Fade-in hero content (opacity + translateY)
- Scroll reveals: Intersection Observer for sections (fade-in only, no slide)
- Hover states: Scale 1.02 on cards, color transitions on buttons
- Accordion expand: Height transition with duration-300
- Toast: Slide-in from bottom-right

**Performance**: Use CSS transforms only (no layout shifts), duration-200 to duration-300

---

## Responsive Breakpoints
- Mobile: < 768px (single column, stacked layout)
- Tablet: 768px - 1024px (2-column grids)
- Desktop: > 1024px (multi-column, side-by-side layouts)

---

## Page-Specific Layouts

### Support Page
- Two-column contact cards at top
- Collapsible troubleshooting sections (FAQ-style)
- Clean, scannable hierarchy

### Blog Index
- Masonry or card grid (3 columns desktop, 1 mobile)
- Large featured post at top, smaller cards below
- Clear publish dates and read time

### Press Page
- Single column with downloadable asset cards
- Screenshot gallery grid (3 columns)
- Feature bullets in two-column list
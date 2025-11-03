# BrainMate.net Design Guidelines

## Design Approach

**Hybrid System Approach** combining Material Design principles with modern web aesthetics, optimized for productivity tools and student-focused interfaces. The design balances functional clarity with visual appeal to create trust and engagement.

**Core Principles:**
- Clarity over cleverness: Every element serves a clear purpose
- Scannable hierarchy: Users should instantly understand tool categories and navigation
- Frictionless interactions: Minimal steps from landing to using any tool
- Professional credibility: Build trust for financial/health calculations

---

## Typography System

**Font Families:**
- Primary: Inter (headings, UI elements, buttons)
- Secondary: Space Groto (body text, descriptions, paragraphs)
- Monospace: JetBrains Mono (calculator outputs, numerical displays)

**Type Scale:**
- Hero Headline: text-5xl md:text-6xl lg:text-7xl font-bold
- Section Headers: text-3xl md:text-4xl font-bold
- Tool Card Titles: text-xl font-semibold
- Body Text: text-base md:text-lg
- Calculator Labels: text-sm font-medium
- Results Display: text-2xl md:text-3xl font-bold (monospace)
- Helper Text: text-sm
- Footer Links: text-sm

**Line Heights:**
- Headings: leading-tight (1.25)
- Body: leading-relaxed (1.75)
- Calculator Inputs: leading-normal (1.5)

---

## Layout System

**Spacing Primitives:**
Use Tailwind units of **2, 4, 6, 8, 12, 16, 20, 24** for consistent rhythm.

**Container Strategy:**
- Full-width sections: w-full with inner max-w-7xl mx-auto px-4 md:px-6 lg:px-8
- Tool pages: max-w-6xl mx-auto
- Calculator interfaces: max-w-2xl mx-auto
- Blog content: max-w-4xl mx-auto

**Vertical Rhythm:**
- Section padding: py-16 md:py-20 lg:py-24
- Card padding: p-6 md:p-8
- Input groups: space-y-4
- Tool grid gaps: gap-6 md:gap-8

**Grid Systems:**
- Featured Tools: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- All Tools Categories: grid-cols-2 md:grid-cols-3 lg:grid-cols-4
- Blog Articles: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- Calculator Multi-Input: grid-cols-1 md:grid-cols-2

---

## Component Library

### Navigation
- **Header:** Sticky top navigation, backdrop-blur effect when scrolling
- Logo (left), horizontal menu (center), theme toggle + CTA button (right)
- Mobile: Hamburger menu with slide-in drawer
- Height: h-16 md:h-20

### Hero Section
- **Layout:** 60vh to 80vh minimum, centered content
- Large headline with gradient text treatment
- Subheadline with max-w-2xl
- Dual CTA buttons (primary + secondary) with gap-4
- **Background:** Large hero image showing students studying/working with laptops, bright and energetic atmosphere, overlaid with subtle gradient
- Image treatment: Slight blur or dimmed overlay to ensure text readability
- CTAs with backdrop-blur-sm bg-white/10 treatment for glass-morphism effect

### Tool Cards (Featured & Grid)
- Rounded corners: rounded-xl md:rounded-2xl
- Border: border with subtle treatment
- Padding: p-6 md:p-8
- Hover: Subtle lift effect (transform scale)
- Icon: Large (w-12 h-12 md:w-16 h-16), positioned top-left or centered
- Title: text-xl font-semibold
- Description: text-sm md:text-base, 2-3 lines max
- CTA Button: "Try Now" or "Calculate" - full width on mobile, inline on desktop

### Calculator Interface Components
- **Input Fields:**
  - Rounded: rounded-lg
  - Height: h-12
  - Border: border-2 with focus ring
  - Padding: px-4
  - Labels: Above input, text-sm font-medium, mb-2
  
- **Result Display:**
  - Prominent card: p-6 md:p-8, rounded-xl
  - Large monospace numbers
  - Secondary info in smaller text below
  - Optional: Icon or emoji before result

- **Action Buttons:**
  - Primary: Solid fill, rounded-lg, px-6 py-3, font-semibold
  - Secondary: Border style, same sizing
  - Calculate button: Always prominent, often full-width on mobile

### Category Sections (All Tools)
- Section per category (Finance, Health, Study, etc.)
- Category header with icon, text-2xl font-bold, mb-8
- Grid of tool cards, 2-4 columns responsive
- Each card: Icon, title, 1-line description, link/button

### Blog Cards
- Featured image: aspect-video, rounded-t-xl
- Content area: p-6
- Title: text-xl font-semibold, line-clamp-2
- Excerpt: text-sm, line-clamp-3
- Meta: Author/date/category with small text
- Read More link

### Footer
- **Multi-column layout:** 4 columns on desktop, stack on mobile
  - Column 1: Logo + tagline
  - Column 2: Quick Links (Tools, Blog, Resources)
  - Column 3: Resources (Guides, Contact, Support)
  - Column 4: Social + Newsletter signup
- Padding: pt-16 pb-8
- Bottom bar: Copyright, privacy links (py-6, border-t)

### Forms (Contact, Newsletter)
- Input styling consistent with calculator inputs
- Labels: text-sm font-medium, mb-2
- Submit buttons: Primary style, px-6 py-3
- Validation: Inline error messages in red, below inputs

---

## Interactive Elements

### Buttons
**Primary CTA:**
- Padding: px-6 md:px-8 py-3 md:py-4
- Rounded: rounded-lg
- Font: font-semibold
- Shadow: Subtle shadow

**Secondary CTA:**
- Border style
- Same padding as primary
- Transparent background

**Icon Buttons:**
- Square or circular
- p-2 md:p-3
- Used for theme toggle, social links

**Hover States:** 
- Transform: slight scale or translate
- Opacity shifts
- Transition: transition-all duration-200

### Theme Toggle
- Icon-based switch (sun/moon)
- Position: Top-right of header
- Smooth transition between modes

### Tool Cards Interaction
- Hover: Subtle shadow increase, slight lift
- Click: Navigate to tool page
- Cursor: cursor-pointer

---

## Page-Specific Layouts

### Homepage
1. **Header:** Sticky navigation
2. **Hero:** 60-80vh with large background image, headline, dual CTAs
3. **Featured Tools:** 6 main tools in 3-column grid, py-20
4. **All Tools:** Organized by category, each category as separate section with header
5. **Blog Preview:** 3-4 recent articles in grid, "View All" CTA
6. **Newsletter/CTA Section:** Centered, max-w-2xl, prominent signup
7. **Footer:** Comprehensive 4-column layout

### Individual Tool Pages
1. **Header:** Same sticky nav, breadcrumb below
2. **Tool Title Section:** Centered, h1 + description, py-12
3. **Calculator Interface:** max-w-2xl centered
   - Input section (card)
   - Calculate button
   - Results section (prominent card)
4. **Instructions/Help:** Accordion or expandable section below
5. **Related Tools:** Grid of 3-4 similar tools
6. **Footer:** Standard footer

### Blog Article Page
1. **Header:** Navigation
2. **Article Header:** Featured image, title, meta, max-w-4xl
3. **Article Content:** max-w-prose, generous line-height
4. **Related Articles:** Grid at bottom
5. **Footer:** Standard

---

## Images

### Large Hero Image
**Placement:** Homepage hero section, full-width background
**Description:** Bright, inspiring image of diverse students studying together in a modern environment (library, co-working space, or campus). Laptops, notebooks, and collaborative energy. Natural lighting, contemporary aesthetic. Should convey focus, intelligence, and approachability.
**Treatment:** Slightly dimmed overlay (bg-black/40) to ensure text readability. Subtle blur on edges optional.

### Tool Category Icons
- Custom icon set or use Heroicons throughout
- Size: 48-64px for featured cards, 32-40px for grid cards
- Style: Outline or solid, consistent across all tools

### Blog Images
**Placement:** Top of each blog card
**Description:** Relevant stock images for productivity, study tips, finance management. Clean, professional, student-focused.
**Treatment:** aspect-video, object-cover, rounded-t-xl

### Optional Supporting Images
- About section: Team photo or illustration
- Testimonial section: User avatars (if included)
- Feature explanations: Simple illustrations or screenshots

---

## Accessibility & Quality Standards

- All inputs have associated labels (not placeholders only)
- Focus states clearly visible with ring-2 treatment
- Sufficient contrast ratios for all text
- Touch targets minimum 44x44px
- Keyboard navigation support
- ARIA labels for icon-only buttons
- Form validation with clear error messages
- Loading states for calculations and API calls

---

## Special Considerations

**Calculator-Specific:**
- Input validation: Real-time feedback, prevent invalid entries
- Clear/Reset buttons always visible
- Results: Copy-to-clipboard functionality
- Unit selectors: Dropdowns or toggle switches
- Historical calculations: Optional "Recent" section

**Performance:**
- Lazy load tool grids below fold
- Optimize images with proper sizing
- Defer non-critical scripts
- Progressive enhancement for JavaScript

**Monetization Integration:**
- AdSense: Between tool categories, sidebar on tool pages, bottom of blog articles
- Affiliate links: Contextual placement in blog content, resources section
- Digital products: Dedicated section or sidebar cards

**PWA Elements:**
- Install prompt (subtle, dismissible)
- Offline message for network-dependent tools
- Service worker caching for static tools

---

This design creates a professional, trustworthy platform that balances visual appeal with functional clarity, ensuring students can quickly find and use tools while building confidence in the accuracy of calculations.
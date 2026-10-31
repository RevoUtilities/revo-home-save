---
name: Restrained Neo-Brutalist Bento
colors:
  surface: '#fcf9f8'
  surface-dim: '#dcd9d9'
  surface-bright: '#fcf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3f2'
  surface-container: '#f0eded'
  surface-container-high: '#eae7e7'
  surface-container-highest: '#e5e2e1'
  on-surface: '#1c1b1b'
  on-surface-variant: '#474833'
  inverse-surface: '#313030'
  inverse-on-surface: '#f3f0ef'
  outline: '#787961'
  outline-variant: '#c8c8ad'
  surface-tint: '#5d6300'
  primary: '#5d6300'
  on-primary: '#ffffff'
  primary-container: '#c5d200'
  on-primary-container: '#525800'
  inverse-primary: '#c3d000'
  secondary: '#5d5f5c'
  on-secondary: '#ffffff'
  secondary-container: '#e2e3df'
  on-secondary-container: '#636562'
  tertiary: '#4b5d8e'
  on-tertiary: '#ffffff'
  tertiary-container: '#b5c7ff'
  on-tertiary-container: '#405283'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dfed2f'
  primary-fixed-dim: '#c3d000'
  on-primary-fixed: '#1b1d00'
  on-primary-fixed-variant: '#454a00'
  secondary-fixed: '#e2e3df'
  secondary-fixed-dim: '#c6c7c3'
  on-secondary-fixed: '#1a1c1a'
  on-secondary-fixed-variant: '#454745'
  tertiary-fixed: '#dae2ff'
  tertiary-fixed-dim: '#b3c5fd'
  on-tertiary-fixed: '#011847'
  on-tertiary-fixed-variant: '#334575'
  background: '#fcf9f8'
  on-background: '#1c1b1b'
  surface-variant: '#e5e2e1'
  canvas-warm: '#F7F7F0'
  surface-white: '#FFFFFF'
  pale-lime: '#F3F6D8'
  muted-text: '#5B625B'
typography:
  display-hero:
    fontFamily: Manrope
    fontSize: 60px
    fontWeight: '800'
    lineHeight: 64px
    letterSpacing: -0.03em
  display-hero-mobile:
    fontFamily: Manrope
    fontSize: 38px
    fontWeight: '800'
    lineHeight: 42px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Manrope
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Manrope
    fontSize: 30px
    fontWeight: '700'
    lineHeight: 36px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Manrope
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 34px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Manrope
    fontSize: 22px
    fontWeight: '700'
    lineHeight: 28px
  numeral-step:
    fontFamily: Manrope
    fontSize: 48px
    fontWeight: '800'
    lineHeight: 48px
    letterSpacing: -0.03em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-default:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-compact:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  ui-btn:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: -0.01em
  ui-eyebrow:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.08em
  caption:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 3rem
  margin-mobile: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.75rem
  space-xl: 2.5rem
---

## Brand & Style

This design system establishes an opportunity-first, accessible, and grounded aesthetic for modern UK utility and home service partnerships. It rejects traditional corporate recruitment clichés, glossy finance motifs, and aggressive multi-level marketing visuals in favor of pragmatic transparency, clean structural geometry, and intentional tactility.

### Aesthetic Foundation
The design language combines **restrained neo-brutalism** with **asymmetric bento grid modularity**:
- **Tactile Structuralism:** Built on crisp, uniform 2px ink borders and hard, zero-blur directional offset drop shadows. Surfaces feel physical, stamped, and deliberate rather than ephemeral or floating.
- **Architectural Utility:** Dense information and user pathways are organized into self-contained bento tiles with asymmetric proportional weights (e.g., 7-column hero blocks paired with 5-column secondary tiles).
- **British Domestic Warmth:** High-energy electric lime is balanced against a foundational warm off-white canvas, deep charcoal solids, and crisp white card faces to remain approachable, clear, and reassuring.

## Colors

The color palette pairs an energetic brand lime with deep charcoals and warm neutrals. Contrast compliance is strictly enforced across all states.

### Palette Architecture
- **Primary (`#C5D200` Brand Lime):** The key chromatic accent. Used for high-priority interactive calls-to-action, hero headline tile fills, numerical badges, route header indicators, and tactile backing offsets.
- **Secondary (`#151715` Deep Charcoal):** Grounding contrast surface. Deployed for high-impact inverted tiles, hero route-comparison blocks, the main site footer, and the closing conversion card.
- **Neutral / Stroke (`#1A1A1A` Ink):** The universal ink color. Powers all primary display headings, body typography, structural 2px borders, divider rules, and standard directional drop shadows.
- **Canvas Warm (`#F7F7F0` Warm Off-White):** Default page backdrop. Supplies low-strain warmth behind framed white and tinted bento tiles.
- **Surface White (`#FFFFFF`):** High-clarity primary fill for content cards, route comparison options, form fields, and sticky navigation headers.
- **Pale Lime (`#F3F6D8`):** A soft, low-chroma tint reserved for tags, auxiliary category badges, and subtle callout panels.
- **Muted Text (`#5B625B`):** Supporting metadata, legal copy, and secondary descriptions on light backgrounds, maintaining WCAG 2.2 AA compliance.

### Accessibility Rules
- Text placed over Brand Lime (`#C5D200`) must strictly render in Ink (`#1A1A1A`). Never render white text over lime.
- Surfaces utilizing Deep Charcoal (`#151715`) must utilize Surface White (`#FFFFFF`) for primary typography and Brand Lime (`#C5D200`) for focal highlights.

## Typography

The typographic hierarchy pairs **Manrope** for authoritative structural display headings with **Inter** for readable, functional UI elements and long-form narrative.

### Typographic Hierarchy
- **Display & Headings (Manrope):** Set in 700 and 800 weights with tight line heights (`1.08` to `1.2`) and negative tracking. Headlines are treated as modular graphic shapes that anchor bento compartments.
- **Numerals (`numeral-step`):** Manrope 800 at display scales (`48px`+), anchoring sequential processes (`01`, `02`, `03`) inside step tiles.
- **Body & Longform (Inter):** Regular weight (400) optimized at `16px` to `18px` with a generous line height (`1.55`–`1.6`) for rapid scanning across card surfaces.
- **Eyebrows & Badges:** Inter 700 in uppercase with widened tracking (`+0.08em`) to clearly establish category framing before primary headlines.

## Layout & Spacing

Layouts conform to a fixed-max-width asymmetric bento grid that shifts into a sequential single-column flow on smaller viewports.

### Grid & Viewports
- **Desktop (1440px canvas):** Maximum content container width of `1200px` centered with `3rem` (`48px`) outer margins. Uses a 12-column layout with a standard gutter of `1.5rem` (`24px`).
- **Mobile (390px canvas):** Single-column layout with `1.25rem` (`20px`) margins and `1rem` (`16px`) row gaps. Bento columns stack vertically while maintaining visual hierarchy.

### Rhythm & Vertical Cadence
- **Section Breaks:** `4rem` to `5.5rem` (`64px`–`88px`) vertical gaps on desktop; condensed to `2.5rem` to `3.5rem` (`40px`–`56px`) on mobile.
- **Tile Padding:** Bento containers feature `space-lg` (`28px` desktop, `24px` mobile) to `space-xl` (`40px`) internal breathing room to prevent dense data from touching exterior borders.

## Elevation & Depth

This design system rejects ambient blur, multi-layered diffusion, and translucent glassmorphic surfaces. Depth is purely graphic, architectural, and tactile, relying on directional, un-blurred offset drop shadows cast against ink strokes.

### Shadow Specifications
- **Button Shadow:** `3px 3px 0px #1A1A1A` — Sharp, directional micro-elevation applied to buttons and small interactive chips.
- **Card & Bento Tile Shadow:** `5px 5px 0px #1A1A1A` — Universal elevation for structural white and tinted content cards.
- **Hero Anchor Shadow:** `6px 6px 0px #1A1A1A` — Applied to the 7-column primary lime hero card to firmly weight the initial entry point.
- **Inverted Bookend Shadow:** The closing call-to-action tile uses a `#151715` charcoal surface layered with a `2px solid #1A1A1A` border, cast over a hard `6px 6px 0px #C5D200` brand lime backing offset. This inverts the standard ink shadow to conclude the page experience with maximum contrast.

## Shapes

Corner geometry enforces an intentional nesting ratio where interactive controls fit naturally inside parent containers without creating awkward negative corners.

### Shape Tokens & Radius Rules
- **Tiles & Bento Containers:** `12px` (`0.75rem`). Applied to all standard cards, route selection cards, and bento modules.
- **Buttons & Form Fields:** `8px` (`0.5rem`). Standardized radius across buttons, text inputs, and select dropdowns, ensuring visual nesting inside 12px parent containers.
- **Badges & Category Pills:** `4px` (`0.25rem`) or fully pill-shaped (`9999px`) for compact tag metadata.
- **Structural Framing:** `0px` full-bleed for the sticky navigation shell and site footer canvas.
- **Border Stroke:** Universal `2px solid #1A1A1A` applied to all cards, interactive controls, accordion items, and the bottom border of the sticky header.

## Components

### Buttons
- **Primary Button:** Background in Brand Lime (`#C5D200`), text in Ink (`#1A1A1A`), `2px solid #1A1A1A` border, `8px` border radius, and a `3px 3px 0px #1A1A1A` hard offset shadow. Minimum height of `48px`.
  - *Hover State:* `transform: translate(-1px, -1px)` with an expanded shadow of `4px 4px 0px #1A1A1A`.
  - *Active State:* `transform: translate(2px, 2px)` with shadow reduced to `1px 1px 0px #1A1A1A`.
- **Secondary Button:** White (`#FFFFFF`) surface with `2px solid #1A1A1A` border and `3px 3px 0px #1A1A1A` shadow. Hover shifts background to Pale Lime (`#F3F6D8`).
- **Dark Inverted Button:** Used on charcoal surfaces. Background in Brand Lime (`#C5D200`) or White (`#FFFFFF`) with Ink text and a hard zero-blur shadow.

### Bento Cards & Tiles
- Standard containers feature Surface White (`#FFFFFF`) or Pale Lime (`#F3F6D8`), bounded by `2px solid #1A1A1A` with a `12px` border radius and `5px 5px 0px #1A1A1A` shadow.
- Inner elements maintain `28px` to `40px` padding. Headers can include category eyebrows paired with monoline `24px` outline icons (2px stroke).

### Chips & Eyebrow Badges
- Backgrounds in Pale Lime (`#F3F6D8`) or Warm Off-White (`#F7F7F0`), wrapped in a `1.5px` to `2px` ink stroke. Typography set in uppercase `ui-eyebrow` (Inter 700).

### Form Controls (Inputs, Checkboxes, Radios)
- **Input Fields:** Minimum height `48px`, Surface White (`#FFFFFF`), `2px solid #1A1A1A` border, `8px` border radius. Focus state displays a `2px 2px 0px #1A1A1A` offset shadow and a high-contrast focus ring.
- **Checkboxes & Radios:** `20px` boxes with `2px solid #1A1A1A` border. Checked state fills with Brand Lime (`#C5D200`) and a bold Ink interior tick/dot.

### Accordions (FAQ & Disclosures)
- Bounded card style with a `2px solid #1A1A1A` border and `12px` radius. Expanded content reveals a `2px solid #1A1A1A` divider separating the trigger header from the answer body. Includes a 2px monoline plus/minus or chevron icon indicator.
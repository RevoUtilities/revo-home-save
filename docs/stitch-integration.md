# Stitch integration

Source: design/stitch/stitch_design_system_generator/code.html and screen.png. The original files are preserved.

The exported desktop composition is rebuilt as responsive React components, with the existing SSR and SEO setup retained. No CDN scripts, Google font calls, inline event scripts or remote generated logo are used. Fontsource and Lucide supply local fonts and icons. A simple single REVO wordmark replaces the duplicated/broken exported logo.

Removed profile/member UI, fabricated route benefits and support claims, owner-confirmation placeholders, “Matrix of Pathways”, “Data integrity” and “Sister portal” jargon, invented company description, and dead footer links. The route diagram is intentionally neutral until the programme workflows are confirmed. The Connector registration CTA remains hidden until its URL is supplied; comparison links back to the Connector information in the meantime.

Desktop and mobile use the same components and content. Mobile navigation is a keyboard-accessible disclosure with Escape-to-close; FAQs use native details/summary and work without JavaScript. The first FAQ is open initially. Draft legal pages remain unfinished and noindex; launch confirmations still apply.

## Verification

- TypeScript, Biome and the production build pass.
- Browser checks at 1280px and 390px show no horizontal page overflow.
- Mobile navigation opens, Escape closes it and focus returns to the toggle.
- FAQ expansion works; the first question starts open.
- In-page anchors have valid targets.
- Home and legal drafts return 200; missing routes return 404. Robots and sitemap return 200, and indexing remains disabled.
- Screenshots saved with this chat's outputs. Original Stitch files are untouched.

# REVO Home Save — Google Stitch design specification

**Revised direction: opportunity-first bento layout with restrained neo-brutalism.**

## Design task

Design a polished, responsive UK marketing website for **REVO Home Save**, a working brand name for a new opportunity site visually related to REVO Utilities. Create the desktop landing page at 1440px and mobile landing page at 390px, plus mobile navigation and FAQ expanded states. Use the copy and section order below. The primary structural reference is https://uwopportunityhub.co.uk/; REVO Utilities supplies brand colours and typography, rather than the page layout. This is a public marketing website, with registration handled externally by UW.

The main objective is to help visitors understand and explore two routes: **Business Growth Partner** and **Business Growth Connector**. The audience is adults exploring extra income, a secondary income or a new business opportunity. Make it approachable, credible and easy to scan. Avoid exaggerated earnings language, luxury imagery and aggressive recruitment styling.

The website name and domain are not final. Use REVO Home Save throughout the mockup; do not invent a domain. The initial implementation will use a Vercel address.

## Reference and visual direction

Primary content and structural reference: https://uwopportunityhub.co.uk/
Brand reference: https://www.revo-utilities.com/

Research checked 31 October 2026. UW Opportunity Hub places the Partner/Connector decision in the hero, alongside a side-by-side route diagram and direct route CTAs. Its wider page adds route explanations, joining guidance, video and personal support. Use that decision-first approach as the foundation. Its live design has a purple gradient hero and rounded panels; **bento and neo-brutalism are the proposed reinterpretation**, not a description of the reference.

REVO Utilities supplies the family resemblance: lime **#C5D200**, charcoal, white, Manrope headings and Inter body/UI text. These were checked on its live homepage in the first research pass. Retain the palette and typography but replace the earlier photographic corporate hero with a typography-led bento composition.

Design intent: a confident, approachable opportunity hub built from an asymmetric but orderly grid. Combine large editorial type, solid colour tiles, visible dark outlines, simple route diagrams and hard offset shadows. Use restrained neo-brutalism: crisp and characterful, with generous padding and comfortable reading sizes. Keep key text horizontal. No noisy sticker collage, distressed type, ornamental dashboards, glass effects or purple gradients.

Do not copy the reference owner's name, portrait, results, awards, support promises, contact details, referral codes, videos or travel photographs. Do not copy REVO Utilities' business savings statistics, reviews or accreditations. Backlinks should connect visitors to the relevant REVO site, without implying unconfirmed corporate or UW status.

### Design tokens

| Token | Value | Application |
| --- | --- | --- |
| Brand lime | #C5D200 | Primary buttons, restrained highlights, step numbers |
| Ink | #1A1A1A | Headings and body text |
| Deep charcoal | #151715 | Footer, final CTA, image overlays |
| White | #FFFFFF | Main surface, text on dark backgrounds |
| Warm off-white | #F7F7F0 | Main page canvas |
| Muted text | #5B625B | Supporting text on light backgrounds |
| Border | #1A1A1A | Visible 2px outlines and hard shadows |
| Pale lime | #F3F6D8 | Small badges and quiet accent panels |

Only brand lime and the observed typography are extracted reference values; the remaining tokens are proposed for this design. Use dark text on lime. Do not use lime for small text on white.

- Headings: Manrope, weight 700–800; body/UI: Inter, weight 400–600.
- Desktop H1: 56–64px with 1.08 line-height; mobile H1: 36–40px. H2: 36–44px desktop, 28–32px mobile. Body: 17–18px with 1.6 line-height.
- Maximum content width: 1200px. Use a 12-column desktop grid with 20–24px gaps. Desktop gutters: 48px; mobile gutters: 20px and gaps: 16px. Section spacing: 64–88px desktop, 40–56px mobile.
- Buttons: minimum 48px tall, 2px ink border, 8px radius, bold dark text on lime or white, hard 3px 3px ink shadow. Hover lifts by 1px; active translates toward the shadow. Keep labels fully visible. Use a separate visible focus ring.
- Tiles: 12px radius, 2px ink border and optional hard 5px 5px ink shadow. No blurred shadows. Padding 28–40px desktop, 24px mobile. Alternate white, lime, pale lime and charcoal strategically. Do not give every tile a shadow or every section a box.
- Photography: natural UK home or neighbourhood settings, diverse adults, warm daylight, candid conversations. Avoid money graphics, luxury cars and staged boardroom handshakes.
- Icons: consistent simple outline icons, approximately 24px. Use an external-link indicator for outbound CTAs.

## Brand and logo direction

Create a cleaner provisional **REVO Home Save** wordmark. Set REVO prominently in bold uppercase, with Home Save as a smaller descriptor. Explore a simple roofline or open doorway symbol with one lime accent. It must remain legible at 140px wide and work in monochrome and reversed white. Keep the header logo approximately 150–170px wide.

Treat this as a logo concept, not a finished trademark or an exact recreation of REVO Utilities' existing mark. Provide a compact icon and horizontal lockup as a small separate brand study. Do not let logo exploration displace the website design. Avoid claiming a formal corporate relationship or displaying a UW logo until the owner confirms approved branding and wording.

## Landing page structure and copy

### 1. Header

White, approximately 80px tall, with logo left. Navigation: **The opportunity**, **Choose your route**, **How it works**, **FAQs**. Primary CTA: **Explore the opportunity**, linking to the route section. Add a discreet **REVO Utilities ↗** text link to https://www.revo-utilities.com/.

Use anchor navigation within one landing page. On mobile show the logo, menu button and an accessible expanded menu with the same links. Keep the header compact and sticky with a 2px ink bottom border. Do not let it cover anchor targets.

### 2. Hero — the opportunity

Use an off-white canvas and a bento hero rather than a full-width background photograph. At desktop, build a 12-column composition:

- Left: a large lime tile spanning 7 columns and both rows, containing the main headline, supporting copy and route CTAs. Give it a 2px ink outline and hard 6px offset shadow.
- Upper right: a white tile spanning 5 columns, containing a simple two-column route diagram. Show Partner and Connector labels at equal visual weight. For the initial mockup use “You → Households” and “You → Introduce → Partner → Households”. This is a provisional explanation for owner review, not an approved process definition. Do not name the reference site's operator.
- Lower right: a charcoal tile spanning 5 columns: “Two routes. One place to start.” Include “Compare the routes” as an anchor link and the note “Registration takes place on UW's website.”

Eyebrow: **REVO HOME SAVE · THE OPPORTUNITY**

H1: **Your next opportunity starts with a connection.**

Body: **Explore the Business Growth Partner and Business Growth Connector routes — two options for people considering extra income or a new business direction.**

Primary CTA: **Explore Partner** → Partner card.

Secondary CTA: **Explore Connector** → Connector card.

Text link: **Help me compare** → comparison section. This is a direct anchor, not a quiz.

Place **Earnings vary and are not guaranteed.** directly below the actions in readable dark text. Do not use earnings counters, fabricated testimonials or urgency timers.

On mobile use natural document order: headline tile, route diagram, charcoal comparison tile. Remove row spanning and fixed heights; ensure no clipped copy. Both route CTAs must remain easy to reach without a large decorative image above them.

### 3. Introduction

Eyebrow: **A NEW DIRECTION**

H2: **An opportunity that starts with a conversation.**

Body: **You might be exploring a secondary income, considering a new business opportunity or simply curious about what comes next. Start by understanding the routes, then review the current opportunity details before deciding.**

Use a short, unboxed editorial section to give the grid breathing room. One paragraph is enough. The purpose is to welcome a broad audience without promising suitability for everyone. Optional supporting photography should appear later as a small tile, not as the hero.

### 4. Choose your route

H2: **Which route would you like to explore?**

Intro: **Start with the route that interests you. Review the responsibilities, requirements and current terms before joining.**

Show two equal-width, equally prominent cards on desktop; stack on mobile. Use the same heading sizes, button treatment and padding for both; distinguish them with lime and white header bands. Add compact “01 / PARTNER” and “02 / CONNECTOR” labels. Do not preselect a route or mark one as most popular. Give the cards anchor IDs so the hero can link directly to each.

Below the cards add an accessible comparison table with three rows: “Explore this route”, “What to review” and “Where to continue”. Use the supplied card descriptions; for both routes, say “Responsibilities, requirements and current terms” under what to review. Partner continuation is UW; Connector continuation remains subject to owner confirmation. Do not invent a fee or earnings comparison. On mobile, display labelled stacked rows without hiding column headings.

**Card A: Business Growth Partner**

- Icon: person with an upward path.
- Description: **Interested in developing a new business opportunity? Take a closer look at the Partner route.**
- CTA: **Explore the Partner route ↗**
- Destination: `UW_PARTNER_JOIN_URL`.
- Supporting text: **Continue to UW to review the opportunity and registration details.**

**Card B: Business Growth Connector**

- Icon: two connected people.
- Description: **Interested in making introductions through your network? Take a closer look at the Connector route.**
- CTA: **Explore the Connector route ↗**
- Destination: `UW_CONNECTOR_URL`, awaiting confirmation.
- Supporting text: **Review the current Connector details before taking the next step.**

The Connector description is a proposed interpretation of the route name, not a verified programme definition. Keep both descriptions editable. Do not invent commission rates, recruitment duties, eligibility, training, costs or time commitments. For the design preview, annotate the Connector destination outside the public page. If no approved Connector destination exists at launch, retain the explanatory card but omit its outbound CTA; do not route it to Partner registration or create a dead link.

### 5. How it works

H2: **Your next step, made simple.**

Use an asymmetric bento group: three step tiles spanning 4 columns each, followed by an 8-column practical-information tile and a 4-column REVO backlink tile. On mobile stack in reading order. Give steps oversized outlined 01 / 02 / 03 numerals, with body text kept compact:

1. **Explore your options** — Read about the routes and consider what interests you.
2. **Review the details** — Check the current opportunity information, responsibilities and terms.
3. **Continue to registration** — When you're ready, follow the relevant approved link to complete the next steps externally.

Practical-information tile: **Your registration stays with UW.** Body: **This website does not collect registration details. Review the current information on the relevant external website before joining.**

Small backlink tile: **Explore REVO Utilities ↗**, linking to https://www.revo-utilities.com/. Use a simple arrow graphic, not a supplier logo collage.

Optional future video: if the owner supplies an approved opportunity video, replace the practical-information tile with a click-to-load video tile, retaining the registration note nearby. Omit the video entirely until supplied; do not show a fake play control.

### 6. Business utilities cross-link

Create a white, dark-bordered horizontal tile with a small lime label and a large outlined arrow. Keep it visually secondary to the household opportunity journey; do not use a third route card beside Partner and Connector.

Eyebrow: **REVO UTILITIES**

H2: **Looking for a business utilities partnership?**

Body: **Explore REVO Utilities' separate sub-broker partnership opportunity for people who support businesses with utilities and cost reduction.**

CTA: **Explore sub-broker partnerships ↗**

Destination: https://www.revo-utilities.com/partners/sub-brokers

Make clear that this is a separate opportunity on the REVO Utilities website. Do not embed or reproduce its enquiry form.

### 7. Frequently asked questions

Use an accessible accordion with five questions. Show the first expanded in one design state.

**Who is this website for?**
It is for people exploring extra income, a secondary income or a new business opportunity. Review the current requirements and terms to decide whether an opportunity suits you.

**What is the difference between a Partner and a Connector?**
These are the two routes presented by REVO Home Save. Review the current information for each route before choosing your next step.

**Where do I register?**
Partner registration takes place on UW's website. Follow the relevant route link to review the details and continue there.

**Will I submit my details on this website?**
There is no registration or contact form here. Any details you choose to submit are entered on the external website you visit and handled under that website's privacy information.

**Can I explore a business utilities partnership instead?**
Yes. Visit REVO Utilities' sub-broker partnerships page using the link above.

The route-difference answer is deliberately provisional. Replace it with a concise factual comparison after the owner confirms the programme definitions. Do not create answers about earnings, fees or benefits without approved details.

### 8. Final call to action

A wide charcoal closing tile with white typography, a 2px dark outline and a lime offset backing edge. Keep its content left-aligned and reserve generous space around the CTA.

H2: **Ready to explore what comes next?**

Body: **Compare the routes and take your next step when you're ready.**

CTA: **Choose your route** → route comparison.

Supporting text: **Income is not guaranteed. Review the current opportunity terms before joining.**

### 9. Footer

REVO Home Save wordmark and short descriptor: **Explore connections, possibilities and your next step.**

Links: The opportunity; Choose your route; FAQs; REVO Utilities ↗; Sub-broker partnerships ↗; Privacy; Accessibility.

Use a dynamic copyright year and an owner-confirmed legal/operator name in implementation. Do not invent a company registration number, address, membership, endorsement or UW affiliation statement. Privacy and Accessibility refer to local information pages to be written for the actual implementation; do not silently reuse REVO Utilities' legal policies.

## Interaction and responsive requirements

- At desktop sizes use the asymmetric hero bento, paired route cards and modular steps. At mobile sizes stack content in reading order, with large full-width CTAs and no horizontal scrolling. Avoid CSS visual reordering that breaks keyboard or reading order.
- Keep both route options visible early in the page. Avoid a mobile sticky bar unless it can fit without covering content or keyboard focus.
- Buttons and links require hover, visible keyboard focus and active states. External links should be identifiable by icon and accessible wording. Prefer same-tab navigation; disclose any new-window behaviour.
- Accordion controls must be keyboard accessible, expose expanded state and retain clear focus. Mobile navigation needs open/close states, Escape support and appropriate focus handling.
- Use readable contrast, semantic heading hierarchy, descriptive image alternatives and a skip link. Aim for WCAG 2.2 AA. Respect reduced-motion preferences; avoid carousels and autoplay video.
- No contact forms, email capture, newsletter, chat widget, database, member area, dashboard, blog feed or Glasgow/Renfrewshire section.
- Do not add a cookie banner as decoration. Actual privacy information and any consent interface must reflect hosting, analytics, embeds and storage used in the final build. External registration alone does not determine the site's privacy obligations.

## Link and content configuration

| Key | Value/status |
| --- | --- |
| Working brand | REVO Home Save; owner may rename |
| `UW_PARTNER_JOIN_URL` | https://uw.co.uk/partner/join/ — supplied in the brief; personal attribution unverified |
| `UW_CONNECTOR_URL` | Not supplied; owner to confirm |
| `REVO_MAIN_URL` | https://www.revo-utilities.com/ |
| `REVO_SUB_BROKER_URL` | https://www.revo-utilities.com/partners/sub-brokers |

The supplied UW URL was accessible only as a JavaScript application during research. It does not establish referral attribution or separate Connector registration. Do not invent tracking parameters. Confirm the final owner-specific referral URL and Connector flow before launch.

## Implementation context

The intended build uses TanStack and Vercel, with Cloudflare available for DNS when a custom domain is chosen. Keep hosting details out of the public design. Use reusable components, editable content and centralised outbound URLs. No backend or account system is required for this scope. The initial Vercel URL does not need custom-domain DNS configuration.

## Stitch output and acceptance criteria

Produce one coherent visual direction, using the requested desktop and mobile screens. Include header, hero, introduction, both route cards, steps, sub-broker panel, FAQs, closing CTA and footer. Include a small component sheet for colours, typography, bordered tiles, hard shadows, buttons, route diagrams and the provisional logo.

The first screen must visibly establish the bento / neo-brutalist direction: lime headline tile, white route-diagram tile and charcoal comparison tile. A conventional full-width photographic hero with soft floating cards does not satisfy this brief.

The result should clearly resemble the REVO visual family, communicate the two routes without invented programme terms, make the UW handoff clear and give the commercial sub-broker route a distinct secondary position. Use the supplied copy instead of lorem ipsum. Keep owner confirmations in design annotations, never as customer-facing placeholder labels or fake working controls.

## Research sources

- UW Opportunity Hub, homepage structure and visual layout inspected: https://uwopportunityhub.co.uk/
- REVO Utilities homepage, visually inspected with browser typography and button-colour checks: https://www.revo-utilities.com/
- Partnerships overview, including the sub-broker link: https://www.revo-utilities.com/partnerships
- Verified dedicated sub-broker destination: https://www.revo-utilities.com/partners/sub-brokers
- Supplied UW registration destination; programme details and attribution unverified: https://uw.co.uk/partner/join/

# FIASSE Campaign Graphics — Figma Handoff

**Purpose:** Spec sheet for producing all visual assets referenced in the FIASSE adoption campaign. Design must match the look and feel of the live site at owaspfiasse.org (neon-on-near-black cyberpunk theme, SSEM pillar colors, Orbitron / Chakra Petch / Inter / JetBrains Mono typography, no stock imagery).

---

## 1. Design System (extracted from owaspfiasse.org)

### Color Palette

All values are the dark-theme tokens from `src/theme.css` (`:root`). The site also ships a light theme (`[data-theme="light"]`), but campaign assets are dark-only.

| Token | Value | Usage |
|---|---|---|
| Page background | `#05080f` (`--bg-base`) | Flat fill for assets. The live site layers a radial gradient (`#0b1a2b` → `#060b14` → `#04070d`) from the top edge; use it on large canvases for an exact match |
| Surface / cards | `#0b1420` (`--bg-elev-solid`) | Card/panel fill; the on-site glass variant is `rgba(10, 24, 40, 0.55)` with backdrop blur |
| Primary ink | `#d9f6ff` | Headlines, primary text — icy white, not pure `#ffffff` |
| Body ink | `#a3bed2` | Body text, descriptions |
| Muted ink | `#718ea6` | Captions, eyebrow labels, footnotes |
| Subtle ink | `#4b637f` | Lowest-emphasis text |
| Accent (interactive) | `#00e5ff` | Neon cyan — links, primary buttons, numerals, glows. Hover: `#7df4ff`. Text on cyan fill: `#04121a` |
| Panel borders | `rgba(0, 229, 255, 0.28)` | 1px HUD card borders; soft variant `rgba(0, 229, 255, 0.10)` for chips, dividers, unfilled bars |
| Grid / structure | `rgba(0, 229, 255, 0.055)` | Background grid lines (44px cells) |
| Highlight | `#ffe14d` | Neon yellow — warnings, C-grade band |
| Purple | `#b967ff` | Neon purple — rare fourth accent (`--accent-quaternary`) |

### SSEM Pillar Colors (these mean the pillars, only, always)

| Pillar | Hex | Token | Label |
|---|---|---|---|
| Maintainability | `#3aff8e` | `--accent-tertiary` | Neon green |
| Trustworthiness | `#00e5ff` | `--accent` | Neon cyan — doubles as the site's interactive accent |
| Reliability | `#ff3ec8` | `--accent-secondary` | Neon magenta |

Never use these for decoration; they always signify their pillar. Because cyan is also the interactive accent, always pair a pillar color with the pillar name or its `M` / `T` / `R` initial so meaning never rides on hue alone.

### Score/Status Colors (quiz and badge only)

From `/assess` (`src/assess/index.html`, dark-theme values):

| Band | Hex | Grade |
|---|---|---|
| ≥85 | `#3aff8e` | A |
| 70–84 | `#3aff8e` | B (the site uses one "good" green for both A and B) |
| 55–69 | `#ffe14d` | C |
| 40–54 | `#ff9e3d` | D |
| <40 | `#ff4d5e` | F |

The big composite score number renders in accent cyan (`#00e5ff`) with a soft glow — not in the band color. Band colors are used for the per-pillar letter grades; pillar mini-bars fill with the pillar colors.

### Typography

| Element | Spec |
|---|---|
| Font families | `Orbitron` (display: hero, numerals, scores) · `Chakra Petch` (headings, buttons) · `Inter` (body) · `JetBrains Mono` (labels, eyebrows, chips). Loaded from Google Fonts — embed or outline them in exported assets |
| Hero headlines | Orbitron, weight 700, clamp ~45–74px, letter-spacing 0.03em, line-height 1.04; key words get a neon-cyan glow |
| Section headlines (H2) | Orbitron / Chakra Petch, weight 700, clamp ~26–38px, letter-spacing 0.03em, line-height 1.15 |
| Body | Inter, 15–16px, weight 400, line-height 1.5–1.55 |
| Eyebrow labels | JetBrains Mono, 11–12px, letter-spacing 0.22em, uppercase, muted (`#718ea6`); site pattern is `// LABEL` with cyan slashes and a thin-bordered label |
| Stat numbers | Orbitron, weight 700, 44px+ (the /assess score hero is 88px), line-height 1, usually cyan with glow |

### Design Rules

- No hero carousels, no stock imagery, no illustrated characters
- Dark assets only (the site has a light theme, but campaign materials ship dark)
- Sharp corners everywhere: 2px on buttons/chips, 4px on cards — no pill shapes, no 16px rounding
- Cards: `#0b1420` fill, 1px `rgba(0, 229, 255, 0.28)` border, HUD corner brackets (14px, 2px cyan strokes) on the top-left and bottom-right corners
- Pillar-coded cards/columns: colored top bar or 1px border, with the title set in the pillar color
- Buttons: uppercase Chakra Petch, 0.09em tracking, 2px radius; primary = cyan fill with near-black text (`#04121a`) and glow; secondary/ghost = transparent with cyan border
- Chips/tags: JetBrains Mono, 11–12px, uppercase, thin soft-cyan border, sharp corners
- Neon glow (text-shadow/drop-shadow in the element's own color) is the signature effect — skip it at small sizes where it muddies
- Backdrop flavor (optional, subtle): 44px cyan grid at ~5% opacity, CRT scanlines
- Gradients: only the in-system ones — the page-background radial and gradient hairline separators; nothing else

---

## 2. Asset Specifications

### 2a. `meme_state_property.png` — Typographic Manifesto Card

**Use:** LinkedIn Post #1 (launch day), profile banner alt, sticker artwork
**Dimensions:** 1200 × 1200px (LinkedIn square image)

**Layout:**
- Background: `#05080f` solid
- Center-aligned, vertical stack:
  - Eyebrow: `OWASP FIASSE` in muted (`#718ea6`), uppercase, letterspaced
  - Line 1: `Secure is a state.` in muted (`#718ea6`), ~36–42px, weight 700
  - Line 2: `Securable is a property.` in primary ink (`#d9f6ff`), ~36–42px, weight 800
  - Spacer (~40px)
  - Line 3: `States expire. Properties endure.` in secondary (`#a3bed2`), ~20px, weight 400
  - Spacer (~30px)
  - Footer: `owaspfiasse.org` in muted, 14px
- Three small pillar dots (8–10px circles: green `#3aff8e`, cyan `#00e5ff`, magenta `#ff3ec8`) centered below the footer as a signature mark

**Art direction:** Pure typography on dark. The contrast between the muted "state" line and the bright "property" line IS the visual argument. No icons, no illustrations, no borders. Clean enough to die-cut as a 3" sticker.

---

### 2b. `og_quiz_card.png` — Quiz Share / OG Card

**Use:** og:image for /assess, LinkedIn Post #2 image, social share preview
**Dimensions:** 1200 × 630px (OG standard)

**Layout:**
- Background: `#05080f`
- Left two-thirds:
  - Eyebrow: `OWASP FIASSE · SELF-ASSESSMENT` in muted, uppercase
  - Headline: `How securable is your codebase?` in primary ink (`#d9f6ff`), ~32–38px, weight 800
  - Subline: `12 questions · 2 minutes · scored against SSEM` in secondary, ~16px
  - Bottom-left: `owaspfiasse.org/assess` in accent cyan (`#00e5ff`), 14px
- Right third:
  - A simple score visualization: large `72` in accent cyan (`#00e5ff`) with a soft glow — matching the live /assess results screen (64–72px, weight 800) with a smaller `/ 100` in muted
  - Below it: three horizontal mini-bars representing the three pillars, each ~60% filled with their pillar color, labeled `M` `T` `R` in muted text
  - Below the bars: `Sample score` in muted 11px italic

**Art direction:** Must read clearly at thumbnail size (the way LinkedIn and Twitter render OG cards). The score visual is a teaser, not a real result. Keep the right side compact.

---

### 2c. `linkedin_banner.png` — Profile Header

**Use:** LinkedIn profile banner
**Dimensions:** 1584 × 396px (LinkedIn banner spec)

**Layout:**
- Background: `#05080f` (match the site's theme-color exactly)
- Left-aligned content, vertically centered, with ~80px left padding:
  - Line 1: `Secure is a state.` in muted, ~28px
  - Line 2: `Securable is a property.` in primary ink (`#d9f6ff`), ~28px, weight 700
- Right side (~right third), vertically centered:
  - `OWASP FIASSE` in muted, letterspaced, 13px
  - Below: the three pillar dots (green, cyan, magenta)
- CRITICAL: LinkedIn overlays the profile photo (circular, ~120px) in the bottom-left area. Keep all content above and to the right of that zone. Test with a profile photo overlay.

---

### 2d. `ssem_model.png` — SSEM Model Infographic

**Use:** LinkedIn Post #9 (SSEM explainer), site /ssem section, talk slides, README
**Dimensions:** 1200 × 1200px

**Layout:**
- Background: `#05080f`
- Title area top-center: `SSEM` in primary ink (`#d9f6ff`), large (~48px, weight 800), with `Securable Software Engineering Model` below in secondary, 16px
- Three vertical columns (or three cards with pillar-colored top bars), evenly spaced:
  - **Maintainability** column: green top bar (`#3aff8e`), pillar name in primary ink (`#d9f6ff`), subtitle `Elemental Security` in muted, then four attribute names stacked vertically: Analyzability, Modifiability, Testability, Observability. Each with a small green dot bullet
  - **Trustworthiness** column: cyan top bar (`#00e5ff`), `Systemic Security`, three attributes: Confidentiality, Accountability, Authenticity. Cyan dot bullets
  - **Reliability** column: magenta top bar (`#ff3ec8`), `Behavioral Security`, three attributes: Availability, Integrity, Resilience. Magenta dot bullets
- Below the three columns: a connecting line or subtle bracket indicating these feed into a combined concept
- Bottom center: `10 attributes · 3 pillars · 1 design language` in muted, 14px
- Footer: `owaspfiasse.org` in muted

**Art direction:** This is the canonical model diagram. It will be used everywhere, at every size. Must be legible at 400px wide (mobile LinkedIn) and crisp at 1200px. Use the card style from the live site (the SSEM section on owaspfiasse.org shows the three-column pillar layout with attribute lists; match that structure).

---

### 2e. `secure_vs_securable.png` — Concept Card

**Use:** Glossary page, Reddit replies (where images are allowed), follow-up posts
**Dimensions:** 1200 × 1200px

**Layout:**
- Background: `#05080f`
- Two-row comparison, each row a surface card (`#0b1420` fill, 4px corners, 1px `rgba(0, 229, 255, 0.28)` border):
  - Top card (muted treatment):
    - Label: `SECURE` in muted, letterspaced, uppercase
    - Description: `A state. Temporary. Expires when the world changes.` in secondary
    - A subtle "expired" or "fading" visual treatment (e.g., the text slightly faded, or a hairline strikethrough on `SECURE`)
  - Bottom card (bright treatment):
    - Label: `SECURABLE` in primary ink (`#d9f6ff`), letterspaced, uppercase
    - Description: `A property. Engineered in. Absorbs tomorrow's threats.` in secondary
    - Full brightness, accent cyan (`#00e5ff`) left-bar on the card
- Between the cards: a small `vs` or `→` in muted
- Footer: `owaspfiasse.org` + three pillar dots

---

### 2f. `trivium_path.png` — Learning Path

**Use:** Adoption page, "path" posts, talk slides
**Dimensions:** 1200 × 675px (16:9-ish for slide reuse)

**Layout:**
- Background: `#05080f`
- A horizontal three-step path (think: three connected nodes or a timeline):
  - Step 1: `Learn the Language` — icon or numeral `01`, brief subtitle: `SSEM attributes + tenets (10 min)`
  - Step 2: `Apply One Tenet` — `02`, `Find one violation; write one ticket in SSEM language`
  - Step 3: `Wire It In` — `03`, `Agent plugin + merge review vocabulary`
- Connecting lines or arrows between steps, using the accent cyan (`#00e5ff`)
- Footer line: `Start: owaspfiasse.org/start`

---

### 2g. `meme_world_changed.png` — "90 Days After the Pentest"

**Use:** Week 2–3 posts, dependency-panic threads, talk opener
**Dimensions:** 1200 × 1200px

**Layout:**
- Background: `#05080f`
- A two-panel vertical split:
  - Top panel (card style):
    - Label: `DAY 0` in muted
    - Text: `"Your pentest came back clean."` in primary ink (`#d9f6ff`), ~24px, weight 600
    - Mood: calm, clean, bright text
  - Bottom panel (card style, slightly different treatment):
    - Label: `DAY 90` in muted
    - Text: `"3 new CVEs. 2 deprecated dependencies. 1 exploit in the wild. Zero lines of code changed."` in primary ink (`#d9f6ff`), ~20px
    - Below: `Nothing in your repo changed. Everything changed.` in accent cyan (`#00e5ff`), ~16px, weight 600
- Footer: `Secure is a state. · owaspfiasse.org`

**Art direction:** The humor comes from the escalation; keep the typography doing the work. No illustrated characters or stock photos.

---

### 2h. `fiasse_carousel_5_signs.pdf` — LinkedIn Carousel (10 slides)

**Use:** LinkedIn Post #6 (upload as PDF document post)
**Dimensions:** 1080 × 1350px per slide (LinkedIn carousel / portrait document)

**Slide-by-slide:**

| Slide | Content |
|---|---|
| 1 (cover) | Title: `5 signs your codebase is unsecurable` / Subtitle: `even if the pentest came back clean` / Eyebrow: `OWASP FIASSE` / Three pillar dots |
| 2 | `①` large numeral / `Fixing anything requires understanding everything.` / Subtext: `Analyzability is gone. Every change is archaeology.` |
| 3 | `②` / `"We can't upgrade that dependency."` / `Modifiability debt: the fix exists. You can't take it.` |
| 4 | `③` / `Nobody can say what "normal" looks like in the logs.` / `No Observability. Breaches are found by customers.` |
| 5 | `④` / `The same class of bug keeps coming back.` / `Root causes never die. Findings do, of old age, in the backlog.` |
| 6 | `⑤` / `Security review happens once, at the end, as a surprise.` / `Assessment without participation.` |
| 7 | `The pattern:` / `None of these are "vulnerabilities." All of them decide how much every future vulnerability costs.` |
| 8 | Hero: `Secure is a state.` (muted) / `Securable is a property.` (primary ink `#d9f6ff`) / `States expire. Properties endure.` (secondary) |
| 9 | SSEM mini-diagram: three pillar names with their attributes listed, pillar-colored bars. `10 attributes. A design language dev and security share.` |
| 10 (CTA) | `owaspfiasse.org` / `Framework: free (OWASP, CC BY-SA)` / `2-min self-assessment` / `CLI beta Sept 2026` / Three pillar dots |

**Art direction per slide:** Dark background (`#05080f`), one idea per slide, large numeral as the visual anchor on slides 2–6 (use the accent cyan (`#00e5ff`) for the numeral, primary ink (`#d9f6ff`) for the headline, secondary for the subtext). Slide 8 mirrors the manifesto card treatment. Consistent padding and text placement across all slides so swiping feels cohesive.

---

## 3. File Delivery Checklist

| Asset | Filename | Dimensions | Format |
|---|---|---|---|
| Typographic manifesto | `meme_state_property.png` | 1200 × 1200 | PNG (also export SVG source) |
| OG / quiz card | `og_quiz_card.png` | 1200 × 630 | PNG |
| LinkedIn banner | `linkedin_banner.png` | 1584 × 396 | PNG |
| SSEM model infographic | `ssem_model.png` | 1200 × 1200 | PNG (also SVG) |
| Secure vs. securable | `secure_vs_securable.png` | 1200 × 1200 | PNG |
| Learning path | `trivium_path.png` | 1200 × 675 | PNG |
| 90 days after pentest | `meme_world_changed.png` | 1200 × 1200 | PNG |
| 5 signs carousel | `fiasse_carousel_5_signs.pdf` | 1080 × 1350 /slide | PDF (10 pages) + individual PNGs |

Export all PNGs at 2× resolution (so a 1200×1200 asset is actually 2400×2400px) for retina displays. Filenames must match exactly; the campaign plan and LinkedIn posting guide reference them by name.

---

## 4. Launch Priority

**Needed before Post #1 (Wed 7/29):**
1. `meme_state_property.png` — attached to the launch post
2. `og_quiz_card.png` — wired into /assess page head as og:image AND used for Post #2
3. `linkedin_banner.png` — profile update before launch

**Needed by Week 2 (Aug 4–9):**
4. `meme_world_changed.png`
5. `ssem_model.png`

**Needed by Week 3 (Aug 11–16):**
6. `fiasse_carousel_5_signs.pdf`
7. `secure_vs_securable.png`
8. `trivium_path.png`

---

## 5. Reference: Live Site Screenshots to Match

Visit **https://owaspfiasse.org** and reference these sections directly:

- **Hero area:** dark gridded background, large icy-white text with neon-cyan glow, pronunciation note, OWASP badge styling
- **SSEM section:** three-column pillar layout with attribute lists, pillar color coding, the "Note on Authorization" call-out
- **Values section:** the four "X over Y" pairs, numbered 01–04
- **Tenets section:** numbered principle cards with expand/collapse
- **Footer:** three colored dots (green, cyan, magenta) as a signature element, secondary text, link columns

The campaign graphics should feel like they came from the same site, not from a separate marketing agency. Same palette, same typography weight, same restraint.

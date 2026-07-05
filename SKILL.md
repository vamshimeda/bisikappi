---
name: bisi-kaapi-design
description: Use this skill to generate well-branded interfaces and assets for Bisi Kaapi, a South-Indian filter-coffee brand, either for production or throwaway prototypes/mocks. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the `readme.md` file within this skill, and explore the other available files (`styles.css` + `tokens/`, `assets/`, `components/`, `ui_kits/`, `slides/`, `guidelines/`).

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view — link `styles.css` for tokens/fonts, and use the brand illustrations in `assets/illustrations/` and logo in `assets/logo/` rather than drawing your own.

If working on production code, copy assets and read the rules here to become an expert in designing with this brand. Components are React (`components/**/<Name>.jsx`), exposed at runtime via `window.BisiKaapiDesignSystem_2fbe5e` from the compiled `_ds_bundle.js`; each has a `.d.ts` contract and `.prompt.md` usage note.

Brand essentials: warm-earth palette (cream `#FAEFDB`, espresso ink, terracotta `#C0573A`, brass `#C49A48`, bark `#441607`, marigold `#FA8A24`); Cormorant Garamond display + Hanken Grotesk body + Spline Sans Mono + Anek Kannada accent (ಬಿಸಿ ಕಾಫಿ); sentence-case, warm/unhurried voice; coffee-bean motif instead of stars; monoline + pen-and-ink illustration registers. Fonts load from Google Fonts (flag for self-hosting); icons are a Lucide-style set (flag substitution).

If the user invokes this skill without other guidance, ask them what they want to build or design, ask a few questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

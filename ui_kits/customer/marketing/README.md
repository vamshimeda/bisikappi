# Marketing Website — UI Kit

A full Bisi Kaapi homepage recreation, composed from the design-system components.

## Files
- `index.html` — entry; loads the bundle + `icons.jsx` + `MarketingApp.jsx`, mounts `<MarketingApp />`.
- `icons.jsx` — inlined Lucide-style icon set (`window.Icon`).
- `MarketingApp.jsx` — the page: `Nav`, `Hero`, `TrustStrip`, `Story`, `Products`, `CafeFeature`, `Join`, `Footer`.

## Sections & components used
- **Nav** — sticky, blurred cream bar · logo lockup · `Button`
- **Hero** — Cormorant headline, `Button`, `Rating`, the `story-arch` illustration on a bark panel
- **TrustStrip** — brass band of value props
- **Story** — "Decades in the making…" with the Chemex + lever-machine ink illustrations
- **Products** — `Card` + `Badge` + `Rating` + `Button` grid (illustrations stand in for product photos)
- **CafeFeature** — marigold full-bleed with the colour botanical branch
- **Join** — `Divider` + `Input` + `Button`
- **Footer** — bark surface, cream logo, Kannada lockup

## Notes
- Product imagery uses brand illustrations as **placeholders** — swap for real product photography.
- Interactive: "Add" increments the cart badge in the nav.

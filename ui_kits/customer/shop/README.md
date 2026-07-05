# Online Shop — UI Kit

A two-view Bisi Kaapi store, composed from the design-system components.

## Files
- `index.html` — entry; loads the bundle + `icons.jsx` + `ShopApp.jsx`.
- `icons.jsx` — shared inline icon set (`window.Icon`).
- `ShopApp.jsx` — `TopBar`, `FilterSidebar`, `ProductGrid`, `ProductDetail`, `ShopApp`.

## Flow
- **Listing** — category sidebar (`Tag`, `Card`, `Divider`) + product grid (`Card` + `Badge` + `Rating` + `IconButton`). Click a card → detail.
- **Detail** — large illustration, `Rating`, size `Tag`s, `QuantityStepper`, add-to-cart `Button`, `Accordion` for tasting / brew / shipping.
- Cart count in the top bar increments on every add.

## Notes
- Product imagery uses brand illustrations as **placeholders** — swap for real product photography.

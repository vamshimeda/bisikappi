# Mobile Ordering App — UI Kit

An iOS-sized Bisi Kaapi ordering app, composed from the design-system components inside a phone shell.

## Files
- `index.html` — entry; loads the bundle + `icons.jsx` + `MobileApp.jsx`.
- `icons.jsx` — shared inline icon set (`window.Icon`).
- `MobileApp.jsx` — `Phone` shell, `TabBar`, and four screens: `Home`, `ItemDetail`, `Cart`, `Confirm`.

## Flow (interactive)
1. **Home** — greeting, search, dark promo card, category `Tag`s, popular-item rows (`Rating`, `IconButton`). Floating cart FAB.
2. **Item detail** — illustration, `Rating`, size & milk `Tag`s, `QuantityStepper`, sticky add bar.
3. **Cart** — line items with `QuantityStepper`, totals, **Place order**.
4. **Confirm** — success state with order number + ETA.

## Notes
- Item imagery uses brand illustrations as **placeholders** — swap for real product photography.
- Phone bezel is a simple CSS shell; swap for the `ios_frame` starter if a true device frame is needed.

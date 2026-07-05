// Bisi Kaapi — structured copy list defaults (fallback for content-bridge.js
// and the Content admin panel). Mirrors server/src/schema.sql `content_lists`
// seed: roastery process steps, coffee grind types, consulting services.
(function () {
  window.BK_LISTS_DEFAULT = {
    'roastery.steps': [
      { t: 'Sourced', d: 'Hand-picked cherries from 12 estates across Chikmagalur, Coorg & Baba Budangiri.', img: 'coffee-branch-color' },
      { t: 'Roasted', d: 'Small 12kg batches, profiled by hand each week — never more than the week can drink.', img: 'espresso-machine' },
      { t: 'Rested & ground', d: 'Rested 48 hours to settle, then ground to order for your brew method.', img: 'hand-grinder' },
    ],
    'coffee.grinds': [
      { t: 'Whole Bean', d: 'Grind fresh at home for the brightest cup.', use: 'Any method', badge: 'Freshest', tone: 'accent' },
      { t: 'South-Indian Filter', d: 'Medium-fine, built for the steel davara filter.', use: 'Filter / decoction', badge: 'Signature', tone: 'brand' },
      { t: 'Espresso Fine', d: 'Tight, even grind for 9-bar extraction.', use: 'Espresso machine', badge: null, tone: null },
      { t: 'Moka & Stovetop', d: 'A touch coarser than espresso, for the moka pot.', use: 'Moka pot', badge: null, tone: null },
      { t: 'French Press', d: 'Coarse grind that won\u2019t cloud your cup.', use: 'Press / immersion', badge: null, tone: null },
      { t: 'Cold Brew Coarse', d: 'Extra-coarse for a smooth 18-hour steep.', use: 'Cold brew', badge: 'New', tone: 'brand' },
    ],
    'consulting.services': [
      { icon: 'coffee', t: 'Café Setup', d: 'End-to-end build — layout, equipment, sourcing and the first pour.' },
      { icon: 'leaf', t: 'Menu & Recipe Design', d: 'A signature menu rooted in South-Indian coffee, tuned to your audience.' },
      { icon: 'award', t: 'Barista Training', d: 'Hands-on programs from filter decoction to latte art.' },
      { icon: 'truck', t: 'Wholesale Bean Supply', d: 'Freshly roasted beans, delivered on your schedule with full traceability.' },
    ],
  };
})();

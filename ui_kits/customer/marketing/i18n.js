// Bisi Kaapi — marketing i18n dictionary (EN + Kannada). window.BK_I18N + window.t
// Kannada strings are conversational, matching the brand's warm tone.
(function () {
  const STR = {
    // nav
    'nav.home': ['Home', 'ಮುಖಪುಟ'],
    'nav.roastery': ['Roastery', 'ರೋಸ್ಟರಿ'],
    'nav.coffee': ['Coffee', 'ಕಾಫಿ'],
    'nav.shop': ['Shop', 'ಅಂಗಡಿ'],
    'nav.consulting': ['Consulting', 'ಸಲಹೆ'],
    'nav.order': ['Order online', 'ಆನ್‌ಲೈನ್ ಆರ್ಡರ್'],
    // hero
    'hero.eyebrow': ['Estd. with love · ಬಿಸಿ ಕಾಫಿ', 'ಪ್ರೀತಿಯಿಂದ ಸ್ಥಾಪನೆ · ಬಿಸಿ ಕಾಫಿ'],
    'hero.title1': ['Slow down,', 'ನಿಧಾನಿಸಿ,'],
    'hero.titleEm': ['savour', 'ಸವಿಯಿರಿ'],
    'hero.title2': ['the brew.', 'ಕಾಫಿಯನ್ನು.'],
    'hero.body': ['Because everybody loves "Bisi" (hot) + "Kaapi" (coffee). Every brew celebrates the warmth of home, the richness of tradition, and the joy of slowing down.', 'ಏಕೆಂದರೆ ಎಲ್ಲರಿಗೂ "ಬಿಸಿ" + "ಕಾಫಿ" ಇಷ್ಟ. ಪ್ರತಿ ಕಪ್ ಮನೆಯ ಬೆಚ್ಚನೆ, ಸಂಪ್ರದಾಯದ ಶ್ರೀಮಂತಿಕೆ ಮತ್ತು ನಿಧಾನಿಸುವ ಸಂತೋಷವನ್ನು ಆಚರಿಸುತ್ತದೆ.'],
    'hero.cta1': ['Explore the menu', 'ಮೆನು ನೋಡಿ'],
    'hero.cta2': ['Shop beans', 'ಬೀನ್ಸ್ ಕೊಳ್ಳಿ'],
    'hero.rating': ['loved by 3,400+ regulars', '3,400+ ಗ್ರಾಹಕರ ಮೆಚ್ಚುಗೆ'],
    // trust
    'trust.origin': ['Single-origin', 'ಏಕ-ಮೂಲ'],
    'trust.originS': ['Western Ghats estates', 'ಪಶ್ಚಿಮ ಘಟ್ಟದ ತೋಟಗಳು'],
    'trust.roasted': ['Freshly roasted', 'ತಾಜಾ ರೋಸ್ಟ್'],
    'trust.roastedS': ['Small batches, weekly', 'ಸಣ್ಣ ಬ್ಯಾಚ್, ಪ್ರತಿ ವಾರ'],
    'trust.shipped': ['Shipped pan-India', 'ಭಾರತದಾದ್ಯಂತ ರವಾನೆ'],
    'trust.shippedS': ['In 2–4 days', '2–4 ದಿನಗಳಲ್ಲಿ'],
    'trust.trust': ['Decades in the making', 'ದಶಕಗಳ ಶ್ರಮ'],
    'trust.trustS': ['A name people trust', 'ನಂಬಿಕೆಯ ಹೆಸರು'],
    // story
    'story.eyebrow': ['Our story', 'ನಮ್ಮ ಕಥೆ'],
    'story.title': ['Decades in the making.\nBut the new beginning.', 'ದಶಕಗಳ ಶ್ರಮ.\nಆದರೆ ಹೊಸ ಆರಂಭ.'],
    'story.body': ['After all these years, it felt like time to step into a more modern chapter — a new identity, a new space, and a new way of sharing what we do. The same heart: great coffee, loyal regulars, a name people already loved.', 'ಇಷ್ಟು ವರ್ಷಗಳ ನಂತರ, ಹೊಸ ಅಧ್ಯಾಯಕ್ಕೆ ಕಾಲಿಡುವ ಸಮಯ ಬಂದಿತ್ತು — ಹೊಸ ಗುರುತು, ಹೊಸ ಸ್ಥಳ. ಅದೇ ಹೃದಯ: ಉತ್ತಮ ಕಾಫಿ, ನಿಷ್ಠಾವಂತ ಗ್ರಾಹಕರು.'],
    'story.cta': ['Read the full story', 'ಪೂರ್ಣ ಕಥೆ ಓದಿ'],
    // products
    'prod.eyebrow': ['From our roastery', 'ನಮ್ಮ ರೋಸ್ಟರಿಯಿಂದ'],
    'prod.title': ['Take a little warmth home', 'ಸ್ವಲ್ಪ ಬೆಚ್ಚನೆಯನ್ನು ಮನೆಗೆ'],
    'prod.shopAll': ['Shop all', 'ಎಲ್ಲಾ ನೋಡಿ'],
    'prod.add': ['Add', 'ಸೇರಿಸಿ'],
    // cafe feature
    'cafe.eyebrow': ['More than a café', 'ಕೆಫೆಗಿಂತ ಹೆಚ್ಚು'],
    'cafe.title': ['So we designed it to make more than a café.', 'ಆದ್ದರಿಂದ ನಾವು ಕೆಫೆಗಿಂತ ಹೆಚ್ಚಿನದನ್ನು ವಿನ್ಯಾಸಗೊಳಿಸಿದೆವು.'],
    'cafe.body': ['The new space brings everything together — all under one roof.', 'ಹೊಸ ಸ್ಥಳ ಎಲ್ಲವನ್ನೂ ಒಂದೇ ಸೂರಿನಡಿ ತರುತ್ತದೆ.'],
    'cafe.p1': ['A café that feels like home', 'ಮನೆಯಂತೆ ಅನಿಸುವ ಕೆಫೆ'],
    'cafe.p2': ['Fresh foods, all day', 'ತಾಜಾ ಆಹಾರ, ದಿನವಿಡೀ'],
    'cafe.p3': ['Our own range of coffee products', 'ನಮ್ಮದೇ ಕಾಫಿ ಉತ್ಪನ್ನಗಳ ಶ್ರೇಣಿ'],
    'cafe.cta': ['Visit us', 'ಭೇಟಿ ನೀಡಿ'],
    // join
    'join.title': ['Fresh beginnings, unforgettable aromas.', 'ಹೊಸ ಆರಂಭ, ಮರೆಯಲಾಗದ ಸುವಾಸನೆ.'],
    'join.body': ['Join the list for new roasts, seasonal brews, and quiet invitations to slow down.', 'ಹೊಸ ರೋಸ್ಟ್, ಋತುಮಾನದ ಕಾಫಿ ಮತ್ತು ನಿಧಾನಿಸುವ ಆಹ್ವಾನಗಳಿಗಾಗಿ ಸೇರಿ.'],
    'join.cta': ['Join us', 'ಸೇರಿ'],
    'join.ph': ['you@email.com', 'you@email.com'],
    // footer
    'foot.tagline': ["Here's to fresh beginnings, unforgettable aromas, and countless cups shared together.", 'ಹೊಸ ಆರಂಭ, ಮರೆಯಲಾಗದ ಸುವಾಸನೆ ಮತ್ತು ಹಂಚಿಕೊಂಡ ಅಸಂಖ್ಯ ಕಪ್‌ಗಳಿಗೆ.'],
    'foot.explore': ['Explore', 'ಅನ್ವೇಷಿಸಿ'],
    'foot.visit': ['Visit', 'ಭೇಟಿ'],
    'foot.help': ['Help', 'ಸಹಾಯ'],
    // Roastery page
    'r.eyebrow': ['The Roastery', 'ರೋಸ್ಟರಿ'],
    'r.title': ['From cherry to cup, the slow way.', 'ಚೆರಿಯಿಂದ ಕಪ್‌ವರೆಗೆ, ನಿಧಾನವಾಗಿ.'],
    'r.sub': ['Our roastery is the heart of Bisi Kaapi — where green beans from the Western Ghats become the filter coffee you grew up with. Roasted in small batches, profiled by hand.', 'ರೋಸ್ಟರಿ ಬಿಸಿ ಕಾಫಿಯ ಹೃದಯ — ಪಶ್ಚಿಮ ಘಟ್ಟದ ಹಸಿರು ಬೀನ್ಸ್ ನೀವು ಬೆಳೆದ ಫಿಲ್ಟರ್ ಕಾಫಿಯಾಗುತ್ತದೆ. ಸಣ್ಣ ಬ್ಯಾಚ್‌ಗಳಲ್ಲಿ, ಕೈಯಿಂದ ರೋಸ್ಟ್.'],
    'r.estEyebrow': ['Our estates', 'ನಮ್ಮ ತೋಟಗಳು'],
    'r.estTitle': ['Single-origin, full traceability', 'ಏಕ-ಮೂಲ, ಪೂರ್ಣ ಜಾಡು'],
    // Coffee page
    'c.eyebrow': ['Ground to order', 'ಆರ್ಡರ್‌ಗೆ ತಕ್ಕಂತೆ ಪುಡಿ'],
    'c.title': ['Find your grind.', 'ನಿಮ್ಮ ಗ್ರೈಂಡ್ ಕಂಡುಕೊಳ್ಳಿ.'],
    'c.sub': ['One blend, ground exactly for how you brew. Tell us your method and we’ll dial it in — from whole bean to extra-coarse cold brew.', 'ಒಂದೇ ಬ್ಲೆಂಡ್, ನೀವು ತಯಾರಿಸುವ ರೀತಿಗೆ ತಕ್ಕಂತೆ ಪುಡಿ. ನಿಮ್ಮ ವಿಧಾನ ಹೇಳಿ — ಪೂರ್ಣ ಬೀನ್‌ನಿಂದ ಕೋಲ್ಡ್ ಬ್ರೂವರೆಗೆ.'],
    'c.cta': ['Shop the blend', 'ಬ್ಲೆಂಡ್ ಕೊಳ್ಳಿ'],
    // Shop (accessories) page
    's.eyebrow': ['Accessories', 'ಪರಿಕರಗಳು'],
    's.title': ['Brew it right.', 'ಸರಿಯಾಗಿ ತಯಾರಿಸಿ.'],
    's.sub': ['The gear that turns a kitchen into a coffee corner — brass tumblers, carafes, grinders and presses, chosen and used by our own baristas.', 'ಅಡುಗೆಮನೆಯನ್ನು ಕಾಫಿ ಮೂಲೆಯಾಗಿಸುವ ಸಾಧನಗಳು — ಹಿತ್ತಾಳೆ ಟಂಬ್ಲರ್, ಕ್ಯಾರಫೆ, ಗ್ರೈಂಡರ್. ನಮ್ಮ ಬರಿಸ್ಟಾಗಳೇ ಆಯ್ಕೆ ಮಾಡಿದವು.'],
    's.add': ['Add', 'ಸೇರಿಸಿ'],
    // Consulting page
    'cn.eyebrow': ['Consulting', 'ಸಲಹೆ'],
    'cn.title': ['Bisi Kaapi, for your business.', 'ಬಿಸಿ ಕಾಫಿ, ನಿಮ್ಮ ವ್ಯವಹಾರಕ್ಕೆ.'],
    'cn.sub': ['Decades of running a beloved café, packaged into a service. We help cafés, offices and hotels brew coffee worth slowing down for.', 'ಪ್ರೀತಿಯ ಕೆಫೆ ನಡೆಸಿದ ದಶಕಗಳ ಅನುಭವ, ಸೇವೆಯಾಗಿ. ಕೆಫೆ, ಕಚೇರಿ ಮತ್ತು ಹೋಟೆಲ್‌ಗಳಿಗೆ ನಾವು ಸಹಾಯ ಮಾಡುತ್ತೇವೆ.'],
    'cn.formEyebrow': ['Start a conversation', 'ಸಂಭಾಷಣೆ ಆರಂಭಿಸಿ'],
    'cn.formTitle': ['Tell us what you’re brewing.', 'ನೀವು ಏನು ತಯಾರಿಸುತ್ತಿದ್ದೀರಿ ಹೇಳಿ.'],
    'cn.send': ['Send enquiry', 'ವಿಚಾರಣೆ ಕಳುಹಿಸಿ'],
    // Shop app
    'shop.nav.shop': ['Shop', 'ಅಂಗಡಿ'],
    'shop.nav.beans': ['Beans', 'ಬೀನ್ಸ್'],
    'shop.nav.gear': ['Gear', 'ಸಾಧನಗಳು'],
    'shop.nav.gifts': ['Gifts', 'ಉಡುಗೊರೆಗಳು'],
    'shop.admin': ['Admin', 'ನಿರ್ವಹಣೆ'],
    'shop.eyebrow': ['The Bisi Kaapi store', 'ಬಿಸಿ ಕಾಫಿ ಅಂಗಡಿ'],
    'shop.title': ['Beans, gear & little rituals', 'ಬೀನ್ಸ್, ಸಾಧನಗಳು ಮತ್ತು ಪುಟ್ಟ ಆಚರಣೆಗಳು'],
    'shop.category': ['Category', 'ವರ್ಗ'],
    'shop.catAll': ['All', 'ಎಲ್ಲಾ'],
    'shop.roast': ['Roast', 'ರೋಸ್ಟ್'],
    'shop.roastLight': ['Light', 'ಹಗುರ'],
    'shop.roastMedium': ['Medium', 'ಮಧ್ಯಮ'],
    'shop.roastMD': ['Medium-dark', 'ಮಧ್ಯಮ-ಗಾಢ'],
    'shop.roastDark': ['Dark', 'ಗಾಢ'],
    'shop.noResults': ['No products match these filters.', 'ಈ ಫಿಲ್ಟರ್‌ಗಳಿಗೆ ಯಾವುದೇ ಉತ್ಪನ್ನಗಳು ಹೊಂದಿಕೆಯಾಗುವುದಿಲ್ಲ.'],
    'shop.subTitle': ['Subscribe & save 15%', 'ಚಂದಾದಾರರಾಗಿ, 15% ಉಳಿಸಿ'],
    'shop.subBody': ['Fresh beans at your door, every fortnight.', 'ಪ್ರತಿ ಹದಿನೈದು ದಿನಗಳಿಗೊಮ್ಮೆ ತಾಜಾ ಬೀನ್ಸ್ ನಿಮ್ಮ ಮನೆ ಬಾಗಿಲಿಗೆ.'],
    'shop.addToCart': ['Add to cart', 'ಬುಟ್ಟಿಗೆ ಸೇರಿಸಿ'],
    'shop.back': ['Back to shop', 'ಅಂಗಡಿಗೆ ಹಿಂತಿರುಗಿ'],
    'shop.size': ['Size', 'ಗಾತ್ರ'],
    'shop.addQty': ['Add', 'ಸೇರಿಸಿ'],
    'shop.tastingNotes': ['Tasting notes', 'ರುಚಿ ಟಿಪ್ಪಣಿಗಳು'],
    'shop.tastingBody': ['Jaggery sweetness, roasted almond, a cocoa finish. Pairs beautifully with milk and a spoon of sugar.', 'ಬೆಲ್ಲದ ಸಿಹಿ, ಹುರಿದ ಬಾದಾಮಿ, ಕೋಕೋ ಅಂತ್ಯ. ಹಾಲು ಮತ್ತು ಒಂದು ಚಮಚ ಸಕ್ಕರೆಯೊಂದಿಗೆ ಚೆನ್ನಾಗಿ ಹೊಂದಿಕೊಳ್ಳುತ್ತದೆ.'],
    'shop.howToBrew': ['How to brew', 'ಹೇಗೆ ತಯಾರಿಸುವುದು'],
    'shop.brewBody': ['Use a South-Indian filter: 2 tbsp per cup, fill the upper chamber, let it drip 15–20 minutes, then mix 1:1 with hot milk.', 'ದಕ್ಷಿಣ ಭಾರತದ ಫಿಲ್ಟರ್ ಬಳಸಿ: ಪ್ರತಿ ಕಪ್‌ಗೆ 2 ಚಮಚ, ಮೇಲಿನ ಕೋಣೆ ತುಂಬಿಸಿ, 15–20 ನಿಮಿಷ ಸೋರಲಿ, ನಂತರ ಬಿಸಿ ಹಾಲಿನೊಂದಿಗೆ 1:1 ಬೆರೆಸಿ.'],
    'shop.ship': ['Shipping & freshness', 'ರವಾನೆ ಮತ್ತು ತಾಜಾತನ'],
    'shop.shipBody': ['Roasted to order and shipped within 24 hours. Reaches most cities in 2–4 days.', 'ಆರ್ಡರ್‌ಗೆ ತಕ್ಕಂತೆ ರೋಸ್ಟ್ ಮಾಡಿ 24 ಗಂಟೆಗಳಲ್ಲಿ ರವಾನಿಸಲಾಗುತ್ತದೆ. ಹೆಚ್ಚಿನ ನಗರಗಳಿಗೆ 2–4 ದಿನಗಳಲ್ಲಿ ತಲುಪುತ್ತದೆ.'],
  };
  const LANGS = { en: 0, kn: 1 };
  window.BK_I18N = STR;
  window.bkTranslate = function (key, lang) { const e = STR[key]; if (!e) return key; return e[LANGS[lang] || 0]; };
  // Bulk-merge overrides from the Content API (content-bridge.js). Mutates
  // STR in place so every existing bkTranslate() call picks up new copy on
  // next render — no need to re-wire call sites.
  window.BK_I18N_MERGE = function (patch) { Object.assign(STR, patch); };
})();

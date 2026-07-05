// Bisi Kaapi Content admin — page/section config shared by ContentAdmin.jsx.
// Maps the i18n key prefixes (ui_kits/customer/marketing/i18n.js) and the
// data-bk-section markers (added to MarketingApp/MarketingPages/ShopApp) to
// editable groups, so a click in the live preview opens the right fields.
(function () {
  const LABELS = {
    'hero.titleEm': 'Title — emphasised word', 'hero.title1': 'Title — line 1', 'hero.title2': 'Title — line 2',
    'hero.eyebrow': 'Eyebrow', 'hero.body': 'Body copy', 'hero.cta1': 'Primary button', 'hero.cta2': 'Secondary button',
    'hero.rating': 'Rating caption',
    'cafe.p1': 'Point 1', 'cafe.p2': 'Point 2', 'cafe.p3': 'Point 3', 'cafe.cta': 'Button',
    'story.title': 'Title', 'story.body': 'Body copy', 'story.cta': 'Link text',
    'r.estEyebrow': 'Estates — eyebrow', 'r.estTitle': 'Estates — title',
    'cn.formEyebrow': 'Form — eyebrow', 'cn.formTitle': 'Form — title', 'cn.send': 'Submit button',
    'shop.admin': 'Admin link label', 'shop.addToCart': 'Add-to-cart button', 'shop.addQty': 'Add-quantity button',
  };
  function prettify(key) {
    if (LABELS[key]) return LABELS[key];
    const seg = key.split('.').pop();
    const withSpaces = seg.replace(/([a-z])([A-Z])/g, '$1 $2').replace(/^[a-z]/, (c) => c.toUpperCase());
    return withSpaces
      .replace(/\bEyebrow\b/, 'Eyebrow')
      .replace(/\bSub\b/, 'Subtitle')
      .replace(/\bCta\b/i, 'Button text')
      .replace(/\bS\b$/, 'Sub-caption');
  }

  // Long-form fields render as a textarea instead of a single-line input.
  const LONGFORM = /body|sub$|tagline|estTitle$|title$/i;

  const PAGES = [
    {
      id: 'home', label: 'Homepage', icon: 'coffee', app: 'marketing', page: 'home',
      groups: [
        { prefix: 'nav.', section: 'nav', label: 'Navigation' },
        { prefix: 'hero.', section: 'hero', label: 'Hero' },
        { prefix: 'trust.', section: 'trust', label: 'Trust strip' },
        { prefix: 'story.', section: 'story', label: 'Our story' },
        { prefix: 'prod.', section: 'products', label: 'Featured products (copy)' },
        { prefix: 'cafe.', section: 'cafe', label: 'Café feature' },
        { prefix: 'join.', section: 'join', label: 'Join the list' },
        { prefix: 'foot.', section: 'footer', label: 'Footer' },
      ],
    },
    {
      id: 'roastery', label: 'Roastery', icon: 'flame', app: 'marketing', page: 'roastery',
      groups: [
        { prefix: 'r.', section: 'roastery', label: 'Roastery page copy' },
        { kind: 'list', listKey: 'roastery.steps', section: 'roastery', label: 'Process steps', fields: [{ key: 't', label: 'Title' }, { key: 'd', label: 'Description', long: true }, { key: 'img', label: 'Illustration key' }] },
      ],
    },
    {
      id: 'coffee', label: 'Coffee', icon: 'coffee', app: 'marketing', page: 'coffee',
      groups: [
        { prefix: 'c.', section: 'coffee', label: 'Coffee / grinds page copy' },
        { kind: 'list', listKey: 'coffee.grinds', section: 'coffee', label: 'Grind types', fields: [{ key: 't', label: 'Title' }, { key: 'd', label: 'Description', long: true }, { key: 'use', label: 'Best for' }, { key: 'badge', label: 'Badge (optional)' }] },
      ],
    },
    { id: 'shop-page', label: 'Shop (accessories)', icon: 'box', app: 'marketing', page: 'shop', groups: [{ prefix: 's.', section: 'shop-accessories', label: 'Accessories page' }] },
    {
      id: 'consulting', label: 'Consulting', icon: 'clipboard', app: 'marketing', page: 'consulting',
      groups: [
        { prefix: 'cn.', section: 'consulting', label: 'Consulting page copy' },
        { kind: 'list', listKey: 'consulting.services', section: 'consulting', label: 'Services', fields: [{ key: 't', label: 'Title' }, { key: 'd', label: 'Description', long: true }, { key: 'icon', label: 'Icon key' }] },
      ],
    },
    { id: 'online-shop', label: 'Online Shop', icon: 'box', app: 'shop', page: null, groups: [{ prefix: 'shop.', section: 'shop-catalog', label: 'Shop chrome & product detail copy' }] },
    { id: 'catalog', label: 'Product Catalog', icon: 'list', app: 'shop', page: null, isCatalog: true, groups: [] },
  ];

  const SECTION_TO_PAGE = {};
  PAGES.forEach((p) => p.groups.forEach((g) => { if (!g.kind) SECTION_TO_PAGE[g.section] = { pageId: p.id, prefix: g.prefix }; }));
  PAGES.forEach((p) => p.groups.forEach((g) => { if (!SECTION_TO_PAGE[g.section]) SECTION_TO_PAGE[g.section] = { pageId: p.id }; }));

  window.BK_CONTENT_CONFIG = { PAGES, SECTION_TO_PAGE, prettify, LONGFORM };
})();

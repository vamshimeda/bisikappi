// Bisi Kaapi — canonical product catalogue (fallback defaults).
// Mirrors server/src/schema.sql `content_products` seed. Used by the
// marketing homepage (featured picks), the shop, and the Content admin panel
// as the offline/no-backend fallback. content-bridge.js overwrites
// window.BK_PRODUCTS with live data from the API when it's reachable.
(function () {
  window.BK_PRODUCTS_DEFAULT = [
    { id: 1, name: 'Mysore Filter Blend', cat: 'Beans', tag: 'Bestseller', tone: 'accent', origin: 'Chikmagalur', roast: 'Medium', price: 240, rating: 4.8, count: 212, img: 'motif-coffee-bean', featured: true, sort_order: 1 },
    { id: 2, name: 'Coorg Single Estate', cat: 'Beans', tag: 'New', tone: 'brand', origin: 'Coorg', roast: 'Medium-dark', price: 320, rating: 4.7, count: 96, img: 'motif-coffee-plant', featured: true, sort_order: 2 },
    { id: 3, name: 'Peaberry Reserve', cat: 'Beans', tag: null, tone: null, origin: 'Baba Budangiri', roast: 'Light', price: 420, rating: 4.9, count: 64, img: 'motif-coffee-bean', featured: false, sort_order: 3 },
    { id: 4, name: 'Davara Tumbler Set', cat: 'Gear', tag: null, tone: null, origin: 'Brass · serves 2', roast: '—', price: 690, rating: 4.9, count: 154, img: 'motif-filter-cup', featured: true, sort_order: 4 },
    { id: 5, name: 'Pour-over Carafe', cat: 'Gear', tag: 'Low stock', tone: 'warning', origin: 'Glass · 600ml', roast: '—', price: 1290, rating: 4.6, count: 38, img: 'chemex', featured: false, sort_order: 5 },
    { id: 6, name: 'Filter Decoction Press', cat: 'Gear', tag: null, tone: null, origin: 'Stainless steel', roast: '—', price: 540, rating: 4.5, count: 71, img: 'hand-grinder', featured: false, sort_order: 6 },
  ];
})();

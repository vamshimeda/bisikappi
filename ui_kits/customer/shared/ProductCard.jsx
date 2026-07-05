// Bisi Kaapi — shared product card, used by the marketing homepage's
// "From our roastery" grid, the Online Shop grid, and the marketing site's
// Shop (accessories) page. One card markup, three call sites, three sizes.
// Design-system components (Card/Badge/Rating/Button/IconButton) + the Icon
// helper are read off window at render time, matching how every other
// customer-facing file in this project consumes them.
const PRODUCT_CARD_SIZES = {
  lg: { imgHeight: 200, imgMax: 150, pad: 20, titleSize: 'var(--text-xl)', priceSize: 'var(--text-xl)', ratingSize: 15 },
  md: { imgHeight: 180, imgMax: 134, pad: 18, titleSize: 'var(--text-lg)', priceSize: 'var(--text-lg)', ratingSize: 14 },
  sm: { imgHeight: 168, imgMax: 124, pad: 16, titleSize: '1.25rem', priceSize: 'var(--text-lg)', ratingSize: 13 },
};

function ProductCard({ p, size = 'md', onOpen, onAdd, addLabel = 'Add', iconOnlyAdd = false, assetPath = '../../../assets' }) {
  const { Button, Badge, Card, Rating, IconButton } = window.BisiKaapiDesignSystem_2fbe5e;
  const Icon = window.Icon;
  const s = PRODUCT_CARD_SIZES[size] || PRODUCT_CARD_SIZES.md;
  return (
    <Card
      data-bk-section={p.id ? `product-${p.id}` : undefined}
      variant="raised" interactive padding={0} style={{ overflow: 'hidden' }}
      onClick={onOpen}
    >
      <div style={{ background: 'var(--bk-paper)', height: s.imgHeight, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
        {p.tag && <span style={{ position: 'absolute', top: 12, left: 12 }}><Badge tone={p.tone}>{p.tag}</Badge></span>}
        <img src={`${assetPath}/illustrations/${p.img}.png`} alt={p.name} style={{ maxHeight: s.imgMax }} />
      </div>
      <div style={{ padding: s.pad }}>
        <div style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-xs)', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{p.origin}</div>
        <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: s.titleSize, margin: '4px 0 8px', color: 'var(--text-primary)' }}>{p.name}</h3>
        <Rating value={p.rating} size={s.ratingSize} count={p.count} />
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 14 }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 600, fontSize: s.priceSize, color: 'var(--text-primary)' }}>₹{p.price}</span>
          {onAdd && (iconOnlyAdd ? (
            <IconButton label="Add to cart" variant="soft" onClick={(e) => { e.stopPropagation(); onAdd(p); }}><Icon name="plus" size={18} /></IconButton>
          ) : (
            <Button size="sm" leadingIcon={<Icon name="plus" size={16} />} onClick={(e) => { e.stopPropagation(); onAdd(p); }}>{addLabel}</Button>
          ))}
        </div>
      </div>
    </Card>
  );
}
window.ProductCard = ProductCard;

Single-line text field with a warm cream well, inset shadow, and a terracotta focus border. Supports leading/trailing icons and mono text prefix/suffix (e.g. ₹).

```jsx
<Input placeholder="Search the menu" leadingIcon={<Icon name="search" />} />
<Input prefix="₹" placeholder="0.00" inputMode="decimal" />
<Input invalid defaultValue="bad@" />
```

Sizes: `sm | md | lg`. Props: `invalid`, `disabled`, `prefix`, `suffix`.

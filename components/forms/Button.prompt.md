The primary call-to-action button for Bisi Kaapi — terracotta-forward, warm, with calm press motion. Use `primary` for the main action on a view, `accent` (brass) for celebratory/secondary emphasis, `secondary` for neutral actions, `ghost` for low-emphasis inline actions, and `danger` for destructive ones.

```jsx
<Button variant="primary" size="md" onClick={addToCart}>Add to cart</Button>
<Button variant="secondary" leadingIcon={<Icon name="coffee" />}>Browse beans</Button>
<Button variant="ghost" size="sm">Cancel</Button>
```

Variants: `primary | secondary | accent | ghost | danger`. Sizes: `sm | md | lg`. Supports `fullWidth`, `disabled`, `leadingIcon`, `trailingIcon`.

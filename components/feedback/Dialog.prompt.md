Modal dialog with a warm scrim and rounded card. Control with `open`/`onClose`; pass `footer` actions (usually Buttons).

```jsx
<Dialog open={open} onClose={close} title="Remove item?"
  description="This will remove Filter Coffee from your cart."
  footer={<>
    <Button variant="secondary" onClick={close}>Keep</Button>
    <Button variant="danger" onClick={confirm}>Remove</Button>
  </>}
/>
```

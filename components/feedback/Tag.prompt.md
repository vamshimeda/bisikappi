Selectable / removable chip for filters and attributes. `selected` fills it terracotta; `onRemove` adds a × button; `onClick` makes it interactive.

```jsx
<Tag onClick={toggle} selected={active}>Filter Coffee</Tag>
<Tag onRemove={() => remove(id)}>Cardamom</Tag>
```

Radio group driven by an `options` array. Controlled (`value`) or uncontrolled (`defaultValue`); lay out `row` or `column`.

```jsx
<Radio
  options={[{value:'hot',label:'Hot'},{value:'iced',label:'Iced'}]}
  defaultValue="hot"
  direction="row"
  onChange={setTemp}
/>
```

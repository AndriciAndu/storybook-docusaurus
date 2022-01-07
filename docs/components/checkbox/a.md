---
sidebar_label: 'Checkbox'
sidebar_position: 1
---

# Checkbox

<details>
  <summary>Component Structure</summary>
  <div>

    ─ OVERVIEW ─

      ╔══════
      ║  Checkbox
      ╚═══════════════════════════
          ᐃ
          │
          │  ╔══════
          ├──║  ./components/Checkmark
          │  ╚════════════════════
          │
          │  ╔══════
          └──║  ./components/Switch
             ╚════════════════════════


    ─ LEGEND ─

      `─ᐅ` - inheritance
      `└─` - internal component
      `╚═` - exported component
  </div>
</details>

## `Checkbox` vs `Checkmark`

The **`Checkbox`** is the **interactive** Component.
> * It has all the required **functionality** and **a11y props**;
> * It contains:
>   * a `<label>`, as a container;
>   * an obscured `<input type="checkbox" />`, which handles the functionality and a11y props;
>   * either the `Checkmark` or the `Switch`, as the visual Component.

The **`Checkmark`** is the **visual** Component.
> * It is purely **presentational**, and doesn't have any **a11y props** or **functionality**
> * It can be used independently form the `Checkbox` (eg: to add visual enhancement in certain cases, such as a `Multiselect Option`)


```jsx
  import React, { Component } from "react";

  export default class Checkbox extends Component {
    render() {
      return (
        <label>
          <span>
            <input type="checkbox" />
            <Checkmark />   // or <Switch />
          </span>
          <span>
            {children}
          </span>
        </label>
      )
    }
  }
```


## Notable Decision Points

### Requirements

> **Requirement:** Implement all native `<input type="checkbox">` functionality and a11y parameters.
> **Solution:** Use a native `<input type="checkbox">` element.

:::info

The best approach is to use **native HTML elements** whenever possible.

---

The [first rule of ARIA](https://www.w3.org/TR/using-aria/#firstrule) is
if a native HTML element or attribute has the semantics and behavior you require,
use it instead of re-purposing an element and adding ARIA.

:::

---

### Styling issues


:::caution Issue - Cross-Browser Styling

**Issue:**
`<input type="checkbox />"` **cannot** be styled consistently cross-browser.

---

 **Solution:**
Hide the `<input type="checkbox />"`, and display a `<svg role="presentation" />` for styling.

:::

:::caution Issue - Focus Ring

**Issue:**
Hiding the `<input type="checkbox />"` with `display: none`, `visibility: hidden` or `opacity: 0`,
doesn't show the focus ring.

---

**Solution:**
Don't actually "hide" the input, just use the `appearance: none` attribute, to remove all styling.

:::

---

### a11y issues

:::caution Issue - `Disabled` state && `Focus`

**Issue:**
Disabled elements do not receive focus.

---

**Solution:**
Ignore the `disabled` attribute, in favor of the `aria-disabled` attribute.

:::

:::caution Issue - `Error` state

**Issue:**
Error states require the `required` attribute and an `unchecked` state.

---

**Solution:**
Use the `aria-invalid` attribute to handle error states.

:::

:::caution Issue - `intermediate` state

**Issue:**
`intermediate` state is not supported as an HTML **attribute**

---

**Solution:**
Update `intermediate` **property** directly on the `<input type="checkbox">` node's object.

:::

---

<!-- <details>
  <summary>Styling could be easily done with an extra element(s) and some decent CSS:</summary>
  <div>

  </div>
</details> -->


:::note

Read more about importing partial pages.

:::

:::tip

Tags can also be declared with tags: [Demo, Getting started].

:::

:::info

Tags can also be declared with tags: [Demo, Getting started].

:::

:::caution asdf

Tags can also be declared with tags: [Demo, Getting started].

:::

:::warning

Tags can also be declared with tags: [Demo, Getting started].

:::

* custom styling
*





---

-- must add label
- should it be focusable ?
- should the label text change color on hover/focus ?

the text is wrapped either within a:
- label -- the checkbox is focusable | the text is not focusable
- button -- the checkbox is focusable | the text is focusable

If the checkbox is to be used within another Component (such as an Option / Button),
then the Checkmark sub-component should be used, as it is a **visual** thing
Also, this should be the case, as nesting a **button** within another **button** is invalid HTML.

All checkboxes require a label -- there will never be a single Icon without any contextual text next to it.


```jsx
<button>
  <Checkmark />
  My text
</button>
```

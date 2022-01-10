---
sidebar_label: 'Checkbox'
sidebar_position: 2
---

import { renderTitle } from "../a11y/items";
export const Title = ({ id, note }) => <Fragment>{renderTitle(id, note)}</Fragment>;


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


## Requirements

*   Implement all native `<input type="checkbox">` functionality
*   Implement all `AA` a11y standards
*   Support `AAA` a11y standards


## Markup

```jsx
// This is just the generalistic markup,
// not the actual Component

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


<details>
  <summary>&lt;Checkbox /> vs &lt;Checkmark /></summary>

The **`<Checkbox />`** is the **interactive** Component.
*   It has all the required **functionality** and **a11y props**;
*   It contains:
    *   a `<label>`, as a container;
    *   an obscured `<input type="checkbox" />`, which handles the functionality and a11y props;
    *   either the `Checkmark` or the `Switch`, as the visual Component.

---

The **`<Checkmark />`** is the **visual** Component.
*   It is purely **presentational**, and doesn't have any **a11y props** or **functionality**
*   It can be used independently form the `<Checkbox />`
    (eg: to add visual enhancement in certain cases, eg. a `multiselect <Option />`)

</details>


## Usage Examples

### Checkbox example

```jsx
import React, { Component } from "react";
import Checkbox from "myComponents/checkbox";

export default class MyComponent extends Component {
  render() {
    return (
      <Checkbox>
        My label // using `children` to allow HTML insertion
      </Checkbox>
    )
  }
}
```

### Checkmark example

```jsx
import React, { Component } from "react";
import Checkbox from "myComponents/checkbox/checkmark";

export default class MyComponent extends Component {
  render() {
    return (
      <button>
        <Checkmark /> // the <checkmark /> is purely visual
        My button text
      </button>
    )
  }
}
```

> <Title id="4.1.1" />

Only `<span>` and `<svg />` elements are used as children of `<label />`, in order to abide by the "proper nesting"
protocol -- only "inline" elements can be children of "inline" elements.

> <Title id="4.1.2" />

*   `name` is covered through the use of the native HTML `<label />` element
*   `role` and `value` are covered through the use of the native HTML `<input type="checkbox" />` element

> <Title id="3.3.2" />

*   `labeling` is covered through the use of the native HTML `<label />` element and the `children` prop.


## a11y Rules


### Markup

> <Title id="1.3.1" />
>
> *   Use valid HTML everywhere
> *   Use clear labels and alternative text on forms

> <Title id="4.1.1" />

> <Title id="4.1.2" />

> <Title id="3.3.2" />


### Interactibility

> <Title id="2.1.1" />

> <Title id="2.1.2" />

> <Title id="2.1.3" />
>
> While this rule has an application-wide context, implementation within the current component
  is required in order to satisfy it.

> <Title id="2.4.3" />
>
> *   Only the `<input type="checkbox" />` is focusable.
      No other elements make use of `tab-index` or receive focus in any way.
> *   Focus remains on the element, and is not moved to other elements programatically.

> <Title id="3.2.1" />

> <Title id="3.2.2" />

[change of context](https://www.w3.org/WAI/WCAG22/Understanding/on-input.html#dfn-changes-of-context)

*   Focus (the field where the user will input next) must not automatically jump to the
    next field in a form once a field is complete.
*   Using a control (like selecting yes or no) must not automatically perform the action (for example,
    selecting to subscribe to a newsletter in a check box must not automatically subscribe your user,
    they should be able to click a submit button to confirm their decision).


### Error identification

> <Title id="3.3.1" />

The error message required to fully satisfy this criterion will be covered within the "checkbox form field".

In support of this, the error state on the checkbox itself, must be covered here.

*   If a mandatory field is empty, highlight the field and explain what’s required.
*   Highlight mistakes in forms with colours and symbols.


### Design

> <Title id="1.4.11" />

#### Typography

> <Title id="1.4.10" />

> <Title id="1.4.12" />

#### Color

> <Title id="1.4.3" />

> <Title id="1.4.6" />

#### States

> <Title id="2.4.7" />

> <Title id="2.4.11" />

> <Title id="2.4.12" />

> <Title id="3.3.1" />


## Notable Decision Points

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

---

### a11y issues

:::caution Issue - `Focus` and Focus Ring

**Issue:**
Hiding the `<input type="checkbox />"` with `display: none`, `visibility: hidden` or `opacity: 0`,
doesn't show the focus ring.

---

**Solution:**
Don't actually "hide" the input, just use the `appearance: none` attribute, to remove all styling.

:::

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

---
sidebar_label: 'Checkbox'
sidebar_position: 2
---

import { renderTitle } from "../a11y/items";

export const Title = ({ id, note, children }) => <Fragment>{renderTitle({ id, note, children })}</Fragment>;


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
*   It is purely **presentational**, and doesn't have any specific **a11y props** or **functionality**
*   It can be used independently form the `<Checkbox />`
    (eg: to add visual enhancement in certain cases, eg. a `multiselect <Option />`)

> Check the [Checkmark Page](/components/checkmark) for more info.

</details>


## Usage Examples

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

:::caution Dev reponsibility

In order to fully satisfy a11y requirements (parsing and valid HTML), only
[inline elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Inline_elements)
must be used as `{children}`, as all content is wrapped within a `<label>` element.

:::


## a11y Rules


### Markup

<Title id="1.3.1">

Partial rules apply:
*   Use valid HTML everywhere
    *   detailed in: 4.1.1 - Parsing
*   Use clear labels and alternative text on forms
    *   detailed in: 3.2.2 - Labels or instructions

</Title>

<Title id="4.1.1">

*   Ensure HTML elements have complete start ( < > ) and end ( </ > ) tags where needed.
    *   All HTML tags are properly constructed; all closing tags are properly placed.
*   Nest all HTML elements correctly
    (nesting [inline elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Inline_elements))
    *   Only `<span>` and `<svg />` elements are used as children of `<label />`&nbsp;
*   Use unique Ids.
    *   The HTML `id` property is not used.
*   Check that HTML elements don’t contain duplicate attributes.
    *   There are no duplicated attributes on any HTML element.

:::caution Dev reponsibility

In order to fully satisfy these conditions, the application of the `<Checkbox />` component must take into account:
*   if an `id` is to be applied, it must be unique within the document.
*   the `children` passed, must be formed from `inline level` elements.

:::

</Title>

<Title id="4.1.2">

*   `name` is covered through the use of the native HTML `<label />` element
*   `role` and `value` are covered through the use of the native HTML `<input type="checkbox" />` element

</Title>

<Title id="3.3.2">

*   `labeling` is covered through the use of the native HTML `<label />` element and the `children` prop.

</Title>


### Interactibility

<Title id="2.1.1">

The component is focusable, and focus is always available:
*   through the use of the native `<input type="checkbox" />` element
*   even when `disabled (state)`, through the use of the `aria-disabled` attribute, instead of the `disabled` attribute

</Title>

<Title id="2.1.2">
There is no mecanism in place that would prevent focus from leaving the component.
</Title>

<Title id="2.1.3">

_While this rule has an application-wide context, implementation within the current component
is required in order to satisfy it._

</Title>

<Title id="2.4.3">

*   Only the `<input type="checkbox" />` is focusable.
*   There is no use of `tabIndex` on any element.
*   Once placed by user action. the focus remains on the `<input type="checkbox" />`,
    and is not moved to other elements programatically.

</Title>

<Title id="3.2.1">

No `action` occurs when triggering `onFocus` alone:
*   No changes in `checked` state, no submision, no redirects to other pages
*   No elements are **added** / **removed** / **moved** / **unhidden** within the DOM
*   `Focus` doesn't programatically jump to another element
    (no [change of context](https://www.w3.org/WAI/WCAG22/Understanding/on-input.html#dfn-changes-of-context))

</Title>

<Title id="3.2.2">

Upon user action, no
[change of context](https://www.w3.org/WAI/WCAG22/Understanding/on-input.html#dfn-changes-of-context)
occurs:

*   Focus does not programatically jump to another element
*   No actions occur outside changing the `state` of the component (`checked`, `error`)

:::note Usage

This refferes to the baseline functionality of the Component, regarding
[change of context](https://www.w3.org/WAI/WCAG22/Understanding/on-input.html#dfn-changes-of-context).

Aka: This does **not** mean that other _DOM changes_ cannot take place upon a change in the `state` of the `<Checkbox>`
(such as adding/removing elements in another part of the application, or announcing an error state to the user, etc).

Each case should be analized in their own context, and it is to be determined how such changes should
be announced to the user, and when, how and/or if the
[change of context](https://www.w3.org/WAI/WCAG22/Understanding/on-input.html#dfn-changes-of-context)
should occur.

:::

</Title>


### Error identification

<Title id="3.3.1">

*   The `error state` is visible and discernable (color and contrast on the `<Icon>` border)
*   The component is focusable in its' `error state` and it can be linked to the proper `message` through props


*   _The **error message** (which is required to fully satisfy this criterion)
    is to be covered within the "checkbox form field"._
*   _If the component is used outside of the "checkbox form field" component, it is the
**developer's reponsability** to follow a11y standards._

</Title>


### Typography

<Title id="1.4.10" />

<Title id="1.4.12" />


### Design

:::caution Dev reponsibility

For all the following `Design a11y requirements`, the baseline styling of the component
passes all of the following rules.

If **by developer actions** the design changes (colors, fonts, spacing, etc), it is the **developer's reponsability**
to make sure that they abide by the a11y standards.

:::

<Title id="1.4.11" />

#### Color

<Title id="1.4.3" />

<Title id="1.4.6" />

#### States

<Title id="2.4.7" />

<Title id="2.4.11" />

<Title id="2.4.12" />

<Title id="3.3.1" />


## Notable Decision Points

:::info

The best approach is to use **native HTML elements** whenever possible.

---

The [first rule of ARIA](https://www.w3.org/TR/using-aria/#firstrule) is
if a native HTML element or attribute has the semantics and behavior you require,
use it instead of re-purposing an element and adding ARIA.

This is why the native `<input type="checkbox">` was used, despite the issues mentioned below.
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
[See browser support](https://caniuse.com/mdn-css_properties_appearance_none)

:::

:::caution Issue - `Disabled` state && `Focus`

**Issue:**
Disabled elements do not receive focus.

---

**Solution:**
Ignore the `disabled` attribute, in favor of the `aria-disabled` attribute.

[More about [aria-disabled] on MDN][ariaDisabled_mdn]

:::

:::caution Issue - `Error` state

**Issue:**
Error states require the `required` attribute and an `unchecked` state.

---

**Solution:**
Use the `aria-invalid` attribute to handle error states.

[More about [aria-invalid] on MDN][ariaInvalid_mdn]

:::

:::caution Issue - `intermediate` state

**Issue:**
`intermediate` state is not supported as an HTML **attribute**

---

**Solution:**
Update `intermediate` **property** directly on the `<input type="checkbox">` node's object.

:::

---



[ariaDisabled_mdn]: https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-disabled
[ariaInvalid_mdn]: https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-invalid

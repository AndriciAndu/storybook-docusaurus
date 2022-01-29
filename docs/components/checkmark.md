---
sidebar_label: 'Checkmark'
sidebar_position: 3
---

import { renderTitle } from "../a11y/items";

export const Title = ({ id, note, children }) => <Fragment>{renderTitle({ id, note, children })}</Fragment>;


## Requirements

*   Implement a purely visual `Checkmark` svg icon element
*   Implement all `AA` a11y standards (for purely presentational components)


## Markup

```jsx
// This is just the generalistic markup,
// not the actual Component

import React, { PureComponent } from "react";

export default class Checkmark extends PureComponent {
  render() {
    return <Icon />
  }
}
```


## Usage example

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


## a11y Rules

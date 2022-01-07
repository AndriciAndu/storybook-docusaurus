---
sidebar_label: 'Component - Rules of conduct'
sidebar_position: 2
---

# Component - Rules of conduct

Lorem ipsum

```jsx
asdsad
```

The x pillars of "this thing":
*

* Everything is configurable / extendable
  * All `props` are exposed

* Optimizations are simple and straight-forward
  * refs are passed as `innerRef`


## Development cycle

1. Define general idea
2. Make it work
3. Define main KPI
4.

## "Everything is configurable / extendable"

### All `props` are exposed

Props are either:
* used within the component
* passed down




storybook
The priority is clearly defined. The things higher in priority will override the lower.
UX focused -- easy to use and understand (for developers)
Accessibility -- there are a lot of good ui libraries out there. This focuses on being a11y AA compliant
Clean -- follows all stylelint compliance standards + fully unit-tested
Performant -- any micro-optimization that does not cause a drop in readability is to be applied

0. usable interface
Create the interface where the component can be used + augmented for special cases
and not be affected by future changes
Everything should be enclosed, and it should be used as a native component
- all native props are passed directly to the native element (wherever possible)
- if any native prop is overriden, it is exposed to override internal logic, and is properly documented
- internal logic must not involve anything else besides the specific functionality of the component

1. accessibility is applied and properly documented
- all a11y rules that would affect an individual component is to be mentioned and explained
(in general - by reference, and specific)
-

2. extendability
-- by the nature of atomic-design, components should be able to be extended, and functionality should be exposed
both directly and indirectly (by architecture)
-- by being encapsulated, extra logic can be included -- this extra logic
is internally encapsulated within their own context/functions


a. Everything atomic
The smallest part that can be encapsulated in a mindset, is to be done as such
-- complex components should (whenever possible) be an atomic component, capable of accepting other components
-- components which are not atomic are to be defined as "ui molecules"
-- whenever possible, an "ui molecule" should be available as a HOC also

a.x -- at certain points offer non-atomic variants which might come with performance boosts

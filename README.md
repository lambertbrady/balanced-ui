# mesh-ui

UI Framework for React built with [Styled-Components](https://styled-components.com/)

## Requirements

### Theme:

- progressive truthfulness:
  1. reset/normalize
  2. global styles (e.g., `box-sizing: border-box`)
  3. packaged/imported theme (nested ThemeProvider)
  4. site theme
- unit conversion (config option to set default, e.g. rem)
- positive and negative values
- component definitions
  1. defaults (passed in from theme)
  2. overrides
- mdx definitions
- self-referential (e.g., theme.child_2.grandchild_A can reference theme.child_1)

### Components:

- composition with `as` prop
- basic `css` prop
- theme-aware `sx` prop with object styles
- defaults set in theme
- accessibility built in
- responsive, mobile-first array values

### Styles:

- vender-prefixing
- combined CSS props (e.g., `border: 'val0 val1 val2'` gets values from appropriate theme keys: borderWidth, borderStyle, colors)
- named variants, with ability to add multiple (analagous to multiple classes, but built in)
- pseudo props and derived states modified with functions (saturate, lightness, etc.)

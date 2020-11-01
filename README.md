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

## Code Details

### styleObjectsToString()

This function is used to combine any number of styled-component [style objects](https://styled-components.com/docs/advanced#style-objects) into a string.

#### Syntax:

`styleObjectsToString(...styleObjects)`

#### Arguments:

`styleObjects`

#### Return Value:

A string of CSS styles.

#### Usage:

This function is used to merge style objects in a way that maintains the correct order of CSS properties. By returning a string, it allows the result to be passed directly into styled-component's component factory, [`styled`](https://styled-components.com/docs/api#styled).

For example, suppose you want to create a component that combines style objects in the order listed below, such that the latest style rule applied overrides all previous rules:

```
const styleDefault = {
  border: '1px solid red'
}
const styleOverrideA = {
  borderColor: 'blue'
}
const styleOverrideB = {
  border: '1px solid green'
}
```

The expected CSS would look like this:

```
border: 1px solid red;
border-color: blue;
border: 1px solid green;
```

This CSS would display an element with a green border, as expected. However, suppose you simply combine the style objects with `Object.assign()` or es6 object destructuring, like so: `{...styleDefault, ...styleOverrideA, ...styleOverrideB}`. Then the combined object is `{border: "1px solid green", borderColor: "blue"}`. The duplicate `border` key has been eliminated in favor of the latest key provided, but is placed where the original key existed. If this object is subsequently passed into `styled`, the output CSS will be:

```
border: 1px solid green;
border-color: blue;
```

This CSS would display an element with a blue border, even though `styleOverrideB` was supposed to be take precedence over `styleOverrideA`. Note that this happens as a consequence of how objects are merged, not due to any problem with the `styled` factory function. One possible solution would be to write a function that manually loops through and merges objects by replacing duplicate keys in a way that ensures the expected order of CSS properties. Alternatively, since `styled` accepts either an object or a string, you could convert each object to a string individually, and then concatenate those strings. This is the approach taken with `styleObjectsToString()`, which utilizes the [`css` helper function](https://styled-components.com/docs/api#css) from styled-componets.

To create components from multiple objects, you can use the following strategy to produce the correct CSS:

```
const MyComponent = styled.div`
  ${styleObjectsToString(styleDefault, styleOverrideA, styleOverrideB)}
`
const MyComponentWithProps = styled.div`
  ${(props) => styleObjectsToString(styleDefault, props.theme.myThemeKey, myFunc(props.myFuncProp))}
`
```

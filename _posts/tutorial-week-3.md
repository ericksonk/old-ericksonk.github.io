## How to Write a CSS Rule

All CSS rules contain two parts, a **selector** and a **declaration**.

The **selector** indicates which HTML element you want the rule to apply to.

The **declaration** indicates _how_ the selected element should be styled. It consists of 2 parts, a **property** and a **value** which are separated by a colon.
* The **property** indicates the aspect of the elements you want to change (`color`, `font`, `width`, `height`)
* The **value** specifies the settings you want to use for the given property (value of color, font-name)

This is the syntax for all css rules:

```
selector {
  property: value;
}
```

Example 1: We are selecting all `h1` elements (selector) and assigning them the `font-size` (property) of `20pt` (value)
```
h1 {
  font-size: 20pt;
}
```

Example 2: In this example we want to set values that are constant throught out the entire document. Since all the elements we want to select are nested inside the `<body>` element, we use body as our selector. `font-family` is set to helvetica, `background-color` is set using the key-word value of 'cornflowerblue' and the font `color` is set using a hexadecimal value.
```
body {
  font-family: helvetica;
  background-color: cornflowerblue;
  color: #fff;
}
```

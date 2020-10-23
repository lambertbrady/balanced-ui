// TODO: curry function
const parseSx = (themeMap, theme, sx) => {
  let css = {}

  for (const [sxKey, sxVal] of Object.entries(sx)) {
    // call function recursively if sxVal is a plain object
    if (typeof sxVal === 'object' && !Array.isArray(sxVal) && sxVal !== null) {
      css[sxKey] = parseSx(themeMap, theme, sxVal)
      continue
    }

    // 1) hasThemeMapping
    // 2) hasThemeProperty
    // 3) hasThemeKey
    css[sxKey] =
      Object.prototype.hasOwnProperty.call(themeMap, sxKey) &&
      Object.prototype.hasOwnProperty.call(theme, themeMap[sxKey]) &&
      Object.prototype.hasOwnProperty.call(theme[themeMap[sxKey]], sxVal)
        ? theme[themeMap[sxKey]][sxVal]
        : sxVal
  }

  return css
}

export default parseSx

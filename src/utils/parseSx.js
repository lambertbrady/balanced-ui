// TODO: curry function?
const parseSx = (theme, themeMap, sx) => {
  let css = {}

  for (const [sxKey, sxVal] of Object.entries(sx)) {
    let cssVal = sxVal

    if (typeof sxVal === 'object' && !Array.isArray(sxVal) && sxVal !== null) {
      // call function recursively if sxVal is a plain object
      cssVal = parseSx(theme, themeMap, sxVal)
    } else if (typeof sxVal === 'function') {
      cssVal = sxVal(theme)
    } else if (
      Object.prototype.hasOwnProperty.call(themeMap, sxKey) &&
      Object.prototype.hasOwnProperty.call(theme, themeMap[sxKey]) &&
      Object.prototype.hasOwnProperty.call(theme[themeMap[sxKey]], sxVal)
    ) {
      // (isValidThemeMapKey && isValidThemeProperty && isValidThemeKey)
      cssVal = theme[themeMap[sxKey]][sxVal]
      // console.log(`{ ${sxKey}: ${sxVal} } :: ${themeMap[sxKey]} >> ${cssVal}`)
    }

    css[sxKey] = cssVal
  }

  return css
}

export default parseSx

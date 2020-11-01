import { css } from 'styled-components'

const styleObjectsToString = (...styleObjects) =>
  [...styleObjects].map((obj) => css(obj).join('')).join('')

export default styleObjectsToString

// import React from 'react'
// import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import themeMap from '../themeMap'
import parseSx from '../utils/parseSx'
import styleObjectsToString from '../utils/styleObjectsToString'

const boxDefaults = {
  boxSizing: 'border-box',
  minWidth: 0,
  minHeight: 0,
  border: '1px solid red'
}

const Box = styled.div`
  ${({ theme, sx }) =>
    styleObjectsToString(
      boxDefaults,
      theme.components.box.defaults,
      // theme.components.box.variants
      parseSx(theme, themeMap, sx)
    )}
`

export default Box

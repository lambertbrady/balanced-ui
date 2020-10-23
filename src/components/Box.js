// import React from 'react'
// import PropTypes from 'prop-types'
import styled from 'styled-components'
import themeMap from '../themeMap'
import parseSx from '../utils/parseSx'

// const Box = React.forwardRef(({ children, css, sx = {}, ...rest }, ref) => {
//   console.log(css)
//   console.log(sx)
//   return (
//     // <div ref={ref} css={{ ...css, ...sx }} {...rest}>
//     <div ref={ref} {...rest}>
//       {children}
//     </div>
//   )
// })

// Box.displayName = 'Box'

// Box.propTypes = {
//   children: PropTypes.node,
//   css: PropTypes.object,
//   sx: PropTypes.object
// }

const boxDefaults = {
  boxSizing: 'border-box',
  minWidth: 0,
  minHeight: 0,
  border: '2px solid black'
}

const Box = styled.div(({ theme, sx }) => {
  const obj = {
    // ...theme.components.shared,
    ...boxDefaults,
    ...theme.components.box.defaults,
    // ...theme.components.box.variants,
    ...parseSx(themeMap, theme, sx)
    // ...sx
  }
  return obj
})

// const Box = styled.div`
//   ${(props) => props.theme.components.shared};
//   ${(props) => props.theme.components.box.defaults};

//   background-color: ${(props) => props.theme.colors.secondary};
//   ${(props) => props.sx};
// `

export default Box

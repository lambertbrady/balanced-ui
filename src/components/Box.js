import styled from 'styled-components'
// import styled, { css } from 'styled-components'

const boxDefaults = {
  boxSizing: 'border-box',
  minWidth: 0,
  minHeight: 0,
  backgroundColor: (props) => props.theme.colors.primary,
  border: '2px solid black'
}

// const Box = styled.div(boxDefaults, (props) => css(props.sx)(props.theme))
const Box = styled.div(boxDefaults)

export default Box

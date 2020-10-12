import React from 'react'
import { hot } from 'react-hot-loader'
import theme from './theme'
import { ThemeProvider } from 'styled-components'
import Box from './components/Box'

const App = function () {
  return (
    <ThemeProvider theme={theme}>
      <Box css={{ width: 200, height: 200, padding: 5 }}>
        Box component using Styled Components and theme value for
        backgroundColor
      </Box>
    </ThemeProvider>
  )
}

export default hot(module)(App)

import { hot } from 'react-hot-loader/root'
import React from 'react'
import theme from './theme'
import { ThemeProvider } from 'styled-components'
import Box from './components/Box'

const App = function () {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          width: 200,
          height: 200,
          padding: 5,
          backgroundColor: 'primary',
          '> *': {
            color: 'blue'
          }
        }}
      >
        <span>
          Box component using Styled Components and theme value for
          backgroundColor
        </span>
      </Box>
    </ThemeProvider>
  )
}

export default hot(App)

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
          margin: (t) => t.space[2],
          padding: 3,
          backgroundColor: 'primary',
          '> *': {
            color: 'secondary',
            '> *': {
              color: 'tertiary',
              padding: (t) => t.space[2]
            }
          }
        }}
      >
        <Box sx={{ border: '2px solid green' }}>
          Box component using Styled Components and theme value for
          backgroundColor
          <div>Nested text</div>
        </Box>
      </Box>
    </ThemeProvider>
  )
}

export default hot(App)

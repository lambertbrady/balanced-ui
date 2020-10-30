const theme = {
  colors: {
    primary: 'aquamarine',
    secondary: 'orange',
    tertiary: 'red'
  },
  space: [4, 8, 12, 16, 20, 24, 28, 32],
  components: {
    // shared: {
    //   boxSizing: 'border-box',
    //   minWidth: 0,
    //   minHeight: 0
    // },
    box: {
      defaults: {
        borderColor: 'red',
        margin: 20,
        '> *': {
          color: 'white'
        }
      }
      // propDefaults: {},
      // variants
    }
  }
}

export default theme

export default {
  colors: {
    primary: 'aquamarine',
    secondary: 'orange'
  },
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

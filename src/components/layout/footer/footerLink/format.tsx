const format = to =>
  to === '/' ? 'home' : to.replace('/', '').replace(/-/g, ' ')

export default format

module.exports = {
  mount: {
    src: '/'
  },
  experiments: {
    optimize: {
      bundle: false,
      minify: true,
      preload: true,
      target: 'es2020'
    }
  }
}

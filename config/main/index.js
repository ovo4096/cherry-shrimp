const root = require('app-root-path')

module.exports = {
  build: {
    dir: './',
    out: `${root}/dist/main`,
    asar: true,
    quiet: true
  }
}

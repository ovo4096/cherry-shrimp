const path = require('path')

module.exports = {
  build: {
    dir: './',
    out: path.resolve(__dirname, '../../dist/main'),
    asar: true,
    quiet: true
  },
  dev: {
    hostname: 'localhost',
    protocol: 'http:',
    port: 8080
  }
}

const root = require('app-root-path')

if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = 'development'
}

require(`${root}/src/main/main.js`)

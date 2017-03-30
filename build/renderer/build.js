require('./check-versions')()

process.env.NODE_ENV = 'production'

const root = require('app-root-path')
const ora = require('ora')
const rm = require('rimraf')
const path = require('path')
const chalk = require('chalk')
const webpack = require('webpack')
const config = require(`${root}/config/renderer`)
const webpackConfig = require('./webpack.prod.conf')

const spinner = ora('building for renderer...')
spinner.start()

rm(path.join(config.build.assetsRoot, config.build.assetsSubDirectory), err => {
  if (err) throw err
  webpack(webpackConfig, function (err, stats) {
    spinner.stop()
    if (err) throw err
    process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false
    }) + '\n\n')

    console.log(chalk.cyan('  Build renderer complete.\n'))
  })
})

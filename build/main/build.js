const root = require('app-root-path')
const config = require(`${root}/config/main`)

const packager = require('electron-packager')
const ora = require('ora')
const rm = require('rimraf')
const path = require('path')
const chalk = require('chalk')
const spinner = ora('building for app...')
spinner.start()

rm(path.join(config.build.assetsRoot), err => {
  if (err) throw err
  packager({
    dir: './',
    out: config.build.assetsRoot
  }, (err, appPaths) => {
    spinner.stop()
    if (err) throw err
    console.log(chalk.cyan('  Build complete: ' + chalk.green(appPaths) + '\n'))
  })
})

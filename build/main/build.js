const config = require('../../config/main')

const packager = require('electron-packager')
const ora = require('ora')
const rm = require('rimraf')
const path = require('path')
const chalk = require('chalk')
const spinner = ora('building for app...')
spinner.start()

rm(path.join(config.build.out), err => {
  if (err) throw err
  packager(config.build, (err, appPaths) => {
    console.log('\n')
    spinner.stop()
    if (err) throw err
    console.log(chalk.green(appPaths) + '\n')
    console.log(chalk.cyan('  Build app complete.\n'))
  })
})

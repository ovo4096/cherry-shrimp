const { ready } = require('../renderer/dev-server')
const exec = require('child_process').exec

ready.then(() => {
  console.log('> Starting electron...\n')
  let electronProcess = exec('cross-env NODE_ENV=development electron .')

  electronProcess.stdout.on('data', (data) => {
    process.stdout.write(data)
  })

  electronProcess.stderr.on('data', (data) => {
    process.stderr.write(data)
  })

  electronProcess.on('exit', (code) => {
    process.exit(code)
  })
})

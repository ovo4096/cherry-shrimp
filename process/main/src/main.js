const { app, BrowserWindow } = require('electron')
const url = require('url')
const debug = /--debug/.test(process.argv[2])
const rendererPath = '../../renderer'

let mainWindow

function createMainWindow () {
  if (debug) {
    const { ready } = require(`${rendererPath}/build/dev-server`)
    const config = require(`${rendererPath}/config`)

    let port = process.env.PORT || config.dev.port
    let urlPath = url.format({
      hostname: 'localhost',
      protocol: 'http:',
      port
    })

    ready.then(() => {
      require('devtron').install()
      const { default: installExtension, VUEJS_DEVTOOLS } = require('electron-devtools-installer')
      installExtension(VUEJS_DEVTOOLS)
        .then((name) => console.log(`Installing ${name}`))
        .catch((error) => console.log('Installing ', error))

      mainWindow = new BrowserWindow({
        width: 800,
        height: 600
      })

      mainWindow.loadURL(urlPath)

      if (debug) {
        mainWindow.webContents.openDevTools()
        mainWindow.maximize()
      }

      mainWindow.on('closed', () => {
        mainWindow = null
      })
    })
  } else {

  }
}

app.on('ready', () => {
  createMainWindow()
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createMainWindow()
  }
})

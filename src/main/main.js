const { app, BrowserWindow } = require('electron')
const url = require('url')
const path = require('path')

let mainWindow

function createMainWindow () {
  if (process.env.NODE_ENV === 'development') {
    const root = require('app-root-path')
    const { ready } = require(`${root}/build/renderer/dev-server`)
    const config = require(`${root}/config/renderer`)

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
      mainWindow.webContents.openDevTools()
      mainWindow.maximize()
      mainWindow.on('closed', () => {
        mainWindow = null
      })
    })
  } else {
    let urlPath = url.format({
      pathname: path.join(__dirname, '../../', 'dist/renderer/index.html'),
      protocol: 'file:',
      slashes: true
    })

    mainWindow = new BrowserWindow({
      width: 800,
      height: 600
    })
    mainWindow.loadURL(urlPath)
    mainWindow.on('closed', () => {
      mainWindow = null
    })
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

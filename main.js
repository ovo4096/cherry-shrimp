const { app, BrowserWindow } = require('electron')
const url = require('url')
const debug = /--debug/.test(process.argv[2])

let win

function createMainWindow () {
  function createWindow (url) {
    win = new BrowserWindow({
      width: 800,
      height: 600
      // webPreferences: {
      //   nodeIntegration: false
      // }
    })

    win.loadURL(url)

    win.webContents.openDevTools()

    win.on('closed', () => {
      win = null
    })
  }

  if (debug) {
    const { ready } = require('./build/dev-server')
    const config = require('./config')

    let port = process.env.PORT || config.dev.port
    let urlPath = url.format({
      hostname: 'localhost',
      protocol: 'http:',
      port
    })

    ready.then(() => {
      createWindow(urlPath)
    })
  } else {
    require('./build/build')
  }
}

app.on('ready', createMainWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (win === null) {
    createMainWindow(url)
  }
})

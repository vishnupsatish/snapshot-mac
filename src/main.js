const { app, BrowserWindow } = require('electron')


// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win

function createWindow () {
  // Create the browser window.
  win = new BrowserWindow({
    width: 400,
    height: 690,
    fullscreen: false,
    webPreferences: {
      nodeIntegration: true,
      webviewTag: true,
      webSecurity: false,
      allowRunningInsecureContent: true,
    }
  })

  win.loadFile('index.html')

  //win.webContents.openDevTools()

  win.on('closed', () => {

    win = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  
  if (win === null) {
    createWindow()
  }
})


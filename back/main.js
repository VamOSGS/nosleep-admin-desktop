const path = require('path');
const electron = require('electron');
const config = require('../config');
const app = electron.app;
const { BrowserWindow } = electron;
let mainWindow;

function createWindow () {
  mainWindow = new BrowserWindow({width: 800, height: 600});
  mainWindow.loadURL(config.path);
  mainWindow.on('closed', function () {
    mainWindow = null
  })
}

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
app.on('ready', createWindow)

app.on('activate', function () {
  if (mainWindow === null) {
    createWindow()
  }
})

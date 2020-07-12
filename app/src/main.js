'use strict';
const electron = require("electron");

const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
let mainWindow;

app.on('ready', function() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      webSecurity: false,
      nodeIntegration: true,
      nodeIntegrationInWorker: true
    }
  });
  mainWindow.loadURL('file://' + __dirname + '/viewer/viewer.html');
});

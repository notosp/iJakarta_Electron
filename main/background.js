import { app } from 'electron';
import serve from 'electron-serve';
import {
  createWindow,
  exitOnChange,
} from './helpers';
const fs = require("fs");
var homepath = app.getPath("home");
fs.mkdir(homepath+'/.iJakarta', function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log("ses");
  }
});
const isProd = process.env.NODE_ENV === 'production';

if (isProd) {
  serve({ directory: 'app' });
} else {
  exitOnChange();
  app.setPath('userData', `${app.getPath('userData')} (development)`);
}

(async () => {
  await app.whenReady();

  const mainWindow = createWindow("main", {
    width: 1000,
    height: 720,
    minWidth: 1000,
    minHeight: 720,
    center: true,
    useContentSize: true
  });

  const homeUrl = isProd ? 'app://./intro/splash.html' : 'http://localhost:8888/intro/splash'; 
  await mainWindow.loadURL(homeUrl);

  if (!isProd) {
    mainWindow.webContents.openDevTools();
  }
})();

app.on('window-all-closed', () => {
  app.quit();
});

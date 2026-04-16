import {app, BrowserWindow} from 'electron';
import path from 'path';

app.on("ready", ()=>{
    const mainWindow = new BrowserWindow({
        width: 1200,
        height: 800,
        icon: path.resolve(__dirname, 'assets', 'icon.ico'),
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true,
        }
    });

    // Load from Vite dev server for hot reload during development
    if (process.env.NODE_ENV === 'development') {
        mainWindow.loadURL('http://localhost:5173/');
        mainWindow.webContents.openDevTools();
    } else {
        mainWindow.loadFile(path.join(__dirname, "../dist/index.html"));
    }
});
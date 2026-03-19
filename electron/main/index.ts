import { app, BrowserWindow, ipcMain } from 'electron';
import path from 'path';
import { createConnection } from 'typeorm';

const createWindow = () => {
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            contextIsolation: true,
            preload: path.join(__dirname, 'preload.js'),
        },
    });

    mainWindow.loadFile('index.html');
};

app.whenReady().then(() => {
    createWindow();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});

// IPC handler example
ipcMain.on('some-event', (event, arg) => {
    console.log(arg); // Handle the event
});

// Database initialization example
createConnection({
    type: 'sqlite',
    database: 'database.sqlite',
    synchronize: true,
    // additional connection options
}).then(() => {
    console.log('Database connection established.');
}).catch((error) => console.error('Database connection error:', error));
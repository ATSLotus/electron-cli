const { app, BrowserWindow, globalShortcut } = require('electron')
function createWindow () {
    const win = new BrowserWindow({
      width: 1200,
      height: 800
    })
  
    win.loadFile('./index.html')  //窗口页面路径
    
    //打开控制台
    //Windows
    // globalShortcut.register('Control+Shift+i', () => {
    //     win.webContents.openDevTools()
    // })

    //MacOS or Linux
    // globalShortcut.register('Command+Shift+i',() => {
    //     win.webContents.openDevTools()
    // })
}

app.whenReady().then(() => {
    createWindow()
    app.on('activate', function () {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit()
})

const { app, BrowserWindow } = require('electron')
var sudo = require('sudo-prompt')
app.whenReady().then(() => {
    var options = {
        name: 'It works'
      };
      sudo.exec('echo hello', options,
        function(error, stdout, stderr) {
          if (error) throw error;
          console.log('stdout: ' + stdout);
        }
      );
})
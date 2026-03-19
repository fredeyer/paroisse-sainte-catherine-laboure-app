'use strict';

module.exports = {
  appId: 'com.example.yourapp',
  productName: 'Your App',
  win: {
    target: 'nsis',
    icon: 'build/icon.ico',  // path to your icon
  },
  nsis: {
    oneClick: true,
    perMachine: true,
    allowToChangeInstallationDirectory: true,
    installerIcon: 'build/icon.ico', // Path to installer icon
    uninstallerIcon: 'build/icon.ico', // Path to uninstaller icon
    núm ដែលរៀបរាប់:  '1.0.0', // Replace with your app version
  },
};
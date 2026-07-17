// Direct check - can we access Electron APIs through any mechanism?
console.log('Node version:', process.version);
console.log('Electron version:', process.versions.electron);
console.log('Chrome version:', process.versions.chrome);
console.log('process.type:', process.type);
console.log('process.activateUvLoop:', typeof process.activateUvLoop);

// Try electronBinding (preferred method in newer Electron)
console.log('\nprocess.electronBinding:', typeof process.electronBinding);
if (typeof process.electronBinding === 'function') {
  ['app', 'BrowserWindow', 'ipcMain', 'screen', 'shell'].forEach(name => {
    try {
      const result = process.electronBinding(name);
      console.log('  electronBinding(' + name + '):', typeof result);
    } catch(e) {
      console.log('  electronBinding(' + name + '): ERROR -', e.message.split('\n')[0]);
    }
  });
}

// Try _linkedBinding for common electron bindings
console.log('\n_linkedBinding tests:');
const names = [
  'electron_common_features',
  'electron_browser_app',
  'electron_browser_window',
  'electron_browser_ipc',
  'electron_browser_screen',
  'electron_browser_shell',
  'electron_browser_menu',
  'electron_browser_tray',
  'electron_browser_dialog',
  'electron_browser_protocol',
  'electron_browser_clipboard',
  'electron_browser_native_image',
  'electron_browser_notification',
  'electron_browser_power_monitor',
  'electron_browser_auto_updater',
  'electron_browser_content_tracing',
  'electron_browser_global_shortcut',
  'electron_browser_in_app_purchase',
  'electron_browser_net',
  'electron_browser_push_notifications',
];

names.forEach(name => {
  try {
    const b = process._linkedBinding(name);
    if (b) {
      const keys = typeof b === 'object' ? Object.keys(b).length : 'N/A';
      console.log('  ' + name + ': OK, ' + (typeof b === 'function' ? 'function' : typeof b + ' with ' + keys + ' keys'));
    }
  } catch(e) {
    // silently skip
  }
});

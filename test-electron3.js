// Try to access Electron API via builtin modules
console.log("=== Electron builtin access ===");

// Try requiring electron builtins
try {
  const ni = require('electron/js2c/node_init');
  console.log("node_init keys:", Object.keys(ni).slice(0,10));
} catch(e) { console.log("node_init:", e.message); }

try {
  const bi = require('electron/js2c/browser_init');
  console.log("browser_init keys:", Object.keys(bi).slice(0,10));
} catch(e) { console.log("browser_init:", e.message); }

// Try _linkedBinding to access electron common features
try {
  const ecf = process._linkedBinding('electron_common_features');
  console.log("electron_common_features:", ecf, typeof ecf);
} catch(e) { console.log("electron_common_features:", e.message); }

// Try to get the binding for the electron module itself
try {
  const eb = process._linkedBinding('electron_browser_app');
  console.log("electron_browser_app:", typeof eb);
} catch(e) { console.log("electron_browser_app:", e.message); }

// Dump available linked bindings
try {
  // Try common ones
  ['electron_common_features', 'electron_browser_app', 'electron_browser_window',
   'electron_browser_ipc', 'electron_browser_screen', 'electron_browser_shell',
   'electron_browser_menu', 'electron_browser_tray', 'electron_browser_dialog',
   'electron_browser_protocol'].forEach(name => {
    try {
      const b = process._linkedBinding(name);
      console.log(name + ": OK, typeof=" + typeof b + ", keys=" + (typeof b === 'object' ? Object.keys(b).length : 'N/A'));
    } catch(e) { /* skip */ }
  });
} catch(e) { console.log("binding list:", e.message); }

// Check if we can patch the electron module
const Module = require('module');
console.log("Module._cache has electron:", 'electron' in require.cache === false ? "NOT cached" : "cached");

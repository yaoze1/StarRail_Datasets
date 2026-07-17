// Check for electron API in global scope
console.log("=== global Electron API check ===");
// Try known globals
console.log("global.electron:", typeof global.electron);
console.log("globalThis.electron:", typeof globalThis.electron);
console.log("process.type:", process.type);
console.log("process.versions.electron:", process.versions.electron);
console.log("process.versions.chrome:", process.versions.chrome);

// Check process for electron-related stuff
const pkeys = Object.keys(process).filter(k => k.toLowerCase().includes('electron') || k.toLowerCase().includes('app'));
console.log("process keys (electron-related):", pkeys);

// Check module.builtinModules
try {
  const builtins = require('module').builtinModules || [];
  const eMods = builtins.filter(m => m.includes('electron'));
  console.log("builtinModules (electron):", eMods);
} catch(e) { console.log("builtinModules check failed:", e.message); }

// Check _linkedBinding
try {
  const lb = process._linkedBinding;
  console.log("_linkedBinding exists:", typeof lb === 'function');
} catch(e) { console.log("_linkedBinding check:", e.message); }

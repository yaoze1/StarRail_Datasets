const m = require('module');
console.log("All builtins:", m.builtinModules.filter(x => x.includes('electron') || x === 'electron'));
console.log("isBuiltin('electron'):", m.isBuiltin ? m.isBuiltin('electron') : 'N/A');

// Try to get the electron module through Module._load
try {
  console.log("Module._load electron:", typeof m._load('electron', null, false));
} catch(e) {
  console.log("_load error:", e.message);
}

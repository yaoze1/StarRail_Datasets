console.log("process.activateUvLoop:", typeof process.activateUvLoop);
console.log("process.versions:", JSON.stringify(process.versions, null, 2));
console.log("process.features:", process.features);

// Check if we can access electron APIs through internal bindings
try {
  const bindings = process._linkedBinding;
  console.log("\n=== Trying bindings ===");

  // Try the binding used in Electron's own code
  const names = [
    'electron_common_features',
    'electron_browser_app',
    'electron_browser_browser_window',
    'electron_browser_ipc_main',
  ];

  for (const name of names) {
    try {
      const result = bindings(name);
      console.log(name + ": " + typeof result, result !== null && typeof result === 'object' ? Object.keys(result).length + " keys" : result);
    } catch(e) {
      console.log(name + ": ERROR - " + e.message.split('\n')[0]);
    }
  }
} catch(e) {
  console.log("_linkedBinding error:", e.message);
}

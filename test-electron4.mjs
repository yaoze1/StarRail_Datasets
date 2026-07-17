// Test named imports from electron
import * as electron from 'electron';
console.log("=== ESM Named Import Test ===");
console.log("electron typeof:", typeof electron);
console.log("has default:", "default" in electron);
console.log("default typeof:", typeof electron.default);
console.log("has app:", "app" in electron);
console.log("has ipcMain:", "ipcMain" in electron);
console.log("has BrowserWindow:", "BrowserWindow" in electron);
console.log("keys:", Object.keys(electron).slice(0, 20));

// Try default
console.log("\n--- default export ---");
const edef = electron.default;
console.log("default typeof:", typeof edef);
if (typeof edef === 'object' && edef !== null) {
  console.log("default keys:", Object.keys(edef).slice(0, 20));
  console.log("has app in default:", "app" in edef);
}

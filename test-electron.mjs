// Test ESM import of electron
import electron from 'electron';
console.log("=== ESM Test ===");
console.log("electron typeof:", typeof electron);
console.log("electron is string:", typeof electron === 'string');
if (typeof electron === 'object') {
  console.log("keys:", Object.keys(electron).slice(0, 20));
  console.log("has app:", "app" in electron);
  console.log("has ipcMain:", "ipcMain" in electron);
}

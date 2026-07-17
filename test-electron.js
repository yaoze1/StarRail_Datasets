const e = require("electron");
console.log("electron typeof:", typeof e);
console.log("electron value:", typeof e === "string" ? e : JSON.stringify(Object.keys(e).slice(0,20)));
console.log("has app:", typeof e === "object" ? ("app" in e) : "NOT AN OBJECT");
console.log("has ipcMain:", typeof e === "object" ? ("ipcMain" in e) : "NOT AN OBJECT");

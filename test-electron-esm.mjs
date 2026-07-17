// Test if electron module gets populated asynchronously
setTimeout(() => {
  import('electron').then(e => {
    console.log("After 1s - electron default typeof:", typeof e.default);
    console.log("After 1s - has app:", "app" in e);
    console.log("After 1s - has BrowserWindow:", "BrowserWindow" in e);
    console.log("After 1s - keys:", Object.keys(e));
    if (typeof e.default === 'object') {
      console.log("After 1s - default keys:", Object.keys(e.default));
    }
  });
}, 1000);

setTimeout(() => {
  import('electron').then(e => {
    console.log("After 3s - has app:", "app" in e);
    console.log("After 3s - default keys:", typeof e.default === 'object' ? Object.keys(e.default) : 'N/A');
  });
}, 3000);

console.log("Waiting for async checks...");

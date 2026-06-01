const fs = require("node:fs");
const path = require("node:path");

const root = __dirname;
const dist = path.join(root, "dist");
const files = [
  "index.html",
  "styles.css",
  "app.js",
  "manifest.webmanifest",
  "README.md"
];

fs.rmSync(dist, { recursive: true, force: true });
fs.mkdirSync(dist, { recursive: true });

for (const file of files) {
  fs.copyFileSync(path.join(root, file), path.join(dist, file));
}

console.log("Static build ready in dist/");

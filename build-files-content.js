const fs = require("fs");
const path = require("path");

const files = [
  "test.js",
  "styles.css",
  "task1.js",
  "difference.js",
  "isEqual.js",
  "isEqual1.js",
  "proto.js",
  "sortedUniq.js",
  "sortedUniq1.js",
  "task3.js",
  "task4.js",
  "index.html",
];

const filesContent = {};

files.forEach((file) => {
  try {
    const content = fs.readFileSync(file, "utf8");
    filesContent[file] = content;
  } catch (error) {
    console.error(`Error reading file ${file}:`, error);
  }
});

const output = `const filesContent = ${JSON.stringify(filesContent, null, 2)};`;
fs.writeFileSync("files-content.js", output);

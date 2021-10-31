const os = require("os");
const fs = require("fs");

console.log(os.arch());
console.log(os.cpus());
console.log(os.version());

console.log(fs.readdirSync("/주말반-node"));

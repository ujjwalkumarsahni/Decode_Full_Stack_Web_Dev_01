const os = require("os");

console.log("Operating System Information:");
console.log("OS Name:", os.type());
console.log("OS Platform:", os.platform());
console.log("OS Release:", os.release());
console.log("Total Memory:", os.totalmem() / (1024 * 1024 * 1024), "GB");
console.log("Free Memory:", os.freemem() / (1024 * 1024 * 1024), "GB");
console.log("CPU Architecture:", os.arch());
console.log("Number of CPUs:", os.cpus().length);
console.log("Home Directory:", os.homedir());
console.log("System Uptime:", os.uptime(), "seconds");


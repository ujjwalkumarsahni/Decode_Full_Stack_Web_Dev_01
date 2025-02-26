const path = require("path");

const filePath = "/home/user/project/script.js";

console.log("File Path:", filePath);
console.log("Directory Name:", path.dirname(filePath));
console.log("Base Name:", path.basename(filePath));
console.log("File Extension:", path.extname(filePath));

const newPath = path.join(__dirname, "data", "file.txt");
console.log("Joined Path:", newPath);

const absolutePath = path.resolve("data", "file.txt");
console.log("Absolute Path:", absolutePath);

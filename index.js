const fs=require("fs");
const readText=fs.readFileSync("./data/text-in.txt",'utf-8');
console.log(readText);
fs.writeFileSync("./data/text-out.txt",`This is new line \n${readText}\nDate:${Date.now()}`);
console.log("file read and write completed!!");

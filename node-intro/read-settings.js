const fs = require("fs");

try{

let text = fs.readFileSync("settings.json", "utf8");
console.log("The file as a string:");
console.log(text);

let settings = JSON.parse(text);

console.log("The theme is:", settings.theme);
console.log("Starting lives:", settings.startingLives);
}catch(error){
    console.log("Could not load the settings.");
    console.log("Reason:", error.message);
}finally{
    console.log("Thank you for loading your settings!");
}
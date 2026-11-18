console.log("Raw arguments:", process.argv);

let name = process.argv[2];

if(name === undefined){
	name = "stranger";
}

console.log(process.argv[0]);
console.log(process.argv[1]);
console.log("Hello, " + name + "!");
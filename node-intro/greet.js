console.log("Raw arguments:", process.argv);

let name = process.argv[2];

if(name === undefined){
	name = "stranger";
}

console.log("Hello, " + name + "!");
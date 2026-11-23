const http = require("http");


let requestCount = 0;
const server = http.createServer(function(request, response){

    console.log(request.method + " " + request.url);
    // requestCount++;
    // console.log("Request #" + requestCount + "for " + request.url);
    // //console.log(request);
    if(request.url === "/"){
        response.writeHead(200,{"Content-Type": "text/html"});
        response.end("<h1>Home</h1><p>Welcome to our first server!</p>");
    }else if(request.url === "/about"){
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.end("This is a server written in node.js!");
    }else if(request.url === "/api/player"){
        let player = {name: "Steve", score: 1200};
        response.writeHead(200, {"Content-Type": "application/json"});
        response.end(JSON.stringify(player));
    }else{
        response.writeHead(404, {"Content-Type": "text/plain"});
        response.end("404 - Ope! Page Not Found, ya silly goose!");
    }
});
    

    server.listen(3000, function(){
        console.log("Server running at http://localhost:3000/");
    });
// Keep track of how many cookies we have
let cookies = 0;
let cookiesPerClick = 1;
let upgradeCost = 10;

let grandmas = 0;
let grandmaCost = 50;

let grandma = {
    name: "Grandma",
    count: 0,
    cost: 50,
    clicksPerSecond: 1
};

let farm = {
    name: "Farm",
    count: 0,
    cost: 200,
    clicksPerSecond: 5
};

let factory = {
    name: "Factory",
    count: 0,
    cost: 1000,
    clicksPerSecond: 20
};

let producers = [grandma, farm, factory];


// Get elements from DOM
const cookie = document.getElementById("cookie");
const score = document.getElementById("score");
const perClick = document.getElementById("perClick");
const upgradeButton = document.getElementById("upgradeButton");
const grandmaCount = document.getElementById("grandmaCount");
const grandmaButton = document.getElementById("grandmaButton");
const farmCount = document.getElementById("farmCount");
const farmButton = document.getElementById("farmButton");
const factoryCount = document.getElementById("factoryCount");
const factoryButton = document.getElementById("factoryButton");

perClick.textContent = "Cookies per click: " + cookiesPerClick;

function sayHello(){
    console.log("Hello!");
}

function updateDisplay(){
    score.textContent = "Cookies: " + cookies;
    perClick.textContent = "Cookies per click: " + cookiesPerClick;
    upgradeButton.textContent = 
        "Buy Upgrade (" + upgradeCost + " Cookies)";
    grandmaCount.textContent = 
        "Grandmas: " + grandma.count;
    grandmaButton.textContent = 
        "Buy Grandma (" + grandma.cost + " Cookies)";

    farmCount.textContent = "Farms: " + farm.count;
    farmButton.textContent = "Buy Farm (" + farm.cost + " Cookies)";

    factoryCount.textContent = "Factory: " + factory.count;
    factoryButton.textContent = "Buy Factory (" + factory.cost + " Cookies)";
}

function clickCookie(){
    cookies = cookies + cookiesPerClick;
    updateDisplay();
    cookieAnim();
}

function cookieAnim(){
    cookie.classList.add("clicked")
    
    setTimeout(function(){
        cookie.classList.remove("clicked");
    }, 100);
}

function buyUpgrade(){
        if(cookies >= upgradeCost){
        cookies = cookies - upgradeCost;
        cookiesPerClick++;
        upgradeCost = upgradeCost * 2;
        updateDisplay();
    }
}

function buyGrandma(){
    if(cookies >= grandma.cost){
        cookies = cookies - grandma.cost;
        grandma.count++;
        grandma.cost = grandma.cost * 2;
        updateDisplay();
    }
}

// AUTOMATIC COOKIE PRODUCTION

function produceCookies(){
    for(let producer of producers){
        for(let j = 0; j < producer.count * producer.clicksPerSecond; j++){
            clickCookie();
        }
    }
}


//EVENT LISTENERS

upgradeButton.addEventListener("click", buyUpgrade);
cookie.addEventListener("click", clickCookie);
grandmaButton.addEventListener("click", buyGrandma);

//RUN EVERY SECOND
setInterval(produceCookies, 1000);

//INITIAL DISPLAY
updateDisplay();
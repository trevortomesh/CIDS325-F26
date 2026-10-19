// Keep track of how many cookies we have

// let cookies = 0;
// let cookiesPerClick = 1;
// let upgradeCost = 10;

let game = {
    cookies: 0,
    cookiesPerClick: 1,
    upgradeCost: 10
};

class Producer{
    constructor(name, count, cost, clicksPerSecond){
        this.name = name;
        this.count = count;
        this.cost = cost;
        this.clicksPerSecond = clicksPerSecond;
    }

    totalClicksPerSecond(){
        return this.count * this.clicksPerSecond;
    }

}

let grandma = new Producer("Grandma", 0, 50, 1);
let farm = new Producer("Farm", 0, 200, 5);
let factory = new Producer("Factory", 0, 1000, 20);


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
const clicksPerSecond = document.getElementById("clicksPerSecond");

grandma.label = "Grandmas";
grandma.countElement = grandmaCount;
grandma.buttonElement = grandmaButton;

farm.label = "Farms";
farm.countElement = farmCount;
farm.buttonElement = farmButton;

factory.label = "Factories";
factory.countElement = factoryCount;
factory.buttonElement = factoryButton;

function sayHello(){
    console.log("Hello!");
}

function updateDisplay(){
    score.textContent = "Cookies: " + game.cookies;
    perClick.textContent = "Cookies per click: " + game.cookiesPerClick;
    upgradeButton.textContent = 
        "Buy Upgrade (" + game.upgradeCost + " Cookies)";

    for(let producer of producers){
        producer.countElement.textContent = producer.label + ": " + producer.count;
        producer.buttonElement.textContent = "Buy "+producer.name+" ("+producer.cost+" Cookies)";
    }    
    clicksPerSecond.textContent = 
    "Automatic clicks per second: " + cps();

}

function cps(){
    let sum = 0;
    for(let producer of producers){
        sum += producer.totalClicksPerSecond();
    }
    return sum
}

function clickCookie(){
    game.cookies = game.cookies + game.cookiesPerClick;
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
        if(game.cookies >= game.upgradeCost){
        game.cookies = game.cookies - game.upgradeCost;
        game.cookiesPerClick++;
        game.upgradeCost = game.upgradeCost * 2;
        updateDisplay();
    }
}

function buyProducer(producer){
    if(game.cookies >= producer.cost){
        game.cookies = game.cookies - producer.cost;
        producer.count++;
        producer.cost = producer.cost * 2;
        updateDisplay();
        }
    }


// AUTOMATIC COOKIE PRODUCTION

function produceCookies(){
    for(let producer of producers){
        let clicks = producer.totalClicksPerSecond();
        for(let j =0 ; j < clicks; j++){
            clickCookie();
        }
        // for(let j = 0; j < producer.count * producer.clicksPerSecond; j++){
        //     clickCookie();
        // }
    }
}


//EVENT LISTENERS

upgradeButton.addEventListener("click", buyUpgrade);
cookie.addEventListener("click", clickCookie);

grandmaButton.addEventListener("click", function(){
    buyProducer(grandma);
});

factoryButton.addEventListener("click", function(){
    buyProducer(factory);
});

farmButton.addEventListener("click", function(){
    buyProducer(farm);
});


//RUN EVERY SECOND
setInterval(produceCookies, 1000);

//INITIAL DISPLAY
updateDisplay();

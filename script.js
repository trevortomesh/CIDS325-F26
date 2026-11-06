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
const saveButton = document.getElementById("saveButton");
const loadButton = document.getElementById("loadButton");
const saveText = document.getElementById("saveText");
const saveStatus = document.getElementById("saveStatus");
const verifyButton = document.getElementById("verifyButton");

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

saveButton.addEventListener("click", saveGame);
loadButton.addEventListener("click", loadGame);

verifyButton.addEventListener("click", verifySave);

function buildSaveData(){
    let producerData = [];
    for(let producer of producers){
        let oneProducer = {
            name: producer.name,
            count: producer.count,
            cost: producer.cost,
            clicksPerSecond: producer.clicksPerSecond
        };
        producerData.push(oneProducer);
    }

    let saveData = {
        cookies: game.cookies,
        cookiesPerClick: game.cookiesPerClick,
        upgradeCost: game.upgradeCost,
        producers: producerData
    };
    return saveData;
}

function saveGame(){
    let saveData = buildSaveData();
    let saveString = JSON.stringify(saveData,null,2);
    saveText.value = saveString;

    let checkData = JSON.parse(saveString);
    let problem = verifySaveData(checkData);

    if(problem === ""){
        showStatus("Save created and verified: it can be loaded back exactly as-is!", true);
    }else{
        showStatus("Save created, but it FAILED verification: " + problem, false);
    }
}

function loadGame(){
    let saveData; 
    
    try{
        saveData = JSON.parse(saveText.value);
    } catch(error){
        showStatus("Load failed: that is not a valid JSON." + error.message, false);
        //console.log(error);
        return;
    }

    let problem = verifySaveData(saveData);
    if(problem !== ""){
        showStatus("Load refused: " + problem, false);
        return;
    }
    
    game.cookies = saveData.cookies;
    game.cookiesPerClick = saveData.cookiesPerClick;
    game.upgradeCost = saveData.upgradeCost;

    for(let savedProducer of saveData.producers){
        for(let producer of producers){
            if(producer.name === savedProducer.name){
                producer.count = savedProducer.count;
                producer.cost = savedProducer.cost;
            }
        }
    }

    updateDisplay();
    showStatus("Save loaded and verified: " + game.cookies + " cookies, " + 
        cps() + " automatic clicks per second.", true);

}

function showStatus(message, isOk){
    if(isOk){
        saveStatus.textContent = "✓ " + message;
    }else{
        saveStatus.textContent = "✗ " + message;
    }

    saveStatus.classList.remove("status-ok");
    saveStatus.classList.remove("status-error");

    if(isOk){
        saveStatus.classList.add("status-ok");
    }else{
        saveStatus.classList.add("status-error");
    }

}

function verifySaveData(saveData){
    if(saveData === null || typeof saveData !== "object"){
        return "Save data is not an object!";
    }

    if(typeof saveData.cookies !== "number"){
        return "'cookies' should be a number, but the save has: " + typeof saveData.cookies + ": " + saveData.cookies;
    }

    if(saveData.cookies < 0){
        return "'cookies' cannot be negative, but the save has: " + saveData.cookies;
    }

    if(typeof saveData.cookiesPerClick !== "number" || saveData.cookiesPerClick < 1){
        return "'cookiesPerClick' should be a number that is 1 or more, but the save has a "
            + typeof saveData.cookiesPerClick + " with a value of: " + saveData.cookiesPerClick;
    }

    if(typeof saveData.upgradeCost !== "number" || saveData.upgradeCost < 1){
        return "'upgradeCost' should be a number that is 1 or more, but the save has a "  
            + typeof saveData.upgradeCost + " with a value of: " + saveData.upgradeCost;
    }

    if(Array.isArray(saveData.producers) === false){
        return "'producers' should be a list of producers, but the save is " + typeof saveData.producers; 
    }

    for(let savedProducer of saveData.producers){
        if(typeof savedProducer.name !== "string"){
            return "A producer in the save is missing its 'name'.";
        }

        if(typeof savedProducer.count !== "number" || savedProducer.count < 0){
            return savedProducer.name + 
            ": 'count' should be a number that is 0 or more, but the save has: " 
            + savedProducer.count;
        }

        if(typeof savedProducer.cost !== "number" || savedProducer.cost <= 0){
            return savedProducer.name + 
            ": 'cost' should be a number that is more than 0, but the save has: "
            + savedProducer.cost;
        } 

        let found = false;

        for(let producer of producers){
            if(producer.name === savedProducer.name){
                found = true;
            }
        }
        if(found === false){
            return "Unknown producer in the save: '" + savedProducer.name + 
            "'. This game has no producer with that name.";
        }

    }
    return "";

}

function verifySave(){
    let saveData;

    try{
        saveData = JSON.parse(saveText.value);
    }catch(error){
        showStatus("That is not a valid JSON, so it cannot be verified. " + error.message, false);
        return;
    }

    let problem = verifySaveData(saveData);
    if(problem !== ""){
        showStatus("Save failed verification: " + problem, false);
    }else{
        showStatus("Save verified! This save text is safe to load!", true);
    }
}


//RUN EVERY SECOND
setInterval(produceCookies, 1000);

//INITIAL DISPLAY
updateDisplay();

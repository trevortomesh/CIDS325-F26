// Keep track of how many cookies we have
let cookies = 0;
let cookiesPerClick = 1;
let upgradeCost = 10;

let grandmas = 0;
let grandmaCost = 50;

// Get elements from DOM
const cookie = document.getElementById("cookie");
const score = document.getElementById("score");
const perClick = document.getElementById("perClick");
const upgradeButton = document.getElementById("upgradeButton");
const grandmaCount = document.getElementById("grandmaCount");
const grandmaButton = document.getElementById("grandmaButton");

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
        "Grandmas: " + grandmas;
    grandmaButton.textContent = 
        "Buy Grandma (" + grandmaCost + "Cookies)";
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
    if(cookies >= grandmaCost){
        cookies = cookies - grandmaCost;
        grandmas++;
        updateDisplay();
    }
}

// AUTOMATIC COOKIE PRODUCTION

function produceCookies(){
    cookies = cookies + grandmas;
    if(grandmas > 0){
        cookieAnim();
    }
    updateDisplay();
}


//EVENT LISTENERS

upgradeButton.addEventListener("click", buyUpgrade);
cookie.addEventListener("click", clickCookie);
grandmaButton.addEventListener("click", buyGrandma);

//RUN EVERY SECOND
setInterval(produceCookies, 1000);

//INITIAL DISPLAY
updateDisplay();
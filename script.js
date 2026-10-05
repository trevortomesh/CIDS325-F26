// Keep track of how many cookies we have
let cookies = 0;
let cookiesPerClick = 1;
let upgradeCost = 10;

// Get elements from DOM
const cookie = document.getElementById("cookie");
const score = document.getElementById("score");
const perClick = document.getElementById("perClick");
const upgradeButton = document.getElementById("upgradeButton");

perClick.textContent = "Cookies per click: " + cookiesPerClick;

function sayHello(){
    console.log("Hello!");
}

function updateDisplay(){
    score.textContent = "Cookies: " + cookies;
    perClick.textContent = "Cookies per click: " + cookiesPerClick;
    upgradeButton.textContent = 
        "Buy Upgrade (" + upgradeCost + " Cookies)";
}

upgradeButton.addEventListener("click", function(){

    if(cookies >= upgradeCost){
        cookies = cookies - upgradeCost;
        cookiesPerClick++;
        upgradeCost = upgradeCost * 2;
        updateDisplay();
    }
});

let time = 1000;
setInterval(function(){
        // Do something
        console.log("Grandma Time!");
}, time);

// Listen for a click on the cookie
cookie.addEventListener("click", function(){
    // Increase the cookie count

    sayHello();
    cookies += cookiesPerClick;

    // update DOM header
    updateDisplay();

    cookie.classList.add("clicked")
    //cookie.style.width = "180px";
    // const message = document.createElement("p");
    // message.textContent = "+1 Cookie!";
    // document.body.appendChild(message);


    setTimeout(function(){
        cookie.classList.remove("clicked");
    }, 100);

});
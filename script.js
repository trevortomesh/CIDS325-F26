// Keep track of how many cookies we have
let cookies = 0;
let cookiesPerClick = 2;

// Get elements from DOM
const cookie = document.getElementById("cookie");
const score = document.getElementById("score");
const perClick = document.getElementById("perClick");

perClick.textContent = "Cookies per click: " + cookiesPerClick;

function sayHello(){
    console.log("Hello!");
}

function updateDisplay(){
    score.textContent = "Cookies: " + cookies;
    perClick.textContent = "Cookies per click: " + cookiesPerClick;
}

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
// Keep track of how many cookies we have
let cookies = 0;

// Get elements from DOM
const cookie = document.getElementById("cookie");
const score = document.getElementById("score");

// Listen for a click on the cookie
cookie.addEventListener("click", function(){
    // Increase the cookie count
    cookies++;

    // update DOM header
    score.textContent = "Cookies: " + cookies;

    cookie.classList.add("clicked")

    setTimeout(function(){
        cookie.classList.remove("clicked");
    }, 100);

});
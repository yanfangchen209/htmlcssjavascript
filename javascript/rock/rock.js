function greetOnLoad() {
    if (navigator.cookieEnabled) {
        let userName = readCookie("irock_username");
        if (userName) {
            alert("Hello " + userName + ", I missed you.");
        } else {
            alert("Hello, I am your pet rock.");
        }
        console.log("cookie");
    }
}

function handleClick() {
    let userName = readCookie("irock_username");
    if (userName) {
        alert("I'd like the attention." + userName);
    } else {
        userName = prompt("What's your name?");
        if (userName) {
            alert("It is good to meet you, " + userName + ".");
            if (navigator.cookieEnabled) {
                writeCookie("irock_username", userName, 5 * 365);
            } else {
                alert("Sorry, cookies aren't supported/enabled in your browser. I won't remember you later.");
            }
        }
    }

    document.getElementById('rock').src = 'smilingRock.jpg';

    // Set a timer, alert will be executed after 5 seconds
    setTimeout(() => {
        document.getElementById('rock').src = 'originalStock.jpg';
    }, 50000);
}

function setRockSize() {
    console.log(document.body.clientHeight);
    document.getElementById('rock').style.height = (document.body.clientHeight - 100) * 0.9 + "px";
    console.log("test size");
}

// Functions for managing cookies
function writeCookie(name, value, days) {
    let expires = "";

    // Specify a number of days to make the cookie persistent
    if (days) {
        let date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toGMTString();
    }

    // Set the cookie with the name, value, and expiration date
    document.cookie = name + "=" + encodeURIComponent(value) + expires + "; path=/";
}

function readCookie(name) {
    // Find the specified cookie and return its value
    let searchName = name + "=";
    let cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        let c = cookies[i].trim(); // Trim leading spaces
        if (c.indexOf(searchName) === 0) {
            return decodeURIComponent(c.substring(searchName.length, c.length));
        }
    }
    return null;
}

function eraseCookie(name) {
    writeCookie(name, "", -1);
    console.log("Erasing cookie:", name);
}

// Adding event listeners
window.onload = greetOnLoad;
document.getElementById('rock').addEventListener('click', handleClick);
window.addEventListener('resize', setRockSize);
setTimeout(() => {eraseCookie("irock_username")}, 6000);
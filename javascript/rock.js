function greetOnLoad() {
    alert("hello");
}

function handleClick() {
  
    let userName = prompt("what's your name？");
    if(userName){
        //send personalized greeting 
        alert("hello " + userName + " , I am your pet stone.");
        //make rock smile
        document.getElementById('rock').src='smilingRock.jpg';
    }

    //if username is empty, do nothing

    //set a timer, alert will be executed after 5 seconds
    //both setTimeout and setInterval return timer ID which can be used to remove timeout before trigger
    setTimeout("document.getElementById('rock').src='originalStock.jpg'", 5000);

    //interval timer is not suitable for this situation
    //let timerID = setInterval("alert('wake up!')", 5000);

}
//window.onload = ()=>alert(22);

function setRockSize(){
    console.log(document.body.clientHeight);
    document.getElementById('rock').style.height = (document.body.clientHeight - 100) * 0.9 + "px";
    console.log("test size");
    
}

function writeCookie(name, value, days){
    let expire = "";

    //specify a number of days makes the cookie persistent
    if (days) {
        let date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toGMTString();


    }

    //set the cookie to the name, value, and expirationn date
    document.cookie = name + "=" + value + expires + "; path=/";

}


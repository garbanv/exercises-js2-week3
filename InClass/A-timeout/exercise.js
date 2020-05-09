/*
================
EXERCISE 1

Task 1
Using setTimeout, change the background colour of the page after 5 seconds (5000 milliseconds).

Task 2
Update your code to make the colour change every 5 seconds to something different. Hint: try searching for setInterval. (https://www.w3schools.com/jsref/met_win_setinterval.asp)
================
*/

function changeColor() {
    const body = document.querySelector("body");
    setTimeout(function () {
        body.style.backgroundColor = "red"
    }, 5000)
}

function changeColors() {
    const body = document.querySelector("body");
    const colors = ["red", "green", "blue"];
    setInterval(function () {
        colors.forEach(function (color) {
            console.log(color)
            body.style.backgroundColor = color;
        })
    }, 2000)
}

// changeColor()
changeColors()
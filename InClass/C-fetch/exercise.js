/*
================

Create an HTML file that uses this javascript file.
The HTML file should contain a form with 2 inputs: (latitude and longitude), and a button with the text GET.
When you click in the button, you should use fetch function to get information from the URL https://fcc-weather-api.glitch.me/api/current?lat=35&lon=160 with 
user latitude and longitude.
When you get the response from the server, print the current temperature in an <h3> marker.


================
*/


let send = document.querySelector("#send")
let lat = document.querySelector("#lat")
let lon = document.querySelector("#lon")
let temp = document.querySelector("#temp")
let name = document.querySelector("#name")


function getInfo() {
    fetch("https://fcc-weather-api.glitch.me/api/current?lat=" + lat.value + "&lon=" + lon.value)
        .then(response => response.json())
        .then(data => {
            return (temp.innerText = data.main.temp + " °C", name.innerText = data.name + " temp is")
        })

}

send.addEventListener("click", getInfo)
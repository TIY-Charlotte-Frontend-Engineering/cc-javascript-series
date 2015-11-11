/**
 * This file contains all of the Javascript "smarts" for our world-class weather
 * app. The API key below will allow us to fetch up-to-date weather data from an
 * online service called Open Weather Map (http://openweathermap.org/). We'll be 
 * using that data to populate our application.
 *
 * The general flow of this application is as follows, in human-speak:
 *	1. Render the page with placeholders for data (no JS).
 *	2. Once the page is loaded, add an event listener to the "Scan" button so
 *	   that any clicks will run some Javascript.
 *  3. When a user clicks the button, read the value of the text box and use
 *     it to construct an API request to OpenWeatherMap. 
 *  4. When we get a response back from OWM, extract out important fields and
 *     update our HTML.
 *
 *	We'll refer to this as "The Plan" in the comments below.
 */

// You can get your own API key from openweathermap.org by creating an account
// there. Instructions here: http://openweathermap.org/appid#get.
var API_KEY = "8e2d87f18292dd1305f3d6fbde147405";

// Step 4 from The Plan.
// Handler for data response. This is automatically called by our XMLHttpRequest
// object when we receive a response, and extracts + converts important fields
// before handing the key data off to the update() function to modify the user
// interface.
function updateWeather(response) {
    var weather = JSON.parse(response.target.response);

    update({
        location: weather.name,
        temperature: convert(weather.main.temp),
        humidity: weather.main.humidity,
        windSpeed: weather.wind.speed,
    });
}

// Step 4 from The Plan.
// Update the DOM with the new data. We handle all of the conversions, etc in 
// updateWeather(), and this function is responsible for actually inserting
// the new data into the document.
function update(data) {
    var location = document.getElementById('location');
    location.innerText = data.location;

    var temperature = document.getElementById('temperature');
    temperature.innerText = data.temperature;

    var humidity = document.getElementById('humidity');
    humidity.innerText = data.humidity;

    var windSpeed = document.getElementById('wind-speed');
    windSpeed.innerText = data.windSpeed;
}

// Converts Kelvin to Fahrenheit. This function has one input parameter,
// which is a temperature in Kelvin, and outputs one value, a temperature
// in Fahrenheit. This formula is from:
//	http://www.rapidtables.com/convert/temperature/how-kelvin-to-fahrenheit.htm
function convert(kelvin) {
    return Math.round(kelvin * (9 / 5) - 459.67);
}

// Step 3 from The Plan.
// The meat and potatoes of the whole shebang. Make an AJAX request to 
// OpenWeatherMap API and retrieve JSON data. When we get that data, handle 
// it with the updateWeather() function.
//
// You can find out more about the XMLHttpRequest object here:
//	https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
function retrieveWeather() {
	// Get the value of the text box so that we can include it in the URL.
    var place = document.getElementById('search').value;

    // XMLHttpRequest is the Javascript object used to make an asynchronous
    // data request ("AJAX"). Create an XMLHttpRequest object and make a request
    // to OWM weather service.
    var req = new XMLHttpRequest();
    req.onload = updateWeather;
    req.open('GET', 'http://api.openweathermap.org/data/2.5/weather?q=' + place + '&appid=' + API_KEY);
    req.send();
}

// Step 2 from The Plan.
// Get the submit button and attach a click event listener to it. When a 
// user clicks submit, run "retrieveWeather".
function initialize() {
    var submitButton = document.getElementById('submit');
    submitButton.addEventListener('click', retrieveWeather);
}

// Step 2 from The Plan.
// When the window loads, run "initialize". We need to wait for the window
// to finish loading because the #submit element will not exist when this
// Javascript file is executed.
window.addEventListener('load', initialize);
# Javascript series
This repository contains starter and final content for each of our JS-focused crash course events in Charlotte, NC. Note that this is finished code (not necessarily in the state where we finished in class), though we'll try to add comments to explain any important differences.

Links to specific sessions:
- [November 9, 2015 @ Packard Place](https://github.com/TIY-Charlotte-Frontend-Engineering/cc-javascript-series/tree/2015-11-09)
- [All](https://github.com/TIY-Charlotte-Frontend-Engineering/cc-javascript-series/branches)

To learn more about the Iron Yard in Charlotte, check out [our website](http://theironyard.com/locations/charlotte/) or [get in touch with us](mailto:wes@theironyard.com).

### Follow-ups
After attending a session, you may be interested in learning more about particular topics. Here are some links that can help you find more about topics we covered in class; generally speaking there's a ton of stuff available online for everything related to Javascript so feel free to dig around on your favorite search engine if these links don't do it for you. If there's anything you think would be good to add here, please let us know.

#### DOM: document object model
The DOM is the data that a web browser uses to render (display) a web page. HTML informs the browser about what content should be put into the DOM, but cannot change it once it's been added. Javascript has full access to the DOM and can modify it (add new elements to it, change existing elements, and delete elements). Mozilla has written a [fairly approachable intro to the DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction).

Note that the DOM and Javascript are independent technologies; the DOM isn't part of Javascript, and Javascript isn't part of the DOM. However, Javascript has functionality built-in that allows programmers to interact with the DOM, and it's the most common language used in manipulating DOM's since it's the only widely supported language on the web.

Interacting with the DOM is very common in Javascript and something that's important for all web developers to understand.

#### Data types in Javascript
Javascript has primitive and complex data types; see the [full list here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures). Primitive types, which are types of data that have a single value, include things like numbers, strings (text), and boolean values (true / false). *Objects* are the sole complex data type in Javascript, but can be used for all sorts of things. The important thing to understand about objects is that they can contain multiple values (including other objects!). In the crash course exercises we see the pre-defined XMLHttpRequest object, but it's also possible to create your own object types (such as a "user" object for your web app that might include a username, the last date that they logged in, and other account-level information).

**Why do data types exist?** The answer can get pretty nerdy pretty quickly, but the short answer is that data types give the computer hints about how information should be stored and what operations can be performed on a piece of data. For example, the "+" sign indicates addition for numbers, and [concatenation](https://en.wikipedia.org/wiki/Concatenation) for strings. 

How we as developers choose to represent our data with the native data types can have a profound impact on the performance and structure of our applications.

#### XMLHttpRequest
[XMLHttpRequest](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest) is a widely-supported API for requesting information from a web server without refreshing the page. It is an extremely common tool for building [AJAX applications](https://developer.mozilla.org/en-US/docs/AJAX/Getting_Started) and allows you to perform user actions (saving information, refreshing
data, etc) without going through a full page refresh.

The name 'XMLHttpRequest' is complicated but this is the object to use whenever you need to request data from an API or server without refreshing the page.

You need to do a few things to create a new XMLHttpRequest in your app:
- `var request = new XMLHttpRequest()` - create an XMLHttpRequest object that has all of the functionality you need built-in. This will return an object, which you'll probably want to store in a variable (we call it `request` here but any name will do).
- `request.onload = <some function>` - set the *callback function* that'll handle the response when it comes in. XMLHttpRequests involve making requests to a server somewhere on the internet, which takes time. You don't want to sit around waiting for the response, so instead you tell the XMLHttpRequest what to do when it hears back and go on your way. Think of callbacks as leaving a note with a secretary that says "in case I get a delivery, do X." When the delivery comes in, they'll know exactly what to do. 
- `request.open(method, url)` - open a connection to the specified URL using some [HTTP method](http://www.w3schools.com/tags/ref_httpmethods.asp). The most common methods are GET (retrieve data) and POST (store data), but the method to use will usually be specified by the API you're using.
- `request.send()` - indicate that you're done setting things up and that it's time to make the request.

There are plenty of other options you can configure if the circumstances require it, but the four steps discussed above will be present for all XMLHttpRequests that you make. See the [documentation](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest) for the full list of options.

#### API's
API stands for "application programming interface", and API's generally provide a documented way for developers to connect applications to each other. There are many, many API's publicly available today, and companies often create their own internal API's that different frontends (websites, mobile apps, etc) can connect to. We used two different API's in the weather app crash course: Javascript's DOM API (via the `window` and `document` objects), which allows us to interface with the DOM that your web browser is maintaining, and OpenWeatherMap's API (via our `XMLHttpRequest`), which allows us to interface with OpenWeatherMap's real-time weather data.

Note that though the methods we use to access the API's differ, both of these provide access to functionality or data that's maintained elsewhere (in your web browser and OWM's servers, in this case).

API's make it much easier to build new products that use existing services; for example, many web pages use Facebook or Google's authentication API to log users in instead of building their own tools for authenticating and verifying users. Similarly, anyone can put weather data in their app using OWM's API without building their own weather station. 

Here are a few interesting API's to get you started, but if you search the web you'll literally find hundreds more.
- [Google Maps API](https://developers.google.com/maps/?hl=en) - add maps to your application
- [Facebook API's](https://developers.facebook.com/) - access Facebook data and features (login, for example)
- [US Census API](http://www.census.gov/data/developers/data-sets.html) - access government data related to population breakdowns, various geographic services, employment metrics, and other facts of national interest
- [OpenWeatherMap API](http://openweathermap.org/api) - real-time weather data as well as forecasts
- [Parse](https://parse.com/) - service that allows you to easily create databases, push notifications, analytics, and other useful features to your application

[Here's a good starting point](https://www.publicapis.com/) for the wealth of other API's out there.
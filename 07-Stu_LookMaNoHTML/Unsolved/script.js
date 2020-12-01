// Create your HTML Page via DOM Methods here!
var body = document.body;
    // Have to call entire body element before adding elements to it

// Create all elements for the page 
// A centered h1 with a centered h2 under it.
var H1Element = document.createElement('h1');
var H2Element = document.createElement('h2');

var imgDiv = document.createElement("div");
var pic = document.createElement("img");
var picCaption = document.createElement("figcaption");

var listDiv = document.createElement("div");
var orderedList = document.createElement("ol");
var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");

// Storing all list items in a variable 
var listItems = document.getElementsByTagName("li");

// Setting text content for all elements that need text in order to display in web browser 
H1Element.textContent = "This is the H1";
H2Element.textContent = "This is the H2";
picCaption.textContent = "This is the caption underneath an image";
orderedList.textContent = "Here's a list of 3 foods I enjoy";
li1.textContent = "Cheeseburger";
li2.textContent = "Broccoli";
li3.textContent = "Chocolate Chip Cookies";

//Append all elements to the DOM
body.appendChild(H1Element);
body.appendChild(H2Element);
body.appendChild(imgDiv);
imgDiv.appendChild(pic);
imgDiv.appendChild(picCaption);
body.appendChild(listDiv);
listDiv.appendChild(orderedList);
orderedList.appendChild(li1);
orderedList.appendChild(li2);
orderedList.appendChild(li3);


//Style all elements 
H1Element.setAttribute("style", "font:helvetica; color:blue; text-align:center;");
H2Element.setAttribute("style", "font:helvetica; color:green; text-align:center;");
imgDiv.setAttribute("style", "margin:10px; background:yellow;");
picCaption.setAttribute("style", "font:helvetica; color:blue-green;");
listDiv.setAttribute("style", "text-align:center; font-size:20px");

// It's not styled attractively, but hey, it's styled! 
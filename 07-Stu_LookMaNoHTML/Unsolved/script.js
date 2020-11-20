// Create your HTML Page via DOM Methods here!
var body = document.body
    // Have to call entire body element before adding elements to it

var newHeadingH1 = document.createElement('h1');

    //attempting to set the h1 heading to be centered as requested
newHeadingH1 = document.setAttribute("style", "text-align=center");
    //wrong order

    //trying to make the centered h2
var newHeadingH2 = document.createElement('h2');


// need to append the headers to the DOM aka the HTML aspect of this file

//then I can style each one individually - after appending
newHeadingH1.setAttribute("style", "text-align: center;");
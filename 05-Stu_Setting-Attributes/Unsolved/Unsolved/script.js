
// Give a `src` and `alt` attribute to the 3 provided `img` tags.
var pics = document.querySelectorAll("img");
pics[0].setAttribute("src", "images/image_1.jpg");
pics[0].setAttribute("alt", "Man staring at computer");
pics[1].setAttribute("src", "images/image_2.jpg");
pics[1].setAttribute("alt", "People mostly standing in a conference room");
pics[2].setAttribute("src", "images/image_3.jpg");
pics[2].setAttribute("alt", "People working & smiling around a table");

// Give a `href` attribute to the 3 provided `a` tags.
var aTags = document.querySelectorAll("a");
aTags[0].setAttribute("href", "https://www.google.com");
aTags[1].setAttribute("href", "https://www.google.com");
aTags[2].setAttribute("href", "https://www.google.com");

// Add styles via `setAttribute` to make the page look decent. 
    // Recommended: margins and padding.
var divs = document.querySelectorAll("div");
for (var i = 0; i < divs.length; i++) {
    divs[i].setAttribute("style", "background:pink; color:purple; padding:20px;");
}


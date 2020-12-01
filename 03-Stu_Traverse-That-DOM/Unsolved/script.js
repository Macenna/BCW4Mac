// Target the div with the ID of articles.
var articleDiv = document.getElementById("articles");
    // Getting the "articles" div 
// Change its font size to 50px.
articleDiv.children[0].style.fontSize = "50px";
    // Styling the set var (that contains the articles div) to 50px font 

// Change its first childs, last child to have a font color of blue.
articleDiv.children[0].lastElementChild.style.color = "blue";

// Change its previous sibling to have a background color of black.
articleDiv.previousElementSibling.style.background = "black";


// Target the div with the ID of main.
var mainDiv = document.getElementById("main");

// Change its second child node so the text is underlined.
mainDiv.childNodes[1].style.text = "underlined";

// Change its last child element to have a font size of 50px.
mainDiv.lastElementChild.style.fontSize = "50px";

// Change its first child element to have a font color of orange.
mainDiv.firstElementChild.style.color = "orange";

// Change its last child elements parent to have a font size of 40px.
mainDiv.lastElementChild.parentElement.style.fontSize = "40px";

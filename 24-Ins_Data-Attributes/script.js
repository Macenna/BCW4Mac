var imageContainer = document.querySelector(".img-container");

imageContainer.addEventListener("click", function(event) {
  var element = event.target; //turns every click event into an element to shorthand the code 

  if (element.matches("img")) { //get element 
    var state = element.getAttribute("data-state"); //get element's data state to let user know which state 

    if (state === "still") {  // If still, set to animate
      element.setAttribute("data-state", "animate");
      element.setAttribute("src", element.getAttribute("data-animate"));  //gets the element you want to set, the source tag, attribute, & changes to the animate state  
    } else if (state === "animate") { // If animate, set to still img attribute 
      element.setAttribute("data-state", "still");
      element.setAttribute("src", element.getAttribute("data-still"));  //sets the src to the still version by calling that attribute 
    }
  }
});

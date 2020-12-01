var themeSwitcher = document.querySelector("#theme-switcher");  // from checkbox input 
var container = document.querySelector(".container");           // All of the HTML is essentially in this div named container 
var mode = "dark";                                              // Web page opens in dark mode 

themeSwitcher.addEventListener("click", function() {            // Theme element calls eventListener method which is activated by a click (1st parameter)
  if (mode === "dark") {                                        // Second Parameter is an entire function that contains an if/else statement 
    mode = "light";                                                 // - the addEventListener method doesn't close () until after the entire 2nd parameter function is written out 
    container.setAttribute("class", "light");                   // The classes are styled in the linked external css file & connected to bootstrap 
  }                                                                 // So this means more than it lets on based on commands 
  else {
    mode = "dark";
    container.setAttribute("class", "dark");
  }
});
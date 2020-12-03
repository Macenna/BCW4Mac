var outer = document.querySelector(".outer-div");
var inner = document.querySelector(".inner-div");
var button = document.querySelector(".button");

function changeBlue(event) {
  // event.stopPropagation();
  event.currentTarget.setAttribute(
    "style",
    "background-color: blue"
  );
}

function changePurple(event) {
  // event.stopPropagation();
  event.currentTarget.setAttribute(
    "style",
    "background-color: purple"
  );
}

function changeOrange(event) {
  // event.stopPropagation();
  event.currentTarget.setAttribute(
    "style",
    "background-color: orange"
  );
}

outer.addEventListener("click", changeOrange);
inner.addEventListener("click", changePurple);
button.addEventListener("click", changeBlue);

// Without the event.stopPropagation();, 
  // clicking the innermost div button activates the event for the parent divs at the same time 

// With the event.stopPropogation, 
  // clicking the innermost div's button will not also activate the event functions for the 2 parent divs 
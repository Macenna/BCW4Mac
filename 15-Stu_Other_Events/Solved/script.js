var eventType = document.querySelector("#event-type"); 
var mouseEventsEl = document.querySelector("#click-events");
var keyEventsEl = document.querySelector("#key-events");

function toggleDisplay(event) { // Get the event type 
  var value = event.target.value;
  if(value === "keydown") {
    mouseEventsEl.classList.add("hide");
    keyEventsEl.classList.remove("hide");
  }
  else {
    mouseEventsEl.classList.remove("hide"); //Adding & removing classes 
    keyEventsEl.classList.add("hide");
  }
}

function keydown(event) {
  var keyPress = event.key;   //Once we pass an event key, there is event code 
  var keyCode = event.code;
  document.querySelector("#key").textContent = keyPress;    //Get the key ID and put the key press info in text content 
  document.querySelector("#code").textContent = keyCode;    //Same as ^ but under the press info 
  document.querySelector("#status").textContent = "KEYDOWN Event";
}

function keyup() {
  document.querySelector("#status").innerHTML = "KEYUP Event";
}

function click(event) {
  var target = event.target.textContent;
  var x = event.clientX;
  var y = event.clientY;
  document.querySelector("#target").textContent = target; //Where and what file user clicked spatially on web browser 
  document.querySelector("#x").textContent = x; // Pushing it down and manipulating the text content 
  document.querySelector("#y").textContent = y;
}

document.addEventListener("keydown", keydown); 
document.addEventListener("keyup", keyup);
document.addEventListener("click", click); //console.log the event of the click and see where user clicked
eventType.addEventListener("change", toggleDisplay);
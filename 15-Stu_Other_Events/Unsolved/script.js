var eventType = document.querySelector("#event-type");          // This is the selection menu that leads to 2 types of event options 
var mouseEventsEl = document.querySelector("#click-events");    // This is one of the two event options 
var keyEventsEl = document.querySelector("#key-events");        // This is the other event option
                                                                    // These are the only elements that need to be called globally (other vars to be manipulated will be called locally in functions)
function toggleDisplay(event) {               // Select element -> toggleDisplay = switching between options displayed on browser
  var value = event.target.value;             // "value" attributes are connected to both of the event type options  -- event.target - returns the element that triggered the event 
  if(value === "keydown") {                   // "keydown" value is defined in HTML 
    mouseEventsEl.classList.add("hide");      // Hide the other option (not clicked on by user) from being displayed on browser 
    keyEventsEl.classList.remove("hide");     // Displays class list for the key events -- classList is defined in HTML 
  }                                               // .classList is the meta data that will be displayed when the event occurs 
  else {                                              // The list of meta data "keys" will be displayed in browser; the properties of the meta data will display once event occurs 
    mouseEventsEl.classList.remove("hide");
    keyEventsEl.classList.add("hide");
  }
};

// Key down event - function - event occurs when the user is pressing a key
  // Event's code, key, and status (keydown or keyup) should be displayed in the `#key-events` div
function keyDown (event) {                    // Parameter of this function is a key being pushed  - how is this defined tho 
    // 2 local variables valued at the event's metadata 
  var keyPress = event.key;                   // .key -> Returns the key value of the key represented by the event - parameter calls this property/method - it's a function in itself 
  var keyCode = event.code;                   // .code -> Returns the code of the key that triggered the event

    // Both event functions are defined ^ so now their text content needs to be displayed on browser 
  document.getElementById("#key").textContent = keyPress;     // Displays value of local variable (meta data stating which key was pressed) as the text content following the "Key Pressed:" line on the browser 
  document.getElementById("#code").textContent = keyCode;         // The <span> tags in the HTML are placeholders for this meta data to be displayed as text content 
  document.getElementById("#status").textContent = "Keydown Event";
};

// Key up event function - necessary b/c this event occurs when the user releases a key
// The key down function is important b/c it sets up all of the metadata but technically ends when user stops pushing down on keyboard 
// The key up event function just changes the 3rd piece of metadata as user lifts hand from keyboard - this keeps the other 2 pieces of metadata as executed 
function keyUp () {                                 // No event parameter here b/c this basically serves as a closing function to the event that just occured 
  document.getElementById("#status").innerHTML = "Keyup Event";
};


// Click Event - Other menu option on browser 
function click(event) {
  // 3 local variables that are the metadata displayed on the browser for click events (defined in HTML)
  var target = event.target.textContent;              // Displays target metadata for each click event - just keeps adding info to the browser each event 
  var x = event.clientX;                              // event.clientX => user's x coordinate of click location as browser is clicked 
  var y = event.clientY;

  // DOM Manipulation to get local metadata to display on browser 
  document.getElementById("#target").textContent = target;        // Renders metadata to the browser in span tags, individually ID'd for each piece of metadata 
  document.getElementById("#x").textContent = x;                      // Valued as the local vars recently defined b/c those methods return the pieces of meta data to be displayed on the webpage 
  document.getElementById("#y").textContent = y; 
};


// Call the document's eventListener method to attach an event handler to the document 
    // Connect the event's function to the element it's meant to execute w/in
document.addEventListener("keydown", keyDown);
document.addEventListener("keyup", keyUp);
document.addEventListener("click", click);
eventType.addEventListener("change", toggleDisplay);

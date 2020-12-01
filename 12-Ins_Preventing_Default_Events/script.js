// .querySelector(w/ an ID name) returns the element itself - 
  // .getElementById(w/ ID name) returns an element object representing the element where the ID property matches the specified string 
var submitEl = document.querySelector("#submit");
var nameInput = document.querySelector("#name");
var emailInput = document.querySelector("#email");
var submissionResponseEl = document.querySelector("#response");

submitEl.addEventListener("click", function(event) {
  event.preventDefault();

  console.log(event);
  
  var response = "Thank you for your submission " + nameInput.value + "! We will reach out to you at " + emailInput.value + ".";
  submissionResponseEl.textContent = response;
});

// W/ "event" as the parameter, when clicking the submit button, the preventDefault makes the click do what the function says rather than what it would normally do 
  // In this case, the click submit button event:
    // Console logs the event 
    // Response var is created -> links to the h4 element of HTML to display user's submission on the web page w/ a message 
      // Nothing else happens to information input by user
  
      // Response var calls the values of the elements that require input from the user to display them as text content w/in a string 
  // submissionResponseEl (h4 tag) is manipulated to become the response variable's text content as a full sentence, displayed to the user 
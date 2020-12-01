var poem = "Some say the world will end in 🔥, Some say in ice. From what I’ve tasted of desire, I hold with those who favor fire. But if it had to perish twice, I think I know enough of hate. To say that for destruction ice, Is also great, And would suffice.";
var words = poem.split(" ");
  // poem.split -> separates string word for word 

var mainElement = document.getElementById("main");      // The 3rd element, h3 in HTML
var readerElement = document.getElementById("read");    // Element unlisted on HTML
var timerElement = document.getElementById("countdown"); // The 2nd element, h2 on the HTML
var body = document.createElement("div");                // Creating div element 

var i = 0;    // Interval for prepareRead function

var perWord = prompt("How many milliseconds between words would you like?");

function prepareRead() {
  // The countdown timer.
  var timeLeft = 5;

    // variable valued as a function w/ an interval that counts down w/ text content letting user know how many seconds left 
  var timerInterval = setInterval(function() {
    timerElement.textContent = timeLeft + " seconds left until speed reading.";
    timeLeft--;

      // timerInterval var also contains an if statement that is conditioned to execute when there are no seconds remaining in the timer interval 
        // The speedRead function is called in this if statement 
    if (timeLeft === 0) {
      timerElement.textContent = "";
      speedRead();
      clearInterval(timerInterval);   // clearInterval function is set to clear the timerInterval variable itself - it erases itself 
    }

  }, 1000);
};

function speedRead() {
  // Print words to the screen one at a time.
  mainElement.append(body);
    // Appends the body element to the main each time this function is executed 

  var poemInterval = setInterval(function() {   // set variable poemInterval to a set interval function 
    if (words[i] === undefined) {               // if words (which = the poem string split by each word) runs out, then this if statement is executed 
      clearInterval(poemInterval);              // clearInterval is a set method - poemInterval is this variable currently "in"
    } else {
      mainElement.textContent = words[i];            // Setting the main element = to each word index as else statement is executed 
      i++;                                      // i++ -> iterate forward through words split string 
    }

  }, perWord);                                  // perWord variable is the other parameter for the setInterval function
                      // The var poemInterval is valued at a setInterval function w/ another function that contains an if statement as one parameter, and the answer to the perWord prompt as the other parameter 
};

prepareRead();        // calling this function w/o any arguments

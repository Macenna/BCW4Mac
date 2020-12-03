// Global elements being manipulated for carousel functionality 
var carousel = document.querySelector(".carouselbox");       // This is the element constantly being manipulated 
var nextBtn = carousel.querySelector(".next");
var prevBtn = carousel.querySelector(".prev");

// Set div default 
carousel.style.backgroundImage = "url('https://picsum.photos/300/200')";
// Set index for array that will be manipulated 
var index = 0; 
// Create array of images to be flipped through - Every index of this array is an href link which leads to a photo
var images = [
    "https://picsum.photos/300/200",
    "https://picsum.photos/300/201",
    "https://picsum.photos/300/202",
    "https://picsum.photos/300/203"
];

// Create undefined var - value will be manipulated through a function 
var imageDisplayed;

// Function that flips through photos 
function flipThru (direction) {
    // Global var's value manipulated locally 
    index = index + direction;
    // if statement to loop through photos in a circle 
    if (index < 0) {                        // If index is less than index value 0 - if flipping previously from index 0, start flipping from the last image in the array 
        index = images.length - 1;          // Continue decrementing through images array, backwards, starting at last image 
    }
    else if (index > images.length -1 ) {   // If pushing next at the last image in the array, restart cycle at index 0
        index = 0;                              // This "resets" carousel at index 0, to begin again 
    }
    // Adding a local value to a global variable 
    imageDisplayed = images[index];
    // Manipulating DOM to change the set background image value (to another in the array), based on the value of local var ^ that changes each time function runs 
    carousel.style.backgroundImage = "url('" + imageDisplayed + "')";
        // Each time direction changes, value of imageDisplayed changes to match the value of the 'images' array index to the next/prev index
};

// Click event to listen for added to carousel element 
carousel.addEventListener("click", function () {    // When the carousel is clicked,
    window.location.href = images[index];           // href of the image changes to match the href link of the image currently displayed in the window 
});

// Next element linked to call a function w/ the event parameter & flip function called locally - when next button is clicked 
nextBtn.onclick = function(event) {
    // Click event's default process needs to be cancelled in order for flipThru function to work 
    event.stopPropagation();
    // Call flip function so onclick event calls function made to loop through carousel indefinitely 
    flipThru(1);                    // Calls flipThru function w/ argument of 1, meaning move through carousel by 1 index, forward
};

// Prev element linked to click event, stops default carousel settings, calls flip function to allow photos to be indefinitely looped through, backwards
prevBtn.addEventListener("click", function(event) {
    // Keeps carousel from only allowing user to flip back and forth through array, allows looping through 
    event.stopPropagation();
    // Call function created for indefinite looping 
    flipThru(-1);                   // Decrements through images array based on function statements 
});

flipThru(0); 
    // Calls function at 'beginning' of carousel - gets the ball rolling!

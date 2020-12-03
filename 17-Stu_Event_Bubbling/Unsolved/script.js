// Global elements being manipulated for carousel functionality 
var carousel = getElementByClass(".carouselbox");       // This is the element constantly being manipulated 
var prevBtn = getElementByClass(".prev");
var nextBtn = getElementByClass(".next");
// Set div default 
carousel.style.backgroundImage = "url('https://picsum.photos/300/200')";
// Set index for array that will be manipulated 
var index = 0; 
// Create array of images to be flipped through
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


//function navNext () {
//   carousel.
//}

//nextBtn.carousel("next");
//prevBtn.carousel("prev");
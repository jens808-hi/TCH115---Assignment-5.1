// Create the audio object once with the provided audio file
let audio = new Audio("./music/blue-island-144122 hawaii music.mp3");  

// Function to start playing the music
function playOn() {
    var buttons = document.querySelectorAll("button"); // Select all button elements in the document

    buttons.forEach(button => { // Loop through each button and add a click event listener
        button.addEventListener("click", () => {
            if (audio.paused) { // Only play the audio if it's currently paused to avoid playing it multiple times
                audio.play(); // Play the audio
            }
        });
    });
}

// Ensure slideshow starts after DOM content is fully loaded
document.addEventListener("DOMContentLoaded", function() {
    showSlides(); // Calls the slideshow slides once the DOM content is loaded
});

let slideIndex = 0;

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  // Hide all slides initially
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  
  // Increment slide index and reset to 1 if it goes beyond the number of slides
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;    
  }    

  // Remove "active" class from all dots
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  // Show the current slide and add "active" class to the corresponding dot
  slides[slideIndex - 1].style.display = "block";  
  dots[slideIndex - 1].className += " active";

  // Set a timeout to call the function again after 2 seconds
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

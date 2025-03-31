// Create the audio object once with the provided audio file
let island1Music = new Audio("./music/blue-island-144122 hawaii music.mp3");  
let island2Music = new Audio("./music/island luau music.mp3"); // Change this to your second music file 

 // Function to play Island Music
 function playOn() {
    if (island1Music.paused) {
        island1Music.play();
        island2Music.pause(); // Stop the other music
        island2Music.currentTime = 0; // Reset the other music
    } else {
        island1Music.pause();
    }
}

// Function to play Ocean Waves
function playOn2() {
    if (island2Music.paused) {
        island2Music.play();
        island1Music.pause(); // Stop the other music
        island1Music.currentTime = 0; // Reset the other music
    } else {
        island2Music.pause();
    }
}

// Menu pop-up functionality
function showMenuDetails(item) {
    const popup = document.getElementById('menu-popup');
    const title = document.getElementById('popup-title');
    const description = document.getElementById('popup-description');
    
    if (item === 'poke') {
        title.textContent = "Poke Bowl";
        description.textContent = "A delicious Hawaiian dish with fresh fish, rice, and toppings.";
    }

    popup.style.display = 'flex';
}

function closePopup() {
    document.getElementById('menu-popup').style.display = 'none';
}

// Payment form dummy storage (for now)
function storePaymentInfo(event) {
    event.preventDefault();
    alert("Payment info stored (no real transaction).");
}

// Review submission (store dummy content)
document.getElementById('review-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Review submitted!');
});

// Contact form submission (store dummy content)
document.querySelector('#contact form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Message sent!');
});
let slideIndex = 0;

function showSlides() {
    let slides = document.getElementsByClassName("mySlides");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.display = "block";  
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}

showSlides(); // Start slideshow on page load
// Scroll to the specific page when clicking 'Explore More'
document.querySelector('button').addEventListener('click', function() {
    window.location.href = 'menu.html'; // Modify this link based on your page
});
// Cart array to store selected items
let cart = [];

function addToCart(item) {
    cart.push(item);
    alert(item + " added to cart!");
    updateCart();
}

// Function to update the cart display (could be a simple alert for now)
function updateCart() {
    console.log("Current Cart:", cart);
}
// Function to complete the order and show the receipt
function completeOrder() {
    // Get customer info
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    // Calculate total (dummy content, assuming each item costs $10)
    let totalAmount = cart.length * 10;

    // Show the order receipt
    document.getElementById('receipt-items').innerText = cart.join(', ');
    document.getElementById('total-amount').innerText = "$" + totalAmount;
    document.getElementById('pickup-time').innerText = "15 minutes from now";

    document.getElementById('order-receipt').style.display = "block";

    // Clear cart after order
    cart = [];
    updateCart();
}
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}


function openContactForm() {
    document.getElementById('contactForm').classList.add('show');
}
function closeContactForm() {
    document.getElementById('contactForm').classList.remove('show');
}
function showReviewForm() {
    document.getElementById('reviewForm').style.display = 'block';
}
function submitReview() {
    let name = document.getElementById('name').value;
    let message = document.getElementById('message').value;
    let rating = document.getElementById('rating').value;
    let recommend = document.getElementById('recommend').checked ? 'Recommended' : 'Not Recommended';
    
    if (name && message) {
        let reviewContainer = document.getElementById('reviews');
        let review = document.createElement('div');
        review.classList.add('review-item');
        review.innerHTML = `<strong>${name}</strong> - ${rating} Stars<br>${message}<br><em>${recommend}</em>`;
        reviewContainer.appendChild(review);
        
        document.getElementById('reviewForm').reset();
        document.getElementById('reviewForm').style.display = 'none';
    } else {
        alert('Please fill out all fields.');
    }
}
function confirmOrder() {
    let confirmation = confirm("Are the items and total price correct? Click Yes to proceed or No to go back.");
    if (confirmation) {
        alert("Your payment has been processed. Thank you for your order!");
    }
}
 
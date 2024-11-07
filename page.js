let currentSlide = 0;
const slides = document.querySelectorAll('.banner-slide');

function showSlide(index) {
    // Hide all slides
    slides.forEach(slide => {
        slide.style.display = 'none';
    });

    // Show the slide at the current index
    slides[index].style.display = 'block';
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length; // Loop back to first slide
    showSlide(currentSlide);
}

// Show the first slide
showSlide(currentSlide);

// Change slides every 5 seconds
setInterval(nextSlide, 5000);

// Array to store feedbacks in localStorage
let feedbackArray = JSON.parse(localStorage.getItem('feedbackData')) || [];

// Add event listener to the feedback form
document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    
    // Capture form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const mobile = document.getElementById('mobile').value;
    const message = document.getElementById('message').value;
    
    // Create a feedback object
    const feedback = {
        name: name,
        email: email,
        mobile: mobile,
        message: message
    };

    // Add the feedback object to the feedback array
    feedbackArray.push(feedback);

    // Store the updated feedback array in localStorage
    localStorage.setItem('feedbackData', JSON.stringify(feedbackArray));

    // Clear the form after submission
    document.getElementById('feedbackForm').reset();

    // Redirect to the feedback page
    window.location.href = "feedback.html";
});




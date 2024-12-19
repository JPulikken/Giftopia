document.addEventListener('DOMContentLoaded', () => {
    // Carousel functionality
    const images = document.querySelectorAll('.carousel-image');
    let currentIndex = 0;

    function showNextImage() {
        images[currentIndex].classList.remove('active');
        images[currentIndex].classList.add('previous');
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].classList.remove('previous');
        images[currentIndex].classList.add('active');
    }

    // Initialize the first image as active
    images[currentIndex].classList.add('active');

    // Set interval to change image every 2 seconds
    setInterval(showNextImage, 2000);
});

document.addEventListener("DOMContentLoaded", function () {
    // List of background images
    const images = ["1.jpg", "2.jpg", "3.jpg","4.jpg", "5.jpg", "6.jpg"];

    // Reference to the background container
    const backgroundContainer = document.querySelector(".home-banner");

    let index = 0;

    function changeBackground() {
        backgroundContainer.style.backgroundImage = `url('${images[index]}')`;

        // Increment the index, reset to 0 if it exceeds the number of images
        index = (index + 1) % images.length;
    }

    // Change the background every 2 seconds
    setInterval(changeBackground, 200);
});

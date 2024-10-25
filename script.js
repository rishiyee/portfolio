// script.js

window.addEventListener('scroll', function() {
    // Get the current scroll position
    const scrollPosition = window.scrollY;

    // Calculate dynamic padding based on scroll position
    // Modify this factor to control sensitivity
    const maxPadding = 170; // Maximum padding at the start
    const minPadding = 0; // Minimum padding at scroll end
    const paddingValue = Math.max(minPadding, maxPadding - scrollPosition);

    // Set padding to each image element
    document.getElementById('image1').style.paddingTop = `${paddingValue}px`;
    document.getElementById('image2').style.paddingTop = `${Math.max(minPadding, paddingValue / 2)}px`;
    document.getElementById('image3').style.paddingTop = `${Math.max(minPadding, paddingValue / 4)}px`;
    document.getElementById('image4').style.paddingTop = `${Math.max(minPadding, paddingValue / 2)}px`;
    document.getElementById('image5').style.paddingTop = `${paddingValue}px`;
});


// script.js

window.addEventListener('DOMContentLoaded', () => {
    const strikeText = document.getElementById('strike-text');
    
    setTimeout(() => {
        strikeText.classList.add('line-stroke');
    }, 5000); // 5000 ms = 5 seconds
});

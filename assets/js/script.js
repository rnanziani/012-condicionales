// Get the image element
const toggleImage = document.getElementById('toggle-image');

// Add click event listener to toggle the border
toggleImage.addEventListener('click', function() {
    // Check if the image has a red border
    if (this.style.border === '2px solid red') {
        // If it has a border, remove it
        this.style.border = 'none';
    } else {
        // If it doesn't have a border, add a red border
        this.style.border = '2px solid red';
    }
});
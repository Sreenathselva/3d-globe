// Array of all available images for Nigeria
const nigeriaImages = [
    'images/logos/nigeria/kia-4.svg',
    'images/logos/nigeria/kuschel-rock-12.svg',
    'images/logos/nigeria/lamborghini.svg',
    'images/logos/nigeria/lightroom-cc.svg',
    'images/logos/nigeria/rolling-rock-2.svg',
    'images/logos/nigeria/suzuki-12.svg'
];

function getRandomBox(boxes) {
    return boxes[Math.floor(Math.random() * boxes.length)];
}

function getRandomImage(currentSrc) {
    let newImage;
    do {
        newImage = nigeriaImages[Math.floor(Math.random() * nigeriaImages.length)];
    } while (newImage === currentSrc); // Ensure we don't pick the same image
    return newImage;
}

function updateCountryBoxImages(countryCode) {
    const boxes = document.querySelectorAll(`.country-boxes[data-place="${countryCode}"] .country-box img`);
    
    // Initial load of images
    boxes.forEach((box, index) => {
        box.src = nigeriaImages[index % nigeriaImages.length];
    });

    // Function to update a single random box
    function updateRandomBox() {
        const box = getRandomBox(Array.from(boxes));
        box.style.opacity = '0';
        
        setTimeout(() => {
            box.src = getRandomImage(box.src);
            box.style.opacity = '1';
        }, 200);
    }

    // Update a random box every 800ms
    setInterval(updateRandomBox, 800);
}
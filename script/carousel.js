// Object containing image arrays for each country
const countryImages = {
    nigeria: [
        'images/logos/nigeria/kia-4.svg',
        'images/logos/nigeria/kuschel-rock-12.svg',
        'images/logos/nigeria/lamborghini.svg',
        'images/logos/nigeria/lightroom-cc.svg',
        'images/logos/nigeria/rolling-rock-2.svg',
        'images/logos/nigeria/suzuki-12.svg',
        'images/logos/nigeria/Amazon.png.png',
        'images/logos/nigeria/Audi.png.png',
        'images/logos/nigeria/Baskin-Robbins.png.png',
        'images/logos/nigeria/Carrefour.png.png',
        'images/logos/nigeria/Eight.png.png',
        'images/logos/nigeria/FedEx.png',
        'images/logos/nigeria/Gamecube.png.png',
        'images/logos/nigeria/NBC.png.png',
        'images/logos/nigeria/New-Man.png.png',
        'images/logos/nigeria/Roxy.png.png',
        'images/logos/nigeria/Sony-Vaio.png.png',
        'images/logos/nigeria/Tour-de-France.png.png'
    ],
    egypt: [
        'images/logos/egypt/Abbott-Laboratories-Medical-Logos-768x432.png',
        'images/logos/egypt/Air-Memphis-Logo-768x432.png',
        'images/logos/egypt/EgyptAir-Logo-768x432.png',
        'images/logos/egypt/GE-Healthcare-Medical-Logos-768x432.png',
        'images/logos/egypt/IndiGo-Logo-768x483.png',
        'images/logos/egypt/Novartis-Medical-Logos-768x432.png',
        'images/logos/egypt/Pfizer-Medical-Logos-768x432.png',
        'images/logos/egypt/Sanofi-Medical-Logos-768x432.png'
    ],
    india: [
        'images/logos/india/Amazon.png.png',
        'images/logos/india/Audi.png.png',
        'images/logos/india/Baskin-Robbins.png.png',
        'images/logos/india/Carrefour.png.png',
        'images/logos/india/Eight.png.png',
        'images/logos/india/FedEx.png',
        'images/logos/india/Gamecube.png.png'
    ]
};

function getRandomBox(boxes) {
    return boxes[Math.floor(Math.random() * boxes.length)];
}

function getImagesForCountry(country) {
    // Try to get country-specific images first
    const images = countryImages[country.toLowerCase()];
    // If no images found for the country, return Nigeria's images as fallback
    return images || countryImages['nigeria'];
}

function getRandomImage(currentSrc, country) {
    const images = getImagesForCountry(country);
    let newImage;
    do {
        newImage = images[Math.floor(Math.random() * images.length)];
    } while (newImage === currentSrc); // Ensure we don't pick the same image
    return newImage;
}

function updateCountryBoxImages(countryCode) {
    const countryContainer = document.querySelector('.country-boxes');
    if (!countryContainer) return;
    
    // Clear existing boxes
    countryContainer.innerHTML = '';
    countryContainer.setAttribute('data-place', countryCode.toLowerCase());
    
    const images = getImagesForCountry(countryCode);

    // Create exactly 6 boxes
    for (let i = 0; i < 6; i++) {
        const box = document.createElement('div');
        box.className = 'country-box';
        const img = document.createElement('img');
        img.src = images[i % images.length]; // Use modulo to cycle through available images
        box.appendChild(img);
        countryContainer.appendChild(box);
    }

    const boxes = countryContainer.querySelectorAll('.country-box img');
    let usedIndices = new Set(); // Keep track of which images are currently displayed

    // Function to get a random unused image
    function getUnusedRandomImage(country) {
        const images = getImagesForCountry(country);
        let availableIndices = Array.from(Array(images.length).keys())
            .filter(index => !usedIndices.has(index));

        // If all images are used, reset the used indices
        if (availableIndices.length === 0) {
            usedIndices.clear();
            availableIndices = Array.from(Array(images.length).keys());
        }

        const randomIndex = availableIndices[Math.floor(Math.random() * availableIndices.length)];
        usedIndices.add(randomIndex);
        return images[randomIndex];
    }

    // Function to update a single random box
    function updateRandomBox() {
        const box = getRandomBox(Array.from(boxes));
        box.style.opacity = '0';
        
        setTimeout(() => {
            const newImage = getUnusedRandomImage(countryCode);
            box.src = newImage;
            box.style.opacity = '1';
        }, 200);
    }

    // Clear any existing intervals
    if (window.carouselInterval) {
        clearInterval(window.carouselInterval);
    }

    // Update a random box every 800ms
    window.carouselInterval = setInterval(updateRandomBox, 800);
}
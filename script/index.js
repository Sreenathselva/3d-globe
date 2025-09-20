    const countries = {
      // 🌍 Europe
      "Europe": { lat: 54.5260, lng: 15.2551 },
      "Belgium": { lat: 50.8503, lng: 4.3517 },
      "Switzerland": { lat: 46.8182, lng: 8.2275 },
      "Germany": { lat: 51.1657, lng: 10.4515 },
      "United Kingdom": { lat: 55.3781, lng: -3.4360 },
      "Netherlands": { lat: 52.1326, lng: 5.2913 },
      "Denmark": { lat: 56.2639, lng: 9.5018 },
      "Poland": { lat: 51.9194, lng: 19.1451 },
      "Hungary": { lat: 47.1625, lng: 19.5033 },
      "France": { lat: 46.6034, lng: 1.8883 },
      "Spain": { lat: 40.4637, lng: -3.7492 },
      "Italy": { lat: 41.8719, lng: 12.5674 },
      "Greece": { lat: 39.0742, lng: 21.8243 },
      "Portugal": { lat: 39.3999, lng: -8.2245 },

      // 🌏 Asia
      "Asia": { lat: 34.0479, lng: 100.6197 },
      "South Korea": { lat: 35.9078, lng: 127.7669 },
      "India": { lat: 20.5937, lng: 78.9629 },
      "China": { lat: 35.8617, lng: 104.1954 },
      "Japan": { lat: 36.2048, lng: 138.2529 },
      "Vietnam": { lat: 14.0583, lng: 108.2772 },
      "Thailand": { lat: 15.8700, lng: 100.9925 },
      "Nepal": { lat: 28.3949, lng: 84.1240 },
      "Sri Lanka": { lat: 7.8731, lng: 80.7718 },

      // 🌎 North America
      "North America": { lat: 54.5260, lng: -105.2551 },
      "South America": { lat: -8.7832, lng: -55.4915 },
      "USA": { lat: 37.0902, lng: -95.7129 },
      "Canada": { lat: 56.1304, lng: -106.3468 },
      "Mexico": { lat: 23.6345, lng: -102.5528 },
      "Cuba": { lat: 21.5218, lng: -77.7812 },
      "Jamaica": { lat: 18.1096, lng: -77.2975 },
      "Panama": { lat: 8.5380, lng: -80.7821 },
      "Costa Rica": { lat: 9.7489, lng: -83.7534 },
      "Haiti": { lat: 18.9712, lng: -72.2852 },

      // 🌍 Africa
      "Africa": { lat: 8.7832, lng: 34.5085 },
      "Egypt": { lat: 26.8206, lng: 30.8025 },
      "Nigeria": { lat: 9.0820, lng: 8.6753 },
      "South Africa": { lat: -30.5595, lng: 22.9375 },
      "Kenya": { lat: -0.0236, lng: 37.9062 },
      "Ghana": { lat: 7.9465, lng: -1.0232 },
      "Tanzania": { lat: -6.3690, lng: 34.8888 },
      "Morocco": { lat: 31.7917, lng: -7.0926 },
      "Uganda": { lat: 1.3733, lng: 32.2903 },

      // 🌎 South America
      "Brazil": { lat: -14.2350, lng: -51.9253 },
      "Argentina": { lat: -38.4161, lng: -63.6167 },
      "Chile": { lat: -35.6751, lng: -71.5430 },
      "Peru": { lat: -9.1900, lng: -75.0152 },
      "Colombia": { lat: 4.5709, lng: -74.2973 },
      "Venezuela": { lat: 6.4238, lng: -66.5897 },
      "Ecuador": { lat: -1.8312, lng: -78.1834 },
      "Bolivia": { lat: -16.2902, lng: -63.5887 }
    };


    // create lowercase lookup to be forgiving about casing
    const countriesLookup = {};
    for (const k in countries) {
      countriesLookup[k.trim().toLowerCase()] = countries[k];
    }	


let myearth = null;

let highlightMarker = null;



      let country = document.getElementById('countries');
      
  window.addEventListener('load', () => {
    // countries map (country-level center points)

    // --- sanity check Earth lib
    if (typeof Earth === 'undefined') {
       console.error('Earth library not found.');
      return;
    }

myearth = new Earth('myearth', {
  location: { lat: 20, lng: 20 },
  light: 'none',
  transparent: true,
  autoRotate: true,
  autoRotateSpeed: 1.2,
  autoRotateStart: 2000,
  mapImage: 'hologram/hologram-map-01.svg',
  zoom: 1.0,   
  minZoom: 0.8,
  maxZoom: 5.0 
});


});
    // highlight helper (if Earth supports addOverlay)
   function highlightCountry(loc) {
  try {
    if (!myearth || typeof myearth.addOverlay !== 'function') return;
    if (highlightMarker && highlightMarker.remove) highlightMarker.remove();
    highlightMarker = myearth.addOverlay({
      location: loc,
      mesh: 'marker',
      color: 'rgba(0,255,150,0.8)',
      scale: 2,
      transparent: true,
      depthTest: false
    });
  } catch (err) {
    console.error(err);
  }
}

    // helper to wait until goTo is available (polling)
function waitForGoTo(timeout = 3000) {
  return new Promise((resolve, reject) => {
    const start = Date.now();
    (function check() {
      if (myearth && typeof myearth.goTo === 'function') return resolve(true);
      if (Date.now() - start > timeout) return reject('myearth.goTo not ready');
      setTimeout(check, 100);
    })();
  });
}

    console.log('Setup complete. Click a slide to fly the globe.');

	
    
    
    // swiper

	  





  // Function to change the subheading based on the clicked region
  function updateSubheading(region) {
    const heading = document.querySelector('.header h2');
    if (heading) {
      if (region) {
        // Capitalize the first letter of the region
        const formattedRegion = region.charAt(0).toUpperCase() + region.slice(1);
        heading.innerHTML = `Our global collaborators in ${formattedRegion}`;
      } else {
        // Reset to the original text if no region is selected
        heading.innerHTML = "Our global collaborations";
      }
    }
  }

  const regionSwiper = new Swiper('#vertical-swiper', {  direction: 'vertical',  slidesPerView: 5,      centeredSlides: true,  spaceBetween: 12,  mousewheel: true,  keyboard: { enabled: true },  loop: true,   autoplay: {    delay: 100000,  },});
  const asiaSwiper = new Swiper('#asia-swiper', { direction: 'vertical', slidesPerView: 5, mousewheel: true,centeredSlides: true, centeredSlides:true, spaceBetween: 12, loop: true });
  const europeSwiper = new Swiper('#europe-swiper', { direction: 'vertical', slidesPerView: 5, mousewheel: true,centeredSlides: true, centeredSlides:true, spaceBetween: 12, loop: true });
  const naSwiper = new Swiper('#northamerica-swiper', { direction: 'vertical', slidesPerView: 5, mousewheel: true,centeredSlides: true, centeredSlides:true, spaceBetween: 12, loop: true });
  const africaSwiper = new Swiper('#africa-swiper', { direction: 'vertical', slidesPerView: 5, mousewheel: true,centeredSlides: true, centeredSlides:true, spaceBetween: 12, loop: true });
  const southAmericaSwiper = new Swiper('#southamerica-swiper', { direction: 'vertical', slidesPerView: 5, loop: true,centeredSlides: true,mousewheel: true, });
  // Region click → show the right country swiper
document.querySelector('#vertical-swiper').addEventListener('click', async (e) => {
  const regionLink = e.target.closest('.regions');
  if (!regionLink) return;

  // Get region from clicked element
  const region = (regionLink.dataset.region || '').trim().toLowerCase();

  // Hide region swiper first
  document.getElementById('vertical-swiper').classList.add('hidden');

  // Show selected region swiper
  if (region === "asia") {
    document.getElementById("asia-swiper").classList.remove("hidden");
  } else if (region === "europe") {
    document.getElementById("europe-swiper").classList.remove("hidden");
  } else if (region === "northamerica") {
    document.getElementById("northamerica-swiper").classList.remove("hidden");
  } else if (region === "africa") {
    document.getElementById("africa-swiper").classList.remove("hidden");
  } else if (region === "southamerica") {
    document.getElementById("southamerica-swiper").classList.remove("hidden");
  }
});
// backbutton for swipers
 document.querySelectorAll('.back-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        btn.parentElement.classList.add('hidden');
        document.getElementById('vertical-swiper').classList.remove('hidden');
      });
    });


      document.querySelectorAll('.country').forEach(countryEl => {
    countryEl.addEventListener('click', async (e) => {
      e.preventDefault(); // prevent link reload

const countryName = (countryEl.textContent || '').trim();
const countryNameLower = countryName.toLowerCase();

// Hide the header div when a country is clicked
const headerDiv = document.querySelector('.header');
if (headerDiv) {
  headerDiv.style.display = 'none';
}

// Update the subheading in the countries div
const countriesSubheading = document.querySelector('#countries .sub-heading');
if (countriesSubheading) {
  countriesSubheading.textContent = `Our global collaborations - ${countryName}`;
}

if (myearth) {
  // Debug logging to see what's happening
  console.log('Country clicked:', countryName);
  console.log('Country lowercase:', countryNameLower);
  console.log('Available countries:', Object.keys(countries));
  
  let loc = countries[countryName] || countries[countryNameLower];
  
  // If still not found, try searching case-insensitive
  if (!loc) {
    const countryKey = Object.keys(countries).find(
      key => key.toLowerCase() === countryNameLower
    );
    if (countryKey) {
      loc = countries[countryKey];
    }
  }
  
  console.log('Location found:', loc);

  if (loc) {
    try {
      // Stop autorotation when clicking any country
      myearth.autoRotate = false;

      await waitForGoTo();

      // Stop auto-rotation immediately
      myearth.autoRotate = false;

      // Disable user interaction
      myearth.draggable = false;
      myearth.scrollable = false;
      
      // Fly to the country
      myearth.goTo(loc, { relativeDuration: 2000, approachAngle: 20, zoom: 5 });
      highlightCountry(loc);

      // Ensure the globe stays stopped and locked after animation
      setTimeout(() => {
        myearth.autoRotate = false;
        myearth.draggable = false;
        myearth.scrollable = false;
      }, 2200); // wait for animation to complete

    } catch (err) {
      console.error(err);
    }
  }
}
 // Animate globe shift
  const globe = document.getElementById("myearth");
  globe.classList.add("shifted");

  // Wait until the transform finishes, then show #countries
  setTimeout(() => {
    country.classList.remove("hidden");
    country.classList.add("visible");
  }, 1000); // matches transition time
      


      // --- Hide all swipers ---
      document.querySelectorAll('.swiper').forEach(swiper => {
        swiper.classList.add('hidden');
      });
      country.classList.remove('hidden');
      // countries


      // --- Hide all country-boxes ---
      document.querySelectorAll('.country-boxes').forEach(box => {
        box.classList.add('hidden');
      });

      // --- Show only the selected country-box ---
      const targetBox = document.querySelector(`.country-boxes[data-place="${countryNameLower}"]`);
      if (targetBox) {
        targetBox.classList.remove('hidden');
      }
      console.log('Showing country box for:', countryNameLower); // Debug log
    });
  });

  
  document.querySelectorAll('.country-boxes').forEach(box => {
    const backBtn = document.querySelector('.logo-back-btn');
    backBtn.textContent = 'Back';
    backBtn.classList.add('back-btn-country');
    box.prepend(backBtn);

backBtn.addEventListener('click', () => {
  country.classList.add('hidden');
  country.classList.remove('visible');

  // Show the header div again when going back
  const headerDiv = document.querySelector('.header');
  if (headerDiv) {
    headerDiv.style.display = 'block';
  }

  // Reset the countries subheading back to original
  const countriesSubheading = document.querySelector('#countries .sub-heading');
  if (countriesSubheading) {
    countriesSubheading.textContent = 'Our global collaborations';
  }

  const globe = document.getElementById("myearth");
  globe.classList.remove("shifted");

  document.getElementById('vertical-swiper').classList.remove('hidden');

  if (myearth) {
    // Re-enable user interaction
    myearth.draggable = true;
    myearth.scrollable = true;
    
    // Restart auto-rotation
    myearth.autoRotate = true;
    myearth.autoRotateSpeed = 1;
  }
});
  });


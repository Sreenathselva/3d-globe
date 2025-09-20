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

      // 🌎 North America
      "North America": { lat: 54.5260, lng: -105.2551 },
      "South America": { lat: -8.7832, lng: -55.4915 },
      "USA": { lat: 37.0902, lng: -95.7129 },

      // 🌍 Africa
      "Africa": { lat: 8.7832, lng: 34.5085 },
      "Egypt": { lat: 26.8206, lng: 30.8025 }
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
      mapImage: 'hologram/hologram-map-01.svg'
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
  }); // window.load
	
    
    
    // swiper

	  




  document.addEventListener("DOMContentLoaded", function () {

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

      const countryName = (countryEl.textContent || '').trim().toLowerCase();

      // --- Globe interaction ---
      if (myearth) {
        const loc = countriesLookup[countryName];
        if (loc) {
          try {
            myearth.autoRotate = false; // stop globe rotation
            await waitForGoTo();
            myearth.goTo(loc, { relativeDuration: 2000, approachAngle: 20 });
            highlightCountry(loc);
          } catch (err) {
            console.error(err);
          }
        }
      }

      


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
      const targetBox = document.querySelector(`.country-boxes[data-place="${countryName}"]`);
      if (targetBox) {
        targetBox.classList.remove('hidden');
      }
    });
  });

  // Optional: Add a back button for country-boxes
  document.querySelectorAll('.country-boxes').forEach(box => {
    const backBtn = document.querySelector('.logo-back-btn');
    backBtn.textContent = 'Back';
    backBtn.classList.add('back-btn-country');
    box.prepend(backBtn);

    backBtn.addEventListener('click', () => {
      
      country.classList.add('hidden');
      box.classList.add('hidden');
      document.getElementById('vertical-swiper').classList.remove('hidden');
      if (myearth) {
        myearth.autoRotate = true;
        myearth.autoRotateSpeed = 1; // normal speed
      }
    });
  });


});
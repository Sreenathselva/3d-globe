// Function to update the sub-heading when a region is clicked
document.addEventListener('DOMContentLoaded', function() {
    const regionLinks = document.querySelectorAll('.regions');
    const subHeadings = document.querySelectorAll('.sub-heading');
    
    regionLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const region = this.getAttribute('data-region').toUpperCase();
            
            // Update all sub-headings on the page
            subHeadings.forEach(subHeading => {
                // Keep "Our global collaborations" and add the region
                subHeading.textContent = `Our global collaborations  ${region}`;
            });
        });
    });
});
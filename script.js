document.addEventListener('DOMContentLoaded', () => {
    // City Shabbat times data
    const cityTimes = {
        london: { in: '7:00 PM', out: '8:00 PM' },
        'new-york': { in: '6:00 PM', out: '7:00 PM' },
        'tel-aviv': { in: '7:30 PM', out: '8:30 PM' },
        miami: { in: '6:30 PM', out: '7:30 PM' },
        paris: { in: '8:00 PM', out: '9:00 PM' },
        sydney: { in: '5:30 PM', out: '6:30 PM' }
    };

    // Function to dynamically create city cards for Shabbat times
    function generateCityCards() {
        const citiesGrid = document.getElementById('shabbat-times-grid');
        citiesGrid.innerHTML = ''; // Clear existing content

        Object.keys(cityTimes).forEach(city => {
            const cityDiv = document.createElement('div');
            cityDiv.classList.add('city');
            cityDiv.innerHTML = `
                <h4>${city.replace('-', ' ').toUpperCase()}</h4>
                <p>Shabbat In: ${cityTimes[city].in} | Shabbat Out: ${cityTimes[city].out}</p>
            `;
            citiesGrid.appendChild(cityDiv);
        });
    }

    // Handle city selection and update times dynamically
    const citySelect = document.getElementById('city-select');
    citySelect.addEventListener('change', function() {
        const city = this.value;
        const time = cityTimes[city];

        // Update displayed Shabbat times for the selected city
        const cityElement = document.querySelector(`#${city}`);
        if (cityElement) {
            cityElement.querySelector('p').textContent = `Shabbat In: ${time.in} | Shabbat Out: ${time.out}`;
        }
    });

    // Smooth scroll to sections when clicking buttons
    const scrollToSection = (event) => {
        event.preventDefault();
        const targetId = event.target.getAttribute('href').slice(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // Add event listeners to all CTA buttons
    const ctaButtons = document.querySelectorAll('.cta-buttons .btn');
    ctaButtons.forEach(btn => btn.addEventListener('click', scrollToSection));

    // Initialize city cards when the page loads
    generateCityCards();
});

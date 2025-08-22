// This function will handle the "Find Shabbat Times" button click event
document.querySelector('.cta-buttons .btn').addEventListener('click', function() {
  alert('Finding Shabbat times...'); // This will display an alert when clicked
});

// This function will handle the dynamic update of Shabbat times based on the selected city
document.getElementById('city-select').addEventListener('change', function(event) {
  const city = event.target.value;
  
  // Predefined Shabbat times for major cities
  const times = {
    london: { in: '7:00 PM', out: '8:00 PM' },
    'new-york': { in: '6:00 PM', out: '7:00 PM' },
    'tel-aviv': { in: '7:30 PM', out: '8:30 PM' },
    miami: { in: '6:30 PM', out: '7:30 PM' },
    paris: { in: '8:00 PM', out: '9:00 PM' },
    sydney: { in: '5:30 PM', out: '6:30 PM' }
  };

  // Get the corresponding Shabbat times for the selected city
  const time = times[city];
  
  // Update the Shabbat times displayed on the page dynamically
  const cityElement = document.querySelector(`#${city} p`);
  if (cityElement) {
    cityElement.textContent = `Shabbat In: ${time.in} | Shabbat Out: ${time.out}`;
  }
});

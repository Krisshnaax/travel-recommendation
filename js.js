const destinations = [
    {
      name: "Bali, Indonesia",
      type: "Beach",
      budget: "Medium",
      description: "A tropical paradise with beaches and rich culture.",
      image: "images/bali.jpg"
    },
    {
      name: "Swiss Alps, Switzerland",
      type: "Mountain",
      budget: "High",
      description: "Breathtaking alpine landscapes and ski resorts.",
      image: "images/swiss-alps.jpg"
    },
    {
      name: "Bangkok, Thailand",
      type: "City",
      budget: "Low",
      description: "Vibrant city life with street food and temples.",
      image: "images/bangkok.jpg"
    }
  ];
  
  function displayDestinations(list) {
    const container = document.getElementById("destinationList");
    container.innerHTML = "";
    if (list.length === 0) {
      container.innerHTML = "<p>No destinations match your criteria.</p>";
      return;
    }
    list.forEach(dest => {
      container.innerHTML += `
        <div class="card">
          <img src="${dest.image}" alt="${dest.name}">
          <div class="card-content">
            <h3>${dest.name}</h3>
            <p>${dest.description}</p>
          </div>
        </div>
      `;
    });
  }
  
  function applyFilters() {
    const type = document.getElementById("typeFilter").value;
    const budget = document.getElementById("budgetFilter").value;
  
    const results = destinations.filter(dest =>
      (type === "" || dest.type === type) &&
      (budget === "" || dest.budget === budget)
    );
  
    displayDestinations(results);
  }
  
  // Display all by default
  displayDestinations(destinations);
  
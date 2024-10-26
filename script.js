// Save Scroll position

// Save scroll position before unload
window.addEventListener("beforeunload", () => {
  localStorage.setItem("scrollPosition", window.scrollY);
});

// Restore scroll position on load
window.addEventListener("load", () => {
  const scrollPosition = localStorage.getItem("scrollPosition");
  if (scrollPosition) {
    window.scrollTo(0, parseInt(scrollPosition, 10));
    localStorage.removeItem("scrollPosition"); // Clear stored position
  }
});

// Save Scroll position

// Fetch services data from JSON
fetch("services.json")
  .then((response) => response.json())
  .then((servicesData) => {
    const servicesContainer = document.getElementById("services-container");

    servicesData.forEach((service) => {
      const serviceCard = document.createElement("div");
      serviceCard.classList.add("services-list");

      serviceCard.innerHTML = `
        <div class="count">${service.count}</div>
        <div class="contents">
          <div class="service-header">
            <h1 class="service-name">${service.serviceName}</h1>
            <p class="service-details">${service.serviceDetails}</p>
          </div>
          <div class="service-list">
            ${service.subServices
              .map(
                (subService, index) => `
              <div class="sub-service">
                <div class="service-number">${index + 1}</div>
                <div class="sub-service-name">${subService}</div>
              </div>
            `
              )
              .join("")}
          </div>
        </div>
      `;

      servicesContainer.appendChild(serviceCard);
    });
  })
  .catch((error) => console.error("Error loading services data:", error));

// Fetch project data from JSON
fetch("projects.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((data) => {
    const worksContainer = document.querySelector(".works");

    data.forEach((project) => {
      // Create a new card element
      const projectCard = document.createElement("div");
      projectCard.classList.add("card");

      // Set the background color from the project data
      projectCard.style.backgroundColor = project.backgroundColor;

      // Construct the inner HTML for the card
      projectCard.innerHTML = `
            <img src="${project.image}" alt="${project.title}" class="card-image">
            <div class="card-content"> 
              <div class="projects-title">${project.title}</div>
              <div class="project-description">${project.description}</div>
              <div class="case-cta" onclick="window.location.href='${project.caseLink}'">
                  view case 
                  <img src="Icons/ArrowUpRight.svg" alt="" id = "cta-arrow-up">
                </div>
              </div>
            </div>
        `;

      // Append the project card to the container
      worksContainer.appendChild(projectCard);
    });
  })
  .catch((error) => {
    console.error("Error fetching project data:", error);
  });

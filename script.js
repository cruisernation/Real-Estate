
document.addEventListener("DOMContentLoaded", function() {
  const menuToggle = document.getElementById("menu-toggle");
  const navbar = document.getElementById("navbar");

  menuToggle.addEventListener("click", () => {
    navbar.classList.toggle("active");
  });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const searchInput = document.getElementById("searchInput");
  const priceFilter = document.getElementById("priceFilter");
  const properties = document.querySelectorAll(".property-card");

  function filterProperties() {
    const searchTerm = searchInput.value.toLowerCase();
    const priceValue = priceFilter.value;

    properties.forEach(property => {
      const name = property.getAttribute("data-name").toLowerCase();
      const price = property.getAttribute("data-price");

      const matchesSearch = name.includes(searchTerm);
      const matchesPrice = (priceValue === "all") || (price === priceValue);

      if (matchesSearch && matchesPrice) {
        property.style.display = "block";
      } else {
        property.style.display = "none";
      }
    });
  }

  searchInput.addEventListener("input", filterProperties);
  priceFilter.addEventListener("change", filterProperties);
});

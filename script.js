document.addEventListener("DOMContentLoaded", () => {

  const menuToggle = document.getElementById("menu-toggle");
  const navbar = document.getElementById("navbar");

  if (menuToggle && navbar) {
    menuToggle.addEventListener("click", () => {
      navbar.classList.toggle("active");
      menuToggle.classList.toggle("open");
    });
  }

  const navLinks = document.querySelectorAll("nav ul li a");
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      navbar.classList.remove("active");
      menuToggle.classList.remove("open");
    });
  });

  const exploreBtn = document.querySelector(".hero .btn");
  if (exploreBtn) {
    exploreBtn.addEventListener("click", e => {
      const listingsSection = document.querySelector("#listings");
      if (listingsSection) {
        e.preventDefault();
        listingsSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  }

  const searchInput = document.getElementById("searchInput");
  const priceFilter = document.getElementById("priceFilter");
  const categoryFilter = document.getElementById("categoryFilter");
  const properties = document.querySelectorAll(".property-card");

  const filterProperties = () => {
    const searchTerm = searchInput?.value.toLowerCase() || "";
    const priceValue = priceFilter?.value || "all";
    const categoryValue = categoryFilter?.value || "all";

    properties.forEach(property => {
      const name = property.getAttribute("data-name").toLowerCase();
      const price = property.getAttribute("data-price");
      const category = property.getAttribute("data-category") || "all";

      const matchesSearch = name.includes(searchTerm);
      const matchesPrice = priceValue === "all" || price === priceValue;
      const matchesCategory = categoryValue === "all" || category === categoryValue;

      property.style.display = (matchesSearch && matchesPrice && matchesCategory)
        ? "block"
        : "none";
    });
  };

  if (searchInput) searchInput.addEventListener("input", filterProperties);
  if (priceFilter) priceFilter.addEventListener("change", filterProperties);
  if (categoryFilter) categoryFilter.addEventListener("change", filterProperties);

  const backBtn = document.querySelector(".back-btn");
  if (backBtn) {
    backBtn.addEventListener("click", e => {
      e.preventDefault();
      if (document.referrer && document.referrer !== window.location.href) {
        window.history.back();
      } else {
        window.location.href = "index.html";
      }
    });
  }

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", e => {
      const target = document.querySelector(anchor.getAttribute("href"));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});
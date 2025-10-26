document.addEventListener("DOMContentLoaded", () => {

  class Navbar {
    constructor(menuId, navId) {
      this.menuToggle = document.getElementById(menuId);
      this.navbar = document.getElementById(navId);
      this.navLinks = document.querySelectorAll("nav ul li a");
      this.init();
    }

    init() {
      if (this.menuToggle && this.navbar) {
        this.menuToggle.addEventListener("click", () => this.toggleMenu());
      }

      this.navLinks.forEach(link => {
        link.addEventListener("click", () => this.closeMenu());
      });
    }

    toggleMenu() {
      this.navbar.classList.toggle("active");
      this.menuToggle.classList.toggle("open");
    }

    closeMenu() {
      this.navbar.classList.remove("active");
      this.menuToggle.classList.remove("open");
    }
  }

  class SmoothScroll {
    constructor() {
      this.init();
    }

    init() {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", e => {
          const target = document.querySelector(anchor.getAttribute("href"));
          if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: "smooth" });
          }
        });
      });
    }
  }


  class ExploreButton {
    constructor(selector, targetId) {
      this.button = document.querySelector(selector);
      this.target = document.getElementById(targetId);
      this.init();
    }

    init() {
      if (this.button && this.target) {
        this.button.addEventListener("click", e => {
          e.preventDefault();
          this.target.scrollIntoView({ behavior: "smooth" });
        });
      }
    }
  }

  class PropertyFilter {
    constructor(searchId, priceId, categoryId, propertySelector) {
      this.searchInput = document.getElementById(searchId);
      this.priceFilter = document.getElementById(priceId);
      this.categoryFilter = document.getElementById(categoryId);
      this.properties = document.querySelectorAll(propertySelector);
      this.init();
    }

    init() {
      if (this.searchInput)
        this.searchInput.addEventListener("input", () => this.applyFilters());
      if (this.priceFilter)
        this.priceFilter.addEventListener("change", () => this.applyFilters());
      if (this.categoryFilter)
        this.categoryFilter.addEventListener("change", () => this.applyFilters());
    }

    applyFilters() {
      const searchTerm = this.searchInput?.value.toLowerCase() || "";
      const priceValue = this.priceFilter?.value || "all";
      const categoryValue = this.categoryFilter?.value || "all";

      this.properties.forEach(property => {
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
    }
  }

  class BackButton {
    constructor(selector, homePage = "index.html") {
      this.button = document.querySelector(selector);
      this.homePage = homePage;
      this.init();
    }

    init() {
      if (this.button) {
        this.button.addEventListener("click", e => {
          e.preventDefault();
          if (document.referrer && document.referrer !== window.location.href) {
            window.history.back();
          } else {
            window.location.href = this.homePage;
          }
        });
      }
    }
  }

  class RealEstateApp {
    constructor() {
      this.init();
    }

    init() {
      new Navbar("menu-toggle", "navbar");
      new SmoothScroll();
      new ExploreButton(".hero .btn", "listings");
      new PropertyFilter("searchInput", "priceFilter", "categoryFilter", ".property-card");
      new BackButton(".back-btn", "index.html");
    }
  }

  new RealEstateApp();

});

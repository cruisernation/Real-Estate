/* =======================================================
   ALS REAL ESTATE WEBSITE – FINAL STYLE
   Combines structure, responsiveness, and animations
   ======================================================= */

/* GLOBAL RESET */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}

html {
  scroll-behavior: smooth;
}

body {
  background-color: #f5f5f5;
  color: #222;
  line-height: 1.6;
}

/* =======================================================
   HEADER & NAVBAR
   ======================================================= */
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #1b1f3b;
  color: white;
  padding: 20px 60px;
  position: sticky;
  top: 0;
  flex-wrap: wrap;
  z-index: 1000;
}

.logo {
  font-size: 22px;
  font-weight: bold;
  color: #ffb400;
}

.menu-toggle {
  display: none;
  font-size: 30px;
  color: white;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.menu-toggle.open {
  transform: rotate(90deg);
}

nav ul {
  display: flex;
  list-style: none;
  gap: 30px;
  flex-wrap: wrap;
}

nav ul li a {
  color: white;
  text-decoration: none;
  font-size: 16px;
  transition: color 0.3s ease;
}

nav ul li a:hover,
nav ul li a.active {
  color: #ffb400;
}

/* MOBILE NAVIGATION */
@media (max-width: 768px) {
  header {
    justify-content: space-between;
    padding: 15px 25px;
  }

  .logo {
    order: 1;
  }

  .menu-toggle {
    display: block;
    order: 2;
  }

  nav {
    display: none;
    width: 100%;
    background: #1b1f3b;
    position: relative;
    z-index: 1001;
  }

  nav.active {
    display: block;
    text-align: center;
    animation: slideDown 0.4s ease-in-out;
  }

  nav ul {
    flex-direction: column;
    padding: 20px 0;
  }
}

/* MENU ANIMATION */
@keyframes slideDown {
  0% { opacity: 0; transform: translateY(-10px); }
  100% { opacity: 1; transform: translateY(0); }
}

/* =======================================================
   BUTTONS
   ======================================================= */
.btn {
  background: #ffb400;
  color: #1b1f3b;
  padding: 12px 25px;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-block;
  position: relative;
  overflow: hidden;
}

.btn:hover {
  background: #1b1f3b;
  color: white;
  transform: scale(1.05);
}

.btn::after {
  content: "";
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background: rgba(255,255,255,0.2);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.btn:hover::after {
  opacity: 1;
}

/* BACK BUTTON */
.back-btn {
  position: fixed;
  top: 100px;
  left: 25px;
  background: #1b1f3b;
  color: white;
  border-radius: 50%;
  padding: 12px 16px;
  font-size: 18px;
  cursor: pointer;
  text-decoration: none;
  transition: 0.3s ease;
  z-index: 999;
}

.back-btn:hover {
  background: #ffb400;
  color: #1b1f3b;
  transform: scale(1.1);
}

/* =======================================================
   HERO SECTION
   ======================================================= */
.hero {
  background: url(assets/images/femi.jpg) center/cover no-repeat;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: white;
  text-align: center;
  padding: 0 20px;
  position: relative;
}

.hero::after {
  content: "";
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background: rgba(0,0,0,0.4);
  z-index: 1;
}

.hero * {
  position: relative;
  z-index: 2;
}

.hero h1 {
  font-size: 44px;
  font-weight: 700;
  margin-bottom: 15px;
  animation: fadeInUp 1s ease;
}

.hero p {
  font-size: 18px;
  margin-bottom: 25px;
  animation: fadeInUp 1.2s ease;
}

.hero .btn {
  background: #ffb400;
  color: #1b1f3b;
  animation: fadeInUp 1.4s ease;
}

.hero .btn:hover {
  background: white;
  color: #1b1f3b;
}

/* =======================================================
   LISTINGS & PROPERTY GRID
   ======================================================= */
.listings {
  padding: 60px 8%;
  background: #fff;
  text-align: center;
}

.listings h2 {
  font-size: 30px;
  color: #1b1f3b;
  margin-bottom: 40px;
}

/* FILTER BAR */
.filter-bar {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
  margin-bottom: 40px;
}

.filter-bar input,
.filter-bar select {
  padding: 10px 15px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 15px;
  width: 250px;
  outline: none;
  transition: border-color 0.3s;
}

.filter-bar input:focus,
.filter-bar select:focus {
  border-color: #ffb400;
}

@media (max-width: 600px) {
  .filter-bar {
    flex-direction: column;
    align-items: center;
  }

  .filter-bar input,
  .filter-bar select {
    width: 90%;
  }
}

/* PROPERTY GRID */
.property-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 25px;
}

.property-card {
  background: #fafafa;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
  overflow: hidden;
  transition: opacity 0.3s ease, transform 0.3s ease;
  opacity: 1;
}

.property-card:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 8px 18px rgba(0, 0, 0, 0.15);
}

.property-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.property-info {
  padding: 20px;
}

.property-info h3 {
  font-size: 20px;
  color: #1b1f3b;
  margin-bottom: 10px;
}

.property-info p {
  font-size: 14px;
  color: #555;
  margin-bottom: 15px;
}

/* =======================================================
   ABOUT SECTION
   ======================================================= */
.about {
  padding: 80px 8%;
  background: #fff;
  text-align: center;
}

.about h2 {
  font-size: 32px;
  color: #1b1f3b;
  margin-bottom: 20px;
}

.about p {
  font-size: 16px;
  color: #555;
  max-width: 800px;
  margin: 0 auto 40px;
}

.ceo-section {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 40px;
  margin-top: 40px;
}

.ceo-section img {
  width: 250px;
  height: 250px;
  border-radius: 50%;
  object-fit: cover;
  border: 5px solid #ffb400;
}

.ceo-info {
  max-width: 500px;
  text-align: left;
}

.ceo-info h3 {
  font-size: 24px;
  color: #1b1f3b;
  margin-bottom: 10px;
}

.ceo-info p {
  color: #444;
  font-size: 15px;
  line-height: 1.5;
}

/* =======================================================
   CONTACT SECTION
   ======================================================= */
.contact {
  background: #fff;
  padding: 80px 8%;
  text-align: center;
}

.contact h2 {
  font-size: 30px;
  color: #1b1f3b;
  margin-bottom: 30px;
}

.contact form {
  max-width: 600px;
  margin: 0 auto;
  text-align: left;
}

.contact input,
.contact textarea {
  width: 100%;
  padding: 12px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 15px;
}

.contact textarea {
  resize: none;
  height: 150px;
}

.contact button {
  width: 100%;
  font-size: 16px;
}

/* =======================================================
   FOOTER
   ======================================================= */
footer {
  background: #1b1f3b;
  color: white;
  text-align: center;
  padding: 25px 0;
  font-size: 14px;
  margin-top: 50px;
}

/* =======================================================
   ANIMATIONS & EFFECTS
   ======================================================= */
@keyframes fadeInUp {
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
}

/* NAV OVERLAY (for blur background when menu is open) */
.nav-overlay {
  position: fixed;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(6px);
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.4s ease;
  z-index: 90;
}

.nav-overlay.visible {
  opacity: 1;
  pointer-events: all;
}

/* Disable scroll when menu open */
body.no-scroll {
  overflow: hidden;
}

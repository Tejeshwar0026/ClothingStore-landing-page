// Initialize ScrollReveal with refined settings for a more professional feel
ScrollReveal({
  reset: false,
  distance: "60px",
  duration: 700,
  delay: 100,
  easing: "ease-out",
  opacity: 0,
  scale: 1,
});

// Apply refined reveal animations with more specific configurations
ScrollReveal().reveal(".reveal-up", { origin: "bottom" });
ScrollReveal().reveal(".reveal-down", { origin: "top" });
ScrollReveal().reveal(".reveal-left", { origin: "right" });
ScrollReveal().reveal(".reveal-right", { origin: "left" });
ScrollReveal().reveal(".reveal-fade", { duration: 500 }); // Faster fade-in
ScrollReveal().reveal(".reveal-slide-bottom", {
  origin: "bottom",
  interval: 150,
  easing: "cubic-bezier(0.215, 0.61, 0.355, 1)",
});
ScrollReveal().reveal(".reveal-slide-left", {
  origin: "left",
  interval: 150,
  easing: "cubic-bezier(0.215, 0.61, 0.355, 1)",
});
ScrollReveal().reveal(".reveal-slide-right", {
  origin: "right",
  interval: 150,
  easing: "cubic-bezier(0.215, 0.61, 0.355, 1)",
});
ScrollReveal().reveal(".reveal-zoom-in", { scale: 0.95, duration: 600 }); // Subtle zoom
ScrollReveal().reveal(".footer-widgets .widget", { interval: 100 }); // Tighter stagger
ScrollReveal().reveal(".footer-bottom", { delay: 200, duration: 600 });

// Mobile menu toggle (improved visual feedback)
const mobileMenuIcon = document.querySelector(".mobile-menu-icon");
const nav = document.querySelector("header nav");

if (mobileMenuIcon && nav) {
  mobileMenuIcon.addEventListener("click", () => {
    nav.classList.toggle("open");
    mobileMenuIcon.classList.toggle("fa-times"); // Change icon to close button
    mobileMenuIcon.classList.toggle("fa-bars");
  });
}

// Enhanced hover effects for navigation links (subtler and smoother)
const navLinks = document.querySelectorAll("header nav ul li a");
navLinks.forEach((link) => {
  link.addEventListener("mouseenter", () => {
    link.style.transform = "translateY(-2px)";
    link.style.color = "#00b8ff"; // Brighter blue
    link.style.transition =
      "transform 0.15s ease-in-out, color 0.15s ease-in-out";
  });
  link.addEventListener("mouseleave", () => {
    link.style.transform = "translateY(0)";
    link.style.color = "#777";
    link.style.transition =
      "transform 0.15s ease-in-out, color 0.15s ease-in-out";
  });
  link.addEventListener("focus", () => {
    // Added focus style for accessibility
    link.style.outline = "2px solid #00b8ff";
    link.style.outlineOffset = "2px";
  });
  link.addEventListener("blur", () => {
    // Removed focus style on blur
    link.style.outline = "none";
  });
});

// Enhanced hover effects for buttons (subtler and smoother)
const buttons = document.querySelectorAll(".button");
buttons.forEach((button) => {
  button.addEventListener("mouseenter", () => {
    button.style.transform = "scale(1.03)";
    button.style.boxShadow = "0 3px 7px rgba(0, 0, 0, 0.15)";
    button.style.transition =
      "transform 0.15s ease-in-out, box-shadow 0.15s ease-in-out";
  });
  button.addEventListener("mouseleave", () => {
    button.style.transform = "scale(1)";
    button.style.boxShadow = "none";
    button.style.transition =
      "transform 0.15s ease-in-out, box-shadow 0.15s ease-in-out";
  });
  button.addEventListener("focus", () => {
    // Added focus style
    button.style.outline = "2px solid #007bff";
    button.style.outlineOffset = "2px";
  });
  button.addEventListener("blur", () => {
    // Removed focus style on blur
    button.style.outline = "none";
  });
});

// Engaging hover/focus effects for product cards (smoother transitions, focus state)
const productCards = document.querySelectorAll(".product-card");
productCards.forEach((card) => {
  const imageContainer = card.querySelector(".image-container");
  const overlay = card.querySelector(".overlay");
  const detailsLink = overlay.querySelector(".view-details");
  const cartButton = overlay.querySelector(".add-to-cart");

  card.addEventListener("mouseenter", () => {
    if (imageContainer) imageContainer.style.transform = "scale(1.02)";
    if (overlay) overlay.style.opacity = 1;
    if (detailsLink) detailsLink.style.transform = "translateY(0)";
    if (cartButton) cartButton.style.transform = "translateY(0)";
    card.style.transition =
      "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out";
  });
  card.addEventListener("mouseleave", () => {
    if (imageContainer) imageContainer.style.transform = "scale(1)";
    if (overlay) overlay.style.opacity = 0;
    if (detailsLink) detailsLink.style.transform = "translateY(20px)";
    if (cartButton) cartButton.style.transform = "translateY(-20px)";
    card.style.transition =
      "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out";
  });
  card.addEventListener("focus-within", () => {
    // Added focus style
    card.style.outline = "2px solid #007bff";
    card.style.outlineOffset = "2px";
    if (overlay) overlay.style.opacity = 1;
    if (detailsLink) detailsLink.style.transform = "translateY(0)";
    if (cartButton) cartButton.style.transform = "translateY(0)";
  });
  card.addEventListener("blur", () => {
    // Removed focus style on blur (overlay remains if focused within)
    card.style.outline = "none";
  });
});

// Engaging hover/focus effects for collection cards (smoother transitions, focus state)
const collectionCards = document.querySelectorAll(".collection-card");
collectionCards.forEach((card) => {
  const imageContainer = card.querySelector(".image-container");
  const overlay = card.querySelector(".overlay");
  const h3 = overlay.querySelector("h3");
  const button = overlay.querySelector(".button");

  card.addEventListener("mouseenter", () => {
    if (imageContainer) imageContainer.style.transform = "scale(1.02)";
    if (overlay) overlay.style.opacity = 1;
    if (h3) h3.style.transform = "translateY(0)";
    if (button) button.style.opacity = 1;
    card.style.transition =
      "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out";
  });
  card.addEventListener("mouseleave", () => {
    if (imageContainer) imageContainer.style.transform = "scale(1)";
    if (overlay) overlay.style.opacity = 0;
    if (h3) h3.style.transform = "translateY(-8px)";
    if (button) button.style.opacity = 0;
    card.style.transition =
      "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out";
  });
  card.addEventListener("focus-within", () => {
    // Added focus style
    card.style.outline = "2px solid #007bff";
    card.style.outlineOffset = "2px";
    if (overlay) overlay.style.opacity = 1;
    if (h3) h3.style.transform = "translateY(0)";
    if (button) button.style.opacity = 1;
  });
  card.addEventListener("blur", () => {
    // Removed focus style on blur
    card.style.outline = "none";
  });
});

// "Tilt" effect for social icons in the footer (remains)
VanillaTilt.init(document.querySelectorAll(".social-icons a"), {
  max: 10, // Slightly reduced max tilt
  speed: 300, // Slightly reduced speed
  glare: true,
  "max-glare": 0.4, // Slightly reduced glare
});

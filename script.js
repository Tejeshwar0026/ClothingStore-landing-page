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

// script.js

// ---------- Mobile menu ----------
const menuBtn = document.querySelector(".menu-btn");
const navList = document.querySelector("nav ul");

if (menuBtn && navList) {
  menuBtn.addEventListener("click", () => {
    navList.classList.toggle("open");
  });

  // Close menu after clicking any link (mobile)
  navList.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => {
      navList.classList.remove("open");
    });
  });
}

// ---------- Dropdown (Services) ----------
const dropdown = document.querySelector(".dropdown");
const dropBtn = document.querySelector(".dropbtn");

if (dropdown && dropBtn) {
  // Toggle dropdown on click (mainly for mobile, but works everywhere)
  dropBtn.addEventListener("click", (e) => {
    e.preventDefault(); // because dropbtn uses href="#"
    dropdown.classList.toggle("open");

    const expanded = dropdown.classList.contains("open");
    dropBtn.setAttribute("aria-expanded", expanded ? "true" : "false");
  });

  // Close dropdown when clicking outside
  document.addEventListener("click", (e) => {
    if (!dropdown.contains(e.target)) {
      dropdown.classList.remove("open");
      dropBtn.setAttribute("aria-expanded", "false");
    }
  });

  // Close dropdown on Escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      dropdown.classList.remove("open");
      dropBtn.setAttribute("aria-expanded", "false");
    }
  });
}

// ---------- Active link highlight ----------
const currentFile = window.location.pathname.split("/").pop() || "index.html";

document.querySelectorAll("nav a").forEach((a) => {
  const href = a.getAttribute("href");
  if (href && href === currentFile) {
    a.classList.add("active");
  }
});

// ---------- Footer year ----------
const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}
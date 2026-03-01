// script.js

// --------- Mobile menu ----------
const menuBtn = document.querySelector(".menu-btn");
const navList = document.querySelector("nav ul");

if (menuBtn && navList) {
  menuBtn.addEventListener("click", () => {
    navList.classList.toggle("open");
  });

  // Close menu ONLY when a normal link is clicked (not Services toggle)
  navList.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => {
      if (!a.classList.contains("dropbtn")) {
        navList.classList.remove("open");
      }
    });
  });
}

// --------- Dropdown (Services) ----------
const dropdown = document.querySelector(".dropdown");
const dropBtn = document.querySelector(".dropbtn");

if (dropdown && dropBtn) {
  dropBtn.addEventListener("click", (e) => {
    // Prevent '#' navigation + keep menu open
    e.preventDefault();
    dropdown.classList.toggle("open");

    const expanded = dropdown.classList.contains("open");
    dropBtn.setAttribute("aria-expanded", expanded ? "true" : "false");
  });

  // Close dropdown when clicking outside (desktop)
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

// --------- Active link highlight ----------
const currentFile = window.location.pathname.split("/").pop() || "index.html";
document.querySelectorAll("nav a").forEach((a) => {
  const href = a.getAttribute("href");
  if (href && href === currentFile) a.classList.add("active");
});

// --------- Footer year ----------
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

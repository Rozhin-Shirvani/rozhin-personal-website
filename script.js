
// Mobile Navigation

const menuButton = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuButton.addEventListener("click", function () {

    navLinks.classList.toggle("active");

    const isOpen = navLinks.classList.contains("active");

    menuButton.setAttribute("aria-expanded", isOpen);

    menuButton.textContent = isOpen ? "✕" : "☰";

});


// Close Menu After Clicking a Link

document.querySelectorAll(".nav-links a").forEach(function(link) {

    link.addEventListener("click", function() {

        navLinks.classList.remove("active");

        menuButton.setAttribute("aria-expanded", "false");

        menuButton.textContent = "☰";

    });

});


// Automatic Current Year

const yearElement = document.getElementById("current-year");

yearElement.textContent = new Date().getFullYear();

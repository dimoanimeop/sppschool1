
/* =====================================
   SAARTHI PLAY PUBLIC SCHOOL
   JavaScript
===================================== */

document.addEventListener("DOMContentLoaded", function () {

    // 1. Update the footer year automatically
    const currentYear = document.getElementById("currentYear");

    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
    }

    // 2. Mobile navigation menu
    const menuBtn = document.getElementById("menuBtn");
    const navigation = document.getElementById("navigation");

    if (menuBtn && navigation) {

        menuBtn.addEventListener("click", function () {
            const isOpen = navigation.classList.toggle("open");

            menuBtn.textContent = isOpen ? "✕" : "☰";
            menuBtn.setAttribute("aria-expanded", String(isOpen));
            menuBtn.setAttribute(
                "aria-label",
                isOpen ? "Close menu" : "Open menu"
            );
        });

        // Close the mobile menu after selecting a section
        navigation.querySelectorAll(".nav-link").forEach(function (link) {
            link.addEventListener("click", function () {
                navigation.classList.remove("open");
                menuBtn.textContent = "☰";
                menuBtn.setAttribute("aria-expanded", "false");
                menuBtn.setAttribute("aria-label", "Open menu");
            });
        });
    }

    // 3. Highlight the active navigation link
    const navLinks = document.querySelectorAll(".nav-link");

    function updateActiveLink() {
        const currentSection = window.location.hash || "#home";

        navLinks.forEach(function (link) {
            const isActive = link.getAttribute("href") === currentSection;

            link.classList.toggle("active", isActive);
        });
    }

    navLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            navLinks.forEach(function (item) {
                item.classList.remove("active");
            });

            link.classList.add("active");
        });
    });

    window.addEventListener("hashchange", updateActiveLink);
    updateActiveLink();

    // 4. School contact button
    const schoolPhone = "9818408808";

    document.querySelectorAll('a[href^="tel:"]').forEach(function (link) {
        link.href = "tel:" + schoolPhone;
    });

    // 5. Log successful initialization
    console.log("Saarthi Play Public School app loaded successfully.");

});

// Simple JavaScript for Basic Navigation and Interactions

// Mobile Navigation Toggle
document.addEventListener("DOMContentLoaded", function() {
    var toggleBtn = document.getElementById("navToggle");
    var navLinks = document.getElementById("navLinks");
    if (toggleBtn && navLinks) {
        toggleBtn.addEventListener("click", function() {
            navLinks.classList.toggle("open");
        });
    }
});

// Helper function to get URL parameters (e.g. ?id=evt001)
function getQueryParam(param) {
    var urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

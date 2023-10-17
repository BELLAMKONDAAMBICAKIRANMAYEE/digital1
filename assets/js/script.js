document.addEventListener('DOMContentLoaded', function() {
    const navOpenBtn = document.querySelector('.nav-open-btn');
    const navCloseBtn = document.querySelector('.nav-close-btn');
    const mobileNav = document.querySelector('.navbar');
    const overlay = document.querySelector('.overlay');

    // Function to open the mobile navigation menu
    function openMobileNav() {
        mobileNav.classList.add('active');
        overlay.classList.add('active');
    }

    // Function to close the mobile navigation menu
    function closeMobileNav() {
        mobileNav.classList.remove('active');
        overlay.classList.remove('active');
    }

    // Open the mobile navigation menu when the open button is clicked
    navOpenBtn.addEventListener('click', openMobileNav);

    // Close the mobile navigation menu when the close button is clicked
    navCloseBtn.addEventListener('click', closeMobileNav);

    // Close the mobile navigation menu and overlay when the overlay is clicked
    overlay.addEventListener('click', closeMobileNav);

    // Close the mobile navigation menu and overlay when a navigation link is clicked
    const navLinks = document.querySelectorAll('.navbar-link');
    navLinks.forEach(function(link) {
        link.addEventListener('click', closeMobileNav);
    });
});

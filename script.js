document.addEventListener('DOMContentLoaded', () => {
    // === DOM Element Selections ===
    const header = document.getElementById('main-header'); // FIX: Select the header element
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navItems = document.querySelectorAll('.nav-links li a');

    // === 1. Mobile Menu Toggle Logic ===
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            // Toggle the 'active' class on the menu
            navLinks.classList.toggle('active');

            // Find the icon and toggle between 'fa-bars' (menu) and 'fa-times' (close)
            const icon = hamburger.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    // === 2. Close Menu When Link is Clicked ===
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                // Reset the icon to the menu bars
                const icon = hamburger.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    });

    // === 3. Scroll Header Effect (FIXED) ===
    // Use a CSS class for scroll effects instead of inline style manipulation,
    // which is generally cleaner and better for performance.
    // The previous code had an undefined 'header' variable.

    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                // Add a class when scrolled down
                header.classList.add('scrolled');
            } else {
                // Remove the class when back at the top
                header.classList.remove('scrolled');
            }
        });
    }
});
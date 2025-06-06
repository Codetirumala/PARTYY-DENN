// Navigation Toggle
const hamburger = document.querySelector('.hamburger');
        const navbarMenu = document.querySelector('.navbar-menu');
        const navLinks = document.querySelectorAll('.nav-link');

        hamburger.addEventListener('click', () => {
            navbarMenu.classList.toggle('active');
            hamburger.innerHTML = navbarMenu.classList.contains('active') ? '×' : '☰';
        });

        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navbarMenu.classList.remove('active');
                hamburger.innerHTML = '☰';
            });
        });

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form Submission
const bookingForm = document.getElementById('bookingForm');
bookingForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for your booking request! We will contact you shortly.');
    bookingForm.reset();
});

// Enhanced Scroll Behavior
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(0, 0, 0, 0.98)';
        navbar.style.padding = '1rem 4rem';
    } else {
        navbar.style.background = 'rgba(0, 0, 0, 0.95)';
        navbar.style.padding = '1.2rem 4rem';
    }
    
    // Adjust padding for mobile
    if (window.innerWidth <= 968) {
        navbar.style.padding = '1rem 2rem';
    }
    if (window.innerWidth <= 480) {
        navbar.style.padding = '1rem';
    }
});

// Enhanced Hero Interactions
document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

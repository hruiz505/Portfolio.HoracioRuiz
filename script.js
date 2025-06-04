// ===== MR. ROBOT / EVIL CORP THEME =====

// Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Typing effect for hero section
const typingText = document.querySelector('.typing-effect');
if (typingText) {
    const text = typingText.textContent;
    typingText.textContent = '';
    let i = 0;
    const typing = setInterval(() => {
        if (i < text.length) {
            typingText.textContent += text.charAt(i);
            i++;
        } else {
            clearInterval(typing);
        }
    }, 100);
}

// Back to top button
const backToTopButton = document.querySelector('.back-to-top');
if (backToTopButton) {
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopButton.classList.add('active');
        } else {
            backToTopButton.classList.remove('active');
        }
    });

    backToTopButton.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// Blinking cursor effect
const cursor = document.querySelector('.blinking-cursor');
if (cursor) {
    setInterval(() => {
        cursor.style.visibility = cursor.style.visibility === 'hidden' ? 'visible' : 'hidden';
    }, 500);
}

// Scroll animation for fade-in elements
const fadeElements = document.querySelectorAll('.fade-in');
if (fadeElements.length > 0) {
    const fadeInOnScroll = () => {
        fadeElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementTop < windowHeight - 100) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };

    window.addEventListener('scroll', fadeInOnScroll);
    window.addEventListener('load', fadeInOnScroll);
}

// Enhanced Auto-Retract Navbar Functionality
document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    let hoverTimeout;
    const hideDelay = 1000; // 1 second delay before hiding

    if (!navbar) return;

    // Mobile: Close navbar when clicking links
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            const navbarCollapse = document.querySelector('.navbar-collapse');
            if (navbarCollapse && navbarCollapse.classList.contains('show')) {
                new bootstrap.Collapse(navbarCollapse).hide();
            }
        });
    });

    // Desktop: Hide on mouse leave
    navbar.addEventListener('mouseleave', () => {
        if (window.innerWidth > 991.98) {
            hoverTimeout = setTimeout(() => {
                navbar.classList.add('navbar-hidden');
            }, hideDelay);
        }
    });

    // Desktop: Show on mouse enter
    navbar.addEventListener('mouseenter', () => {
        clearTimeout(hoverTimeout);
        navbar.classList.remove('navbar-hidden');
    });

    // Show when scrolling up
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        if (window.innerWidth > 991.98) {
            const currentScroll = window.pageYOffset;
            
            if (currentScroll <= 100) {
                // At top of page
                navbar.classList.remove('navbar-hidden');
            } else if (currentScroll < lastScroll) {
                // Scrolling up
                navbar.classList.remove('navbar-hidden');
            } else if (currentScroll > lastScroll + 50) {
                // Scrolled down significantly
                navbar.classList.add('navbar-hidden');
            }
            lastScroll = currentScroll;
        }
    });

    // Ensure navbar is visible when resizing to mobile
    window.addEventListener('resize', () => {
        if (window.innerWidth <= 991.98) {
            navbar.classList.remove('navbar-hidden');
        }
    });

    // Initialize navbar state
    if (window.innerWidth <= 991.98) {
        navbar.classList.remove('navbar-hidden');
    }
    // Success message
   formStatus.style.color = '#00ff00'; // Change to your theme green

    // Error message
    formStatus.style.color = '#ff0000'; // Change to your theme red

});

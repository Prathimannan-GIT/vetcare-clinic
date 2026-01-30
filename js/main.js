document.addEventListener('DOMContentLoaded', () => {
    // Theme Toggle - Handle both desktop and mobile theme toggles
    const themeToggles = document.querySelectorAll('.theme-toggle');
    const themeIcons = document.querySelectorAll('.theme-icon');
    
    // Load saved theme
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcons(savedTheme);
    
    themeToggles.forEach(themeToggle => {
        if (themeToggle) {
            themeToggle.addEventListener('click', () => {
                const currentTheme = document.documentElement.getAttribute('data-theme');
                const newTheme = currentTheme === 'light' ? 'dark' : 'light';
                
                document.documentElement.setAttribute('data-theme', newTheme);
                localStorage.setItem('theme', newTheme);
                updateThemeIcons(newTheme);
            });
        }
    });
    
    function updateThemeIcons(theme) {
        themeIcons.forEach(themeIcon => {
            if (themeIcon) {
                themeIcon.textContent = theme === 'light' ? '🌙' : '☀️';
            }
        });
    }

    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const headerCenter = document.querySelector('.header-center');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            headerCenter.classList.toggle('active');
            hamburger.classList.toggle('is-active');
        });
    }

    // Close mobile menu when clicking on a navigation link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            headerCenter.classList.remove('active');
            hamburger.classList.remove('is-active');
        });
    });

    // Close mobile menu when clicking on login/register buttons
    const authButtons = document.querySelectorAll('.nav-actions .btn');
    authButtons.forEach(button => {
        button.addEventListener('click', () => {
            headerCenter.classList.remove('active');
            hamburger.classList.remove('is-active');
        });
    });

    // Sticky Header Effect
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.padding = '10px 0';
            header.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
        } else {
            header.style.padding = '0';
            header.style.boxShadow = 'var(--shadow)';
        }
    });

    // Active Link Highlighting
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
});

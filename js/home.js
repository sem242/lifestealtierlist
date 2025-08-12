// Homepage interacties
document.addEventListener('DOMContentLoaded', function() {
    // Particles.js config
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            particles: {
                number: { value: 80, density: { enable: true, value_area: 800 } },
                color: { value: "#ff0000" },
                shape: { type: "circle" },
                opacity: { value: 0.5, random: true },
                size: { value: 3, random: true },
                line_linked: { enable: true, distance: 150, color: "#ff0000", opacity: 0.3, width: 1 },
                move: { enable: true, speed: 3, direction: "none", random: true, straight: false, out_mode: "out" }
            },
            interactivity: {
                detect_on: "canvas",
                events: {
                    onhover: { enable: true, mode: "repulse" },
                    onclick: { enable: true, mode: "push" }
                }
            }
        });
    }

    // Animate stats counting
    const statNumbers = document.querySelectorAll('.stat-number');
    const speed = 200;
    
    statNumbers.forEach(stat => {
        const target = parseInt(stat.getAttribute('data-count'));
        const count = parseInt(stat.textContent);
        const increment = target / speed;
        
        if (count < target) {
            const timer = setInterval(() => {
                stat.textContent = Math.floor(parseInt(stat.textContent) + increment);
                if (parseInt(stat.textContent) >= target) {
                    stat.textContent = target;
                    clearInterval(timer);
                }
            }, 1);
        } else {
            stat.textContent = target;
        }
    });

    // Copy IP button
    const copyBtn = document.querySelector('.copy-ip-btn');
    if (copyBtn) {
        copyBtn.addEventListener('click', function() {
            const ip = 'play.lifestealnl.nl';
            navigator.clipboard.writeText(ip).then(() => {
                copyBtn.innerHTML = '<i class="fas fa-check"></i> Gekopieerd!';
                setTimeout(() => {
                    copyBtn.innerHTML = '<i class="fas fa-copy"></i> Kopieer IP';
                }, 2000);
            });
        });
    }

    // Button hover effects
    const buttons = document.querySelectorAll('.cta-button, .link-card, .feature-card');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Active nav link
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.main-nav a');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
});
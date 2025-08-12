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

    // Countdown to August 12 20:00
    const countdownElement = document.getElementById('countdown');
    const targetDate = new Date('August 12, 2025 20:00:00').getTime();

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = targetDate - now;

        if (distance < 0) {
            countdownElement.textContent = "SEASON 3 LIVE!";
            document.querySelector('.status-indicator').classList.remove('soon');
            document.querySelector('.status-indicator').classList.add('online');
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        countdownElement.textContent = `SEASON 3 SOON... ${days}d ${hours}u ${minutes}m ${seconds}s`;
    }

    setInterval(updateCountdown, 1000);
    updateCountdown();

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

    // Discord member count (placeholder - you would need to use Discord API for real count)
    const discordCount = document.getElementById('discord-count');
    if (discordCount) {
        discordCount.textContent = '(1.2k+ leden)';
    }
});
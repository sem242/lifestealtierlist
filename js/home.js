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
                move: { enable: true, speed: 3 }
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
        const increment = target / speed;
        
        let count = 0;
        const timer = setInterval(() => {
            count += increment;
            if (count >= target) {
                count = target;
                clearInterval(timer);
            }
            stat.textContent = Math.floor(count);
        }, 10);
    });

    // Countdown timer for Season 3
    const countdownEl = document.getElementById('countdown');
    const targetDate = new Date("Aug 12, 2025 20:00:00").getTime();

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = targetDate - now;

        if (distance < 0) {
            countdownEl.innerHTML = "LIVE!";
            return;
        }

        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        countdownEl.innerHTML = `${hours}u ${minutes}m ${seconds}s`;
    }
    setInterval(updateCountdown, 1000);
    updateCountdown();

    // Discord member count
    fetch("https://discord.com/api/v9/invites/Gn9wHhrx7t?with_counts=true")
        .then(res => res.json())
        .then(data => {
            const count = data.approximate_member_count || 0;
            document.getElementById('discord-members').textContent = `(${count} leden)`;
            document.getElementById('discord-members-btn').textContent = `(${count} leden)`;
        })
        .catch(() => {
            document.getElementById('discord-members').textContent = '';
            document.getElementById('discord-members-btn').textContent = '';
        });
});

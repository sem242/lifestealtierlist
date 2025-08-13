document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mainNav = document.querySelector('.main-nav');
    
    if (mobileMenuBtn && mainNav) {
        mobileMenuBtn.addEventListener('click', function() {
            mainNav.classList.toggle('active');
            this.innerHTML = mainNav.classList.contains('active') ? 
                '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
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
    
    // Smooth scroll for hero indicator
    const scrollIndicator = document.querySelector('.hero-scroll-indicator');
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector('.features-section').scrollIntoView({
                behavior: 'smooth'
            });
        });
    }
    
    // Copy IP button
    const copyBtn = document.querySelector('.copy-ip-btn');
    if (copyBtn) {
        copyBtn.addEventListener('click', function() {
            const ip = 'play.lifestealnl.nl';
            navigator.clipboard.writeText(ip).then(() => {
                const originalText = copyBtn.innerHTML;
                copyBtn.innerHTML = '<i class="fas fa-check"></i> Gekopieerd!';
                setTimeout(() => {
                    copyBtn.innerHTML = originalText;
                }, 2000);
            });
        });
    }
    
    // Add animation to elements when they come into view
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.feature-card, .stat-card, .link-card');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Set initial state for animation
    const featureCards = document.querySelectorAll('.feature-card, .stat-card, .link-card');
    featureCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.5s ease';
    });
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run once on load
});


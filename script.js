// Simple scroll-to-section logic for navigation
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        window.scrollTo({
            top: targetSection.offsetTop - 70, // Adjust for navbar height
            behavior: 'smooth'
        });
    });
});

console.log("Portfolio project initialized for lab next week.");

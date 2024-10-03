const rainContainer = document.querySelector('.rain');
const numberOfDrops = 100;

for (let i = 0; i < numberOfDrops; i++) {
    const drop = document.createElement('div');
    drop.classList.add('raindrop');

    const leftPosition = Math.random() * 100;
    const animationDuration = Math.random() * 2 + 1;
    const animationDelay = Math.random() * 5;

    drop.style.left = `${leftPosition}vw`;
    drop.style.animationDuration = `${animationDuration}s`;
    drop.style.animationDelay = `${animationDelay}s`;

    rainContainer.appendChild(drop);
}

const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('nav ul');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

const skillsSection = document.getElementById('skills');
const skillBars = document.querySelectorAll('.skill-bar');

// Use IntersectionObserver to track visibility of the skills section
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Trigger the animation when the section comes into view
            skillBars.forEach(bar => {
                bar.style.transition = 'width 1s ease';
                bar.style.width = bar.getAttribute('data-skill');
            });
        } else {
            // Reset the animation when the section goes out of view
            skillBars.forEach(bar => {
                bar.style.width = '0%';
            });
        }
    });
}, {
    threshold: 0.5 // Trigger when at least 50% of the section is visible
});

// Start observing the skills section
observer.observe(skillsSection);

document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('nav ul li a');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
    
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
                
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });
});

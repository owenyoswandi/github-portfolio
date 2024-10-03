const rainContainer = document.querySelector('.rain');
const numberOfDrops = 100; // Adjust the number of raindrops as needed

for (let i = 0; i < numberOfDrops; i++) {
    const drop = document.createElement('div');
    drop.classList.add('raindrop');

    const leftPosition = Math.random() * 100; // Store random left position
    const animationDuration = Math.random() * 2 + 1; // Store random duration between 1s and 3s
    const animationDelay = Math.random() * 5; // Store random delay

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

let timeout; // Variable to hold the timeout ID

const checkScroll = () => {
        const rect = skillsSection.getBoundingClientRect();

        // Clear any existing timeout
        clearTimeout(timeout);

        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
            // Add the class to start the animation if the section is in view
            skillBars.forEach(bar => {
                bar.style.width = bar.getAttribute('data-skill'); // Set width based on data attribute
            }, 500);
        } else {
            // Set a timeout to reset widths after a delay if scrolling out of view
            timeout = setTimeout(() => {
                skillBars.forEach(bar => {
                    bar.style.width = '0%'; // Reset width to 0%
                });
            }, 50); // Delay in milliseconds (adjust as needed)
        }
    };

    // Add a scroll event listener
    window.addEventListener('scroll', checkScroll);

    // Initial check in case the section is already in view
    checkScroll();
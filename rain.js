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
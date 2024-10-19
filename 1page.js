// JavaScript to change the background image smoothly in the hero section
const heroSection = document.getElementById('hero');
const images = [
  '1.png',  // First image
  '2.png',  // Second image
  '3.png',  // Third image
  '4.png'   // Fourth image
];

let currentIndex = 0;

function changeBackground() {
  currentIndex = (currentIndex + 1) % images.length;  // Cycle through images
  heroSection.style.backgroundImage = `url(${images[currentIndex]})`;
}

// Change the background every 5 seconds
setInterval(changeBackground, 5000);
  


// Toggle the navigation menu when the hamburger icon is clicked
document.getElementById('menu-icon').addEventListener('click', function() {
  const navLinks = document.getElementById('nav-links');
  navLinks.classList.toggle('show');
});


// JavaScript for opening and closing the hamburger menu
const menuIcon = document.getElementById('menu-icon');
const navLinks = document.getElementById('nav-links');

menuIcon.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

document.getElementById('menu-icon').addEventListener('click', function() {
  const navLinks = document.getElementById('nav-links');
  navLinks.classList.toggle('show');
});

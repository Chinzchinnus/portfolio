let lastScroll = 0;
let hideTimeout;

// Select the header
const header = document.querySelector('header');

// Function to show header
function showHeader() {
  header.style.top = '0';
  resetHideTimer();
}

// Function to hide header
function hideHeader() {
  header.style.top = '-100px'; // hide above screen
}

// Reset timer to hide after 10s
function resetHideTimer() {
  if (hideTimeout) clearTimeout(hideTimeout);
  hideTimeout = setTimeout(() => {
    hideHeader();
  }, 10000); // 10 seconds
}

// Detect scroll direction
window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll > lastScroll) {
    // Scrolling down → hide header
    hideHeader();
  } else {
    // Scrolling up → show header
    showHeader();
  }

  lastScroll = currentScroll;
});

// Show header on mouse movement or touch
['mousemove', 'touchstart'].forEach(event => {
  window.addEventListener(event, showHeader);
});

// Initially start hide timer
resetHideTimer();


// Mobile menu toggle
function toggleMenu() {
  const navLinks = document.getElementById('nav-links');
  navLinks.classList.toggle('show');
}

// Scroll-triggered animations (replay on scroll)
const animatedElements = document.querySelectorAll('.animate');

function checkAnimation() {
  const triggerBottom = window.innerHeight * 0.85;

  animatedElements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;
    const elementBottom = el.getBoundingClientRect().bottom;

    if (elementTop < triggerBottom && elementBottom > 0) {
      el.classList.add('show');
    } else {
      el.classList.remove('show');
    }
  });
}

window.addEventListener('scroll', checkAnimation);
window.addEventListener('load', checkAnimation);

// Initialize particles.js (tsParticles)
tsParticles.load("particles-js", {
  particles: {
    number: { value: 50, density: { enable: true, area: 800 } },
    color: { value: "#ffffff" },
    shape: { type: "circle" },
    opacity: { value: 0.3 },
    size: { value: 3 },
    move: { enable: true, speed: 1, direction: "none", outModes: { default: "out" } },
    links: { enable: true, distance: 150, color: "#ffffff", opacity: 0.2, width: 1 },
  },
  interactivity: {
    events: { onhover: { enable: true, mode: "repulse" }, onclick: { enable: true, mode: "push" } },
  },
  detectRetina: true,
});

const universe = document.querySelector('.stars');

function createStar(size, position, i) {
  const star = document.createElement('div');
  star.classList.add('star');
  if (i % 2) {
    star.classList.add('white-star');
  } else {
    star.classList.add('gold-star');
  }

  star.style.width = `${size}px`;
  star.style.height = `${size}px`;
  star.style.top = `${position.y}%`;
  star.style.left = `${position.x}%`;
  const twinkleDuration = Math.random() * 5 + 2;
  star.style.animation = `twinkle ${twinkleDuration}s infinite alternate`;
  universe.appendChild(star);
}

function generateStars(numberOfStars) {
  for (let i = 0; i < numberOfStars; i++) {
    const size = Math.random() * 20 + 1;
    const position = { x: Math.random() * 100, y: Math.random() * 100 };
    createStar(size, position, i);
  }
}

generateStars(30);

document.addEventListener('DOMContentLoaded', function () {
  const particlesContainer = document.getElementById('particles-container');
  const numberOfParticles = 20;

  for (let i = 0; i < numberOfParticles; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    particle.style.top = `${Math.random() * 100}%`;
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.animationDuration = `${Math.random() * 3 + 19}s`;
    particle.style.animationDelay = `-${Math.random() * 6}s`;
    particle.style.animationName = 'moveParticle';

    particlesContainer.appendChild(particle);
  }
});

document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.getElementById('nav-toggle');
  const navbar = document.getElementById('navbar');

  toggle.addEventListener('click', function () {
    navbar.classList.toggle('active');
  });

  document.querySelectorAll('.nav-link').forEach((link) => {
    link.addEventListener('click', function () {
      navbar.classList.remove('active');
    });
  });

  window.addEventListener('click', function (e) {
    if (!navbar.contains(e.target) && !toggle.contains(e.target)) {
      navbar.classList.remove('active');
    }
  });
});

document.querySelectorAll('.nav-link').forEach((link) => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('data-target');
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });

      document.getElementById('navbar').classList.remove('active');
    }
  });
});

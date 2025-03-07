// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

document.querySelector('.ripple-text').addEventListener('click', function (event) {
  const ripple = document.createElement('span');
  const rect = event.target.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height);
  const x = event.clientX - rect.left - size / 2;
  const y = event.clientY - rect.top - size / 2;

  ripple.style.width = ripple.style.height = `${size}px`;
  ripple.style.left = `${x}px`;
  ripple.style.top = `${y}px`;

  ripple.classList.add('ripple');
  this.appendChild(ripple);

  // Remove the ripple element after animation ends
  ripple.addEventListener('animationend', () => {
    ripple.remove();
  });
});

  
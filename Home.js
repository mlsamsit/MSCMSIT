// Add smooth scroll behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

// Add parallax effect to shapes
window.addEventListener('scroll', () => {
  const shapes = document.querySelectorAll('.shape');
  const scrolled = window.pageYOffset;
  
  shapes.forEach((shape, index) => {
      const speed = 0.2 + (index * 0.1);
      shape.style.transform = `translateY(${scrolled * speed}px) rotate(${45 + (index * 15)}deg)`;
  });
});

// Add entrance animations when page loads
document.addEventListener('DOMContentLoaded', () => {
  const title = document.querySelector('.title');
  const description = document.querySelector('.description');
  const button = document.querySelector('.cta-button');
  const image = document.querySelector('.feature-image');

  // Add fade-in class to elements
  [title, description, button, image].forEach((element, index) => {
      setTimeout(() => {
          element.style.opacity = '1';
          element.style.transform = 'translateY(0)';
      }, index * 200);
  });
});

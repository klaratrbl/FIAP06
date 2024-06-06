document.querySelectorAll('nav ul li a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  function animateOnScroll() {
    const elements = document.querySelectorAll('.animate');
  
    elements.forEach(element => {
      if (element.getBoundingClientRect().top < window.innerHeight) {
        element.classList.add('active');
      }
    });
  }
  
  document.addEventListener('DOMContentLoaded', animateOnScroll);
  window.addEventListener('scroll', animateOnScroll);
  
  gsap.from('header', { duration: 1, opacity: 0, y: -50, ease: 'power4.out' });
  gsap.from('#sobre', { duration: 1, opacity: 0, y: 50, ease: 'power4.out', delay: 0.5 });
  
  document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('mouseenter', () => {
      gsap.to(link, { rotationY: 360, duration: 0.5, ease: 'elastic.out(1, 0.3)' });
    });
  
    link.addEventListener('mouseleave', () => {
      gsap.to(link, { rotationY: 0, duration: 0.5, ease: 'elastic.out(1, 0.3)' });
    });
  });
  
  // Maria Clara Martins
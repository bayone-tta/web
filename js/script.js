// Author: Daniel Audino
// Date: 2024-03-19
// Description: This file contains the JavaScript code for the website

// Sticky navigation
const nav = document.querySelector('nav');
window.addEventListener('scroll', function() {
  if (document.documentElement.scrollTop > 20) {
    nav.classList.add('sticky');
  }else {
    nav.classList.remove('sticky');
  }
});
// Smooth scroll
const links = document.querySelectorAll('a[href^="#"]');
links.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    window.scrollTo({
      top: target.offsetTop - nav.offsetHeight - 20,
      behavior: 'smooth'
    });
  });
});
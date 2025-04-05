// Change navbar background color on scroll
window.onscroll = function() {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 100) {
    navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
  } else {
    navbar.style.backgroundColor = 'transparent';
  }
};

// FAQ Accordion Toggle
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  const question = item.querySelector('.faq-question');
  
  question.addEventListener('click', () => {
    item.classList.toggle('active'); // Toggle the active class on FAQ item to show/hide answer
  });
});
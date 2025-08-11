const toggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.nav-links');

toggle.addEventListener('click', () => {
  links.classList.toggle('open');
});

// Optional: Close mobile menu when a link is clicked
links.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    if (links.classList.contains('open')) {
      links.classList.remove('open');
    }
  });
});

document.querySelectorAll('.accordion-header').forEach(button => {
  button.addEventListener('click', () => {
    const accordion = button.parentElement;
    accordion.classList.toggle('open');

    const content = accordion.querySelector('.accordion-content');
    content.style.display = content.style.display === 'block' ? 'none' : 'block';
  });
});

document.querySelectorAll('.sub-accordion-header').forEach(button => {
  button.addEventListener('click', () => {
    const content = button.nextElementSibling;
    content.style.display = content.style.display === 'block' ? 'none' : 'block';
    button.querySelector('.chevron').classList.toggle('open');
  });
});

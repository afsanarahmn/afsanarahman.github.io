const headers = document.querySelectorAll('.accordion-header');

headers.forEach(header => {
  header.addEventListener('click', () => {

    headers.forEach(h => {
      if (h !== header) {
        h.classList.remove('active');
        h.nextElementSibling.style.maxHeight = null;
      }
    });

    header.classList.toggle('active');
    const content = header.nextElementSibling;

    if (header.classList.contains('active')) {
      content.style.maxHeight = content.scrollHeight + 'px';
    } else {
      content.style.maxHeight = null;
    }
  });
});

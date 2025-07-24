document.addEventListener('DOMContentLoaded', function () {
  const themeToggle = document.getElementById('theme-toggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      document.body.classList.toggle('dark');
      themeToggle.textContent = document.body.classList.contains('dark') ? '\u2600\ufe0f' : '\ud83c\udf19';
    });
  }

  const modal = document.getElementById('modal');
  const modalTitle = document.getElementById('modal-title');
  const modalDescription = document.getElementById('modal-description');

  const products = [
    { title: 'Product 1', description: 'Detailed info about Product 1.' },
    { title: 'Product 2', description: 'Detailed info about Product 2.' },
    { title: 'Product 3', description: 'Detailed info about Product 3.' },
  ];

  window.openModal = function(index) {
    if (modalTitle && modalDescription && modal) {
      modalTitle.textContent = products[index].title;
      modalDescription.textContent = products[index].description;
      modal.style.display = 'flex';
    }
  };

  window.closeModal = function() {
    if (modal) modal.style.display = 'none';
  };

  window.addEventListener('click', (e) => {
    if (e.target === modal) window.closeModal();
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && modal.style.display === 'flex') {
      window.closeModal();
    }
  });

  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();
      if (!name || !email || !message) {
        alert('Please fill in all fields.');
        return;
      }
      alert('Message sent successfully!');
      this.reset();
    });
  }
});

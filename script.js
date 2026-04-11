// ======================= script.js =======================

// Klik link
const links = document.querySelectorAll('.link-card');
links.forEach(link => {
  link.addEventListener('click', () => {
    console.log('Membuka:', link.textContent);
  });
});

// Copy link
const copyButtons = document.querySelectorAll('.copy-btn');
copyButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const link = btn.getAttribute('data-link');
    navigator.clipboard.writeText(link);
    alert('Link berhasil disalin!');
  });
});

// Dark mode toggle
const toggle = document.getElementById('themeToggle');
toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});
document.addEventListener('DOMContentLoaded', () => {
  
  // --- Dark Mode Logic ---
  const themeToggle = document.getElementById('theme-toggle');
  const body = document.body;
  const sunIcon = '☀️';
  const moonIcon = '🌙';

  // Function to apply the saved theme
  function applyTheme(theme) {
    if (theme === 'dark') {
      body.setAttribute('data-theme', 'dark');
      if (themeToggle) themeToggle.textContent = sunIcon; // Check if button exists
    } else {
      body.removeAttribute('data-theme');
      if (themeToggle) themeToggle.textContent = moonIcon; // Check if button exists
    }
  }

  // Check for saved theme in localStorage
  let savedTheme = localStorage.getItem('theme');

  // If no theme is saved, check the OS preference
  if (!savedTheme) {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    savedTheme = prefersDark ? 'dark' : 'light';
  }

  // Apply the determined theme
  applyTheme(savedTheme);

  // Add click event to the toggle button *only if it exists*
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      let currentTheme = body.getAttribute('data-theme');
      
      if (currentTheme === 'dark') {
        // Switch to light mode
        localStorage.setItem('theme', 'light');
        applyTheme('light');
      } else {
        // Switch to dark mode
        localStorage.setItem('theme', 'dark');
        applyTheme('dark');
      }
    });
  }

  // --- Hamburger Menu Logic ---
  const menuToggle = document.getElementById('menu-toggle');
  const mainNav = document.getElementById('main-nav');

  if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', () => {
      mainNav.classList.toggle('show');
    });
  }
  
});
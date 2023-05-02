const themeSelect = document.querySelector('select');
const body = document.querySelector('body');

themeSelect.addEventListener('change', function () {
  const selectedTheme = themeSelect.value;
  body.className = selectedTheme;
});

const nightMode = document.querySelector('#night-mode');


nightMode.addEventListener('click', () => {
  document.documentElement.classList.toggle('night-mode');
});
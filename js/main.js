const nightMode = document.querySelector('#night-mode');


nightMode.addEventListener('click', () => {
  document.documentElement.classList.toggle('night-mode');
});

var modal = document.getElementById("myModal");

var span = document.getElementsByClassName("close")[0];

function timeModal() {
  setTimeout(function() {
    modal.style.display = "block"}, 5000);
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

timeModal();

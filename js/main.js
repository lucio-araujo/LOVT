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

// document.getElementById('btn-submit-contact').addEventListener("click", (evento) => {
//   evento.preventDefault();

//   let nomeValue = document.querySelector("#input_nome").value;
//   let emailValue = document.querySelector("#input_email").value;

//   console.log(nomeValue);
//   console.log(emailValue);

// });

let formContact = querySelector("#form_contact");

formContact.addEventListener("submit", (evento) => {
  evento.preventDefault();

  let nome = document.querySelector("#input_nome").value;

  let email = document.querySelector("#input_email").value;

  let telefone = document.querySelector("#input_telefone").value;

  let texto = document.querySelector("#mensagem").value;

  if (!nome || !email || !telefone || !texto) {
    alert("Prencha todos os campos!")
  }
  
  if (nome.length < 3) {
    alert("Seu nome deve ter dois ou mais caracteres")
  }
  
  if (telefone.length < 8) {
    alert("Seu telefone deve ter no minimo 8 digitos")
  }
  
  if (email.indexOf('@') < 0 || email.indexOf('.') < 0) {
    alert("Campo de email invalido!")
  }
});

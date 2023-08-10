const container = document.getElementById("container");
const loginButton = document.getElementById("login");
const signUpButton = document.getElementById("signUp");
const motDePasse = document.getElementById("motDePasse");
const motDePasseIns = document.getElementById("motDePasseIns");
let msg = document.getElementById("msg");
let msgins = document.getElementById("msgins");

signUpButton.addEventListener("click", () => {
  container.classList.add("panel-active");
});

loginButton.addEventListener("click", () => {
  container.classList.remove("panel-active");
});

motDePasse.addEventListener("input", () => {
  let validMail = () => {
    contenu = motDePasse.value;
    if (contenu.length > 6) {
      msg.innerHTML = "Valide";
      msg.style.color = "green";
    } else {
      msg.innerHTML = "entrer un mot de passe superieur a 6 caractéres";
      msg.style.color = "red";
    }
  };
  validMail();
});

motDePasseIns.addEventListener("input", () => {
  let validMaildeux = () => {
    contenu = motDePasseIns.value;
    if (contenu.length > 6) {
      msgins.innerHTML = "Valide";
      msgins.style.color = "green";
    } else {
      msgins.innerHTML = "entrer un mot de passe superieur a 6 caractéres";
      msgins.style.color = "red";
    }
  };
  validMaildeux();
});

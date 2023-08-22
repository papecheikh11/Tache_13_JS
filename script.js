//  Declaration des variables

const container = document.getElementById("container");
const loginButton = document.getElementById("login");
const signUpButton = document.getElementById("signUp");
const motDePasse = document.getElementById("motDePasse");
const motDePasseIns = document.getElementById("motDePasseIns");
let mail = document.querySelector("#email");

const btnClick1 = document.querySelector("#btnClick1");

let msg = document.getElementById("msg");
let msgins = document.getElementById("msgins");

//boutton pour activer les page inscriptions et connexion
signUpButton.addEventListener("click", (e) => {
  e.preventDefault();
  container.classList.add("panel-active");
});

loginButton.addEventListener("click", () => {
  container.classList.remove("panel-active");
});

//Pour acceder a la page index

btnClick1.addEventListener("click", (e) => {
  const emailRegExp = /^[^@]+@[^\.]+\..+$/;
  e.preventDefault();
  mailValue = mail.value;
  mdp = motDePasse.value;
  if (mailValue == "" || emailRegExp.test(mailValue) == false) {
    alert("Enter un email valide");
  } else if (mdp.length < 6) {
    alert("Votre mot de passe n'est pas valide");
  } else {
    window.location.href = "accueil.html";
  }
});

//Gestion de l'entrée des mots de passe

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

// Local Storage

function inscription() {
  localStorage.setItem("nom", document.querySelector("#nom").value);
  localStorage.setItem("email", document.querySelector("#email").value);
  localStorage.setItem(
    "motDePasseIns",
    document.querySelector("#motDePasseIns").value
  );
}

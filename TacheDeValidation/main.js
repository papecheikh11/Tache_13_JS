// Créer une AUTHENTIFICATION

// 1. Créer une page d’inscription
// 2. Créer une page de connexion
//3.  Créer une page d'accueil
// a. L’utilisateur aura accès à cette page que s’il se connecte.
// b. ajouter un bouton de déconnexion sur la page d'accueil
//i.  Si on clique sur le bouton, ça nous redirige vers la page de connexion.

// !!! NOTE: Pour le stockage des données, l’utilisateur peut utiliser le localStorage.
// 	- Il faut aussi gérer les messages d’erreurs lors de la connexio

const container = document.getElementById("container");
const loginButton = document.getElementById("login");
const signUpButton = document.getElementById("signUp");
const motDePasse1 = document.querySelector("#motDePasse");
const motDePasseIns = document.getElementById("motDePasseIns");
let msg = document.getElementById("msg");
let msgins = document.getElementById("msgins");

// signUpButton.addEventListener("click", () => {
//   window.location.href = "index.html";
// });

function btnClick() {
  window.location = "index.html";
}

motDePasse1.addEventListener("input", () => {
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

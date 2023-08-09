const container = document.getElementById("container");
const loginButton = document.getElementById("login");
const signUpButton = document.getElementById("signUp");
const motDePasse = document.getElementById("motDePasse");

signUpButton.addEventListener("click", () => {
  container.classList.add("panel-active");
});

loginButton.addEventListener("click", () => {
  container.classList.remove("panel-active");
});

motDePasse.addEventListener("mouseout", (e) => {
  contenu = e.target.value;
  if (contenu.length <= 6) {
    alert("entrer un mot de passe superieur a 6 caractéres");
  } else {
    console.log("valide");
  }
});

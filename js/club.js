// ---- Exercice 1 ----

const titre = document.getElementById("titre");
const infos = document.getElementsByClassName("info");
const ateliers = document.querySelectorAll(".atelier");
console.log(titre.textContent);
console.log(infos.length);
console.log(ateliers.length);
console.log(document.images.length);
console.log(document.links.length);
console.log(document.forms.length);

// ---- Exercice 2 ----

titre.textContent = "Le club informatique — Inscriptions 2026";
infos[1].innerHTML = "Salle <b>B12</b>, bâtiment A";
for (const info of infos) {
  info.classList.add("important");
}
console.log(infos[0].className);

// ---- Exercice 3 ----
const choix = document.getElementById("choix");
for (const atelier of ateliers) {
  atelier.addEventListener("click", (e) => {
    e.target.classList.add("choisi");
    choix.textContent = "Atelier choisi : " + e.target.textContent;
  });
}
document.addEventListener("keydown", (e) => {
  console.log(e.key);
  if (e.key === "Escape") {
    choix.textContent = "Aucun atelier choisi.";
  }
});

// ---- Exercice 4 ----

const form = document.forms["inscription"];
const message = document.getElementById("message");
const prenom = form.elements["prenom"];
const niveau = form.elements["niveau"];
const charte = form.elements["charte"];
console.log(form.elements.length);
niveau.addEventListener("change", () => {
  message.className = "";
  message.textContent =
    "Niveau choisi : " + niveau.options[niveau.selectedIndex].text;
});
form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (prenom.value.trim() === "") {
    message.textContent = "Le prénom est obligatoire.";
    message.className = "erreur";
  }
  //   else if (niveau.value===""){
  //     message.textContent = "choisir un niveau";
  //     message.className = "erreur";
  //}
  else if (!charte.checked) {
    message.textContent = "Vous devez accepter la charte.";
    message.className = "erreur";
  } else {
    message.textContent = "Bienvenue " + prenom.value.trim();
    message.className = "succes";
  }
});

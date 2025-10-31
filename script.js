let count = 0;
let timer = 5;
let controleur = false;
let chrono;

let clicker = document.getElementById("btn1");
let compteur = document.getElementById("compteur");
let rejouer = document.getElementById("btn2");

function afficherScore() {
    document.getElementById(
        "score"
    ).textContent = `Votre score est de ${count} points.`;
}


function decompte() {
  controleur = true;
  chrono = setInterval(function () {
    timer -= 1;
    if (timer <= 0) {
      clicker.disabled = true;
      clearInterval(chrono);
      controleur = false;
      document.getElementById("chrono").innerHTML = "Temps écoulé !";
      afficherScore();
    } else {
      document.getElementById("chrono").innerHTML = `Temps restant : ${timer} s`;
    }
  }, 1000);
}

clicker.addEventListener("click", function () {
  if (count === 0 && !controleur) {
    decompte();
  }
  if (controleur) {
    count += 1;
    console.log(count);
    compteur.textContent = `Compteur : ${count}`;
  }
});

rejouer.addEventListener("click", function () {
  clearInterval(chrono);
  count = 0;
  timer = 5;
  controleur = false;
  clicker.disabled = false;
  compteur.textContent = `Compteur : ${count}`;
  document.getElementById("chrono").innerHTML = `Temps restant : ${timer} s`;
  document.getElementById("score").textContent = ``;
});
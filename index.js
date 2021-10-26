let x = 2;
let y = 5;

if (x < y) {
  console.log("x est inférieur à y");
} else {
  console.log("x est supérieur à y ");
}

// les fonctions

function faireQuelqueChose() {
  console.log("Je fais un truc!");
  console.log("trop cool");
}

faireQuelqueChose();

// fonction fléché

const faireUneTache = (tache) => {
  console.log("Je fais : " + tache);
};

// le return
function add2() {
  let a = 4;
  return a + 2;
}

(function maFonction() {
  console.log("Je me joue toute seule");
})();

(() => {
  console.log("Je me joue aussi toute seule");
})();

//SELECTEURS
//Ceci est un exemple
// document.querySelector("h4").style.background = "yellow";

// const baliseHTML = document.querySelector("h4");

// console.log(baliseHTML);

// baliseHTML.style.background = "yellow";

// Cick event

const questionContainer = document.querySelector(".click-event");
const btn1 = document.querySelector("#btn-1");
const btn2 = document.getElementById("btn-2");
const response = document.querySelector("p");

questionContainer.addEventListener("click", () => {
  questionContainer.classList.toggle("question-click");
});

btn1.addEventListener("click", () => {
  response.classList.add("show-response");
  response.style.background = "green";
});
btn2.addEventListener("click", () => {
  response.classList.add("show-response");
  response.style.background = "red";
});

//-------------------------------------------------------------

// MOUSE EVENTS
const mousemove = document.querySelector(".mousemove");

window.addEventListener("mousemove", (e) => {
  mousemove.style.left = e.pageX + "px";
  mousemove.style.top = e.pageY + "px";
});
window.addEventListener("mousedown", () => {
  mousemove.style.transform = "scale(2) translate(-25%, -25%)";
});
window.addEventListener("mouseup", () => {
  mousemove.style.transform = "scale(1) translate(-50%, -50%)";
});

questionContainer.addEventListener("mouseenter", () => {
  questionContainer.style.background = "rgba(0,0,0,0.6)";
});
questionContainer.addEventListener("mouseout", () => {
  questionContainer.style.background = "pink";
});

response.addEventListener("mouseover", () => {
  response.style.transform = "rotate(2deg)";
});

//------------------------------------------------------------
const keypressContainer = document.querySelector(".keypress");
const key = document.getElementById("key");

const ring = (key) => {
  const audio = new Audio();
  audio.src = "./Enter.mp3";
  audio.play();
};

document.addEventListener("keypress", (e) => {
  key.textContent = e.key;

  if (
    e.key === "a" ||
    e.key === "e" ||
    e.key === "i" ||
    e.key === "o" ||
    e.key === "u"
  ) {
    key.textContent = "Voyelle";
    keypressContainer.style.background = "blue";
  } else {
    keypressContainer.style.background = "red";
    key.textContent = "Consonne";
  }

  ring();
});

//-----------------------------------------------------------

//Scroll Event
const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
  console.log(window.scrollY);

  if (window.scrollY > 120) {
    nav.style.top = 0;
  } else {
    nav.style.top = "-50px";
  }
});

//-----------------------------------------------------------
const inputName = document.querySelector('input[type="text"]');
const select = document.querySelector("select");
const form = document.querySelector("form");
let pseudo = "";
let language = "";

inputName.addEventListener("input", (e) => {
  pseudo = e.target.value;
  console.log(pseudo);
});

select.addEventListener("input", (e) => {
  language = e.target.value;
});
form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (cgv.checked) {
    document.querySelector("form > div").innerHTML = `
        <h3>Pseudo :  ${pseudo} </h3>
        <h4>Langage préféré : ${language}</h4>
    `;
  } else {
    alert("Veuillez acceptez les CGV");
  }
});

//----------------------------------------------------------
//Load event
window.addEventListener("load", () => {
  console.log("Document chargé ! ");
});

//----------------------------------------------------------
// ForEach
// const boxes = document.getElementsByClassName("box");
const boxes = document.querySelectorAll(".box");
console.log(boxes);

boxes.forEach((box) => {
  box.addEventListener("click", (e) => {
    // e.target.style.transform = "scale(0.7)";
  });
});
//----------------------------------------------------------
// addEventListener VS onclick
// document.body.onclick = function () {
//   console.log("click");
// };
// Bubbling => fin (de base l'eventlistener est paramétré en mode Bubling)
document.body.addEventListener("click", () => {
  console.log("click n°1");
});
// Usecapture
document.body.addEventListener(
  "click",
  () => {
    console.log("click n°2");
  },
  true
);

//----------------------------------------------------------
// Stop propagation
questionContainer.addEventListener("click", (e) => {
  // alert("test");
  e.stopPropagation();
});

//removeEventListener

//----------------------------------------------------------

//BOM
// console.log(window.innerHeight);
// console.log(window.scrollY);
// window.open("http://google.com", "cours js", "height=600, width=800");

// window.close()

//Evénements adossés à window
//alert ("hello");

//confirm
btn2.addEventListener("click", () => {
  confirm("Voulez vous vraiment vous tromper ?");
});

//prompt

let answer;
btn1.addEventListener("click", () => {
  answer = prompt("Entrez votre nom ! ");

  questionContainer.innerHTML += `<h3> Bravo ${answer}</h3>`;
});

// timer, compte à rebours
setTimeout(() => {
  //logique à exécuter
  questionContainer.style.borderRadius = "300px";
}, 2000);

// setInterval(() => {
//   document.body.innerHTML += `<div class='box'><h2>Nouvelle Boite ! </h2></div>`;
// }, 1000);

document.body.addEventListener("click", (e) => {
  clearInterval(interval);
});

//Location

// console.log(location.href);
// console.log(location.host);
// console.log(location.pathname);
// console.log(location.search);

// location.replace("http://lequipe.fr");

// window.onload = () => {
//   location.href = "http://google.com";
// };
// Navigator
//console.log(naivgator.userAgent);

//History
// console.log(history);
//window.history.back();
//history.go(-2)

//-----------------------------------------------------------------
//SetProperty
window.addEventListener("mousemove", (e) => {
  nav.style.setProperty("--x", e.layerX + "px");
  nav.style.setProperty("--y", e.layerY + "px");
});

// XMLHttpRequest

function reqListener() {
  console.log(this.responseText);
}

let req = new XMLHttpRequest();
req.onload = reqListener;
// req.open("get", "data.txt", true);
// req.open("get", "data.json", true);
// req.open("get", "https://api.blablagues.net/?rub=blagues", true);
// req.send();

//-------------------------
// FETCH
//-------------------------

// fetch("monlien", "object d'options")
//   .then((response) => {
//     // console.log(response)
//   })
//   .catch((err) => console.log(err));

// fetch("data.txt")
//   .then((res) => res.text())
//   .then((data) => console.log(data));

fetch("data.json");
// .then((res) => res.json())
// .then((data) => console.log(data));

const myHeaders = new Headers();

const init = {
  method: "GET",
  headers: myHeaders,
  mode: "cors",
  cache: "default",
};

// fetch("data.json", init).then((res) => console.log(res));

// CRUD => Create (POST), reand (GET), update (PUT), delete (DELETE)

const init2 = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    pseudo: "From scratch",
    message: "yo les gens",
  }),
  mode: "cors",
  credentials: "same-origin",
};

document.querySelector("form").addEventListener("submit", () => {
  fetch("http://localhost:3000/posts", init2).then(() =>
    console.log("data envoyée")
  );
});

//-----------------------
//Asynchrone
//-----------------------

setTimeout(() => {
  // console.log("test");
}, 2000);

//  Promise
// fetch("monlien").then((res) => res);

// async/await
async function fetchData() {
  await fetch("monlien");
  // attend que le await soit exécuté anvant de faire la suite
  executeFonction();
}

const fetchData2 = async () => {};

//-----------
// LE JSON
//---------

// Méthode .json() => méthode qui s'auto-résout en renvoyant le Body de la requete.

fetch("data.json")
  .then((res) => res.json())
  .then((data) => {
    // Stringify => convertit en JSON
    let settings = JSON.stringify(data);
    // Parse => transforme json en object js
    // console.log(JSON.parse(settings));
  });

//-----------------------
//Web API
//-----------------------

//CLIENT STORAGE
//-----------------------

// Locale Storage
localStorage.data = "Je stock la data";
console.log(localStorage.data);
localStorage.removeItem("data");

const obj = {
  name: "Denis",
  age: 22,
};

//Il faut passer des chaines de caractères
localStorage.user = JSON.stringify(obj);

// console.log(JSON.parse(localStorage.user));

//Session Storage
sessionStorage.dataSettings = "55px";
sessionStorage.clear();

//-----------
// Cookies
//-----------

document.cookie = "username=FromScratch";

// Bonne pratique
document.cookie = "pseudo=FS;path=/; max-age=450000; secure; samesite";

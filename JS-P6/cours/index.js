"use strict";

//CANVAS
//-----------

// const canvas = document.getElementById("canvas");
// const ctx = canvas.getContext("2d");
// function draw() {
//   ctx.fillStyle = "rgb(200,0,0)";
//   ctx.fillRect(10, 10, 50, 50);

//   ctx.fillsStyle = "rgba(0,100,200,0.5)";
//   ctx.fillRect(30, 30, 100, 50);

//   ctx.fillStyle = "rgba(0,100,200, 0.5)";
//   ctx.fillRect(10, 25, 100, 100);
//   ctx.clearRect(15, 25, 40, 40);
//   ctx.strokeRect(125, 75, 50, 50);

//   ctx.fillStyle = "rgba(200,100,200,0.8)";
//   ctx.beginPath();
//   ctx.moveTo(180, 150);
//   ctx.lineTo(100, 75);
//   ctx.lineTo(100, 150);
//   ctx.fill();
// }

// window.addEventListener("load", draw);

//-------------
// TRY/ CATCH
// ----------------

try {
  //test d'un block de code
  maFonction();
} catch (err) {
  console.log(err);
}

function isValidJSON(txt) {
  try {
    JSON.parse(txt);
    return true;
  } catch {
    return false;
  }
}

// console.log(isValidJSON(24));

try {
  //test d'un block de code
  maFonction();
} catch (err) {
  console.log(err);
} finally {
  console.log("on est arrivé au bout !");
}

//Throw
function isNumber(num) {
  if (isNaN(num)) {
    throw "Not a Number !";
  } else {
    console.log("c'est un nombre");
  }
}
try {
  isNumber(2);
} catch (err) {
  console.log(err);
}

//-------------
// Strict mode
//-------------

// voiture = "Toyota";
// console.log(voiture);

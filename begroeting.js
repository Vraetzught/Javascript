"use strict"
const now = new Date().getHours();
let greet = document.getElementById("begroeting");

switch (true) {
   case now < 12:
      greet.innerText = "Goedemorgen";
      break;
   case now >= 12 && now < 18:
      greet.innerText = "Goedemiddag";
      break;
   default: 
      greet.innerText = "Goedenavond";
}
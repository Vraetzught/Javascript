"use strict"

const aantalHamburgers = document.getElementById("hamburgers").length;
document.getElementById("aantalHamburgers").innerText = aantalHamburgers;

const aantalFrieten = document.getElementsByName("friet").length;
document.getElementById("aantalFrieten").innerText = aantalFrieten;

const aantalDesserts = document.getElementsByName("dessert").length;
document.getElementById("aantalDesserts").innerText = aantalDesserts;

document.getElementById("hamburgers").onchange = function() {
   document.getElementById("keuzeBurger").innerText = this.value;
}

for (const inputFriet of document.getElementsByName("friet")) {
   inputFriet.onchange = function() {
      document.getElementById("keuzeFriet").innerText = this.value;
   };
}
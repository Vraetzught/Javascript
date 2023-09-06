"use strict"

const linksSelect = document.getElementById("links");
const rechtsSelect = document.getElementById("rechts");
const eenNaarRechtsButton = document.getElementById("eenNaarRechts");
const allesNaarRechtsButton = document.getElementById("allesNaarRechts");
const eenNaarLinksButton = document.getElementById("eenNaarLinks");
const allesNaarLinksButton = document.getElementById("allesNaarLinks");

function moveAllFromTo (vanSelect, naarSelect) {
   naarSelect.innerHTML += vanSelect.innerHTML;
   vanSelect.innerHTML = "";
}

function moveOneFromTo (vanSelect, naarSelect) {
   const gekozenBurger = vanSelect.value;
   const option = document.createElement("option");
   option.innerText = gekozenBurger;
   naarSelect.appendChild(option);
   vanSelect.remove(vanSelect.selectedIndex);
}

allesNaarRechtsButton.onclick = function() {
   moveAllFromTo(linksSelect, rechtsSelect);
   this.disabled = true;
   allesNaarLinksButton.disabled = false;
}

allesNaarLinksButton.onclick = function() {
   moveAllFromTo(rechtsSelect, linksSelect);
   this.disabled = true;
   allesNaarRechtsButton.disabled = false;
}

linksSelect.onchange = function() {
   eenNaarRechtsButton.disabled = false;
}

rechtsSelect.onchange = function() {
   eenNaarLinksButton.disabled = false;
}

eenNaarRechtsButton.onclick = function() {
   moveOneFromTo(linksSelect, rechtsSelect);
   this.disabled = true;
   if (linksSelect.length === 0) {
      allesNaarRechtsButton.disabled = true;
   }
   allesNaarLinksButton.disabled = false;
}

eenNaarLinksButton.onclick = function() {
   moveOneFromTo(rechtsSelect, linksSelect);
   this.disabled = true;
   if (rechtsSelect.length === 0) {
      allesNaarLinksButton.disabled = true;
   }
   allesNaarRechtsButton.disabled = false;
}
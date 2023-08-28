"use strict"

const spanCopyright = document.createElement("span");
spanCopyright.innerText = "Copyright © VDAB";  

const jaar = new Date().getFullYear();
const textNode = document.createTextNode(` ${jaar}`);

spanCopyright.appendChild(textNode);
const body = document.querySelector("body");
body.appendChild(spanCopyright);

document.getElementById("toevoegen").onclick = function() {
   const voornaamInput = document.getElementById("voornaam");
   const voornaam = voornaamInput.value;
   const li = document.createElement("li");
   li.innerText = voornaam;
   document.getElementById("voornamen").appendChild(li);
   voornaamInput.value = "";
   voornaamInput.focus();
}
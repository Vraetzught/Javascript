"use strict"

document.getElementById("toevoegen").onclick = function () {
   verbergAlleFoutMeldingen()
   const verkeerdeElementen = document.querySelectorAll("input:invalid,select:invalid");
   for (const element of verkeerdeElementen) {
      document.getElementById(`{elemenet.id}Fout`).hidden = false;
   }
   const correcteElementen = document.querySelectorAll("input:valid,select:valid");
   for (const element of correcteElementen) {
      document.getElementById(`${element.id}Fout`).hidden = true;
   }

   document.getElementById("toegevoegd").hidden = verkeerdeElementen.length !== 0;
}

function verbergAlleFoutMeldingen () {
   for (const melding of document.querySelectorAll("span.fout")) {
      melding.hidden = true;
   }
}
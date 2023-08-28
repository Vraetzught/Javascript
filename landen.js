"use strict"

for (const land of document.querySelectorAll("#landen a")) {
   land.onclick = function () {
      document.getElementById("hoofdstad").innerText = this.dataset.hoofdstad;
      document.getElementById("oppervlakte").innerText = this.dataset.oppervlakte;
   };
}
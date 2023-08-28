"use strict"
document.getElementById("zonderOfMetAfbeeldingen").onclick = function () {
   if (this.innerText === "Zonder afbeeldingen") {
      for (const foto of document.querySelectorAll("img")) {
         foto.hidden = true;
      };
      this.innerText = "Met afbeeldingen"
   } else {
      for (const foto of document.querySelectorAll("img")) {
         foto.hidden = false;
      };
      this.innerText = "Zonder afbeeldingen"
   }
}


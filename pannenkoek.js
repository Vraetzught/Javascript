"use strict"

for (const element of document.querySelectorAll("#ingrediënten, #werkwijze")) {
   element.onclick = function () {
         this.classList.toggle("opvallend");
   };
};

for (const hyperlink of document.querySelectorAll("a[data-teverbergenid]")) {
   hyperlink.onclick = function() {
      const bijhorendElement = document.getElementById(this.dataset.teverbergenid);
      if (this.innerText === "Verbergen") {
         bijhorendElement.hidden = true;
         this.innerText = "Tonen";
      } else {
         bijhorendElement.hidden = false;
      };
   };
};
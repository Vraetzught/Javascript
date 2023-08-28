"use strict"

for (const li of document.getElementsByTagName("li")) { 
   li.onclick = function () { 
      maakSiblingsOnopvallendVan(this); 
      this.classList.add("opvallend"); 
      } 
   } 
   
function maakSiblingsOnopvallendVan(li) { 
   for (const sibling of li.parentElement.children) { 
         sibling.classList.remove("opvallend"); 
      } 
   } 
"use strict"

for (let i = 0; i < 10; i++) {
   let datum = new Date()
   datum.setDate(datum.getDate()+i)

   const tbody = document.querySelector("tbody");
   const tr = tbody.insertRow();
   const datumTd = tr.insertCell();
   const textfieldTd = tr.insertCell();

   datumTd.innerText = datum.toLocaleDateString("nl-BE");
   textfieldTd.innerHTML = `<input type="text" id="task${i+1}">`;
}
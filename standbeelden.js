"use strict";

document.getElementById("isHetWeekend").onclick = function () {
   const dagInWeek = new Date().getDay();
   document.getElementById("weekend").innerText =
      dagInWeek === 6 || dagInWeek === 0 ? "Ja" : "Nee";
}

const standbeeldenUI = document.getElementById("standbeelden");
for (const hyperlink of standbeeldenUI.getElementsByTagName("a")) {
    hyperlink.onclick = toonStandbeeld;
    function toonStandbeeld() {
        const img = document.getElementById("afbeelding");
        this.dataset.plaats = "...";
        img.title = this.dataset.plaats;
        img.src = `${this.dataset.foto}.jpg`;
    }
}

const voorlaatsteLi = document.querySelector("li:nth-last-child(2)");
let vorigeSibling = voorlaatsteLi.previousElementSibling;
while (vorigeSibling !== null) {
    console.log(vorigeSibling);
    vorigeSibling = vorigeSibling.previousElementSibling;
}
document.getElementById("knopje").onclick = function() {
   let spaties = 0
   for (let i of document.getElementById("tekstvak").value) {
      if (i == " ") {
         spaties ++;
      }
   }
   document.getElementById("result").innerText = `Aantal spaties: ${spaties}`;
}

document.getElementById("tekstvak").oninput = function () {
   document.getElementById("knopje").disabled = this.value === "";
}
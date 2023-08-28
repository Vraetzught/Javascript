let klinkers = ["a", "e", "i", "o", "u", "y"]
document.getElementById("tekstvak").oninput = function() {
   
   let aantalKlinkers = 0
   for (let i of document.getElementById("tekstvak").value) {
      if (klinkers.includes(i)) {
         aantalKlinkers ++;
      }
   }
   document.getElementById("result").innerText = `Aantal aantalKlinkers: ${aantalKlinkers}`;
}
"use strict"
document.getElementById("palindroom").onblur = function() {
   const palindroom = this.value;
   const palindroomFeedback = document.getElementById("palindroomFeedback");
   const reverse = palindroom.split("").reverse().join("");
   palindroomFeedback.innerText = palindroom === reverse ? "Palindroom" : "Geen palindroom";
};
"use strict"
document.getElementById("paswoord").oninput = function() {
   const paswoord = this.value;
   const paswoordFeedbackSpan = document.getElementById("paswoordFeedback");
   paswoordFeedbackSpan.innerText = paswoord.length >= 6 ? "OK" : "Te kort";
};


document.getElementById("herhaal").onblur = function () {
   const herhaalFeedbackSpan = document.getElementById("herhaalFeedback");
   herhaalFeedbackSpan.innerText =
   this.value === document.getElementById("paswoord").value ? "OK" : "Verschilt van paswoord";
};

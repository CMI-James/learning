/*var normalText = document.querySelector("#normal-text");
var uppercaseText = document.querySelector("#uppercase-text");
var change = uppercaseText.innerHTML.toUpperCase;
normalText.addEventListener("keyup", convert);


*/

let normalText = document.querySelector("#normal-text");
let lowerCase = document.querySelector("#to-lowercase");
let upperCase = document.querySelector("#to-uppercase");
let boldText = document.querySelector("#to-Bold");
let italizedText = document.querySelector("#to-italize");
let underlinedText = document.querySelector("#to-underline");
let increaseFont = document.querySelector("#to-increase-font");

lowerCase.addEventListener("click", LC);
function LC() {
  document.querySelector("#uppercase-text").innerHTML =
    normalText.innerHTML.toLowerCase();
}
upperCase.addEventListener("click", UP);
function UP() {
  document.querySelector("#uppercase-text").innerHTML =
    normalText.innerHTML.toUpperCase();
}
boldText.addEventListener("click", BD);
function BD() {
  document.querySelector("#uppercase-text").innerHTML =
    normalText.innerHTML.bold();
}

italizedText.addEventListener("click", IT);
function IT() {
  document.querySelector("#uppercase-text").innerHTML =
    normalText.innerHTML.italics();
}
underlinedText.addEventListener("click", UD);
function UD() {
  document.querySelector("#uppercase-text").innerHTML =
    normalText.style.textDecoration = "underline";
}
increaseFont.addEventListener("click", IF);
function IF() {
  document.querySelector("#uppercase-text").innerHTML =
    normalText.style.fontSize = "100px";
}

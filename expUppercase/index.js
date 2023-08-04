let normalText = document.querySelector("#normal-text");
let lowerCase = document.querySelector("#to-lowercase");
let upperCase = document.querySelector("#to-uppercase");
let boldText = document.querySelector("#to-bold");
let italizedText = document.querySelector("#to-italicize");
let underlinedText = document.querySelector("#to-underline");
let increaseFont = document.querySelector("#to-increase-font");
let inputText = document.querySelector("#inputtext");

let changedText = document.querySelector("#uppercase-text");

inputText.addEventListener("keyup", function () {
  normalText.innerHTML = inputText.value;
});

lowerCase.addEventListener("click", function () {
  changedText.innerHTML = normalText.innerHTML.toLowerCase();
});

upperCase.addEventListener("click", function () {
  changedText.innerHTML = normalText.innerHTML.toUpperCase();
});

boldText.addEventListener("click", function () {
  changedText.innerText = normalText.innerHTML;
  changedText.style.fontWeight = "bold";
});

italizedText.addEventListener("click", function () {
  changedText.innerText = normalText.innerHTML;
  changedText.style.fontStyle = "italic";
});

underlinedText.addEventListener("click", function () {
  changedText.innerText = normalText.innerHTML;
  changedText.style.textDecoration = "underline";
});

increaseFont.addEventListener("click", function () {
  changedText.innerText = normalText.innerHTML;
  changedText.style.fontSize = "24px";
});

let clearTextBtn = document.querySelector("#clear-text");
clearTextBtn.addEventListener("click", function () {
  normalText.innerHTML = "";
  changedText.innerHTML = "";
  inputText.value = "";
});

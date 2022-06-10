let revealButton = document.getElementById("showMeButton");
let closeButton = document.getElementById("closeMeButton");
let body = document.querySelector("body");
revealButton.onclick = function () {
  let box = document.getElementById("contact-box");
  box.className = "bounce-in-top";
  box.style.display = "flex";
};
closeButton.onclick = function () {
  let box = document.getElementById("contact-box");
  box.className = "rotate-out-center";
};

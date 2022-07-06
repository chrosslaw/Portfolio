let revealButton = document.getElementById("showMeButton");
let closeButton = document.getElementById("closeMeButton");
let body = document.querySelector("body");

//Function to open the contact box when clicked
revealButton.onclick = function () {
  let box = document.getElementById("contact-box");
  box.className = "bounce-in-top";
  box.style.display = "flex";
};
//Function to close the contact box when clicked
closeButton.onclick = function () {
  let box = document.getElementById("contact-box");
  box.className = "rotate-out-center";
};

//Function to toggle dropdown menu clicked
function dropFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (e) {
  if (!e.target.matches(".dropbtn")) {
    var myDropdown = document.getElementById("myDropdown");
    if (myDropdown.classList.contains("show")) {
      myDropdown.classList.remove("show");
    }
  }
};
//AJAX textcard

function loadDoc(id) {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    document.getElementById(id).innerHTML = this.responseText;
  };
  xhttp.open("GET", "./resources/about.txt");
  xhttp.send();
}
const aboutText = document.getElementById(textcard);
aboutText.onload = loadDoc("textcard");

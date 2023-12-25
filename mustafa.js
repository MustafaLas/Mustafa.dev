


// dark mode
function darkMode() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}


document.getElementById("coolHeader").addEventListener("keydown", function (event) {
  // Prevent editing of the text
  event.preventDefault();
});
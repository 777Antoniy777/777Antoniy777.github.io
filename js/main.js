var one = document.querySelector(".project-element-button");
var two = document.querySelector(".demands-element-button");
var project = document.querySelector(".project-picture");
var demands = document.querySelector(".demands-discription");

one.addEventListener("click", function (evt) {
  evt.preventDefault();
  project.classList.toggle("project-picture-show");
});

two.addEventListener("click", function (evt) {
  evt.preventDefault();
  demands.classList.toggle("demands-discription-show");
});
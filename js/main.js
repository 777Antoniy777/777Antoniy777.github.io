var first_project = document.querySelector(".first-button");
var second_project = document.querySelector(".second-button");
var first_demands_button = document.querySelector(".demands-element-button");
var first_picture = document.querySelector(".first-picture");
var second_picture = document.querySelector(".second-picture");
var first_demands = document.querySelector(".demands-discription");

first_project.addEventListener("click", function (evt) {
  evt.preventDefault();
  first_picture.classList.toggle("picture-show");
});

second_project.addEventListener("click", function (evt) {
  evt.preventDefault();
  second_picture.classList.toggle("picture-show");
});

first_demands_button.addEventListener("click", function (evt) {
  evt.preventDefault();
  first_demands.classList.toggle("demands-discription-show");
});
'use strict';

var first_project = document.querySelector(".first-button");
var second_project = document.querySelector(".second-button");
var third_project = document.querySelector(".third-button");
var forth_project = document.querySelector(".forth-button");

var first_demands_button = document.querySelector(".first-demands-element-button");
var second_demands_button = document.querySelector(".second-demands-element-button");
var third_demands_button = document.querySelector(".third-demands-element-button");

var first_picture = document.querySelector(".first-picture");
var second_picture = document.querySelector(".second-picture");
var third_picture = document.querySelector(".third-picture");
var forth_picture = document.querySelector(".forth-picture");

var first_demands = document.querySelector(".first-demands-discription");
var second_demands = document.querySelector(".second-demands-discription");
var third_demands = document.querySelector(".third-demands-discription");

first_project.addEventListener("click", function (evt) {
  evt.preventDefault();
  first_picture.classList.toggle("picture-show");
});

second_project.addEventListener("click", function (evt) {
  evt.preventDefault();
  second_picture.classList.toggle("picture-show");
});

third_project.addEventListener("click", function (evt) {
  evt.preventDefault();
  third_picture.classList.toggle("picture-show");
});

forth_project.addEventListener("click", function (evt) {
  evt.preventDefault();
  forth_picture.classList.toggle("picture-show");
});

first_demands_button.addEventListener("click", function (evt) {
  evt.preventDefault();
  first_demands.classList.toggle("demands-discription-show");
});

second_demands_button.addEventListener("click", function (evt) {
  evt.preventDefault();
  second_demands.classList.toggle("demands-discription-show");
});

third_demands_button.addEventListener("click", function (evt) {
  evt.preventDefault();
  third_demands.classList.toggle("demands-discription-show");
});

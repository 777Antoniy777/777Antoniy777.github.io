var popup = document.querySelector(".popup");
var link = document.querySelector(".main-header__link");
var close = document.querySelector(".popup__button");
var overlay = document.querySelector(".overlay");
var login = popup.querySelector("[type=text]");
var email = popup.querySelector("[type=email]");
var password = popup.querySelector("[type=password]");
var first_form = popup.querySelector(".form-entry");
var second_form = popup.querySelector(".form-registration");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("popup-show");
  overlay.classList.add("overlay-show");
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("popup-show");
  popup.classList.remove("popup-error");
  overlay.classList.remove("overlay-show");
});

overlay.addEventListener("click", function (evt) {
  evt.preventDefault();
  overlay.classList.remove("overlay-show");
  popup.classList.remove("popup-show");
  popup.classList.remove("popup-error");
});

first_form.addEventListener("submit", function (evt) {

   if (!email.value || !password.value) {
      evt.preventDefault();
      popup.classList.remove("popup-error");
      popup.offsetWidth = popup.offsetWidth;
      popup.classList.add("popup-error");
   }
});

second_form.addEventListener("submit", function (evt) {

   if (!login.value || !email.value || !password.value) {
      evt.preventDefault();
      popup.classList.remove("popup-error");
      popup.offsetWidth = popup.offsetWidth;
      popup.classList.add("popup-error");
   }
});

window.addEventListener("keydown", function (evt) {

  if (evt.keyCode === 27) {
    evt.preventDefault();

       if (popup.classList.contains("popup-show")) {
         popup.classList.remove("popup-show");
       }
       if (popup.classList.contains("popup-error")) {
         popup.classList.remove("popup-error");
       }
       if (overlay.classList.contains("overlay-show")) {
         overlay.classList.remove("overlay-show");
       }
  }
});
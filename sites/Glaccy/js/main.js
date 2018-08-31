var popup = document.querySelector(".feedback");
var link = document.querySelector(".map-content .button");
var close = document.querySelector(".feedback .close");
var overlay = document.querySelector(".overlay");
var login = popup.querySelector("[type=text]");
var email = popup.querySelector("[type=email]");
var comment = popup.querySelector("textarea");
var form = popup.querySelector(".form-feedback");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("login");
}
catch (err) {
  isStorageSupport = false;
}

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("feedback-show");
  overlay.classList.add("overlay-show");

  if (storage) {
    login.value = storage;
    email.focus();
  } 
  else {
    login.focus();  
  }
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("feedback-show");
  popup.classList.remove("feedback-error");
  overlay.classList.remove("overlay-show");
});

overlay.addEventListener("click", function (evt) {
  evt.preventDefault();
  overlay.classList.remove("overlay-show");
  popup.classList.remove("feedback-show");
  popup.classList.remove("feedback-error");
});

form.addEventListener("submit", function (evt) {

   if (!login.value || !email.value || !comment.value) {
      evt.preventDefault();
      popup.classList.remove("feedback-error");
      popup.offsetWidth = popup.offsetWidth;
      popup.classList.add("feedback-error");
   }
   else {
     if (isStorageSupport) {
       localStorage.setItem("login", login.value);
     }
   }
});

window.addEventListener("keydown", function (evt) {

  if (evt.keyCode === 27) {
    evt.preventDefault();

       if (popup.classList.contains("feedback-show")) {
         popup.classList.remove("feedback-show");
       }
       if (popup.classList.contains("feedback-error")) {
         popup.classList.remove("feedback-error");
       }
       if (overlay.classList.contains("overlay-show")) {
         overlay.classList.remove("overlay-show");
       }
  }
});
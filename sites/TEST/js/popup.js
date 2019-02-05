'use strict';

(function () {
  var wrappersSpecial = document.querySelectorAll('.menu__item--special .menu__wrapper-item');
  var popupFirst = document.querySelector('.popup-special');
  var popupSecond = document.querySelector('.popup-details');

  for (var i = 0; i < wrappersSpecial.length; i++) {
    var clonePopupfirst = popupFirst.cloneNode(true);
    var clonePopupsecond = popupSecond.cloneNode(true);
    var wrapperSpecial = wrappersSpecial[i];

    wrapperSpecial.appendChild(clonePopupfirst);
    wrapperSpecial.appendChild(clonePopupsecond);
  }
})();

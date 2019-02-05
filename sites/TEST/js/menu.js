'use strict';

(function () {
  var buttonWrapper = document.querySelector('.discover__food-price-wrapper--selected');
  var buttonsAdd = document.querySelectorAll('.discover__food-price-button--add');
  var buttonAdd = document.querySelector('.discover__food-price-button--add');
  var buttonsClose = document.querySelectorAll('.discover__food-price-button--close');
  var buttonClose = document.querySelector('.discover__food-price-button--close');
  var count = document.querySelector('.top-menu__count');
  var textCount = count.textContent;
    
  var getButtonAdd = function () {
    for (var i = 0; i < buttonsAdd.length; i++) {
      var buttonAdd = buttonsAdd[i];
      var index = 0

      buttonAdd.addEventListener('click', function (evt) {
        var target = evt.currentTarget;
        var closeWrapper = target.closest('div');
        closeWrapper.querySelector('.discover__food-price-wrapper--selected').style.display = 'flex'; 
        count.textContent = index += 1;
      })
    }
  }

  var getButtonClose = function () {
    for (var i = 0; i < buttonsClose.length; i++) {
      var buttonClose = buttonsClose[i];
      var index = getComputedStyle(buttonWrapper).display.length;
    
      buttonClose.addEventListener('click', function (evt) {
        var target = evt.currentTarget;
        var closeWrapper = target.closest('.discover__food-price-wrapper');
        closeWrapper.style.display = 'none'; 
        count.textContent = index -= 1;
      })
    }
  }

  getButtonAdd();
  getButtonClose();
})();
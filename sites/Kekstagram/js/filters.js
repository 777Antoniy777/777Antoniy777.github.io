'use strict';

(function () {
  // отпускание пина слайдера
  var FILTERS = ['none', 'grayscale(1)', 'sepia(1)', 'invert(100%)', 'blur(3px)', 'brightness(3)'];
  var FILTER_INDEX = 0;

  var EffectValue = {
    MARVIN_VALUE: 100,
    PHOBOS_VALUE: 3,
    HEAT_VALUE_MIN: 1,
    HEAT_VALUE_MAX: 3
  };

  var pinLine = window.setup.uploadForm.querySelector('.effect-level__line');
  var pinLineFill = window.setup.uploadForm.querySelector('.effect-level__depth');
  var pin = window.setup.uploadForm.querySelector('.effect-level__pin');
  var pinValueInput = window.setup.uploadForm.querySelector('.effect-level__value');

  // создание фильтров
  var original = window.setup.uploadForm.querySelector('label[for=effect-none]');
  var chrome = window.setup.uploadForm.querySelector('label[for=effect-chrome]');
  var sepia = window.setup.uploadForm.querySelector('label[for=effect-sepia]');
  var marvin = window.setup.uploadForm.querySelector('label[for=effect-marvin]');
  var phobos = window.setup.uploadForm.querySelector('label[for=effect-phobos]');
  var heat = window.setup.uploadForm.querySelector('label[for=effect-heat]');

  var prewiev = window.setup.uploadForm.querySelector('.img-upload__preview');

  var labels = [original, chrome, sepia, marvin, phobos, heat];
  var radioButton = window.setup.uploadForm.querySelector('.effects__radio');
  var effectsLevel = window.setup.uploadWrapper.querySelector('.img-upload__effect-level');

  // подстановка массивов и переменных в функцию создания фильтров
  var setEffects = function () {
    labels.forEach(function (labelsItem, index) {
      getFilterEffects(labelsItem, FILTERS[index], index);
    });
  };

  // функция движения пина слайдера
  var getFilterEffects = function (label, filter, i) {
    label.addEventListener('click', function () {
      prewiev.style.filter = filter;
      pin.style.left = 100 + '%';
      pinLineFill.style.width = 100 + '%';
      pinValueInput.value = '100';
      FILTER_INDEX = i;

      if (i === 0) {
        effectsLevel.classList.add('hidden');
        pinValueInput.value = '';
      } else {
        effectsLevel.classList.remove('hidden');
      }
    });
  };

  pin.addEventListener('mousedown', function (evt) {
    evt.preventDefault();

    var startCoords = {
      x: evt.clientX
    };

    var pinMoveHandler = function (moveEvt) {
      moveEvt.preventDefault();

      var continueCoords = {
        x: startCoords.x - moveEvt.clientX
      };

      startCoords = {
        x: moveEvt.clientX
      };

      var percentGraySepia = pin.offsetLeft / pinLine.offsetWidth;
      var percentMarvin = pin.offsetLeft * EffectValue.MARVIN_VALUE / pinLine.offsetWidth;
      var percentPhobos = pin.offsetLeft * EffectValue.PHOBOS_VALUE / pinLine.offsetWidth;
      var perscentHeat = (pin.offsetLeft * (EffectValue.HEAT_VALUE_MAX - EffectValue.HEAT_VALUE_MIN) / pinLine.offsetWidth) + EffectValue.HEAT_VALUE_MIN;
      var perscentInputValue = pin.offsetLeft * 100 / pinLine.offsetWidth;

      var filtersEffects = [
        'none',
        'grayscale(' + percentGraySepia + ')',
        'sepia(' + percentGraySepia + ')',
        'invert(' + percentMarvin + '%' + ')',
        'blur(' + percentPhobos + 'px' + ')',
        'brightness(' + perscentHeat + ')'
      ];

      prewiev.style.filter = filtersEffects[FILTER_INDEX];
      pinLineFill.style.width = (pin.offsetLeft - continueCoords.x) + 'px';

      if (pin.offsetLeft < 0) {
        pin.style.left = 0 + '%';
        pinValueInput.value = '0';
      } else if (pin.offsetLeft > pinLine.offsetWidth) {
        pin.style.left = 100 + '%';
        pinValueInput.value = '100';
      } else {
        pin.style.left = (pin.offsetLeft - continueCoords.x) + 'px';
        pinValueInput.value = Math.round(perscentInputValue);
      }
    };

    var pinUpHandler = function () {
      document.removeEventListener('mousemove', pinMoveHandler);
      document.removeEventListener('mouseup', pinUpHandler);
    };

    document.addEventListener('mousemove', pinMoveHandler);
    document.addEventListener('mouseup', pinUpHandler);
  });

  // глобальный вызов
  window.filters = {
    // переменные
    prewiev: prewiev,
    radioButton: radioButton,
    effectsLevel: effectsLevel,
    pinValueInput: pinValueInput,
    // функции
    setEffects: setEffects
  };
})();

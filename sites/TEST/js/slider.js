'use strict';

(function () {
  var sliderWrapper = document.querySelector('.slider');

  var buttonLeft = document.querySelector('.slider__button--left');
  var buttonRight = document.querySelector('.slider__button--right');
  var slideFirst = document.querySelector('.slider__item--first');
  var slideSecond = document.querySelector('.slider__item--second');
  var slidethird = document.querySelector('.slider__item--third');
  var slideList = document.querySelector('.slider__list');

  var slides = [slideFirst, slideSecond, slidethird];
  var slidesWay = [0, -719, -1438];
  var images = ['../img/slider-background.jpg', '../img/slider-background2.jpg', '../img/slider-background3.jpg'];
  
  var indexSlide = 0;
  buttonRight.addEventListener('click' , function (evt) {

    if (indexSlide === slides.length - 1) {
      indexSlide = 0;
    } else {
      indexSlide++
    }
    slideList.style.transform = 'translateX(' + slidesWay[indexSlide] + 'px)';
    sliderWrapper.style.background = 'url(' + images[indexSlide] + ')';
  })

  buttonLeft.addEventListener('click' , function (evt) {

    if (indexSlide === 0) {
      indexSlide = slides.length - 1;
    } else {
      indexSlide--
    }
    slideList.style.transform = 'translateX(' + slidesWay[indexSlide] + 'px)'
    sliderWrapper.style.background = 'url(' + images[indexSlide] + ')';
  })
})();
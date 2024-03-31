$(function () { // header slider
    $('.slider-items').slick({
        dots: true,
        arrows: false,
        infinite: false
    });
});
/////////////////// Reviews Outer slider
const slides = document.querySelectorAll('.Reviews-slider');
const btnL = document.querySelector('.Reviews-slider_leftBtn');
const btnR = document.querySelector('.Reviews-slider_rightBtn');
const ArrowL = document.querySelector('.ArrowLeftBtn');
const ArrowR = document.querySelector('.ArrowRightBtn');
let indexSlide = 0;
btnL.style.cursor = "default";
btnL.classList.add('pointerEvents');

function changeSlide(sign) {
    for (let numSl = 0; numSl < slides.length; numSl++) {
        slides[numSl].classList.remove('active');
        slides[numSl].classList.remove('rightAnim');
        slides[numSl].classList.remove('leftAnim');
    }
    indexSlide += sign; // Смена номера слайда
    if (sign < 0) {
        slides[indexSlide].classList.add('leftAnim');
    } else {
        slides[indexSlide].classList.add('rightAnim');
    }
    if (indexSlide >= slides.length) {
        indexSlide = slides.length - 1;
    } else if (indexSlide < 0) {
        indexSlide = 0;
    }
    indicBtn(0, btnL);
    if (indexSlide == 0) {
        ArrowL.classList.add('OpacityHalf');
    } else {
        ArrowL.classList.remove('OpacityHalf');
    }
    indicBtn(slides.length - 1, btnR);
    if (indexSlide == slides.length - 1) {
        ArrowR.classList.add('OpacityHalf');
    } else {
        ArrowR.classList.remove('OpacityHalf');
    }
    slides[indexSlide].classList.add('active'); // Смена слайда
    
   // Действия с внут. слайдером, которые необх. проделать при перекл. внешнего
   var InnerSlides = document.querySelectorAll('.Reviews_slider-item'); //Все внут. слайды   
   for(var numIn = 0; numIn < InnerSlides.length; numIn++){
       InnerSlides[numIn].classList.remove('active'); 
   }
   var FirstInnerSl = slides[indexSlide].querySelector('.Reviews_slider-item');// Установка ↓
   FirstInnerSl.classList.add('active'); // активного первого слайда во внут. слайдере
    
   var FirstInnerDot = slides[indexSlide].querySelector('.Reviews_slider-items_slick-dot'); 
   FirstInnerDot.classList.add('activeDot');
    // Конец: Действия с внут. слайдером, которые необх. проделать при перекл. внешнего
}

function indicBtn(numLast, btn) { // Индикация кнопок
    if (indexSlide == numLast) {
        btn.style.cursor = "default";
        btn.classList.add('pointerEvents'); // отключение клика
        btn.classList.add('BackColorWhite'); //Уст-ка полупрозр-ти
    } else {
        btn.style.cursor = "pointer";
        btn.classList.remove('pointerEvents');
        btn.classList.remove('BackColorWhite');
    }
}
//////////////////////////////////////


/////////////////// Reviews Inner slider

const slidesInner = document.querySelectorAll('.Reviews_slider-item');
const dots = document.querySelectorAll('.Reviews_slider-items_slick-dot');
const dotsArea = document.querySelectorAll('.Reviews_slider-items_slick-dots');

var indexSlideInner = 0;

for (var i = dots.length - 1; i >= 0; i--) {
    dots[i].id = i + 1; // присваиваем точкам id
}

var eveTarg;
for (var dotsAreaNum = 0; dotsAreaNum < dotsArea.length; dotsAreaNum++) {
    dotsArea[dotsAreaNum].onclick = () => { // при тыке в область точек
        eveTarg = event.target; //объект тыка записываем в eveTarg
        console.log(Number(eveTarg.id));

        if ((Number(eveTarg.id)) > 0) {
            changeDot(eveTarg.id - 1); // выз. ф. с аргум. id точки
        }
    };
}

function changeDot(index) {
    var directAnim;
    if(indexSlideInner < index){//Если номер пред. нажатого слайда меньше текущего 
        directAnim = 'rightAnimSh';
    }
    else if(indexSlideInner > index){
        directAnim = 'leftAnimSh';
    }
    indexSlideInner = index;

    for (let numSl = 0; numSl < slidesInner.length; numSl++) {
        slidesInner[numSl].classList.remove('active');
        slidesInner[numSl].classList.remove('leftAnimSh');
        slidesInner[numSl].classList.remove('rightAnimSh');
        dots[numSl].classList.remove('activeDot');
    }

    slidesInner[indexSlideInner].classList.add('active'); // Смена слайда
    slidesInner[indexSlideInner].classList.add(directAnim);
    dots[indexSlideInner].classList.add('activeDot');
}

//////////////////////////////////////











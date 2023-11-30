alert("양양줍겠지 활동 홈페이지 입니다. 구경하시고 설문조사 해주세요!");
console.log("시발");
const slides = document.querySelector('.slides');
const slideImg = document.querySelectorAll('.slides !!');
let currentIdx = 0;
const slideCount = slideImg.length;
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const slideWidth = 700;
const slideMargin = 100;

slides.style.width = (slideWidth + slideMargin) * slideCount + 'px';

function moveSlide(num) {
  slides.style.left = -num * 400 + 'px';
  currentIdx = num;
}

prev.addEventListener('click', function() {
  if (currentIdx !== 0) moveSlide(currentIdx - 1);
});

next.addEventListener('click', function() {
  if (currentIdx !== slideCount - 1) {
    moveSlide(currentIdx + 1);
  }
});

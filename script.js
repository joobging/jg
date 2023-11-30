alert("양양줍겠지 활동 홈페이지 입니다. 구경하시고 설문조사 해주세요!");


let leftBtn = document.getElementByClassName("slider-leftBtn");
let righttBtn = document.getElementByClassName("slider-rightBtn");
let slider = document.querySelectorAll(".c");
let sliderDimension = document.querySelector(".c");

slider.forEach((item, i) => {
  let containerDimension = item.getBoundingClientRect().width;
  if ((item.childElementCount * 350) < (containerDimension + 100)) {
    rightBtn[i].style.display = 'none';
    leftBtn[i].style.display = 'none';
    item.style.justifyContent = 'space-around';
  }
  
  leftBtn[i].style.display = "none";
  rightBtn[i].addEventListener('click', () => {
    item.scrollLeft += containerDimension;
    leftBtn[i].style.display = 'block';
  })
  leftBtn[i].addEventListener('click', () => {
    item.scrollLeft -= containerDimension;
    rightBtn[i].style.display = 'block';
  })
  item.addEventListener('scroll', () => {
    if (item.offsetWidth + item.scrollLeft >= (item.scrollWidth - 100)) {
      rightBtn[i].style.display= 'none';
      leftBtn[i].style.display = 'block';
    } else if (item.scrollLeft == 0) {
      leftBtn[i].style.display = 'none';
      rightBtn[i].style.display = 'block';
    } else if (item.scrollLeft > 0) {
      leftBtn[i].style.display = 'block';
    }
    if (item.offsetWidth + item.scrollLeft < (item.scrollWidth - 50)) {
      rightBtn[i].style.display = 'block';
    }
  })
  const slidingFunction = () => {
    if (item.offsetWidth + item.scrollLeft >= (item.scrollWidth - 100)) {
      item.scrollLeft = 0;
    }
    if (item.offsetWidth + iten,scrollLeft < (item.scrollWidth - 50)) {
      item.scrollLeft += containerDimension;
    }
  }

  setInterval(() => slidingFunction(), 5000)
})

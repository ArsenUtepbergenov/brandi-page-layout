let images = document.querySelectorAll('.slider__slide'),
    dots = document.querySelectorAll('.slider__dot'),
    arrowLeft = document.querySelector('.slider--left'),
    arrowRight = document.querySelector('.slider--right'),
    sliderDot1 = document.querySelector('.slider--dot-1'),
    sliderDot2 = document.querySelector('.slider--dot-2'),
    sliderDot3 = document.querySelector('.slider--dot-3'),
    currentSlide = 0;

function reset() {
  for (image of images) {
    image.style.display = 'none';
  }
}

function resetDots() {
  for (dot of dots) {
    dot.style.backgroundColor = 'transparent';
  }
}

function switchSlide(direction) {
  currentSlide += direction;
  reset();
  resetDots();
  if (currentSlide < 0)
    currentSlide = images.length - 1;
  if (currentSlide > images.length - 1)
    currentSlide = 0;
  images[currentSlide].style.display = 'block';
  dots[currentSlide].style.backgroundColor = 'white';
}

function setCurrent(current) {
  if (current > images.length - 1 || current < 0)
    currentSlide = 0;
  currentSlide = current;
  reset();
  resetDots();
  images[currentSlide].style.display = 'block';
  dots[currentSlide].style.backgroundColor = 'white';
}

setCurrent(0);

sliderDot1.addEventListener('click', () => {
  setCurrent(0);
});

sliderDot2.addEventListener('click', () => {
  setCurrent(1);
});

sliderDot3.addEventListener('click', () => {
  setCurrent(2);
});

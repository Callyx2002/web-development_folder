function slider() {
  const slider = document.querySelector(".slider");
  const slides = document.querySelectorAll(".slide");
  const btnRight = document.querySelector(".slider__btn--right");
  const btnLeft = document.querySelector(".slider__btn--left");
  let curIndex = 0;
  const maxSlide = slides.length;
  const dot = document.querySelector(".dots");
  // slider.style.transform = "scale(0.3) translateX(-1200px)";
  const createDots = function () {
    slides.forEach((_, i) => {
      dot.insertAdjacentHTML(
        "beforeend",
        `
      <div class="dots__dot" data-slide=${i}></div>
      `
      );
    });
  };

  const activateDot = function (slide) {
    const dots = document.querySelectorAll(".dots__dot");
    dots.forEach((d) => d.classList.remove("dots__dot--active"));
    dots[slide].classList.add("dots__dot--active");
  };

  slides.forEach((s, i) => {
    s.style.transform = `translateX(${100 * i}%)`;
  });

  const goToSlide = function (slide) {
    slides.forEach((s, i) => {
      s.style.transform = `translateX(${100 * (i - slide)}%)`;
    });
  };

  const prevSlide = function () {
    curIndex--;
    if (curIndex === -1) {
      curIndex = 3;
    }
    goToSlide(curIndex);
    activateDot(curIndex);
  };

  const nextSlide = function () {
    curIndex++;
    if (curIndex === maxSlide) {
      curIndex = 0;
    }
    goToSlide(curIndex);
    activateDot(curIndex);
  };

  const init = function () {
    createDots();
    activateDot(0);
  };
  init();
  //event listeners
  btnRight.addEventListener("click", nextSlide);

  btnLeft.addEventListener("click", prevSlide);

  dot.addEventListener("click", function (e) {
    if (!e.target.classList.contains("dots__dot")) return;
    const { slide } = e.target.dataset;
    goToSlide(slide);
    activateDot(slide);
  });
}

slider();

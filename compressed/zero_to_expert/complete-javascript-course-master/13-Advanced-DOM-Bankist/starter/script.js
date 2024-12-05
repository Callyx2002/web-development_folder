'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const message = document.createElement('div');
const header = document.querySelector('header');
const h1 = document.querySelector('h1');
const logo = document.querySelector('.nav__logo');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');
const nav = document.querySelector('.nav');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

//Button Scrolling
btnScrollTo.addEventListener('click', e => {
  const s1coords = section1.getBoundingClientRect();
  // console.log(s1coords)
  // console.log(e.target.getBoundingClientRect())
  // console.log("current scroll(x/y: ", window.pageXOffset, window.pageYOffset)
  // console.log("height and width of viewport: ", document.documentElement.clientHeight, document.documentElement.clientWidth)
  // //scrolling
  // // window.scrollTo(
  // //     s1coords.left + window.pageXOffset, s1coords.top + window.pageYOffset
  // //     )

  // window.scrollTo({
  //     left: s1coords.left + window.pageXOffset,
  //     top: s1coords.top + window.pageYOffset,
  //     behavior: "smooth"
  // })
  section1.scrollIntoView({ behavior: 'smooth' });
});

//PAGE NAVIGATION
/*
document.querySelectorAll(".nav__link").forEach(function (el) {
    el.addEventListener("click", function (e) {
        e.preventDefault()
        
        //smooth scrolling functionality
        const id = this.getAttribute("href");
        const section = document.querySelector(id);
        section.scrollIntoView({behavior: "smooth"})
        
    })
})

*/

//using event delegation

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();
  //matching strategy
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

//tabbed components

tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');

  //guard clause
  if (!clicked) return;

  //remove active classes
  tabsContent.forEach(t => t.classList.remove('operations__content--active'));
  tabs.forEach(t => t.classList.remove('operations__tab--active'));

  //activate class class
  clicked.classList.add('operations__tab--active');
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

//menu fade animation
const handleOver = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');
    siblings.forEach(el => {
      if (el !== link) {
        el.style.opacity = this;
      }
      logo.style.opacity = this;
    });
  }
};

//passing "argument" into handler function
nav.addEventListener('mouseover', handleOver.bind(0.5));
nav.addEventListener('mouseout', handleOver.bind(1));

//STICKY NAVIGATION
/*
//using scroll event
const initialCoords = section1.getBoundingClientRect()
window.addEventListener("scroll", function() {

    if (window.scrollY > initialCoords.top) {
        nav.classList.add("sticky")
    } else {
        nav.classList.remove("sticky")
    }

})

const obsCallback = function (entries, observer) {
    entries.forEach(entry => {
       
}


const obsOptions= {root: null, threshold: [0, 0.2]}
const observer = new IntersectionObserver(obsCallback, obsOptions);
observer.observe(section1)

*/
const stickyNav = function (entries) {
  const [entry] = entries;
  if (entry.isIntersecting === false) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};
const navHeight = nav.getBoundingClientRect().height;
const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  thereshhold: 0,
  rootMargin: `-${navHeight}px`,
});
headerObserver.observe(header);

//Reveal Sections
const allSections = document.querySelectorAll('.section');
const revealSections = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};
const sectionObserver = new IntersectionObserver(revealSections, {
  root: null,
  threshold: 0.15,
});
allSections.forEach(section => {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});

//LAZY LOADING IMAGES
const imgTargets = document.querySelectorAll('img[data-src]');
const loadImg = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;

  //replace image src with data-src
  entry.target.src = entry.target.dataset.src;
  entry.target.addEventListener('load', function (e) {
    entry.target.classList.remove('lazy-img');
  });
  observer.unobserve(entry.target);
};
const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: '200px',
});

imgTargets.forEach(img => imgObserver.observe(img));

//SLIDER COMPONENT

//slider

const slider = function () {
  const slides = document.querySelectorAll('.slide');
  const btnleft = document.querySelector('.slider__btn--left');
  const btnRight = document.querySelector('.slider__btn--right');
  let curSllide = 0;
  const maxSlide = slides.length;
  const slider = document.querySelector('.slider');

  const dotContainer = document.querySelector('.dots');

  //fucntions
  const createDots = function () {
    slides.forEach((_, i) => {
      dotContainer.insertAdjacentHTML(
        'beforeend',
        `<button class="dots__dot" data-slide="${i}"></button>
      `
      );
    });
  };

  const activateDot = function (slide) {
    const dots = document.querySelectorAll('.dots__dot');
    dots.forEach(s => {
      s.classList.remove('dots__dot--active');
    });
    dots[slide].classList.add('dots__dot--active');
    // document.querySelector(`.dots__dot[data-slide="${slide}`)
  };

  slides.forEach((s, i) => {
    s.style.transform = `translateX(${100 * i}%)`;
  });

  const goToSlide = function (slide) {
    slides.forEach((s, i) => {
      s.style.transform = `translateX(${100 * (i - slide)}%)`;
    });
  };

  const nextSlide = function () {
    curSllide += 1;
    if (curSllide === maxSlide) {
      curSllide = 0;
    }
    goToSlide(curSllide);
    activateDot(curSllide);
  };
  const prevSlide = function () {
    curSllide -= 1;
    if (curSllide === -1) {
      curSllide = 3;
    }
    goToSlide(curSllide);
    activateDot(curSllide);
  };

  const init = function () {
    createDots();
    activateDot(0);
    goToSlide(0);
  };
  init();

  //event handlers
  btnRight.addEventListener('click', nextSlide);
  btnleft.addEventListener('click', prevSlide);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') prevSlide();
    if (e.key === 'ArrowRight') nextSlide();
  });

  dotContainer.addEventListener('click', function (e) {
    if (!e.target.classList.contains('dots__dot')) return;
    const { slide } = e.target.dataset;
    curSllide = Number(slide);

    goToSlide(curSllide);
    activateDot(curSllide);
  });
};
slider();
//0, 1000, 200, 300
//LECTURESff
///////////////////////////////////
// console.log(document.documentElement)
// const allSections = document.querySelectorAll("section");
// const allSections2 = document.getElementsByTagName("section");
// allSections[0].remove()
// allSections[0].remove()
// console.log(allSections);
// console.log(allSections2)
/*

message.classList.add("cookie-message")
// message.textContent = "We use cookied for improved functionality and analytics";
message.innerHTML = `We use cookied for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>`;
/*header.prepend(message);
//header.append(message.cloneNode(true))
*/
// header.before(message)
// header.after(message.cloneNode(true))
// modal.before(message.cloneNode(true))
/*
header.append(message)


//delete elements
document.querySelector(".btn--close-cookie").addEventListener("click", function() {
    // console.log(message.parentElement.removeChild(message))
    message.remove()
})

// Styles
message.style.backgroundColor = "#37383f";
// message.style.width = "120%";
/*
console.log(getComputedStyle(header))
console.log(getComputedStyle(header).color)

message.style.height = Number.parseFloat(getComputedStyle(message).height, 10) + 30 + "px";
document.documentElement.style.setProperty("--color-primary", 'orangered')

/*
console.log(logo.alt)
console.log(logo.src)
console.log(logo.className)
console.log(logo.getAttribute("src"))
logo.setAttribute("company", "bankist")
console.log(logo.getAttribute("company"))
*/

/*
const alertH1 = function(e) {
    alert("addEventListener: Great!you are reading the heading")
    // h1.removeEventListener("mousenter", alertH1)
}
h1.addEventListener("mouseenter", alertH1)

setTimeout(() => h1.removeEventListener("mouseenter", alertH1), 5000);
/*
h1.onmouseenter = function(e) {
        alert("addEventListener: Great!you are reading the heading")

}
*/

//rgb(255, 255, 255)
/*
const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const randomColor = () => `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`

document.querySelector('.nav__link').addEventListener("click", function(e) {
    this.style.backgroundColor = randomColor();
    console.log(e.target)
    console.log("currentTarget: ", e.currentTarget);
    e.stopPropagation()
})

document.querySelector('.nav__links').addEventListener("click", function(e) {
    this.style.backgroundColor = randomColor();
    console.log(e.target)
    console.log("currentTarget: ", e.currentTarget)
})

document.querySelector('.nav').addEventListener("click", function(e) {
    this.style.backgroundColor = randomColor();
    console.log(e.target)
    console.log("currentTarget: ", e.currentTarget)
})*/
//Going downwards: child
// console.log(h1.querySelectorAll(".highlight"))
// console.log(h1.children)
// h1.lastElementChild.style.color = "white"

//Going upwards: parent

// console.log(h1.parentNode)
// console.log(h1.parentElement)
// h1.closest(".header").style.background = "var(--gradient-secondary)"

//going sideways: siblimgs
/*
console.log(h1.previousElementSibling)
console.log(h1.nextElementSibling)
console.log(h1.previousSibling, h1.nextSibling)
*/
/*
console.log(h1.parentElement.children);
[...h1.parentElement.children].forEach(function(el) {
    if (el !== h1) {
        el.style.transform = "scale(0.5)"
    }
});
*/

//dom content loaded
document.addEventListener('DOMContentLoaded', function (e) {
  console.log('HTML parsed and DOM loaded', e);
});

window.addEventListener('load', function (e) {
  console.log('All Element loaded', e);
});

window.addEventListener('beforeunload', function (e) {
  e.preventDefault();
  console.log(e);
  alert('name');
});

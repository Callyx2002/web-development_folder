const header = document.querySelector("header");
const backToTop = document.querySelector(".information__form a");
const section1 = document.querySelector("#section--1");
const register = document.querySelector(".register");
const dots = document.querySelector(".dots");
const registerSvg = document.querySelector(".register svg");
const allSections = document.querySelectorAll("section");
const logo = document.querySelector(".logo");
const handleHover = function (e) {
  if (e.target.classList.contains("nav__link")) {
    const hovered = e.target;
    const links = hovered.closest(".nav").querySelectorAll(".nav__link");
    links.forEach((element) => {
      if (element !== hovered) {
        element.style.opacity = this;
      }
      logo.style.opacity = this;
    });
  }

  //check if it is the logo that is hovered
  if (e.target.classList.contains("logo")) {
    const hovered = e.target;
    const links = hovered.closest("header").querySelectorAll(".nav__link");
    links.forEach((element) => {
      element.style.opacity = this;
    });
  }
};

//Using event delegation and bind method to create hover effect
header.addEventListener("mouseover", handleHover.bind(0.5));
header.addEventListener("mouseout", handleHover.bind(1));

//smooth scroll to different sections
header.addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.classList.contains("nav__link")) {
    const clicked = e.target;
    const id = clicked.dataset.number;
    const clickedCoord = document
      .querySelector(`#section--${id}`)
      .getBoundingClientRect();
    const offsetHeight = header.getBoundingClientRect().height;
    window.scrollTo({
      top: clickedCoord.top + window.scrollY - offsetHeight,
      left: clickedCoord.left + window.scrollX,
      behavior: "smooth",
    });

    // document
    //   .querySelector(`#section--${id}`)
    //   .scrollIntoView({ behavior: "smooth" });
  }
  if (e.target.closest(".logo")) {
    window.scrollTo({
      top: window.top,
      left: window.scrollX,
      behavior: "smooth",
    });
  }
});

backToTop.addEventListener("click", function (e) {
  e.preventDefault();
  window.scrollTo({
    top: window.top,
    left: window.scrollX,
    behavior: "smooth",
  });
});

//STICKY NAVIGATION
// header.classList.add("sticky");
const headerHeight = header.getBoundingClientRect().height;
const stickyNav = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) header.classList.add("sticky");
  else header.classList.remove("sticky");
};

const stickyOptions = {
  root: null,
  threshold: 0,
  // rootMargin: `-${headerHeight}px`,
};
const stickyObserver = new IntersectionObserver(stickyNav, stickyOptions);
stickyObserver.observe(registerSvg);

//revealing elements on scroll

const scrollReveal = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove("section__hidden");
  observer.unobserve(entry);
};

const observeReveal = new IntersectionObserver(scrollReveal, {
  root: null,
  threshold: 0.15,
});
allSections.forEach((section) => {
  observeReveal.observe(section);
  section.classList.add("section__hidden");
});

// ScrollReveal().reveal(".register");
// ScrollReveal().reveal(".clients");
// ScrollReveal().reveal(".community");

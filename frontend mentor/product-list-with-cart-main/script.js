//let pictures change automatically

const foodItem = document.querySelectorAll(".food__item");
const images = document.querySelectorAll(".food__item > div img");
const overlay = document.querySelector(".overlay");
const modal = document.querySelector(".modal");
const sitePreload = document.querySelector(".load__page");
const btnAdd = document.querySelectorAll(".add-cart");
const filledOrder = document.querySelector(".filled__order");
const emptyOrder = document.querySelector(".empty__order");
const activeOrder = document.querySelector(".active__order");
const successfulOrder = document.querySelector(".successful__order div");
const totalOrder = document.querySelectorAll(".total__money");
const secondContainer = document.querySelector(".second__container");
const quantityOrdered = document.querySelector(".quantity--ordered");
const header = document.querySelector("h1");
//used for tracking the active order and their values
let flagArray = [];
let cartArray = [];

//getting the data from the json file
const jsonFile = await fetch("./data.json");
const foodContainer = document.querySelector(".food__container");
const data = await jsonFile.json();
const medias = [
  {
    name: "mobile",
    width: window.matchMedia("(max-width: 749px)"),
  },
  {
    name: "tablet",
    width: window.matchMedia("(max-width: 1199px) and (min-width: 750px)"),
  },
  {
    name: "desktop",
    width: window.matchMedia("(min-width: 1200px)"),
  },
];

/** function to change image on media size */
function displayImage() {
  const imageChange = function (src) {
    images.forEach((image, i) => {
      // console.log(image);
      // console.log(data[i].image[src]);
      image.setAttribute("src", data[i].image[src]);
    });
  };
  const changeMedia = function () {
    medias.forEach((media) => {
      if (media.width.matches) {
        imageChange(media.name);
      }
    });
  };

  changeMedia();
  window.addEventListener("resize", changeMedia);
}
displayImage();
// sitePreload.classList.add("hidden");
window.addEventListener("load", () => {
  sitePreload.classList.add("hidden");
});

//initialize the flag and cart array to have all zeros
for (let i = 0; i < images.length; i++) {
  flagArray.push(0);
  cartArray.push(0);
}
/**Functon to add to cart */
function addToCart() {
  //change the innerHTML of the button
  const changeButton = function (position, order) {
    if (order === 0) {
      unChangeButton(position);
      return;
    }
    const btnInnerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="decrement action" tabIndex="0">
      <path
        d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"
       />
    </svg>
    <p class="order--value">${order}</p>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="increment action" tabIndex="0">
      <path
        d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"
       />
    </svg>`;
    flagArray[position - 1] = position;
    btnAdd[position - 1].innerHTML = btnInnerHTML;
    btnAdd[position - 1].classList.add("ordering");
    images[position - 1].classList.add("active--image");
  };

  //revert the innerHTML of the button
  const unChangeButton = function (position) {
    const btnInnerHTML = `
  <div>
    <img src="./assets/images/icon-add-to-cart.svg" alt="add to cart"/>
  </div>
  <span>Add to Cart</span>

`;
    flagArray[position - 1] = 0;
    cartArray[position - 1] = 0;
    btnAdd[position - 1].innerHTML = btnInnerHTML;
    btnAdd[position - 1].classList.remove("ordering");
    images[position - 1].classList.remove("active--image");
  };

  //check if the user is making an order or not
  const checkValidity = function () {
    const checker = flagArray.some((elem) => elem !== 0);
    if (checker) {
      emptyOrder.classList.add("hidden");
      filledOrder.classList.add("shown");
    } else {
      emptyOrder.classList.remove("hidden");
      filledOrder.classList.remove("shown");
    }
  };

  // add/updates all the orders in the cart
  const renderActiveOrder = function (position, order) {
    quantityOrdered.textContent = Number(quantityOrdered.textContent);
    //check for the cancel operation
    if (order === 0) {
      activeOrder.removeChild(cartArray[position - 1]);

      //the number of total orders
      quantityOrdered.textContent = flagArray.filter(
        (elem) => elem !== 0
      ).length;
      return;
    }
    //if it is the first time it was clicked
    if (!foodItem[position - 1].dataset.render) {
      const div = document.createElement("div");
      div.innerHTML = ` 
      <div class="order--item">
        <h3>${data[position - 1].name}</h3>
        <div class="item--descriptions">
          <div>
            <p><span class="item--amount">1</span>x</p>

            <p>@ $<span class="actual--amount">${
              data[position - 1].price
            }</span></p>
            <p>$<span class="variable--amount">${
              data[position - 1].price
            }</span></p>
          </div>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="cancel" tabIndex="0" data-position="${position}">
        <path 
          d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
      </svg>`;
      div.classList.add("active__order--item");
      cartArray[position - 1] = div;
      activeOrder.appendChild(cartArray[position - 1]);
      // console.log(activeOrder.children);
      foodItem[position - 1].dataset.render = true;
      quantityOrdered.textContent = flagArray.filter(
        (elem) => elem !== 0
      ).length;
      return;
    }
    //if quantity is now zero

    //any other time clicked
    if (!activeOrder.contains(cartArray[position - 1]))
      activeOrder.appendChild(cartArray[position - 1]);
    cartArray[position - 1].innerHTML = ` 
      <div class="order--item">
        <h3>${data[position - 1].name}</h3>
        <div class="item--descriptions">
          <div>
            <p><span class="item--amount">${order}</span>x</p>

            <p>@ $<span class="actual--amount">${
              data[position - 1].price
            }</span></p>
            <p>$<span class="variable--amount">${
              data[position - 1].price * order
            }</span></p>
          </div>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="cancel" tabIndex="0" data-position="${position}">
        <path 
          d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
      </svg>`;
    quantityOrdered.textContent = flagArray.filter((elem) => elem !== 0).length;
  };

  //calculate the total orders
  const calcTotal = function () {
    let temp = [];
    let total = 0;
    const activeItems = Array.from(foodItem).filter((food, i) => {
      if (food.dataset.render) {
        temp.push(i);
      }
      return food.dataset.render;
    });
    const timesClicked = activeItems.map((item) =>
      Number(item.querySelector("button").dataset.clicked)
    );

    for (let i = 0; i < temp.length; i++) {
      total += data[temp[i]].price * timesClicked[i];
    }
    totalOrder.forEach((elem) => (elem.textContent = total));
  };

  //successful order rendering
  const rednderSuccessfulOrder = function (arr) {
    arr.forEach((elem, i) => {
      // console.log(elem, i);
      const div = document.createElement("div");
      div.classList.add("successful__order--item");
      const price =
        activeOrder.children[i].querySelector(".variable--amount").textContent;
      const amount =
        activeOrder.children[i].querySelector(".item--amount").textContent;
      let innerHTML = `
          <div class="successful__order--description">
            <img
              src="${data[elem - 1].image.thumbnail}"
              alt="brownie"
            />
            <div class="successful__description--text">
              <h3>${data[elem - 1].name}</h3>
              <div>
                <p><span class="item--amount">${amount}</span>x</p>

                <p>@ $<span class="actual--amount">${
                  data[elem - 1].price
                }</span></p>
              </div>
            </div>
          </div>
          <p>$<span class="variable--amount">${price}</span></p>
      `;
      if (window.innerWidth <= 460) {
        const str =
          data[elem - 1].name.length > 22
            ? data[elem - 1].name.slice(0, 20).padEnd(23, ".")
            : data[elem - 1].name;
        innerHTML = `
          <div class="successful__order--description">
            <img
              src="${data[elem - 1].image.thumbnail}"
              alt="brownie"
            />
            <div class="successful__description--text">
              <h3>${str}</h3>
              <div>
                <p><span class="item--amount">${amount}</span>x</p>

                <p>@ $<span class="actual--amount">${
                  data[elem - 1].price
                }</span></p>
              </div>
            </div>
          </div>
          <p>$<span class="variable--amount">${price}</span></p>
      `;
      }

      div.innerHTML = innerHTML;
      successfulOrder.appendChild(div);
    });
  };
  // use event delegatinon to add event listener to all button add cart .classList.contains("add-cart")
  foodContainer.addEventListener("click", function (e) {
    if (!e.target.closest("button")) return;
    const button = e.target.closest("button");
    let buttonClicked = Number(button.dataset.clicked);
    const buttonPosition = Number(button.dataset.number);
    // if not clicked before
    if (buttonClicked === 0) {
      buttonClicked++;
      changeButton(buttonPosition, buttonClicked);
    } else {
      //if clicked before
      const action = e.target;
      if (action.classList.contains("increment")) {
        buttonClicked++;
        changeButton(buttonPosition, buttonClicked);
      }
      if (action.classList.contains("decrement")) {
        buttonClicked--;
        changeButton(buttonPosition, buttonClicked);
      }
    }
    // console.log(cartArray);
    //update the dataset.clicked property
    button.dataset.clicked = buttonClicked;
    checkValidity();
    renderActiveOrder(buttonPosition, buttonClicked);
    calcTotal();
  });

  // use event delegatinon to add event listener to cancel order and confirm order
  secondContainer.addEventListener("click", function (e) {
    //on clicking the cancel button
    if (e.target.closest(".cancel")) {
      const position = Number(e.target.closest(".cancel").dataset.position);
      btnAdd[position - 1].dataset.clicked = 0;
      foodItem[position - 1].removeAttribute("data-render");
      flagArray[position - 1] = 0;
      renderActiveOrder(position, 0);
      changeButton(position, 0);
      calcTotal();
      checkValidity();
    }
    //on clicking confirm order
    if (e.target.classList.contains("place__order")) {
      //get the successful orders by their position
      const successfulArray = [];
      Array.from(activeOrder.children).forEach((elem) =>
        successfulArray.push(elem.querySelector("svg").dataset.position)
      );
      rednderSuccessfulOrder(successfulArray);
      //show the modal window and overlay
      sitePreload.classList.remove("hidden");
      setTimeout(() => {
        sitePreload.classList.add("hidden");
        modal.classList.add("shown");
        overlay.classList.add("shown");
        header.scrollIntoView({ behavior: "smooth" });
      }, 1500);
    }
  });

  //display the modal window on successful order
  modal.addEventListener("click", function (e) {
    if (e.target.classList.contains("reset")) {
      flagArray.forEach(function (elem, i) {
        unChangeButton(i + 1);
        foodItem[i].removeAttribute("data-render");
        btnAdd[i].dataset.clicked = 0;
        // modal.classList.remove("shown");
        // overlay.classList.remove("shown");
      });
      totalOrder.forEach((elem) => (elem.textContent = 0));
      checkValidity();
      activeOrder.innerHTML = "";
      successfulOrder.innerHTML = "";
      sitePreload.classList.remove("hidden");
      modal.classList.remove("shown");
      overlay.classList.remove("shown");
      setTimeout(() => {
        sitePreload.classList.add("hidden");
      }, 1500);
      header.scrollIntoView({ behavior: "smooth" });
    }
  });
}
addToCart();

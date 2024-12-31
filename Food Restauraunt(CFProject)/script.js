let navbar = document.querySelector(".header .navbar");
let menuBtn = document.querySelector("#menu-btn");
menuBtn.onclick = () => {
  menuBtn.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};

var swiper = new Swiper(".home-slider", {
  grabCursor: true,
  loop: true,
  centeredSlides: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".food-slider", {
  grabCursor: true,
  loop: true,
  centeredSlides: true,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    700: {
      slidesPerView: 2,
    },
    1000: {
      slidesPerView: 3,
    },
  },
});

let previewContainer = document.querySelector(".food-preview-container");
let previewBox = previewContainer.querySelectorAll(".food-preview");
document.querySelectorAll(".food .slide").forEach((food) => {
  food.onclick = () => {
    previewContainer.style.display = "flex";
    let name = food.getAttribute("data-name");
    previewBox.forEach((preveiw) => {
      let target = preveiw.getAttribute("data-target");
      if (name == target) {
        preveiw.classList.add("active");
      }
    });
  };
});

let preveiwBox = previewContainer.querySelectorAll(".food-preview");
document.querySelectorAll(".food .slide").forEach((food) => {
  food.onclick = () => {
    previewContainer.style.display = "flex";
    let name = food.getAttribute("data-name");
    previewBox.forEach((preveiw) => {
      let target = preveiw.getAttribute("data-target");
      if (name == target) {
        preveiw.classList.add("active");
      }
    });
  };
});
previewContainer.querySelector("#close-preview").onclick = () => {
  previewContainer.style.display = "none";
  previewBox.forEach((close) => {
    close.classList.remove("active");
  });
};

var swiper = new Swiper(".menu-slider", {
  grabCursor: true,
  loop: true,
  autoheight: true,
  centeredSlides: true,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
const form = document.getElementById("infoForm");
form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent page reload

  // Collect data from the form
  const name = document.getElementById("name").value;
  const foodName = document.getElementById("foodName").value;
  const details = document.getElementById("Details").value;
  const userAddress = document.getElementById("Address").value;
  const userNumber = document.getElementById("number").value;
  const orderQuantity = document.getElementById("quantity").value;
  const orderDate = document.getElementById("date").value;

  popupMessage.innerHTML = `Thank you, <span style="color: #aa130f; font-size: 30px;">${name}</span>, for choosing us.<br>
  Order Details:<br>
  ---------------------<br>
  Food Name: ${foodName}<br>
  Instructions: ${details}<br>
  Address: ${userAddress}<br>
  Customer Number: ${userNumber}<br>
  Quantity: ${orderQuantity}<br>
  Order Date: ${orderDate}`;

  // Show the popup with a transition
  popup.classList.add("active");
});

// Function to close the popup
function closePopup() {
  popup.classList.remove("active");
}

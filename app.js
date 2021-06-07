"use strict";

function toggleModal() {
  modal.classList.toggle("hidden");
  overlay.classList.toggle("hidden");
}

const modalButton = document.querySelectorAll(".show-modal");
const closeButton = document.querySelector(".close-modal");

const closeButtonss = document.querySelectorAll(".close-modal");

const modal = document.querySelector(".modal");
const modalss = document.querySelectorAll(".modal");

const overlay = document.querySelector(".overlay");

for (let i = 0; i < modalButton.length; i++) {
  modalButton[i].addEventListener("click", function () {
    modalss[i].classList.toggle("hidden");
    overlay.classList.toggle("hidden");
  });
}

for (let i = 0; i < closeButtonss.length; i++) {
  closeButtonss[i].addEventListener("click", function () {
    modalss[i].classList.add("hidden");
    overlay.classList.add("hidden");
  });
}

for (let i = 0; i < modalss.length; i++) {
  overlay.addEventListener("click", function () {
    modalss[i].classList.add("hidden");
    overlay.classList.add("hidden");
  });
}

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    for (let i = 0; i < modalss.length; i++) {
      modalss[i].classList.add("hidden");
      overlay.classList.add("hidden");
    }
  }
});

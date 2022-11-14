const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const openModalBtn = document.querySelector(".btn-open");
const closeModalBtn = document.querySelector(".btn-close");

/* to open modal function */
const openModal = function () {
 modal.classList.remove("hidden");
 overlay.classList.remove("hidden");
};
openModalBtn.addEventListener("click", openModal);

/* to close modal function */
const closeModal = function () {
 modal.classList.add("hidden");
 overlay.classList.add("hidden");
};
closeModalBtn.addEventListener("click", closeModal);

/* to close when you click outside modal container */
overlay.addEventListener("click", closeModal);

/* to close when you click escape key */
document.addEventListener("keydown", function (e) {
 if (e.key === "Escape" && !modal.classList.contains("hidden")) {
  closeModal();
 }
});

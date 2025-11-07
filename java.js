const cards = document.querySelectorAll(".card");
const modal = document.querySelector(".modal");
const modalImg = document.getElementById("modalImg");
const backBtn = document.querySelector(".back");
const nextBtn = document.querySelector(".next");
const closeBtn = document.querySelector(".close");
const dots = document.querySelectorAll(".dot");

let current = 0;

function openAt(index) {
  const card = cards[index];
  const img = card.querySelector("img");
  modalImg.src = img.src;
  modal.classList.add("open");
  current = index;
  dotProcess(index);
}

function dotProcess(index) {
  dots.forEach((dot, i) => {
    if (i === index) {
      dot.classList.add("active");
    } else {
      dot.classList.remove("active");
    }
  });
}

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    closeModal();
  }
});

function closeModal() {
  modal.classList.remove("open");
}

cards.forEach((card, i) => {
  card.addEventListener("click", (e) => {
    e.preventDefault();
    openAt(i);
  });
});

closeBtn.addEventListener("click", closeModal);
backBtn.addEventListener("click", () =>
  openAt((current - 1 + cards.length) % cards.length)
);

nextBtn.addEventListener("click", () => openAt((current + 1) % cards.length));

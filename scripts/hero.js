const images = [
  "Images/hero1-beach.jpeg",
  "Images/hero2-rainforest.jpeg",
  "Images/hero3-volcano.webp"
];

let isSliding = false;
let currentIndex = 0;
const heroContainer = document.querySelector(".hero");

function slideImage(direction) {
  if (isSliding) return;
  isSliding = true;

  const oldImage = document.querySelector(".hero-img");

  let newIndex = direction === "prev"
    ? (currentIndex - 1 + images.length) % images.length
    : (currentIndex + 1) % images.length;

  const newImage = document.createElement("img");
  newImage.src = images[newIndex];
  newImage.classList.add("hero-img");

  newImage.style.transform = direction === "prev" ? "translateX(-100%)" : "translateX(100%)";
  heroContainer.appendChild(newImage);

  newImage.getBoundingClientRect();

  requestAnimationFrame(() => {
    oldImage.style.transform = direction === "prev" ? "translateX(100%)" : "translateX(-100%)";
    newImage.style.transform = "translateX(0)";
  });

  oldImage.addEventListener("transitionend", function cleanup() {
    oldImage.remove();
    currentIndex = newIndex;
    isSliding = false;
    oldImage.removeEventListener("transitionend", cleanup);
  });
}

document.getElementById("left-arrow-img").addEventListener("click", () => slideImage("prev"));
document.getElementById("right-arrow-img").addEventListener("click", () => slideImage("next"));

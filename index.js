const btnNavbar = document.getElementById("navbar-btn");
const listaLinksConteiner = document.getElementById("navbar-links");
const listaLinks = document.querySelector("#navbar-links > ul");
const btnScrollUp = document.getElementById("btn-scroll-up");
const textWrapper = document.querySelector(".logo");

btnNavbar.addEventListener("click", () => {
  if (listaLinksConteiner.classList.contains("d-flex")) {
    listaLinksConteiner.classList.remove("d-flex");
    listaLinksConteiner.classList.add("d-none");
    return;
  } else {
    listaLinksConteiner.classList.remove("d-none");
    listaLinksConteiner.classList.add("d-flex");
    listaLinks.classList.add("position-absolute");
  }
});

window.onscroll = () => {
  if (window.scrollY > 300) {
    btnScrollUp.classList.remove("d-none");
    btnScrollUp.classList.add("d-flex");
  } else {
    btnScrollUp.classList.remove("d-flex");
    btnScrollUp.classList.add("d-none");
  }
};

btnScrollUp.addEventListener("click", () => {
  window.scrollTo(0, 0);
});

anime({
  targets: "#img-fondo",
  translateX: [100, 0],
  duration: 3000,
  direction: "alternate",
  loop: true,
  easing: "linear",
});

anime({
  targets: ".fa-brands",
  scale: [1, 1.2],
  duration: 1000,
  direction: "alternate",
  loop: true,
  easing: "linear",
  delay: (el, i, t) => i * 500,
});

anime({
  targets:
    ".text-tertiary.fw-normal.text-center.text-md-start.mb-4.mb-md-0.mt-4",
  opacity: [0, 1.2],
  duration: 2000,
  direction: "alternate",
  loop: false,
  easing: "linear",
});

anime({
  targets: ".fa-solid.fa-arrow-right.ms-2.d-none.d-lg-block",
  translateX: [0, 1],
  duration: 1000,
  direction: "alternate",
  loop: true,
  easing: "linear",
});

anime({
  targets: ".logo span",
  translateX: [0, 20],
  duration: 1000,
  direction: "alternate",
  delay: 1000,
  loop: true,
  easing: "linear",
});

// Cada letra del titulo se cubre con un <span> para poder animarlo despues.

textWrapper.innerHTML = textWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);

anime
  .timeline({ loop: true })
  .add({
    targets: "a.logo .letter",
    scale: [4, 1],
    opacity: [0, 1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay: (el, i) => 70 * i,
  })
  .add({
    targets: "a.logo",
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000,
  });

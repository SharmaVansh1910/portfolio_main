const menicn = document.querySelector("#menu-icon");
const nav = document.querySelector(".nav-links");

menicn.addEventListener("onclick", () => {
  nav.classList.toggle("active");
});

window.addEventListener("scroll", () => {
  nav.classList.remove("active");
});

const typed = new Typed(".multiple-text", {
  strings: ["frontend Developer", "DSA", "C Developer"],
  typeSpeed: 100,
  backSpeed: 60,
  backdelay: 1000,
  loop: true,
});

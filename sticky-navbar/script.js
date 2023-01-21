const nav = document.querySelector(".nav");
window.addEventListener("scroll", fixNav); // when scroll, call func fixNav

function fixNav() {
  //   console.log(window.scrollY, nav.offsetHeight);

  if (window.scrollY > nav.offsetHeight + 150) {
    nav.classList.add("active");
  } else {
    nav.classList.remove("active");
  }
}

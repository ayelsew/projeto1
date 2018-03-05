document.addEventListener("DOMContentLoaded", function() {
  let navbar = document.querySelector("nav");
  let header = document.querySelector("header");
  window.onscroll = function() {
    if (window.scrollY >= header.offsetHeight) {
      navbar.classList.remove("navincolor");
      console.log("ativo");
    } else {
      navbar.classList.add("navincolor");
      console.log("desativado");
    }
    /* console.log(window.scrollY + " - " + header.offsetHeight); */
  };
});

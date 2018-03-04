document.addEventListener("DOMContentLoaded", function() {
  /* Animation PTS */
  let ptsDisplay = document.querySelector("#pts");
  let l = 1000; //quantidade a ser carregada
  let arrVal = [2349, 3455, 2467, 4787, 3556, 3558];
  let t = arrVal[parseInt(Math.random() * arrVal.length)];
  let ptsStart = t - l;
  ptsDisplay.innerHTML = ptsStart;
  setInterval(function() {
    if (ptsStart >= t) {
      clearInterval(this);
    } else {
      ptsStart++;
      ptsDisplay.innerHTML = ptsStart + "pts";
    }
  }, 0.5);
  /* Animation star */
  let star = document.querySelectorAll(".starsRotate");
  star[0].classList.remove("starsRotate");
  star[1].classList.remove("starsRotate");
  star[2].classList.remove("starsRotate");
  star[3].classList.remove("starsRotate");
  star[4].classList.remove("starsRotate");
  setTimeout(function() {
    star[0].classList.remove("starsDelay");
    star[1].classList.remove("starsDelay");
    star[2].classList.remove("starsDelay");
    star[3].classList.remove("starsDelay");
    star[4].classList.remove("starsDelay");
  }, 500);
  /* Animation table */
  let table = document.querySelector("tbody");
  let o = 0.1;
  setInterval(function() {
    if (o >= 1) {
      clearInterval(this);
    } else {
      table.style.opacity = o;
      o += 0.1;
    }
  }, 200);
});
function accessURL(l) {
  window.open(l, "_blank");
}
function accessRate() {
  window.open("rank_post.html");
}

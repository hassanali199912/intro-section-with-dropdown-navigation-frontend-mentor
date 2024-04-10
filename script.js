// for clocing all menue on resizing to small screen
window.addEventListener("resize", () => {
  document.querySelector(".nav").classList.remove("active");
  document.querySelectorAll(".nav-list li").forEach((e) => {
    e.classList.remove("show");
  });
});

// for toggling menue on small screen
document.getElementById("menue-btn").addEventListener("click", () => {
  document.querySelector(".nav").classList.toggle("active");
});
// for toggling menue on small screen
document.getElementById("close-btn").addEventListener("click", () => {
  document.querySelector(".nav").classList.toggle("active");
});

// for dropdown menue
function dropDownFunction(e) {
  e.classList.toggle("show");
}

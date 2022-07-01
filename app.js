const popupBtn = document.querySelector("#pop-up-btn");
const crossBtn = document.querySelector(".cross-btn");
const closeBtn = document.querySelector(".close-btn");
const popUp = document.querySelector("#pop-up");
document.querySelector("#pop-up").style.display = "none";

popupBtn.addEventListener("click", function () {
  if (popUp.style.display === "none") {
    popUp.style.display = "block";
    popupBtn.style.display = "none";
  } else {
    popUp.style.display = "none";
  }
});
crossBtn.addEventListener("click", function () {
  if (popUp.style.display === "block") {
    popUp.style.display = "none";
    popupBtn.style.display = "block";
  } else {
    popUp.style.display = "none";
  }
});
closeBtn.addEventListener("click", function () {
  if (popUp.style.display === "block") {
    popUp.style.display = "none";
    popupBtn.style.display = "block";
  } else {
    popUp.style.display = "none";
  }
});

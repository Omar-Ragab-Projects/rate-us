const rateNumbers = document.querySelectorAll(".component ul li");
rateNumbers.forEach((n) => {
  n.addEventListener("click", (e) => {
    rateNumbers.forEach((rn) => rn.classList.remove("choose"));
    e.target.classList.add("choose");
    document.querySelector("span.error-msg").style.display = "none";
  });
});
let num = 0;
const submitBtn = document.querySelector(".component input");
const thankYou = document.querySelector(".thank-you");
const component = document.querySelector(".component");
submitBtn.addEventListener("click", (e) => {
  checkChoosen();
  if (num == 1) {
    component.style.display = "none";
    thankYou.classList.add("show");
  } else {
    console.log("error");
    document.querySelector("span.error-msg").style.display = "block";
  }
});

function checkChoosen() {
  rateNumbers.forEach((rn) => {
    if (rn.classList.contains("choose")) {
      num++;
    }
  });
}

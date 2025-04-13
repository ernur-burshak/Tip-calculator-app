let billValue = 0.0;
let tipValue = 0.15;
let peopleValue = 1;

const billInput = document.querySelector(".bill-input");
const tips = document.querySelectorAll(".tips");
const tipCustom = document.querySelector(".tip-custom");
const peopleInput = document.querySelector(".people-input");
const tipPerPerson = document.getElementById("tip-amount");
const totalPerPerson = document.getElementById("total-amount");
const resetButton = document.querySelector(".reset");
const error = document.querySelector(".error");

billInput.addEventListener("input", billInputFun);
tips.forEach((val) => {
  val.addEventListener("click", handleclick);
});
tipCustom.addEventListener("input", tipInputFun);
peopleInput.addEventListener("input", peopleInputFun);
resetButton.addEventListener("click", reset);

billInput.value = "0.0";
peopleInput.value = "1";
tipPerPerson.innerHTML = `$${(0.0).toFixed(2)}`;
totalPerPerson.innerHTML = `$${(0.0).toFixed(2)}`;

function billInputFun() {
  if (billInput.value === "") {
    billInput.value = 0;
  }
  billValue = parseFloat(billInput.value);
  calculateTip();
}

function handleclick(e) {
  tips.forEach((val) => {
    val.classList.remove("active-tip");
    if (e.target.innerHTML == val.innerHTML) {
      val.classList.add("active-tip");
      tipValue = parseFloat(val.innerHTML) / 100;
    }
  });
  calculateTip();
  tipCustom.value = "";
}

function tipInputFun() {
  tipValue = parseFloat(tipCustom.value / 100);

  tips.forEach((val) => {
    val.classList.remove("active-tip");
  });
  calculateTip();
}

function peopleInputFun() {
  peopleValue = parseFloat(peopleInput.value);
  calculateTip();

  if (peopleValue < 1) {
    error.style.display = "flex";
    peopleInput.style.border = "thick solid red";
  } else {
    error.style.display = "none";
    peopleInput.style.border = "none";
  }
}

function reset() {
  billInput.value = "0.0";
  billInputFun();
  peopleInput.value = "1";
  peopleInputFun();
  tipCustom.value = "";
}

function calculateTip() {
  if (peopleValue >= 1) {
    let tipAmount = (billValue * tipValue) / peopleValue;
    let total = (billValue + tipAmount) / peopleValue;
    tipPerPerson.innerHTML = `$${tipAmount.toFixed(2)}`;
    totalPerPerson.innerHTML = `$${total.toFixed(2)}`;
  }
}

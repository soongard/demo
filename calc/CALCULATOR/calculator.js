let inputEl = document.getElementById("input");
let addEl = document.getElementById("plus");
let minusEl = document.getElementById("minus");
let timesEl = document.getElementById("times");
let divideEl = document.getElementById("divide");
let multiplyEl = document.getElementById("multiply");
let equalsEl = document.getElementById("equal");
let oneEl = document.getElementById("one");
let twoEl = document.getElementById("two");
let threeEl = document.getElementById("three");
let fourEl = document.getElementById("four");
let fiveEl = document.getElementById("five");
let sixEl = document.getElementById("six");
let sevenEl = document.getElementById("seven");
let eightEl = document.getElementById("eight");
let nineEl = document.getElementById("nine");
let zeroEl = document.getElementById("zero");
let refreshEl = document.getElementById("refresh");

//my own ooo
const displayIt = (x) => {
  return (inputEl.innerHTML = x);
};

const calculator = {
  displayValue: "0",
  firstOperand: null,
  waitingForSecondOperand: false,
  operator: null,
};

function updateDisplay() {
  const display = inputEl;
  display.value = calculator.displayValue;
}
updateDisplay();

function inputDigit(digit) {
  const { displayValue } = calculator;
  calculator.displayValue =
    displayValue === "0" ? digits : displayValue + digit;
}

const keys = document.querySelector(".btn");
keys.addEventListener("click", (event) => {
  const { target } = event;

  if (!target.matches("button")) {
    return;
  }
  if (target.classList.contains("operator")) {
    console.log("operator", target.value);
    return;
  }
  if (target.classList.contains("decimal")) {
    console.log("operator", target.value);
    return;
  }
  if (target.classList.contains("all-clear")) {
    console.log("clear", target.value);
    return;
  }
  console.log("digit", target.value);
});

// const { target } = event;

// const target = event.target;

// refreshEl.addEventListener("class", function{
//   let pop = " ";
//   return pop
// })

addEl.addEventListener("click", function (a, b) {
  let add = a + b;
  inputEl.value = "+";
  console.log("Add: +");
  //   let add = +Number(b);
  return add(a, b);
});

minusEl.addEventListener("click", function (b) {
  inputEl.value = "-";
  console.log("minus: −");
  //     let add = - b;

  //   return add;
});

timesEl.addEventListener("click", function (a, b) {
  console.log("times: *");
  inputEl.value = "×";
  let add = a * b;
  return add;
});

divideEl.addEventListener("click", function (a, b) {
  inputEl.value = "÷";
  console.log("divide: /");
  let add = a / b;
  return add;
});

equalsEl.addEventListener("click", function (a, b) {
  console.log("equals: =");
  // let add = op(===);
  // return add;
});

oneEl.addEventListener("click", function (a, b) {
  console.log("1");
  inputEl.value = 1;
  add(a, b);
  return 1;
  // let add = op(===);
  // return add;
});

twoEl.addEventListener("click", function (a, b) {
  console.log("2");
  // let add = op(===);
  // return add;
});

threeEl.addEventListener("click", function (a, b) {
  console.log("3");
  // let add = op(===);
  // return add;
});

fourEl.addEventListener("click", function (a, b) {
  console.log("4");
  // let add = op(===);
  // return add;
});

fiveEl.addEventListener("click", function (a, b) {
  console.log("5");
  // let add = op(===);
  // return add;
});

sixEl.addEventListener("click", function (a, b) {
  console.log("6");
  // let add = op(===);
  // return add;
});

sevenEl.addEventListener("click", function (a, b) {
  console.log("7");
  // let add = op(===);
  // return add;
});

eightEl.addEventListener("click", function (a, b) {
  console.log("8");
  // let add = op(===);
  // return add;
});

nineEl.addEventListener("click", function (a, b) {
  console.log("9");
  // let add = op(===);
  // return add;
});

zeroEl.addEventListener("click", function (a, b) {
  console.log("0");
  inputEl.innerHTML = Number(0);
});

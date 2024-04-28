let input = document.getElementById("input");
let outputBox = document.getElementById("result");
const possibleCharacters =
  "abcdefghijklmnopqrstuvwxwzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!#$%^&*(){}[]:;/*-+";
/*BASIC FUNCTIONS*/

function clear0() {
  if (input.value === "") {
    Toastify({
      text: "Already Cleared!",
      duration: 3000,
      newWindow: true,
      close: true,
      gravity: "top",
      position: "left",
      stopOnFocus: true,
      style: {
        background: "#d67002",
        color: "black",
      },
      onClick: function () {},
    }).showToast();
  } else {
    Toastify({
      text: "Input value cleared!",
      duration: 3000,
      newWindow: true,
      close: true,
      gravity: "top",
      position: "left",
      stopOnFocus: true,
      style: {
        background: "#178da6",
      },
      onClick: function () {},
    }).showToast();
  }
  input.value = "";
}

function clear1() {
  if (outputBox.innerHTML === "") {
    Toastify({
      text: "Already Cleared!",
      duration: 3000,
      newWindow: true,
      close: true,
      gravity: "top",
      position: "left",
      stopOnFocus: true,
      style: {
        background: "#d67002",
        color: "black",
      },
      onClick: function () {},
    }).showToast();
  } else {
    Toastify({
      text: "Output value cleared!",
      duration: 3000,
      newWindow: true,
      close: true,
      gravity: "top",
      position: "left",
      stopOnFocus: true,
      style: {
        background: "#178da6",
      },
      onClick: function () {},
    }).showToast();
    outputBox.innerHTML = "";
  }
}

function showOutput(res) {
  result.innerHTML = res;
}

/*25.12345*/

function roundNumber() {
  let res = Math.round(25.12345);
  res = `<h1>${res}</h1>`;
  showOutput(res);
}

function ceilNumber() {
  let res = Math.ceil(25.12345);
  res = `<h1>${res}</h1>`;
  showOutput(res);
}

function floorNumber() {
  let res = Math.floor(25.12345);
  res = `<h1>${res}</h1>`;
  showOutput(res);
}

function generateRandom() {
  var res = Math.random();
  res = `<h1>${res}</h1><br><p>Generating random number between 0 and 0.9`;
  showOutput(res);
}

function throwDice() {
  var res = Number(res);
  res = Math.random() * 6 + 1;
  let output = Math.floor(res);
  output = `<h1>${output}</h1>`;
  showOutput(output);
}

function generatePassword() {
  outputBox.innerHTML = "";
  let length = +prompt("Password should be how many characters?")
  outputBox.innerHTML = "<div>Generated a strong password : </div>";
  for (let i = 1; i <= length; i++) {
    var res = Number(res);
    res = Math.random() * 81;
    let idx = Math.floor(res);
    outputBox.innerHTML += `<div><h4 style="color:green"> ${possibleCharacters[idx]}</h4></div>`;
  }
}

function convertStr() {
  if (!input.value) {
    Toastify({
      text: "Please enter number in the input box!",
      duration: 3000,
      newWindow: true,
      close: true,
      gravity: "top",
      position: "left",
      stopOnFocus: true,
      style: {
        background: "#d67002",
        color: "black",
      },
      onClick: function () {},
    }).showToast();
    outputBox.innerHTML = "";
  } else {
    outputBox.innerHTML = "";
    let inp = input.value;
    inp = Number(inp);
    outputBox.innerHTML = `<h3><span style = "color:green">${inp}</span> is now a number.</h3>`;
  }
}

function controlLength() {
  if (!input.value) {
    Toastify({
      text: "Please enter number in the input box!",
      duration: 3000,
      newWindow: true,
      close: true,
      gravity: "top",
      position: "left",
      stopOnFocus: true,
      style: {
        background: "#d67002",
        color: "black",
      },
      onClick: function () {},
    }).showToast();
    outputBox.innerHTML = "";
  } else {
    let n = +prompt("Enter the length");
    outputBox.innerHTML = "";
    let inp = input.value;
    inp = Number(inp).toFixed(n);
    outputBox.innerHTML = `<h3><span style = "color:green">${inp}</span> is controlled with <span style = "color:red">${n}</span>.</h3>`;
  }
}

function gstCal() {
  if (!input.value) {
    Toastify({
      text: "Please enter price in the input box!",
      duration: 3000,
      newWindow: true,
      close: true,
      gravity: "top",
      position: "left",
      stopOnFocus: true,
      style: {
        background: "#d67002",
        color: "black",
      },
      onClick: function () {},
    }).showToast();
    outputBox.innerHTML = "";
  } else {
    outputBox.innerHTML = "";
    let taxRate = +prompt("Enter the Tax rate (%)");
    let tax = taxRate/100 * Number(input.value)
    let totalPrice = tax + Number(input.value)
    outputBox.innerHTML = `<h3><span style = "color:green">${totalPrice}</span> PKR is Total Price with a tax of <span style = "color:red">${tax}</span> PKR.</h3>`;
  }
}

//Create a function that changes the display numb to the one you clicked
const displayValue = document.querySelector(".display-value");
const screenFrame = document.querySelector(".screen-frame");

const numberButtons = document.querySelector(".numbers");
const operatorButtons = document.querySelector(".operators");

let value = 0;
let target = 0;
let equation = []
let targetOperator = "";

const n = numberButtons.addEventListener("click", valueGetterNumber);
const o = operatorButtons.addEventListener("click", valueGetterOperator);

function valueGetterNumber(n) {
  target = n.target.className;
  console.log(target);

  initialText();
  numberBtnInput();
}
function valueGetterOperator(o) {
  targetOperator = o.target.className;
  console.log(targetOperator);

  initialText();
  operatorBtnInput();
}

//final result calculation !!not finished!!
function result() {
  unCalculatedVal = screenFrame.children;
  let arr = Array.from(unCalculatedVal);
  console.log(unCalculatedVal);
  for(value in arr){
    equation += arr[value].innerText
  }
  console.log(equation)
  console.log(eval(equation))
}

//numerical input
function numberBtnInput() {
  switch (target) {
    case "btn1":
      valuesAssigning("val", "1", "num1");
      break;

    case "btn2":
      valuesAssigning("val2", "2", "num2");
      break;

    case "btn3":
      valuesAssigning("val3", "3", "num3");
      break;

    case "btn4":
      valuesAssigning("val4", "4", "num4");
      break;

    case "btn5":
      valuesAssigning("val5", "5", "num5");
      break;

    case "btn6":
      valuesAssigning("val6", "6", "num6");
      break;

    case "btn7":
      valuesAssigning("val7", "7", "num7");
      break;

    case "btn8":
      valuesAssigning("val8", "8", "num8");
      break;

    case "btn9":
      valuesAssigning("val9", "9", "num9");
      break;

    case "btn0":
      valuesAssigning("val0", "0", "num0");
      break;
  }
}
//operator input
function operatorBtnInput() {
  switch (targetOperator) {
    case "plus":
      valuesAssigning("valPlus", "+", "oper-plus");
      break;
    case "minus":
      valuesAssigning("valMinus", "-", "oper-minus");
      break;
    case "multiply":
      valuesAssigning("valMultiply", "X", "oper-multiply");
      break;
    case "divide":
      valuesAssigning("valDivide", "/", "oper-divide");
      break;
    case "clear":
      while (screenFrame.firstChild) {
        screenFrame.firstChild.remove();
      }
    
      break;
    case "enter":
      result();
      break;
  }
}

// the value assigner
function valuesAssigning(valueName, value, valueClass) {
  valueName = document.createElement("p");
  valueName.textContent = value;
  valueName.classList.add(valueClass);
  screenFrame.appendChild(valueName);
}

// made it so it removes the initial value of zero Once only
const initialText = (function () {
  var executed = false;
  return function () {
    if (!executed) {
      executed = true;
      displayValue.textContent = "";
    }
  };
})();

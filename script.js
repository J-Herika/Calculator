//Create a function that changes the display numb to the one you clicked
const displayValue = document.querySelector(".display-value");
const screenFrame = document.querySelector(".screen-frame");

const numberButtons = document.querySelector(".numbers")
const operatorButtons = document.querySelector(".operators")


let value = 0;
let target = 0;
let targetOperator = '';

const n = numberButtons.addEventListener('click', valueGetterNumber)
const o = operatorButtons.addEventListener('click', valueGetterOperator)


function valueGetterNumber(n){
  target = n.target.className
  console.log(target)
  
  initialText()
  numberBtnInput()
  
}
function valueGetterOperator(o) {
  targetOperator = o.target.className;
  console.log(targetOperator)

  initialText()
  operatorBtnInput()
}

function operation(){
  
}

function numberBtnInput() {
  switch(target) {

    case 'btn1': 
    const val = document.createElement('p')
    val.textContent = '1'
    screenFrame.appendChild(val)
    break;

    case 'btn2': 
    const val2 = document.createElement('p')
    val2.textContent = '2'
    screenFrame.appendChild(val2)
    break;

    case 'btn3': 
    const val3 = document.createElement('p')
    val3.textContent = '3'
    screenFrame.appendChild(val3)
    break;

    case 'btn4': 
    const val4 = document.createElement('p')
    val4.textContent = '4'
    screenFrame.appendChild(val4)
    break;

    case 'btn5': 
    const val5 = document.createElement('p')
    val5.textContent = '5'
    screenFrame.appendChild(val5)
    break;

    case 'btn6': 
    const val6 = document.createElement('p')
    val6.textContent = '6'
    screenFrame.appendChild(val6)
    break;

    case 'btn7': 
    const val7 = document.createElement('p')
    val7.textContent = '7'
    screenFrame.appendChild(val7)
    break;

    case 'btn8': 
    const val8 = document.createElement('p')
    val8.textContent = '8'
    screenFrame.appendChild(val8)
    break;

    case 'btn9': 
    const val9 = document.createElement('p')
    val9.textContent = '9'
    screenFrame.appendChild(val9)
    break;

    case 'btn0': 
    const val0 = document.createElement('p')
    val0.textContent = '0'
    screenFrame.appendChild(val0)
    break;
  }
}
function operatorBtnInput() {
  switch (targetOperator) {
    case "plus":
      let valPlus = document.createElement("p");
      valPlus.textContent = "+";
      screenFrame.appendChild(valPlus)
      break;
    case "minus":
      let valMinus = document.createElement("p");
      valMinus.textContent = "-";
      screenFrame.appendChild(valMinus)
      break;
    case "multiply":
      let valMultiply = document.createElement("p");
      valMultiply.textContent = "-";
      screenFrame.appendChild(valMultiply)
      break;
    case "divide":
      let valDivide = document.createElement("p");
      valDivide.textContent = ('-');
      screenFrame.appendChild(valDivide)
      break;
    case "clear":
      while(screenFrame.firstChild){
        screenFrame.firstChild.remove()
      }
      break;
    case 'enter':
      break;
  }
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
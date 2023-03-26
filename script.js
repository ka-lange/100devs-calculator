const allButtons = document.querySelectorAll('.calcButton');
const numberButtons = document.querySelectorAll('.numberButton');
const operationButtons = document.querySelectorAll('.operatorButton');
const equalsButton = document.getElementById('equalsbutton');
const deleteButton = document.getElementById('deletebutton');
const allClearButton = document.getElementById('clearbutton');

const previousOperandTextElement = document.querySelector('.previousOperand')
const currentOperandTextElement = document.querySelector('.currentOperand')

class Calculator {
  constructor(previousOperandTextElement, currentOperandTextElement) {
    this.previousOperandTextElement = previousOperandTextElement;
    this.currentOperandTextElement = currentOperandTextElement;
    
    //clears all variables and deletes their values
    this.clear()
  }
  clear(){
    this.currentOperand = ''
    this.previousOperand = ''
    this.operation = undefined
  }
  delete() {
    this.currentOperand = this.currentOperand.toString().slice(0, -1)
  }
  
  appendNumber(number) {
    if (number === '.' && this.currentOperand.includes('.')) return
    this.currentOperand = this.currentOperand.toString() + number.toString()
  }
  
  chooseOperation(operation) {
    if (this.currentOperand === '') return
    if (this.currentOperand !== '') {
      this.compute()
    }
    this.operation = operation
    this.previousOperand = this.currentOperand
    this.currentOperand = ''
  }
  
  compute() {
    let computation
    const prev = parseFloat(this.previousOperand)
    const current = parseFloat(this.currentOperand)

    if(isNaN(prev) || isNaN(current)) return
    
    switch (this.operation) {
      case '+':
        computation = prev + current
        break
      case '-':
        computation = prev - current
        break
      case '*':
        computation = prev * current
        break
      case '/':
        computation = prev / current
        break
      default:
        return
    }

    this.currentOperand = computation
    this.operation = undefined
    this.previousOperand = ''
  }
  
  updateDisplay() {
    this.currentOperandTextElement.innerText = this.currentOperand
    this.previousOperandTextElement.innerText = this.previousOperand
  }

}
const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

numberButtons.forEach(button => {
  button.addEventListener('click', ()=>{
    calculator.appendNumber(button.innerText)
    calculator.updateDisplay()
  })
})

operationButtons.forEach(button => {
  button.addEventListener('click', () => {
    calculator.chooseOperation(button.innerText)
    calculator.updateDisplay()
  })
})
equalsButton.addEventListener('click', button => {
  calculator.compute()
  calculator.updateDisplay()
})
allClearButton.addEventListener('click', button => {
  calculator.clear()
  calculator.updateDisplay()
})
deleteButton.addEventListener('click', button =>{
  calculator.delete()
  calculator.updateDisplay()
})
// sevenButton.addEventListener('click', addNumber(sevenButton))

// function addNumber(button){
//   let number = button.innerHTML;
//   const textnode = document.createTextNode(number);
//   answerWindow.appendChild(textnode)
//   console.log(number)
// }
// numberButtons.forEach(item => {
//   item.addEventListener('click', event => function getNumberA() {
//     let numberA = [];
//     numberA += event.innerHTML;
//     console.log(numberA)
//     })
// })

// function getNumberA() {
// let numberA = [];
// for (var i = 0; i < allButtons.length; i++) {
//   allButtons[i].onclick = function (e){
//     numberA += this.innerHTML;
//     console.log(numberA)
//   }
//   return numberA.join('');
// }
// }


// let placeholder = document.createElement("div");
// placeholder.innerHTML = "123";
// let node = answerWindow.appendChild(placeholder);

//get first number value (a)

//get operator (button(+-/*))
//get second number value (b)
//make a operator b a string
//hit equals sign should run Calculate function with the created string


// for (var i = 0; i < allButtons.length; i++) {
//     allButtons[i].onclick = function(e) {
//         // let expressionStr = '';
//         let entry = this.innerHTML;
//         let expression = answerWindow.innerHTML +=entry
//         //newp.textContent = expressionStr += entry;
//         // answerWindow.appendChild(newp);
//     }  
// }
// equalsButton.addEventListener('click', operate);
// function operate(){
    
// }






// function Calculator() {

//     this.methods = {
//       "-": (a, b) => a - b,
//       "+": (a, b) => a + b
//     };
  
//     this.calculate = function(str) {
  
//       let split = str.split(''),
//         a = +split[0],
//         op = split[1],
//         b = +split[2];
  
//       if (!this.methods[op] || isNaN(a) || isNaN(b)) {
//         return NaN;
//       }
  
//       return this.methods[op](a, b);
//     };
  
//     this.addMethod = function(name, func) {
//       this.methods[name] = func;
//     };
//   }


//   let calc = new Calculator;
//   console.log(calc.calculate('3+7'));


for (let i = 0; i < allButtons.length; i++) {
  allButtons[i].onmouseenter = function(e) {
      var color = '#'+ Math.floor(Math.random()*16777215).toString(16);
      this.style['background'] = color;
  }  
}
for (let i = 0; i < allButtons.length; i++) {
  allButtons[i].onmouseleave = function(e) {
      this.style['background'] = 'white';
  }  
}
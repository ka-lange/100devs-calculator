const allButtons = document.querySelectorAll('.calcButton');
const numberButtons = document.querySelectorAll('.numberButton');
const operationButtons = document.querySelectorAll('.operatorButton');
const equalsButton = document.getElementById('equalsbutton');
const deleteButton = document.getElementById('deletebutton');
const clearButton = document.getElementById('clearbutton');

const previousOperandText = document.querySelector('.previousOperand')
const currentOperandText = document.querySelector('.currentOperand')

class Calculator {
  constructor(previousOperandText, currentOperandText) {
    this.previousOperandText = previousOperandText;
    this.currentOperandText = currentOperandText;
    
    //clears all variables and deletes their values
    this.clear()
  }
  //clears answer output and resets current and previous operands
  clear(){
    this.currentOperand = ''
    this.previousOperand = ''
    this.operation = undefined
  }

  //adds number to current operand string
  appendNumber(number) {
    if (number === '.' && this.currentOperand.includes('.')) return
    this.currentOperand = this.currentOperand.toString() + number.toString()
  }
  //deletes last number appended to current operand string
  delete() {
    this.currentOperand = this.currentOperand.toString().slice(0, -1)
  }
  //chooses operation if current operand has a number in it
  //will not work if currentOperand is blank
  chooseOperation(operation) {
    if (this.currentOperand === '') return
    if (this.currentOperand !== '') {
      this.compute()
    }
    this.operation = operation
    this.previousOperand = this.currentOperand + operation //moves current operand to previous operand spot in answer output box
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

    this.currentOperand = computation //sets current to the result of computing
    this.operation = undefined //resets operation
    this.previousOperand = '' //resets previous operand field
  }
  
  updateDisplay() {
    this.currentOperandText.innerText = this.currentOperand
    this.previousOperandText.innerText = this.previousOperand
  }

}
const calculator = new Calculator(previousOperandText, currentOperandText)

numberButtons.forEach(button => {
  button.addEventListener('click', ()=>{
    calculator.appendNumber(button.innerText)
    calculator.updateDisplay()
  })
})
operationButtons.forEach(button => {
  button.addEventListener('click', () => {
    calculator.chooseOperation(button.innerText)
    // calculator.appendNumber(button.innerText)
    calculator.updateDisplay()
  })
})
equalsButton.addEventListener('click', button => {
  calculator.compute()
  calculator.updateDisplay()
})
clearButton.addEventListener('click', button => {
  calculator.clear()
  calculator.updateDisplay()
})
deleteButton.addEventListener('click', button =>{
  calculator.delete()
  calculator.updateDisplay()
})

//this does nothing for the calculator to work - this changes the color of the buttons to a random color :)
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
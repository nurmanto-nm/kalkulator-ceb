// 1. Ambil element button dengan class nubmer

const numbers = document.querySelectorAll(".number")

// 2.memberikan eventlisterner pada tiap-tiap number
numbers.forEach((number) => {
  number.addEventListener("click", (event) => {
      inputNumber(event.target.value)
       updateScreen(currentNumber)
      })
})

// 3. Mengupdate nilai di layar berdasarkan masukan dari fungsi updatescreen

const calculatorScreen = document.querySelector(".calculator-screen")
const updateScreen = (number) => {
  calculatorScreen.value = number
}

// 4.menyimpan angka untuk melakukan kalkulasi 
let prevNumber = ''  
let currentNumber= '0'
let calculationOperator = ''

// 5. definisi fungsi input number

const inputNumber = (number) => {
  if(currentNumber === '0') {
    currentNumber = number
  } else {
    currentNumber += number
  }
}

const operators = document.querySelectorAll(".operator")

operators.forEach((operator) => {
  operator.addEventListener("click", (event)=>{
    inputOperator(event.target.value)
  })
})

const inputOperator = (operator) =>{
  if(calculationOperator === '') {
    prevNumber=currentNumber
  }
  calculationOperator=operator
  currentNumber='0'
}


const equalSign=document.querySelector(".equal-sign")
equalSign.addEventListener("click", () => {
  calculate()
  updateScreen(currentNumber)
})

const calculate= () =>{
  let result =''
  switch (calculationOperator) {
    case"+":
      result= parseFloat(prevNumber) + parseFloat(currentNumber)
      break
    case "-":
      result=prevNumber - currentNumber
      break
    case "*":
      result = prevNumber * currentNumber
      break
    case "/":
      result= prevNumber / currentNumber
      break 
      default:
        return                                                                                                                                                                                                                                                                    
  }
  currentNumber = result
  calculationOperator = ''     
}

//tombol AC
const clearAll = () => {
  prevNumber=''
  calculationOperator= ''
  currentNumber='0'
}
const clearBtn = document.querySelector('.all-clear')

clearBtn.addEventListener('click', () => {
  clearAll()
  updateScreen(currentNumber)
})

// kalkulasi angka desimal
inputDecimal = (dot) => {
  if(currentNumber.includes('.')) {
    return
  }
  currentNumber += dot 
}
const decimal=document.querySelector('.decimal')
decimal.addEventListener('click',(event) => {
  inputDecimal(event.target.value)
  updateScreen(currentNumber)
})

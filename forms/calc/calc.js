function Calculate(x,y) {
  return x + y;
}

let num1 = parseFloat(prompt('Enter your first number:'))
let num2 = parseFloat(prompt('Enter your second number:'))

let summedNumbers = Calculate(num1,num2)

console.log(`The sum of ${num1}  and ${num2} is ${summedNumbers}.`);
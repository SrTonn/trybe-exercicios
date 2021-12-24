// exercicio 1

const adicao = (num1, num2) => num1 + num2
const substracao = (num1, num2) => num1 - num2
const multiplicacao = (num1, num2) => num1 * num2
const divisao = (num1, num2) => num1 / num2
const modulo = (num1, num2) => num1 % num2

// exercicio 2 e 3

const highNumber = (...numbers) => Math.max(...numbers)

// exercicio 4

const isPositive = (number) => number > 0 ? 'positive' : number < 0 ? 'negative' : 'zero'

// exercicio 5

const isTriangle = (angle1, angle2, angle3) => {
  const sumOfAngles = angle1 + angle2 + angle3
  const isAllPositive = angle1 > 0 && angle2 > 0 && angle3 > 0

  return isAllPositive && sumOfAngles === 180
}

// exercicio 6

// exercicio 7

// exercicio 8

// exercicio 9

// exercicio 10

// exercicio 11

// exercicio 12

// exercicio 13

// exercicio 14

// exercicio 15
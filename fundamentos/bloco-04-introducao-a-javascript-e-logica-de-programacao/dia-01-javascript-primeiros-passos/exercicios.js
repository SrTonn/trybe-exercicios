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

const chessMovement = (piece) => {
  const table = {
    king: 'The king can move one square in any direction.',
    bishop: 'The bishop can move diagonally as many squares as it would like, without jumping over another piece',
    knight: 'The knight is the only piece on the board that can jump over another piece.',
    rook: 'The rook can move any number of squares up, down, and across.',
    queen: 'The queen combines the moves from the bishop and rook. It can move any squares in a diagonal direction, or go up, down, and sideways as many squares without jumping over another piece.',
    pawn: 'The pawn is the only piece on the chess board that can’t go backwards. It is also the only piece where you can’t move it the same number of squares the entire game. The first time you move a pawn you can move it one or two squares. Once the pawn has moved you can only move the pawn one square after that.',
  }
  return table[piece.toLowerCase()] || 'Invalid name!'
}

// exercicio 7

const notePercent = (note) => {
  if (note < 0 || note > 100) return 'Invalid note!'
  if (note >= 90) return 'A'
  if (note >= 80) return 'B'
  if (note >= 70) return 'C'
  if (note >= 60) return 'D'
  if (note >= 50) return 'E'
  return 'F'
}

// exercicio 8

const someEven = (num1, num2, num3) => num1 % 2 === 0 || num2 % 2 === 0 || num3 % 2 === 0

// exercicio 9

const someOdd = (num1, num2, num3) => num1 % 2 === 1 || num2 % 2 === 1 || num3 % 2 === 1

// exercicio 10

const calcProfit = (costOfProduct, saleValue) => {
  if (costOfProduct >= 0 && saleValue >= 0) {
    const totalCostOfProduct = costOfProduct * 1.2
    const totalProfit = (saleValue - totalCostOfProduct) * 1000
    return totalProfit
  }

  return "Error, os valores não podem ser negativos"
}
console.log(calcProfit(1, 3))

// exercicio 11

const aliquotInssAndIr = (grossSalary) => {
  let aliquotINSS
  let aliquotIR

  if (grossSalary <= 1556.94) {
    aliquotINSS = grossSalary * 0.08
  } else if (grossSalary <= 2594.92) {
    aliquotINSS = grossSalary * 0.09
  } else if (grossSalary <= 5189.82) {
    aliquotINSS = grossSalary * 0.11
  } else {
    aliquotINSS = 570.88
  }

  const baseSalary = grossSalary - aliquotINSS

  if (baseSalary <= 1903.98) {
    aliquotIR = 0
  } else if (baseSalary <= 2826.65) {
    aliquotIR = baseSalary * 0.075 - 142.8
  } else if (baseSalary <= 3751.05) {
    aliquotIR = baseSalary * 0.15 - 354.8
  } else if (baseSalary <= 4664.68) {
    aliquotIR = baseSalary * 0.225 - 636.13
  } else {
    aliquotIR = baseSalary * 0.275 - 869.36
  }

  return 'Salário: ' + (baseSalary - aliquotIR)
}

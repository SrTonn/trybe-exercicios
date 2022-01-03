// Bônus 01
const num = 5

function bonus01(num) {
  const squad = Array.from({length: num}, () => '*').join('')
  for (let i = 0; i < num; i++) {
    console.log(squad)
  }
}
bonus01(num)

// Bônus 02
function bonus02(num) {
  const arr = Array.from({length: num}, () => ' ')
  for (let i = 0; i < num; i += 1) {
    const newArr = [...arr]
    console.log(newArr.fill('*', 0, i + 1).join(' '))
  }
}
bonus02(num)

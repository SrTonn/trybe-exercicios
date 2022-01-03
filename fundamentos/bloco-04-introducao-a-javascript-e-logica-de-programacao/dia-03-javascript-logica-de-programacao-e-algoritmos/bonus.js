// Bônus 01
const num = 5

function bonus01(num) {
  const squad = Array.from({length: num}, () => '*').join('')
  for (let i = 0; i < num; i++) {
    console.log(squad)
  }
}
bonus01(num)

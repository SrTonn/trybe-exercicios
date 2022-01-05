let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

// Exercícios 01

console.log(`Bem-vinda, ${info.personagem}`)

// Exercícios 02

info.recorrente = 'Sim'
console.log(info)

// Exercícios 03

for (const key in info) {
  console.log(key)
}

// Exercícios 04

for (const key in info) {
  console.log(info[key])
}

// Exercícios 05
// Exercícios 06
// Exercícios 07
// Exercícios 08
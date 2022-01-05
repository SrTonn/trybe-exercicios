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

let info2 = {
  personagem: 'Tio Patinhas',
  origem: 'Christmas on Bear Mountain, Dell’s Four Color Comics #178',
  nota: 'O último MacPatinhas',
  recorrente: 'Sim',
};

for (let properties in info) {
  if (
    properties === 'recorrente' &&
    info[properties] === 'Sim' &&
    info2[properties] === 'Sim'
  ) {
    console.log('Ambos recorrentes');
  } else {
    console.log(info[properties] + ' e ' + info2[properties]);
  }
}

// Exercícios 06
// Exercícios 07
// Exercícios 08
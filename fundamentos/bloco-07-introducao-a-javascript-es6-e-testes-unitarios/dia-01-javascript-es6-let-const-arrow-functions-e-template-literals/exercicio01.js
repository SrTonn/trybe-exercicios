// Parte I
function testingScope(escopo) {
  if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
    console.log(ifScope);
  } else {
    let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
  // console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
}

testingScope(true);

// Parte II
const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// Seu código aqui.
const ordered = arr => arr.sort((a, b) => a - b)

// será necessário alterar essa linha 😉
console.log(`Os números ${ordered(oddsAndEvens)} se encontram ordenados de forma crescente!.`);
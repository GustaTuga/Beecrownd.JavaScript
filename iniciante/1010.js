
//inicio do programa
const [code1, numPieces1, unitValue1] = lines[0].split(" ").map(Number);
const [code2, numPieces2, unitValue2] = lines[1].split(" ").map(Number);

//processamento de dados
const valueTotal = (unitValue1 * numPieces1) + (unitValue2 * numPieces2);

//saida de dados
console.log(`VALOR A PAGAR: R$ ${valueTotal.toFixed(2)}`);
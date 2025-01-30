
//incio do programa
const numeroFuncionario = parseInt(lines[0]);
const horasTrabalhada = parseInt(lines[1]);
const valorHoraTrabalhados = parseFloat(lines[2]);

//processamento de dados
const valorTotal = horasTrabalhada * valorHoraTrabalhados;

//saida de dados
console.log(`NUMBER = ${numeroFuncionario}`);
console.log(`SALARY = U$ ${valorTotal.toFixed(2)}`)
//fim do programa
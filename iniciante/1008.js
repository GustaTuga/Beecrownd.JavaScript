// Usando prompt-sync para interação no terminal. Não copiar se quiser testa no beecrowd
const prompt = require('prompt-sync')();

//caso queira testar no beecrowd, substituir na entrada de dados o "prompt("")" por "lines[numero decorrente da entrada (lembrando o numero da linha n é n-1)]"


//incio do programa
const numeroFuncionario = parseInt(prompt(""));
const horasTrabalhada = parseInt(prompt(""));
const valorHoraTrabalhados = parseFloat(prompt(""));

//processamento de dados
const valorTotal = horasTrabalhada * valorHoraTrabalhados;

//saida de dados
console.log(`NUMBER = ${numeroFuncionario}`);
console.log(`SALARY = U$ ${valorTotal.toFixed(2)}`)
//fim do programa
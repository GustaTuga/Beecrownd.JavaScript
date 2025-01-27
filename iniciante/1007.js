// Usando prompt-sync para interação no terminal. Não copiar se quiser testa no beecrowd
const prompt = require('prompt-sync')();

//caso queira testar no beecrowd, substituir na entrada de dados o "prompt("")" por "lines[numero decorrente da entrada (lembrando o numero da linha n é n-1)]"


//incio do programa
const A = parseInt(prompt(""));
const B = parseInt(prompt(""));
const C = parseInt(prompt(""));
const D = parseInt(prompt(""));

//processamento de dados
const diferenca = (A * B - C * D);

//saida de dados
console.log(`DIFERENCA = ${diferenca}`);
//fim do programa
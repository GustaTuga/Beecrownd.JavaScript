// Usando prompt-sync para interação no terminal. Não copiar se quiser testa no beecrowd
const prompt = require('prompt-sync')();

//caso queira testar no beecrowd, substituir na entrada de dados o "prompt("")" por "lines[numero decorrente da entrada (lembrando o numero da linha n é n-1)]"



//inicio do programa
const A = parseFloat(prompt(""));
const B = parseFloat(prompt(""));
const C = parseFloat(prompt(""));

//processamento de dados
const media = ((A * 2) + (B * 3) + (C * 5)) / 10;

//saida de dados
console.log(`MEDIA = ${media.toFixed(1)}`);
//fim do programa
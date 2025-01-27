// Usando prompt-sync para interação no terminal. Não copiar se quiser testa no beecrowd
const prompt = require('prompt-sync')();

//caso queira testar no beecrowd, substituir na entrada de dados o "prompt("")" por "lines[numero decorrente da entrada (lembrando o numero da linha n é n-1)]"


//inicio do programa
const A = parseFloat(prompt(""));
const B = parseFloat(prompt(""));

//processamento de dados
const media = ((A * 3.5) + (B * 7.5)) / 11;

//saida de dados
console.log(`MEDIA = ${media.toFixed(5)}`)

//fim do programa

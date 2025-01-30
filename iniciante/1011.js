//inicio do programa
const ray = parseFloat(lines[0]);
const pi = 3.14159;

//processamento de dados
const volume = (4 / 3) * pi * (ray**3);

//saida de dados
console.log(`VOLUME = ${volume.toFixed(3)}`);
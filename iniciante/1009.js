
//inicio do programa
const nameProfissional = lines[0];
const salary = parseInt(lines[1]);
const salesTotal = parseFloat(lines[2]);

//processamento de dados
const salaryTotal = (salesTotal * 0.15) + salary;

//saida de dados
console.log(`TOTAL = R$ ${salaryTotal.toFixed(2)}`);
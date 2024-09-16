// 180759,98

// SP = 37,52%
// RJ = 20,29%
// MG = 16,17%
// ES = 15,04%
// Outros = (10,98%)

// armazenar faturamento de cada estado
// calcular o total de faturamento total mensal da distribuidora
// calcular o percentual de faturamento de cada estado baseado no faturamento total
// imprimir o resultado no console

const fatEstados = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
}

const fatTotal = Object.values(fatEstados).reduce((total, value) => total + value, 0);

// function perCalc (value, total) {
//     return ((value / total)*100).toFixed(2);
// }

const calcularPercentual = (value, total) => ((value / total) * 100).toFixed(2);

for (const estado in fatEstados) {
    const percentual = calcularPercentual(fatEstados[estado], fatTotal);
    console.log(`${estado}: ${percentual}%`);
}

console.log(fatTotal);



// //Ler o json dados.json
// //

const json = require('./dados.json');




const jsonObj = json.map(
    json => {
      return {
        dia: json.dia,
        valor:json.valor
      }
    }
  );

const valores = jsonObj
    .map(item => item.valor)
    .filter(valor => valor > 0);

let valorMin = Math.min(...valores);
let valorMax = Math.max(...valores);

const soma = valores.reduce((acc, valor) => acc + valor, 0);
const media = soma / valores.length;

console.log(media);
console.log(valorMax);
console.log(valorMin);


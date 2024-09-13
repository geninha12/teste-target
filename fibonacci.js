// saber calcular a sequencia de fibonacci
// saber até onde vai a sequência de fibonacci
// pegar o valor inserido e ver se está na sequência
// printar se o valor faz parte da sequência ou não


let posicaoA = 0;
let posicaoB = 1;
let valoratual = 0;

function fibonacciSequence(numA) {
    
    while (valoratual < numA ) {

        valoratual = posicaoA + posicaoB;
        posicaoA = posicaoB;
        posicaoB = valoratual;

    }
    if (numA == valoratual) {
        console.log("O número " + numA + " faz parte da sequência de Fibonacci!");
    } else {
        console.log("O número " + numA + " não faz parte da sequência de Fibonacci!");
    }

}

fibonacciSequence(21);

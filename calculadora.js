// Solicita ao usuário a escolha da operação
let escolhaAOperacao = prompt('Você deseja calcular o fatorial ou a tabuada?').toLowerCase();


if (escolhaAOperacao === 'fatorial'){
    calcularFatorial();
} else if (escolhaAOperacao === 'tabuada'){
    calcularTabuada();
} else {
    console.log('Escolha inválida. Por favor, digite "fatorial" ou "tabuada".');
}

// Função para calcular o fatorial
function calcularFatorial() {
    let numero = parseInt(prompt('Escolha um número inteiro positivo'));

    if (isNaN(numero) || numero < 0) {
        console.log('Por favor, digite um número inteiro positivo!')
        return;
    }

    let fatorial = 1;
    for (let i = 1; i <= numero; i++) {
        fatorial *= i;
    }

    console.log(`O fatorial de ${numero} é ${fatorial}`);
}

// Função para calcular a tabuada
function calcularTabuada () {
    let numero = parseInt(prompt('Escolha o número para saber a tabuada'));

    if (isNaN(numero) || numero < 0) {
        console.log('Por favor, digite um número inteiro positivo!')
        return;
    }
    console.log(`Tabuada de ${numero}`);

    for(let tabuada = 1; tabuada <= 10; tabuada++) {
        console.log(`${numero} X ${tabuada} = ${numero * tabuada}`)
    }
}




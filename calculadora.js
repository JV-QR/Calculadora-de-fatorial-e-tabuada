// Função para calcular o fatorial.
function calcularFatorial() {
    //Solicita um número inteiro positivo ao usuário.
    let numero = parseInt(prompt('Escolha um número inteiro positivo'));

    //Verifica se a entrada é um número valido e positivo.
    if (isNaN(numero) || numero < 0) {
        console.log('Por favor, digite um número inteiro positivo!')
        return;
    }

    let fatorial = 1; //Inicializa a variável fatorial.
    //O loop for para calcular o fatorial do número.
    for (let i = 1; i <= numero; i++) {
        fatorial *= i; //multiplica o fatorial pelo número atual.
    }

    console.log(`O fatorial de ${numero} é ${fatorial}`); //Exibe no conole o resultado do cálculo do faotiral.
}

// Função para calcular a tabuada.
function calcularTabuada () {
    //Solicita um número inteiro ao usuário para calcular a tabuada.
    let numero = parseInt(prompt('Escolha o número para saber a tabuada'));

    //verifica se a entrada é um número válido e se ele é positivo.
    if (isNaN(numero) || numero < 0) {
        console.log('Por favor, digite um número inteiro positivo!')
        return; //Encerra a função se a entrada for inválida.
    }
    console.log(`Tabuada de ${numero}`); //Exibi no console o número escolhido.

    //Laço for para calcular a tabuada.
    for(let tabuada = 1; tabuada <= 10; tabuada++) {
        console.log(`${numero} X ${tabuada} = ${numero * tabuada}`) //Exibi no console o resultado da tabuada, e usa o templat sting para executar a operação de múltiplicação dentor do console.
    }
}


//Loop while que permeite múltiplos cálculos.
while (true) {

    // Solicita ao usuário a escolha da operação, e transforma a entrada em letras mínusculas.
    let escolhaAOperacao = prompt('Você deseja calcular o fatorial ou a tabuada? (Digite "sair" para encerrar)').toLowerCase();

    //Verifica se o usuário deseja encerrar a operação.
    if (escolhaAOperacao === 'sair') {
        console.log('Programa encerrado. Até logo!') //Mensagem de encerramento.
        break; //encerra loop;
    } else if (escolhaAOperacao === 'fatorial'){
        calcularFatorial(); //Chama a função para calaular o fatorial.
    } else if (escolhaAOperacao === 'tabuada'){
        calcularTabuada(); //Chama a função para calcular a tabuada.
    } else {
        console.log('Escolha inválida. Por favor, digite "fatorial" ou "tabuada".'); //Mensagem de erro se a entrada for inválida.
    }
}
alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = 15;
let chute
let tentativas = 0

while (chute != numeroSecreto) {
    chute = prompt('Escolha um número entre 1 e 30. Tentativas: ' + tentativas);
    tentativas++

    if (chute == numeroSecreto) {
        alert('Certo, o número é ' + numeroSecreto + ' e você usou ' + tentativas + ' tentativas');
    } else { 
        if (chute < numeroSecreto) {
            alert('O número secreto é maior que ' + chute)
        } else {
            alert('O número secreto é menor que ' + chute)
        }
    }
}
alert('Boas vindas ao jogo do número secreto');
const numeroMax = 1000;
let numeroSecreto = parseInt(Math.random() * numeroMax + 1);
let chute;
let tentativas = 0;

while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 e ${numeroMax}. Tentativas: ${tentativas}`);
    tentativas++
    let quantasTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';

    if (chute == numeroSecreto) {
        alert('Certo, o número é ' + numeroSecreto + ' e você usou ' + tentativas + ' ' + quantasTentativas);
    } 
    else { 
        if (chute < numeroSecreto) {
            alert('O número secreto é maior que ' + chute)
        } 
        else {
            alert('O número secreto é menor que ' + chute)
        }
    }
}
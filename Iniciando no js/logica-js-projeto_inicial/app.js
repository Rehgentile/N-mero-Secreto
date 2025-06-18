alert('Bem vindo ao jogo do número secreto');
let nuemroMaximo = 50;
let numeroSecreto = parseInt(Math.random() * nuemroMaximo + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;

// Equanto chute não for igual ao número secreto
while (chute != numeroSecreto){
    chute = prompt(`Escolha um número entre 1 e ${nuemroMaximo}`);
    // Se chute for igual ao número secreto
    if (chute == numeroSecreto) {
       break
    } else {
        if (chute > numeroSecreto){
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
        // tentativas = tentativas + 1;
        tentativas ++;
    } 
}
let palavraTentaiva = tentativas == 1 ? 'Tentativa' : 'Tentativas';
alert(`Isso ai! Você descobriu o numero secreto ${numeroSecreto} com ${tentativas} ${palavraTentaiva}`);

// if (tentativas == 1){
//      alert(`Isso ai! Você descobriu o numero secreto ${numeroSecreto} com ${tentativas} tentativa!`);
// } else{
//      alert(`Isso ai! Você descobriu o numero secreto ${numeroSecreto} com ${tentativas} tentativas!`);
// }
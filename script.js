let nome;
nome = prompt("Digite o seu nome:");
console.log(nome);
window.alert(`Olá ${nome}!`);
let numero = Number.parseInt(Math.random()*10+ 1);
let numeroTentativas = 0;
let tentativas = [];
let palpite = 0;

while((palpite != numero) && (numeroTentativas < 5)){
    palpite = prompt("Digite um número: ");
    numeroTentativas++;
    tentativas.push(palpite);
    if(palpite > numero){
        window.alert(`Você errou! O número é menor que ${palpite}. Tente outra vez.`);
    } else {
        if(palpite < numero){
            window.alert(`Você errou! O número é maior que ${palpite}. Tente outra vez.`)
        }
    }
}

if(numero == palpite) {
    let palavraTentativa;
    palavraTentativa = numeroTentativas==1 ? "tentativa" : "tentativas"
    //if(tentativas == 1)
         //palavraTentativa = "tentativa";
    //else 
       //palavraTentativa = "tentativas";
    window.alert(`Parabéns ${nome}! 
O número era ${numero}, e você acertou com ${numeroTentativas} ${palavraTentativa}!!`);
} else {
    window.alert(`Você esgotou suas tentativas e não acertou! O número era ${numero}.`);
}

for (let index = 0; index < tentativas.length; index++) {
    console.log(`Tentativa ${index+1}: ${tentativas[index]}`);
}

let numeroAleatorio = Math.random();
numeroAleatorio = (numeroAleatorio * 10) + 1;
numeroAleatorio = Number.parseInt
(numeroAleatorio);
console.log(numeroAleatorio);

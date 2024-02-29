let numero1 = 5;
let numero2 = 20;
let pi = Math.PI;

console.log(pi);
console.log(`A área do círculo é ${areaCirculo(numero1)}cm²`);

function areaCirculo(raio = 1){
    console.log(raio);
    //console.log(`A área é ${area}cm²`);
    console.log("Função areaCirculo - Função declarada por bloco")
    return Math.PI * (raio ** 2);;
}


const areaQuadrado = function (lado) {
    console.log ("Função areaQuadrado - Função declarada por expressão")
    return lado**2;
}

console.log(`A área do quadrado é ${areaQuadrado(numero2)}cm²`)

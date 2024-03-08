//Declaração de função tradicional (bloco)
function areaQuadrado(lado){
    console.log("Quadrado - Função declarada por bloco")
    return lado**2;
}
let y = areaQuadrado(2);
console.log(`A área do quadrado é ${y}cm²`);

//Declaração de função anônima por expressão / atribuição
const areaCirculo = function (raio) {
    console.log("Circulo - Função declarada por expressão");
    return Math.PI * (raio ** 2);
}
let x = areaCirculo(5);
console.log(`A área do círculo é ${x}cm²`);


//Declaração de 'Arrow Function' (função seta)
const areaTriangulo = (base, altura) => (base*altura)/2;
console.log("Triangulo - Função declarada por Arrow Function");

let z = areaTriangulo(5, 4);
console.log(`A área do triangulo é ${z}cm²`);

const volume = (lado) => (lado ** 3);
console.log("Volume Cubo - Função declarada por Arrow Function");

let i = volume(3);
console.log(`O volume do cubo é ${i}`);



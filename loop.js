let contador = 0;
let parada = false;

//loop usando WHILE
while(parada){
    console.log(`Loop While - ${contador}`);
    contador++;

}
contador = 0;

//loop usando DO - WHILE
do {
    console.log(`Loop Do - ${contador}`);
    contador++
} while(parada);
contador = 0;

//loop usando FOR
for(contador = 0; contador < 10; contador++){
    console.log(`Loop For  - ${contador}`);
}
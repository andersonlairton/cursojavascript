/**funções sao definidas con function */
/*
function imprimirConsoleLog() {
    //esta é uma função sem parametros
    console.log("ola mundo das funções");
}
//chamando uma função sem parametros
imprimirConsoleLog();

function imprimirnumero(num) {
    //esta é uma função com parametro que foi inserido pelo usuario
    console.log(`o numero inserido na função foi ${num}`);
}

imprimirnumero(prompt("digite um numero"));//nesse caso,chamei um prompt para que o usuario entrasse com um valor 
*/

/** escopo de funções */
/**escopo pode ser definido(alterando o valor de uma variavel) dentro de um if,usando apenas let e const */
/*
let y = 10;

function imprimir() {
    let y = 150;//em escopos diferentes,se pode definir duas variaveis com mesmo nome,neste caso(escopo),y pega o valor de 150
    console.log(y);
}

console.log(y);
imprimir();
*/
//escopo aninhado -diferentes escopos ,dentro de um mesmo escopo
/*
let a =10;//escopo global

function multiplicar(x,y) {
    let a = x*y;
    //sem o let a variavel é tratada como se estivesse em escopo global 
    if (a>10) {
        let a = 0;//sem o let,ele trata a variavel como se ela estivesse em escopo da função
        a++//incrementa o valor 
        console.log(a);
    }
    console.log(a);
}


multiplicar(a,2);
console.log(a);

*/
/**arrow functions,utilizadas mais em frames,é uma forma mais sucinta de escrever funções */
//basicamente,a arrow function nao precisa que seja escrita a palavra function
/*
let consoleText = ()=>{
    //assim como uma função tradicional,tambem pode ser definida sem a necessidade de passar um parametro 
    console.log("arrow function");
}

consoleText();//sempre chamando a função 

let soma =(a,b)=>{
    return a+b;//retorna o valor da soma de a e b
}

console.log(soma(10,20));
*/
//tambem pode ser feita dessa forma:
/*
const multiplicarPorDois = x => x*2;
console.log(multiplicarPorDois(prompt('Digite o numero que sera multiplicado por 2')));
*/

/** argumentos adicionais na função */
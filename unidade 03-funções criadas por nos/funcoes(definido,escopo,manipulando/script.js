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

/** argumentos adicionais na função,é um tratamento caso o usuario nao insira determinado parameto  */
/*
function soma(a,b) {
    if (a===undefined|| b===undefined) {
        console.log("esta função necessita ter dois argumentos");
       
    }else{
        return a+b;
    }
    
}
console.log(soma(2,1));
console.log(soma(2));
*/

//argumento default é quando se pre-define um valor para determinado parametro,para que caso nao seja inserido , ele assuma este valor 

/*
function potencia(base,exp=2) {
    //caso nao seja inserido valor,o paramentro sera elavado ao quadrado 
    
    //!base,neste caso,verifica se a variavel é nula
    if(base===undefined || !base || (!base && !exp)){
        alert("favor informar o valor da base");
    }else if(!exp){
        alert("o valor sera elevado ao quadrado");
        exp=2;
        return alert(`o valor do numero é ${Math.pow(base,exp)}`);
    }else{
        return alert(`o valor do numero é ${Math.pow(base,exp)}`);
    }
}

potencia(prompt("digite o valor da base"),prompt("digite o valor do exponte"));
*/
//closure é uma função que retorna outra função
/*
function lembrarsoma(x) {
    return function (y) {
        return x+y;
    }
}

let soma1 = lembrarsoma(2);//deve ser sempre atribuida a uma variavel
console.log(soma1(3));

//nessa função foi feita um contador 
function contador(i) {
    let cont =i;
    let somarContador = function(){
        console.log(cont);
        cont++
    }
    return somarContador;
}

let cont = contador(1);
//imprimindo o valor com um for 
for (a = 0; a < 10; a++) {
   cont();
}
*/
//função recursion
//é um metodo das funções,que acontece quando podemos chamar ela diversas vezes,no exemplo do curso,ele chamou dentro da propria função 
function recursao(n){
    //esta função se autoinvoca e so para quando o numero é menor que 2
    if (n-1 <2) {
        console.log("recursao parou ");
    }else if(n%2!=0){
        console.log("numero impar"+n);
        recursao(n-1);
    }else{
        console.log("numero par"+n);
        recursao(n-2);
    }
}

recursao(39)
recursao(10)
recursao(100);
// //DECLARARAÇÕES E VARIAVEIS

// var nome ="fiap";
// console.log(nome);

// let idade = 19;
// console.log(idade)

// const sobrenome="Fiapinho";
// console.log(sobrenome)

// //declarando uma variavel indefinida
// let nome1;
// console.log(nome1)

// //declarando uma variavel nula
// let nome2=null;
// console.log(nome2)

// //TIPOS DE VARIAVEIS

// let exemplo1 =10;
// console.log(typeof exemplo1)

// let exemplo2 ="Tecnologia";
// console.log(typeof exemplo2)

// let exemplo3 =true;
// console.log(typeof exemplo3)

// let exemplo4={};
// console.log(typeof exemplo4)

// let exemplo5 =[];
// console.log(typeof exemplo5)


//CONVERSÕES

//FLOAT => STRING

// let numFloat =123.456;
// console.log(numFloat.toString())

// //STRING => FLOAT
// let numString ="12.963";
// console.log(parseFloat(numString))

// //INT => STRING
// let numInt =100;
// console.log(numInt.toString())

// //STRING => INT

// let numString1 ="120";
// console.log(parseInt(numString1))

//METODOS

//METODO length - VERIFICA O TAMNHO DA STRING

// let frase ="O mundo da Tecnologia";
// console.log(frase.length)

// //METODO Indeof/lastIndexOf-RETORNA UM TRECHO DO SEU CODIGO

// let texto ="Programação Sustentável ão";
// console.log(texto.lastIndexOf("ão"))

// //METODO slice - RETORNA PARTE DE UM TEXTO PASSANDO INICIO E O FINAL
// let info ="Programação de ponta";
// console.log(info.slice(14,20))

//OPERADORES ARITMÉTICOS

// const a=10;
// const b=20;

// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);

//OPERADORES LÓGICOS

// const c=20;
// const d=30;

// console.log(c > d);
// console.log(c < d && c < 10);
// console.log(c > d || d > c);
// console.log(c == d || d <= c )

//OPERADORES DE COMPARAÇÃO
// let e="10";
// let f="10";

// console.log( e == f);
// console.log( e === f);
// console.log( e != f);


//CONDICIONAL 
if(true){
    console.log("é verdadeiro")
}

let valor = 1
if (valor == 1){
    console.log(valor)
}
//if e else

let nome = fiap
if(nome == "fiap"){
    console.log("nome está correto")

}
else{
    console.log("nome está errado")
}
//If encadeado ou aninhado

let idade =13;
if(idade <=14){
    console.log("Não pode entrar é menor")
}
else if(idade >14 && idade <=18){
    console.log("Pode entrar e curtir")
}
else if(idade >18 && idade <=50){
    console.log("Carro Bicho")
}
//switch case

let time ="Palmeiras";

switch(time){
    case "Palmeiras":
    console.log("Melhor time")
    break;
case "São Paulo":
    console.log("Bambe")
    break;
    case "corinthians":
    console.log("Time de ladão")
    break
    default:
        console.log("Time irrelevante (santos")
}

//Ternario

let valor1=100;
let resultado = valor1 ==100 ? "valor certo": "valor errado";
console.log(resultado)


//Estrutura de repetição
for(let i=0; i<10;i++){
    console.log("o valor de i é", i)
}

let f=0

while(f <10){
    console.log("o valor de f é",f)
    f++;
}

//do while

let w=0;

do{
    console.log("do while",w)
    w++
}while(w <=20)


//Jogo de Adivinhação

let palpite;
const sorteio = Math.floor(Math.random() * 10)+1;


do{
    palpite =parseInt(prompt("Escolha um número entre 1 e 10"))
}while(palpite !== sorteio)

    alert(`Parabéns você ganhou o jogo ${palpite}`)

//Funções

function saudacao(nome){
    console.log(`Seja Bem-Vindo ${nome}`)
    console.log("Seja bem vindo", nome)
}
saudacao ("FIAP")


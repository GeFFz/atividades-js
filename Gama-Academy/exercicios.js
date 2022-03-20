// /* 1- Crie uma variável chamada nomeCompleto e atribua a ela o seu nome,
// após isso, imprima o valor no console utilizando a função
// console.log(nomeCompleto)*/
// var nomeCompleto = "Gefferson Oliveira";
// console.log(nomeCompleto);

// /* 2- Você irá criar duas variáveis chamadas numeroA e numeroB atribuindo
// valores numéricos para ambas. Após isso crie uma terceira variável
// chamada resultado atribuindo a multiplicação das duas variáveis
// anteriores e imprima o valor do resultado no console*/
// var numeroA = 15;
// var numeroB = 10;
// var resultado = numeroA*numeroB;
// console.log(numeroA,"x",numeroB,"=", resultado)

// /* 3- Você deverá criar uma função chamada saudacao que ao executá-la
// deverá imprimir no console a seguinte mensagem: “Oi eu sou o Goku!”*/
// function saudacao(){
//     console.log("Oi, eu sou o Goku");
//     console.log("PS: Se você leu com a frase com a voz do Goku na cabeça, sua infância valeu a pena!");
// }
// saudacao();

// /* 4- Crie uma função chamada multiplica que recebe dois parâmetros numéricos. 
// Ela deverá exibir a multiplicação desses dois parâmetros no console*/
// function multiplica(num1, num2){
//     console.log(num1,"x",num2, "=", (num1*num2));
// }
// multiplica(2,10);

// /* 5- Crie uma função chamada podeDirigir que receba como parâmetro da
// idade em formato número, e exiba no console “Você pode dirigir” caso o
// valor seja maior ou igual a 18. Caso contrário irá exibir “Você não pode
// dirigir”*/
// function podeDirigir(idade){
//     if(idade>=18){
//         console.log("Com",idade,"anos, você pode dirigir");
//     }
//     else{
//         console.log("Com",idade,"anos, você NÃO pode dirigir");
//     }
// }
// podeDirigir(18);

// /* 6- Você deve criar um loop usando o for, que exibe no console a 
// sequência de números do 0 ao 20.*/

// for(var cont =0;cont<=20;cont++){
//     console.log(cont);
// }

// /* 7- Você deve criar um loop usando o for, que exibe no console 
// apenas os números ímpares da sequência de números do 0 ao 20.*/
// for(var cont =0;cont<=20;cont++){ 
//     if(cont%2){ //Custo operacional maior doq usar cont+=2
//         console.log(cont,"Impar");
//     }
//     else{
//         //console.log(cont,"Par");
//     }
// }

// /* 8- Crie uma função chamada tabuada que irá receber um número inteiro
// como parâmetro e exibir no console a tabuada desse número 1 ao 10.*/
// function tabuada(num){
//     console.log("Tabuada do",num);
//     for(cont=1 ; cont<=10; cont++)
//        console.log(num , " x ", cont, "  =", cont*num);    
//    }
// tabuada(7);

/* 9- Crie uma função chamada converterEmHoras que receba um número em
minutos como parâmetro e irá exibir a quantidade em horas.*/
function converterEmHoras(minutos) {
    if ((minutos / 60) >= 2) {
        if (minutos % 60) {
            console.log(minutos, "minutos equivale a", Math.floor(minutos / 60), "horas e", (minutos % 60), "minutos  OU ", (minutos / 60).toFixed(2), "horas");
        } else {
            console.log(minutos, "minutos equivale a", (minutos / 60), "horas");
        }

    } else {
        if (minutos % 60) {
            console.log(minutos, "minutos equivale a", Math.floor(minutos / 60), "hora e", (minutos % 60), "minutos  OU ", (minutos / 60).toFixed(2), "hora");
        } else {
            console.log(minutos, "minutos equivale a", (minutos / 60), "hora");
        }
    }
}
converterEmHoras(505);
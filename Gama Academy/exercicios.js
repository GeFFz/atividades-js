// 1-
var nomeCompleto = "Gefferson Oliveira";
console.log(nomeCompleto); 

// 2-
var numeroA = 15;
var numeroB = 10;
var resultado = numeroA*numeroB;
console.log(resultado)

// 3-
function saudacao(){
    console.log("Oi, eu sou o Goku");
}
saudacao();

// 4-
function multiplica(num1, num2){
    console.log(num1*num2);
}
multiplica(2,10);

// 5-
function podeDirigir(idade){
    if(idade>=18){
        console.log("Você pode dirigir");
    }
    else{
        console.log("Você NÃO pode dirigir");
    }
}
podeDirigir(17);

// 6-
for(var contador =0;contador<=20;contador++){
    console.log(contador);
}

// 7-
for(var contador =0;contador<=20;contador++){
    if(contador%2){
        console.log(contador);
    }
}

// 8-
function tabuada(numero){
    console.log(numero*1)
    console.log(numero*2)
    console.log(numero*3)
    console.log(numero*4)
    console.log(numero*5)
    console.log(numero*6)
    console.log(numero*7)
    console.log(numero*8)
    console.log(numero*9)
}
tabuada(2);

// 9-
function converterEmHoras(minutos){
    console.log(minutos,"equivale em horas a:", minutos/60);
}
converterEmHoras(30);
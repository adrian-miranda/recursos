// 'use strict'

// var saludosHumanos = "En este archivo iran las herramientas logicas que desarrolle a lo largo del tiempo";

// function saludando(x){
//     x = saludosHumanos;
//     return x;
// }

// var saludoRecepcionado = saludando();
// console.log(saludoRecepcionado);

function suma(){
    var sum = 0;
    for(var i = 0 ; i <= 1000 ; i++){
        sum = i++;
        console.log(i);
    }
    return sum;
}

suma();

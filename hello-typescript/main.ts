var minharVar = 'minha variavel';

function minhaFunc(x,y){
    return x+y;
}

//ES6 ou ES2015
let num =2 ;
const pi = 3.14;

var numeros = [1,2,3];
numeros.map(function(valor) { return valor * 2; });
numeros.map(f => f * 2);

class Matematica{ 
    soma (x,y){
        return x+y;
    }
}

var n1:string = 'valor string';
n1 = '123';

var n2:any = 'valor string';
n2 = 123;
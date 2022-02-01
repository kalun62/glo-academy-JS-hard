'use strict';

let argument = '1465d;fllsdf;s;amsd;fanvkedfwlafnshbrkjwefbahwfbavwaherbfa4'

const lesson04 = function(arg){
    let type = typeof arg;
    let cleanArg = arg.trim();

    if(type !== 'string'){
       alert('Введите буквы') 
    }

    if(cleanArg.length >= 30){
        return arg = cleanArg.slice(0, 30) + cleanArg.substr(31).replace(cleanArg.substr(31), '...')     
    }else{
        return arg = cleanArg
    }

}

argument = lesson04(argument)

console.log(argument)
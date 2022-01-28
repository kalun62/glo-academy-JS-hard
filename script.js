let num = 266219;

num = num.toString().split('');

let multyply = +num[0];

for(let i = 1; i < num.length; i++){
    multyply *= + num[i];
}

num = multyply ** 3;

console.log(num.toString().substring(0, 2));
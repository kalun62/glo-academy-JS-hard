let num = 266219;

num = num.toString().split('');

let multyply = +num[0];

for(let i = 1; i < num.length; i++){
    multyply *= + num[i];
}

num = multyply ** 3;

console.log(num.toString().substring(0, 2));

//lesson 3-1

let lang = 'en';

let rusWeek = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
let engWeek = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];
let rusEngWeeks = [
    ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
    ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su']
];

if(lang == 'ru'){
    console.log(rusWeek);
}else{
    console.log(engWeek);
}

switch (lang){
    case 'ru':
        console.log(rusWeek);
        break;
    case 'en':
        console.log(engWeek);
        break;
}

lang == 'ru'? console.log(rusEngWeeks[0]) : console.log(rusEngWeeks[1]);

//lesson 3-2

let namePerson = "Артем";

namePerson == "Артем"? console.log('Директор') : namePerson == "Александр"? console.log('преподаватель') : console.log('студент');
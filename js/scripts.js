document.write('---- 1 задание ---- \n');

for (let i = 1; i <=50; i++) {
    document.write(i + ' ');
}

document.write('\n');

for (i = 35; i >=8; i--) {
    document.write(i + ' ');
}


document.write('\n\n---- 2 задание ---- \n');

let a = 89;

while (a >= 11) {
    document.write(a + '<br>');
    a--;
}


document.write('\n---- 3 задание ---- \n');

let sum = 0;

for (i = 0; i <=100; i++) {
    sum += i;
}

document.write('Сумма чисел от 0 до 100: ' + sum);


document.write('\n\n---- 4 задание ----');

for (i = 1; i <= 5; i++) {

    sum = 0;

    for (j = 1; j <= i; j++) {
        sum += j;
    }

    document.write('\nСумма чисел ' + i + ': ' + sum);
}

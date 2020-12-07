document.write('---- 1 задание ---- \n');

for (let i = 1; i <= 50; i++) {
    document.write(i + ' ');
}

document.write('\n');

for (i = 35; i >= 8; i--) {
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

for (i = 0; i <= 100; i++) {
    sum += i;
}

document.write('Сумма чисел от 0 до 100: ' + sum);


document.write('\n\n---- 4 задание ----');

for (i = 1; i <= 5; i++) {
    sum = 0;
    for (let j = 1; j <= i; j++) {
        sum += j;
    }
    document.write('<br>' + 'Сумма чисел ' + i + ': ' + sum);
}


document.write('\n\n---- 5 задание ---- \n');

document.write('Чётные числа от 8 до 56: \n');

document.write('for\n');

for (i = 8; i <= 56; i++) {
    if (i % 2 == 0) document.write(i + ' ');
}

document.write('\nwhile\n');

i = 8;

while (i <= 56) {
    if (i % 2 == 0) document.write(i + ' ');
    i++;
}


document.write('\n\n---- 6 задание ---- \n');

for (i = 2; i <= 10; i++) {
    for (j = 1; j <= 10; j++) {
        document.write(i + '*' + j + ' = ' + i * j + '<br>');
    }
}


console.log('---- 7 задание ----');

let n = 1000,
    num;

for (num = 1; ; num++) {
    n /= 2;
    if ( n / 2 <= 50) break;
}

console.log(n);
console.log('Количество итераций: ' + num);


//---- 8 задание ----

let str;

sum = 0;

for (i = 1; ; i++) {
    str = prompt('8 задание. Введите число:');
    sum += Number(str);
    if (str == 0 || str == null) {
        break;
    } else if (isNaN(str)) {
        alert('Ошибка, введите число.');
        break;
    }
}

if (!isNaN(str)) {
    alert('Сумма введённых чисел ' + sum);
    alert('Среднее арифметическое введённых чисел ' + sum / (i - 1));
}


console.log('---- 9 задание ----');

let s = '4 98 4 6 1 32 4 65 4 3 5 7 89 7 10 1 36 8 57',
    arr = s.split(' '),
    max = arr[0], 
    min = arr[0];

console.log(arr);

for (i = 0; i <= arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];   
    } else if (arr[i] < min) {
        min = arr[i];   
    }
}

console.log('Максимальное значение: ' + max);
console.log('Минимальное значение: ' + min);


//---- 10 задание ----

let p = '';

n = prompt('10 задание. Введите число:');

sum = 0;

if (isFinite(n)) {
    alert(n.split(''));
    alert('Количество цифр: ' + n.length);
    while (n > 0) { 
        sum += n % 10;  
        p += n % 10;
        n = Math.floor(n / 10);
    }
    alert('Сумма цифр: ' + sum);
    alert('Обратный порядок цифр: ' + p);
} else {
    alert('Ошибка, введите число.');
}
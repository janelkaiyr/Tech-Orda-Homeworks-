
/*1. Дано трехзначное число. Вывести число, полученное при перестановке цифр
сотен и десятков исходного числа (например, 123 перейдет в 213) */
/*
var abc = 123
var c = abc % 10
var b = (abc % 100 - c) / 10
var a = (abc - abc % 100) / 100

console.log(`${b}${a}${c}`)
*/

/*2. Даны две переменные целого типа: A и B. Если их значения не равны, то
присвоить каждой переменной сумму этих значений, а если равны, то
присвоить переменным нулевые значения. Вывести новые значения
переменных A и B. */
/*
var A = 5;
var B = 5;
var sum = A + B;
if (A != B) {
    A = sum;
    B = sum;
} else {
    A = 0;
    B = 0;
}
console.log(A, B)
*/

/*3. Дан номер года (положительное целое число). Определить количество дней в
этом году, учитывая, что обычный год насчитывает 365 дней, а високосный — 
366 дней. Високосным считается год, делящийся на 4, за исключением тех
годов, которые делятся на 100 и не делятся на 400 (например, годы 300, 1300 и
1900 не являются високосными, а 1200 и 2000 — являются). */
/*
var year = 2000;
if (year % 4 == 0) {
    if (year % 100 == 0 && year % 400 != 0) {
        console.log(`В ${year} году 365 дней `)
    }
    else console.log(`В ${year} году 366 дней `)
}
else console.log(`В ${year} году 365 дней `)
*/

/*4. Дано целое число N (> 0). Найти квадрат данного числа, используя для его
вычисления следующую формулу: N^2= 1+3+5+...+(2N-1)
Вывести результат */
/*
var N = 11;
var NN = 0;
for (var i = 1; i <= (2 * N) - 1; i += 2) {
    NN += i;
}
console.log(`квадрат числа ${N} = ${NN}`)
*/

/*5. Даны целые положительные числа N и K. Найти сумму : 1^K+2^K...+N^K  */
/*
var N = 5;
var K = 2;
var sum = 0;
for (var i = 1; i <= N; i++) {
    sum += i ** K;
    console.log(sum);
}
console.log(`sum = ${sum}`)
*/

/*6. Дан массив A размера N. Найти минимальный элемент из его элементов с
четными номерами: A2, A4, A6, . . . .*/
/*
var A = [5, 5, 8, 3, 2, 9, 8, 7, 11, 2, 5, 0, 8, 55, 5, 85, 26, 8, 52, 5, 52, 2];
var N = A.length;
var min = A[1];
for (var i = 1; i < N; i += 2) {
    if (min > A[i]) min = A[i]
}
console.log(`минимальный элемент из элементов массива А с
четными номерами: ${min}`)
*/

/*7. Дан массив размера N. Найти два соседних элемента, сумма которых
максимальна, и вывести эти элементы в порядке возрастания их индексов */
/*
var array = [77, 7, 111, 1, 11, 8, 5, 4];
var N = array.length;
var sum, max = array[0] + array[2];
var array2 = [];
var index = 0;
for (var i = 1; i < N - 1; i++) {
    sum = array[i - 1] + array[i + 1]
    if (sum >= max) {
        max = sum;
        index = i;
    }
}
array2.push(array[index - 1], array[index], array[index + 1])
console.log(max, array2)
*/

/*8. Дан массив размера N. Осуществить циклический сдвиг элементов массива
вправо на одну позицию (при этом A1 перейдет в A2, A2 — в A3, . . ., AN — в
A1). */
/*
var array = [77, 7, 111, 1, 11, 8, 5, 4];
var N = array.length;
var arr = array[0];
for (var i = 1; i < N; i++) {
    array[i - 1] = array[i];
    array[i] = arr;
}
console.log(array)
*/

/*9. Дан массив размера N, все элементы которого, кроме первого, упорядочены
по возрастанию. Сделать массив упорядоченным, переместив первый элемент
на новую позицию */
/*
var array = [15, 7, 8, 9, 11, 18, 25, 42];
var N = array.length;
var arr = array[0];
for (var i = 1; i < N; i++) {
    if (arr > array[i]) {
        array[i - 1] = array[i];
        array[i] = arr;
    }
    else break;
}
console.log(array)
*/

/*10. Дан массив размера N. Перед каждым положительным элементом массива
вставить элемент с нулевым значением.*/
/*
var array = [15, 7, -8, 9, 11, -18, -25, 42];
var N = array.length;

for (var i = 0; i < array.length; i++) {
    if (array[i] > 0) {
        array.splice(i, 0,null);
        i++;
    }
}
console.log(array);
*/
/*11.Дана строка, содержащая по крайней мере один символ пробела. Вывести
подстроку, расположенную между первым и вторым пробелом исходной строки. 
Если строка содержит только один пробел, то вывести пустую строку*/
/*
var str = " dfkghdzfg";
var count = 0;

for (var i = 0; i < str.length; i++) {
    if (str[i] == " ") {
        count++
        if (count == 1) {
            var first = i;
        }
        else if (count == 2) {
            var second = i;
        }
    }
}
if (count == 1) {
    console.log(console.log(""))
}
else { console.log(str.substring(first, second)) }
*/
/*12.Дана строка, состоящая из русских слов, разделенных пробелами (одним или
несколькими). Найти длину самого короткого слова. */
/*
var str = "dfkghdzfg fjghfg fjkg fj skdjgh KSDg";
var count = 0;
str = str.split(" ");
var min = str[0].length;

for (var i = 0; i < str.length; i++) {
    if (min > str[i].length) {
        min = str[i].length;
    }
}
console.log(`Длина самого короткого слова ${min}`)
*/
/*13.Дана строка, изображающая арифметическое выражение вида
«<цифра>±<цифра>±. . .±<цифра>», где на месте знака операции «±» находится
символ «+» или «−» (например, «4+7−2−8»). Вывести значение данного
выражения (целое число). */
/*
var str = `4+7-2+2+1`
str = str.split("+")
var summa = 0;
var sum = [];

for (var i = 0; i < str.length; i++) {

    if (str[i].indexOf('-') != -1) {

        var str2 = str[i].split("-");
        var sub = Number(str2[0]);
        for (var j = 1; j < str2.length; j++) {
            str2[j] = Number(str2[j]);
            sub = sub - str2[i]
        }
        sum.push(sub);
        str2 = [];

    }
    else {
        str[i] = Number(str[i]);
        sum.push(str[i]);
    }

}
for (var i = 0; i < str.length; i++) {
    sum[i] = Number(sum[i]);
    summa = summa + sum[i];
}
console.log(summa)
*/
/*
14. Напишите программу на JavaScript для удаления повторяющихся элементов
из массива (игнорируйте регистр).*/
/*
var array = [1, 2, 2, 3, 5, 8, 7];

var N = array.length;
var result = [];
for (var i = 0; i < N; i++) {
    let arr = array[i];
    if (result.indexOf(arr) === -1)
        result.push(arr);
}


console.log(result);
*/

/*15. Вычислить стоимость покупки с учетом скидки. Скидка 5% 
предоставляется, если сумма покупки превышает 500 гривен и 10%, если
больше 1000 гривен. */
/*
var discount;
var price;
var sum = 499;

if (sum >= 500 && sum < 1000) discount = 5;
else if (sum >= 1000) discount = 10;
else discount = 0;
price = sum - ((sum * discount) / 100)
console.log(price);
*/
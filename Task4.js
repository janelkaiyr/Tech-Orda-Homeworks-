/*1.Напишите функцию, принимающую строку и число. Поверните в виде
массива только слова, длина которых превышает число.
Решить с помощью методов, циклы не использовать */
/*
let str = "Hi! My name is Zhanel. I like to solve problems";
let number = 3;

function func(str, number) {
    str = str.split(" ");
    let str2 = str.filter(word => word.length > number);
    return str2;
}
console.log(func(str, number));
*/

/*2.Напишите функцию, которая возвращает true, если первый переданный
аргумент (строка) заканчивается вторым аргументом (также строкой).
Пример:
solution('abc', 'bc') => true
solution('abc', 'd') => false
Решить с помощью методов, циклы не использовать*/
/*
function solution(string, target) {
    string = string.split("")
    target = target.split("")
    let newstring = string.filter((letter, index, array) => index >= array.length - target.length);
    var isEqual = newstring.toString() === target.toString()
    return isEqual
}

console.log(solution('abc', 'b'))
console.log("abc".endsWith("b")); */

/*3.Напишите функцию, которая получает массив целых чисел и возвращает
массив средних значений каждого целого числа и последователя, если он есть.
Пример:
averages([2, -2, 2, -2, 2]), [0, 0, 0, 0]
averages([1, 3, 5, 1, -10]), [2, 4, 3, -4.5]
Решить с помощью методов, циклы не использовать */
/*
function averages(array) {
    let average = array.map((number, index, array) => (number + array[index + 1]) / 2)
    average.pop()
    return average
}
console.log(averages([1, 3, 5, 1, -10]))*/

/*4.Создайте функцию, которая принимает строку и возвращает количество
(количество) гласных, содержащихся в ней.
Пример:
countVowels("Celebration") ➞ 5
countVowels("Palm") ➞ 1 */
/*
function countVowels(str) {
    let count = str.match(/[aeiou]/gi).length;
    return count;
}
console.log(countVowels("Celebration"))*/

/*5.Напишите функцию, чтобы получить копию объекта, где ключи стали
значениями, а ключи.
Вход - {red: "#FF0000", green: "#00FF00", white: "#FFFFFF"}
выход - {«#FF0000":"red","#00FF00":"green","#FFFFFF":"white"} */
/*
function func(obj) {

    let newobject = Object.keys(obj).map(key => [obj[key], key])
    newobject = Object.fromEntries(newobject);
    return newobject
}
console.log(func({ red: "#FF0000", green: "#00FF00", white: "#FFFFFF" }))

*/
/*6.Ивана Иванова обокрали. Но его вещи были застрахованы на определенную
сумму. Учитывая украденные вещи и ограничения страховки, верните разницу
между общей стоимостью этих вещей и пределом политики.
Пример:
calculateDifference({ "baseball bat": 20 }, 5) ➞ 15
calculateDifference({ skate: 10, painting: 20 }, 19) ➞ 11
calculateDifference({ skate: 200, painting: 200, shoes: 1 }, 400) ➞ 1 */
/*
function calculateDifference(thing, insurance) {
    let total = Object.values(thing).reduce((sum, value) => value + sum, 0)
    let result = total - insurance
    if (result >= 0) return result
    else {
        result = Math.abs(result)
        return `Страховка покрывает больше чем стоят украденные вещи на ${result}`
    }
}
console.log(calculateDifference({ skate: 200, painting: 200, shoes: 1 }, 400))
*/
/*7.Напишите функцию, которая поверхностно сравнивает два объекта. 
Ожидаемый результат: True если объекты идентичны, false если объекты разные */
/*
function isEqual(obj1, obj2) {

    if (Object.keys(obj1).length != Object.keys(obj2).length) return false;

    for (let key in obj1) {

        if (!obj2.hasOwnProperty(key)) return false;
        if (obj1[key].valueOf() !== obj2[key].valueOf()) return false
    }
    return true;
}

let user1 = {
    name: "Zhanel",
    age: 123
}
let user2 = {
    name: "Zhanel",
    age: 123
}

console.log(isEqual(user1, user2))*/

/*8.Создать класс Tiles (кафель), который будет содержать поля с открытым
доступом: brand, size_h, size_w, price и метод класса getData(). В главной
функции объявить пару объектов класса и внести данные в поля. Затем
отобразить их, вызвав метод getData(). */
/*
class Tiles {
    constructor(brand, size_h, size_w, price) {
        this.brand = brand,
            this.size_h = size_h,
            this.size_w = size_w,
            this.price = price
    }
    getData() {
        console.log(`The brand of this tiles is ${this.brand}, 
        height: ${this.size_h},
        width:${this.size_w},
        price:${this.price}`)

    }
}
let tiles1 = new Tiles("Cersanit", 20, 20, 500);
let tiles2 = new Tiles("Estima", 42, 42, 1000);
let tiles3 = new Tiles("Vitra", 30, 30, 800);
tiles1.getData();
tiles2.getData()
*/
/*9.Создать класс "Person" со свойствами "name" и "age". Добавить метод
"sayHello", который будет выводить в консоль сообщение вида "Привет, меня
зовут Имя, мне Возраст лет". Добавить свойство "hobbies" - массив с хобби. 
Добавить метод "addHobby", который будет добавлять новое хобби в массив
«hobbies». Создать класс «child», который наследует все свойства и методы
класса Person». Добавить произвольные свойства и методы. Учесть, что
некоторые методы и свойства могут быть приватными или защищенными. */
/*
class Person {

    constructor(name, age, hobbies) {
        this.name = name,
            this.age = age,
            this.hobbies = [hobbies]
    }
    sayHello() {
        console.log(`Привет, меня зовут ${this.name}, мне ${this.age} лет`)
    }
    addHobby(hobby) {
        this.hobbies.push(hobby)
    }
}
class Child extends Person {
    constructor(name, age, hobbies, sex) {
        super(name, age, hobbies);
        this.sex = sex
    }

    sayHello() {
        super.sayHello();

    }

}
let person1 = new Person("Zhanel", 123, "dance")
console.log(person1)
person1.sayHello()
person1.addHobby("reading books")
console.log(person1)

*/
/*10.Создать класс "Shape" со свойством "color". Добавить метод "getColor", 
который будет возвращать цвет фигуры. Создать класс "Rectangle", который
наследуется от класса "Shape" и добавляет свойства "width" и "height". Добавить
методы "getArea" и "getPerimeter", которые будут возвращать площадь и
периметр прямоугольника соответственно. Создать класс "Square", который
наследуется от класса "Rectangle" и имеет только одно свойство "sideLength". */
/*
class Shape {
    constructor(color) {
        this.color = color
    }
    getColor() {
        return this.color

    }

}
class Rectangle extends Shape {
    constructor(color, width, height) {
        super(color);
        this.width = width;
        this.height = height;
    }
    getArea() {
        return this.width * this.height
    }
    getPerimeter() {
        return (this.width + this.height) * 2
    }
}
class Square extends Rectangle {
    constructor(sideLength) {
        super();
        this.sideLength = sideLength
    }
    getArea() {
        return this.sideLength ** 2
    }
    getPerimeter() {
        return this.sideLength * 4
    }
}
let square1 = new Square(5);
console.log(square1.getArea())
let rectangle = new Rectangle("red", 2, 5);
console.log(rectangle.getArea())
console.log(rectangle.getPerimeter())
console.log(rectangle.getColor())
 */

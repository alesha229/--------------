let admin, name;
name = "Джон";
admin = name;
alert(admin);

let planet, userName;

const BIRTHDAY = "18.04.1982";

const ageConst = someCode(BIRTHDAY);

let name1 = `ilya`;

alert(`hello${1}`);
alert(`hello${"name"}`);
alert(`hello${name1} and ${name}`);

let age = prompt("Как тебя зовут?", "неизвестно");

alert(`Тебя зовут: ${age}`);

let a = 1,
  b = 1;

let c = ++a; // ? 2
let d = b++; // ? 1

//
//----------------------------------------------------------------------
//

"" + 1 + 0; // 10 string
"" - 1 + 0; // -1
true + false; // 1
6 / "3"; // 2
"2" * "3"; // 6
4 + 5 + "px"; // 9px string
"$" + 4 + 5; //$45
"4" - 2; // 2
"4px" - 2; // NaN
"  -9  " + 5; // " -9  5"
"  -9  " - 5; // -14
null + 1; // 1
undefined + 1; // Nan
" \t \n" - 2; //-2

//
//10 из 14 правильно
//

//
//----------------------------------------------------------------------
//

// let A = promt("Первое число",1)
// let B = promt("Второе число",2)
// alert(A+B)

let A = promt("Первое число", 1);
let B = promt("Второе число", 2);
alert(+A + +B);

//
//Правильно
//

//
//----------------------------------------------------------------------
//

5 > 4; // true
"ананас" > "яблоко"; // false
"2" > "12"; //true
undefined == null; //true
undefined === null; //false
null == "\n0\n"; //false
null === +"\n0\n"; //false

//
//2 неправильно
//

//
//----------------------------------------------------------------------
//

if ("0") {
  alert("Привет");
}
// выведет алерт потому что любая строка приравнивается к true

//
//----------------------------------------------------------------------
//

alert(Boolean("непустая строка")); // true ВАЖНО!!!

//
//----------------------------------------------------------------------
//

//
//----------------------------------------------------------------------
//

alert(null || 2 || undefined); //2

alert(alert(1) || 2 || alert(3)); // 1 // 2

alert(1 && null && 2); // null

alert(alert(1) && alert(2)); // 1 //undefiend

alert(null || (2 && 3) || 4); // 3

//
//----------------------------------------------------------------------
//

//
//----------------------------------------------------------------------
//

let value = NaN;

value &&= 10; // NaN
value ||= 20; //20
value &&= 30; //30
value ||= 40; // 30

alert(value); //30

//
//----------------------------------------------------------------------
//

//
//----------------------------------------------------------------------
//

let age1;
prompt("введите свой возраст", age1);
if (!(age1 >= 14 && age1 <= 90)) {
  console.log("Возраст в диапазоне между 14 и 90 включительно");
}

if (age1 <= 14 && age1 >= 90) {
  console.log("Возраст в диапазоне между 14 и 90 включительно");
}

//Правильно

//
//----------------------------------------------------------------------
//

//
//----------------------------------------------------------------------
//

if (-1 || 0) alert("first"); // first
if (-1 && 0) alert("second"); // Не выведет
if (null || (-1 && 1)) alert("third"); // third

//Правильно

//
//----------------------------------------------------------------------
//
let login;
let pass;
promt("Введите логин", login);
if (login === null || login === "") {
  alert("Отменено");
} else if (login != "Админ") {
  alert("Я вас не знаю");
} else {
  prompt("Введите пароль", pass);
  if (login === null || login === "") {
    alert("Отменено");
  } else if (pass != "Я главный") {
    alert("Я вас не знаю");
  } else {
    alert("Здравствуйте!");
  }
}

//
//----------------------------------------------------------------------
//

alert(undefined ?? Nan ?? null ?? "" ?? " "); // Nan

//
//----------------------------------------------------------------------
//

let city = null;

ciry ??= "Берлин";
ciry ??= null;
ciry ??= "Кёльн";
ciry ??= "Гамбрург";

//Берлин

//
//----------------------------------------------------------------------
//

let num1 = 10,
  num2 = 20,
  result;

result ??= num1 ?? num2;

//
//----------------------------------------------------------------------
//

let i = 3;

while (i) {
  alert(i--); //3 2 1 0
}

//
//----------------------------------------------------------------------
//

let j = 0;
while (++j < 5) alert(j); //1 2 3 4

let l = 0;
while (l++ < 5) alert(l); //1 2 3 4 5

//
//----------------------------------------------------------------------
//

for (let i = 0; i < 5; i++) alert(i); //0 1 2 3 4 5

for (let i = 0; i < 5; ++i) alert(i); // 1 2 3 4

//Ответ: от 0 до 4 в обоих случаях.

//Такой результат обусловлен алгоритмом работы for:

//Выполнить единожды присваивание i = 0 перед чем-либо (начало).
//Проверить условие i < 5
//Если true – выполнить тело цикла alert(i), и затем i++

//Увеличение i++ выполняется отдельно от проверки условия (2),
//значение i при этом не используется, поэтому
//нет никакой разницы между i++ и ++i.

//
//----------------------------------------------------------------------
//

for (let i = 0; i < 3; i++) {
  alert(`numbner ${i}!`);
}

//|
//v
let h = 0;
while (h < 3) {
  alert(`numbner ${h}!`);
  h++;
}

//
//----------------------------------------------------------------------
//

let num4;
do {
  promt("Введите число больше 100", num4);
} while (num4 <= 100 && num4);

//
//----------------------------------------------------------------------
//
let arr;
let baseNum = 2;
const enterNum = 200;
do {
  baseNum++;
  if (n > 1 && n % n) {
    arr.push(n);
  }
} while (baseNum <= enterNum);
console.log(arr);
//
//----------------------------------------------------------------------
//

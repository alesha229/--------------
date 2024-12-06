let answer1 = prompt("какое официальное название использует javascipt");
if (answer1 == "ECMAScript") {
  alert("правильно");
} else {
  alert("Не знаете? ECMAScript!");
}
//
//----------------------------------------------------------------------
//

//
//----------------------------------------------------------------------
//
let promtAnswer = promt("Введите любое число");
if (promtAnswer > 0) {
  alert("1");
} else if (promtAnswer < 0) {
  alert("-1");
} else {
  alert("0");
}
//
//ok
//

//
//----------------------------------------------------------------------
//
let result;
if (a + b < 4) {
  result = "Мало";
} else {
  result = "Много";
}

//|
//v

result = a + b < 4 ? "Много" : "Мало";
//
//----------------------------------------------------------------------
//

//
//----------------------------------------------------------------------
//

let message;

if (login == "Сотрудник") {
  message = "Привет";
} else if (login == "Директор") {
  message = "Здравствуйте";
} else if (login == "") {
  message = "Нет логина";
} else {
  message = "";
}

//|
//v

message =
  login == "Сотрудник"
    ? (message = "Привет")
    : login == "Директор"
    ? (message = "Здравствуйте")
    : login == ""
    ? (message = "Нет логина")
    : (message = "");

//
//----------------------------------------------------------------------
//

switch (browser) {
  case "Edge":
    alert("You've got the Edge!");
    break;

  case "Chrome":
  case "Firefox":
  case "Safari":
  case "Opera":
    alert("Okay we support these browsers too");
    break;

  default:
    alert("We hope that this page looks ok!");
}

//|
//v

if (browser == "Edge") {
  alert("You`ve got the Edge!");
} else if ("Chrome") {
} else if ("Firefox") {
} else if ("Safari") {
} else if ("Opera") {
  alert("Okay we support these browsers too");
} else {
  alert("We hope that this page looks ok!");
}

//
//----------------------------------------------------------------------
//
const number = +promt("Введите число между 0 и 3", "");
if (number === 0) {
  alert("Вы ввели число 0");
}
if (number === 1) {
  alert("Вы ввели число 1");
}
if (number === 2 || number === 3) {
  alert("Вы ввели число 2, а может и 3");
}

//|
//v

switch (number) {
  case value:
    alert("Вы ввели число 0");
    break;
  case 1:
    alert("Вы ввели число 1");
    break;
  case 2:
  case 3:
    alert("Вы ввели число 2, а может и 3");
}

//
//----------------------------------------------------------------------
//

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return comfirm("Родители разрешили?");
  }
}

function checkAge1(age) {
  if (age > 18) {
    return true;
  }
  return confirm("Ротдители разрешили?");
}

//
//----------------------------------------------------------------------
//
function checkAge2() {
  if (age > 18) {
    return true;
  } else confirm("Родители разрешили?");
}
function checkAge(age) {
  return age > 18 ? true : confirm("Родители разрешили");
}
function min(a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}

//
//----------------------------------------------------------------------
//

function pow(x, n) {
  let result = x;
  for (let i = 1; i < n; ) {
    result *= x;
  }
  return result;
}
let x = prompt("x?", "");
let n = prompt("n?", "");
if (n >= 1 && n % 1 === 0) {
  alert(pow(x, n));
} else {
  alert(`Степень ?${n} не поддерживается, используйте натуральное число`);
}

//
//----------------------------------------------------------------------
//

function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}
ask(
  "Вы согласны?",
  function () {
    alert("Вы согласились.");
  },
  function () {
    alert("Вы отменили выполнение.");
  }
);

//|
//v
let func = (question, yes, no) => {
  if (confirm(question)) yes();
  else no();
};
func(
  "Вы согласны?",
  () => alert("Вы согласились."),
  () => alert("Вы отменили выполнение.")
);

//
//----------------------------------------------------------------------
//

user = {
  name: "John",
  surname: "Smith",
};
user.name = "Pete";
delete user.name;

let schedule = {};

let isEmpty = (obj) => {
  return obj.lenght > 0 ? true : false;
};

alert(isEmpty(schedule));

schedule["8:30"] = "get up";

alert(isEmpty(schedule));

//
//----------------------------------------------------------------------
//

const user = {
  name: "Jogn",
};

user.name = "Pete";
//
//----------------------------------------------------------------------
//

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};
let sumObject = (obj) => {
  let sum = 0;
  for (let key in obj) {
    sum += obj[key];
  }
};
sumObject(salaries);
//
//----------------------------------------------------------------------
//

multiplyNumeric = (obj) => {
  for (let key in obj) {
    if (obj.key.typeof == "number") {
      obj.key *= 2;
    }
  }
};
let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};
multiplyNumeric(menu);

//
//----------------------------------------------------------------------
//

function marry(man, woman) {
  woman.husband = man;
  man.wife = woman;
  return {
    father: man,
    mother: woman,
  };
}

let family = marry(
  {
    name: "John",
  },
  {
    name: "Ann",
  }
);

//
//----------------------------------------------------------------------
//

let user = { name: "John" };
let admin = { name: "Admin" };

function sayHi() {
  alert(this.name);
}

user.f = sayHi;
admin.f = sayHi;

user.f(); //john
admin.f(); //admin

//
//----------------------------------------------------------------------
//

function makeUser() {
  return {
    name: "John",
    ref: this,
  };
}

let user = makeUser();

alert(user.ref.name); // error

//
//----------------------------------------------------------------------
//

let calculator = {
  read(a) {
    this.a = a;
    this.b = b;
  },
  sum() {
    return this.a + this.b;
  },
  mul() {
    return this.a * this.b;
  },
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());
//
//----------------------------------------------------------------------
//

let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep: function () {
    alert(this.step);
    return this;
  },
};

//
//----------------------------------------------------------------------
//
//Это функция конструктор
//На самом деле это обычная функция но есть соглашение что
//функция-конструктор вызывается только с помощью оператора new
//наименование обязательно с большой буквый
//Все кроме стрелочных функций можно использовать с new как конструктор
//Так как внутри стрелочной функции нет this

//
//Что делает new на самом деле
//
// function User(){
//   this = {}
//   this.name = name
//   this.isAdmin = false
//   return this
// }
//

function User() {
  this.name = name;
  this.isAdmin = false;
}

let user = new User("Jack");

alert(user.name);
alert(user.isAdmin);

//
//----------------------------------------------------------------------
//

function User(name) {
  this.name = name;

  this.sayHi = function () {
    alert("Меня зовут" + this.name);
  };
}
let john = new User("John");

john.sayHi();

//
//----------------------------------------------------------------------
//
let obj = {};

function A() {
  return obj;
}
function B() {
  return obj;
}

let a = new A();
let b = new B();

alert(a == b);

//
//----------------------------------------------------------------------
//
function Calculator() {
  this.read = function () {
    this.a = promt("Введите число a");
    this.b = promt("Введите число б");
  };
  this.sum = function () {
    return this.a + this.b;
  };
  this.mul = function () {
    return this.a * this.b;
  };
}

let calculator1 = new Calculator();
calculator1.read();

alert("Sum=" + calculator1.sum());
alert("Mul=" + calculator1.mul());

//
//----------------------------------------------------------------------
//
function Accumulator(startingValue) {
  this.value = startingValue;
  this.read = function () {
    this.value += promt("Введите число");
  };
}

let accumulator = new Accumulator(1);

accumulator.read();
accumulator.read();

alert(accumulator.value);

//
//----------------------------------------------------------------------
//

let user = {
  name: "John",
  money: 1000,
  [Symbol.toPrimitive](hint) {
    alert(`hint: ${hint}`);
    return hint == "string" ? `name:"${this.name}"` : this.money;
  },
};
// демонстрация результатов преобразований:
alert(user); // hint: string -> {name: "John"}
alert(+user); // hint: number -> 1000
alert(user + 500); // hint: default -> 1500

//
//----------------------------------------------------------------------
//

let user = {
  name: "John",
  money: 1000,
  toString() {
    return `{name:"${this.name}"}`;
  },
  valueOf() {
    return this.money;
  },
};

//
//----------------------------------------------------------------------
//

// function delay(ms) {
//   return new Promise(function (resolve) {
//     console.log(1); //обработка промиса
//     setTimeout(resolve, ms);
//   });
// }
// // delay(1000).then((result) => {
// //   console.log(result + "f");
// // });

// function delay2(ms, func) {
//   return new Promise(function (resolve) {
//     setTimeout(
//       function () {
//         console.log(2);
//         resolve(func()); //вызов функции выполнение которой задерживается
//       },

//       ms
//     );
//   });
// }

// delay2(1000, () => delay(1000));

// async function fetchData() {
//   try {
//     let response = await fetch("https://api.example.com/data");
//     let data = await response.jsonc;
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// }

// fetchData();
// function createCounter() {
//   let count = 0;
//   return {
//     increment() {
//       return count++;
//     },
//     decrement() {
//       return count--;
//     },
//     getValue() {
//       return count;
//     },
//   };
// }

// // Пример использования:
// const counter = createCounter();
// counter.increment(); // 1
// counter.increment(); // 2
// counter.decrement(); // 1
// counter.getValue(); // 1
function createGreeting(name) {
  // это объявление функции = создание лексического окружения, в нем у нас есть name(внутри createGreeting)

  return function () {
    console.log(`Привет, ${name}`); // при вызове функции createGreeting мы возвращаем функцию но ещё НЕ объявляем функцию!
  };
}

const b = function () {
  // функция b объявлена в глобальном лексичеком окружении а не в лексическом окружении createGreeting
  console.log(`Привет, ${name}`);
};

function createGreeting2(name) {
  // так же объявляем функцию и возвращаем функцию b
  // при возврате функции мы не объявляем её внутри createGreeting2 а возвращаем ссылку на функцию которая объявлена в глобальном
  //лексичесом окружении
  return b;
}

var name = "Бла-Бла"; //задаем name в глобальном лексическом окружении

const greetIvan = createGreeting("Иван")();
//() - исполнение функции,
//const greetIvan = createGreeting('Иван') - объявление функции
//как результат работы функции мы получаем ссылку на функцию внутри createGreetitng
//после чего при помощи = мы объявляем её т.е это могло бы выглядит так
//const greetIvan = function () {
//     console.log(`Привет, ${name}`);
// };
//НО! в таком случае мы объявили функцию в глобальном лексическом окружении а не в лексическом окружении createGreeting
//И следствие этого что у нас нет доступа к name лексического окружения createGreeting

//Да мы объявляем дочернюю функцию и у неё создается СВОЁ лексическоое окружение и если у него нет name то оно ищет его выше и выше
//по иерархии

const greetIvan2 = createGreeting2("Иван")();
//() - исполнение функции,
//const greetIvan = createGreeting2('Иван') - объявление функции
//В данном случае объявление в глобальном лексическом окружении происходит(там где было объявлено b)

//Как послесловие могу сказать что лексическое окружение относится не только к функциям но и к блокам кода таким как if, for
//блок кода это то что находиться внутри {} можно сказать что объявление блока кода = объявлению функции
//это важно понимать особенно для for

function createGreeting3(name) {
  // Лексическое окружение создается ЗДЕСЬ
  // В этот момент "запоминаются" все доступные переменные
  return function () {
    console.log(`Привет, ${name}!`);
  };
}

const greetIvan3 = createGreeting("Иван");
const greetMaria = createGreeting("Мария");
greetIvan3();
greetMaria();
greetIvan3();

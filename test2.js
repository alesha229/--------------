let fruits = ["Яблоки", "Груша", "Апельсин"];

let shoppingCart = fruits;

shoppingCart.push("Банан");

console.log(fruits.length); //4

let styles = ["Джаз", "Блюз"];
styles.push("Рок-н-ролл");
styles[Math.floor(styles.length - 1 / 2)] = "Классика";
console.log(styles.shift());
styles.unshift("Рэп", "Рэгги");

let arr = ["a", "b"];

arr.push(function () {
  console.log(this);
});
arr[2]; //результат
//a,b,function(){
//    console.log(this)
//}
// function sumInput() {
//   let arr = [];
//   let i;
//   do {
//     i = prompt();
//     if ((i == "", i == null)) {
//       return arr;
//     }
//     arr.push(i);
//   } while (true);
// }
// console.log(sumInput());

function getMaxSubSum(arr) {
  let groupSum;
  let maxSum = 0;
  for (let groupLenght = 0; groupLenght < arr.length; groupLenght++) {
    groupSum = 0;
    for (let second = 0; second < arr.length - groupLenght; second++) {
      groupSum = getGroupSum(arr, second, second + groupLenght + 1);

      // for (let third = second; third < groupLenght; third++) {

      // }

      if (maxSum < groupSum) {
        maxSum = groupSum;
      }
    }
  }
  return maxSum;
}
console.log(getMaxSubSum([-1, 2, 3, -9]));
console.log(getMaxSubSum([2, -1, 2, 3, -9]));
console.log(getMaxSubSum([-1, 2, 3, -9, 11]));
console.log(getMaxSubSum([-2, -1, 1, 2]));
console.log(getMaxSubSum([100, -9, 2, -3, 5]));
console.log(getMaxSubSum([1, 2, 3]));
console.log(getMaxSubSum([1, -2, 3, 4, -5, 6]));
console.log(getMaxSubSum([-1, -2, -3, -4, -5]));
console.log(getMaxSubSum([5, 1, -2, 3, 4, -1, 2]));
console.log(getMaxSubSum([10, 6, -5, 6]));
console.log(getMaxSubSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(getMaxSubSum([-1, 2, 3, -9, 4, 5, -1, 2]));
//Ищем по группам т.е берем группу длинной в 1 попорядку проверяем
//потом берем группу длинной в 2 проверяем каждую
//берем группу длинной в 3 проверяем каждую
//максимальная группа будет равна длине массива
//
function getGroupSum(arr, index1, index2) {
  let newArr = arr.slice(index1, index2);
  let sum = 0;
  newArr.forEach((element) => {
    sum += element;
  });
  return sum;
}

// function unique(arr) {
//   let set = new Set();
//   arr.forEach((element) => {
//     set.add(element)
//   });
//   return set
// }

function unique() {
  return Array.from(new Set(arr));
}
let values = [
  "Hare",
  "Krishna",
  "Hare",
  "Krishna",
  "Krishna",
  "Krishna",
  "Hare",
  "Hare",
  ":-O",
];

// alert(unique(values));

// function aclean(arr) {
//   // let sotrted = arr.filter(function(values){
//   //     values.
//   // })
//   let result = [...arr];
//   for (let index = 0; index < arr.length; index++) {
//     const element = arr[index].split("").sort().join("");
//     for (let indexInner = 0; indexInner < arr.length; indexInner++) {
//       const elementInner = arr[indexInner].split("").sort().join("");
//       if (element == elementInner && index != indexInner) {
//         console.log(result[indexInner]);
//         result.splice(
//           result.findIndex(
//             (e) =>
//               e.split("").sort().join("") ==
//               elementInner.split("").sort().join("")
//           ),
//           1
//         );
//         // console.log(element + " " + elementInner);
//         // console.log(index + " " + indexInner + (element == elementInner));
//       }
//     }
//   }
//   return result;
// }
//хрень реализация логически так хотел но индексы съезжают

function aclean(arr) {
  // console.log(arguments);
  //console.dir(this);
  //console.dir(aclean);
  console.log(arr);
  // console.dir(arguments.callee);
  // console.dir(arguments.caller);
  // console.dir(aclean);
  // console.log(arguments);
  // console.log(Object.getOwnPropertyNames(aclean));
  // console.log(aclean.arguments);
  // console.log(aclean.caller);
  // console.log(aclean.name);
  // console.log(aclean.prototype);
  let set = new Set();
  let result = [];
  arr.forEach((e) => {
    set.add(e.split("").sort().join("").toLowerCase());
  });
  //отсортирвал по оригинальности при помощи .add  у set
  set.forEach((element) => {
    result.push(
      arr[
        arr.findIndex(
          (e) => element == e.split("").sort().join("").toLowerCase()
        )
      ]
    );
  });

  return result;
}
let arr1 = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
// aclean.apply(arr1, arr1);
aclean.call(
  null,
  ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"],
  ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"]
);
aclean.apply(
  null,
  ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"],
  ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"]
);
// aclean(arr1);
// let result = [...array]
// array.forEach(element => {
//     element = toString(element)
//     values.forEach(value => {
//         value = toString(value)
//         if (element === value){
//             result.splice(result.indexOf(element), 1)
//         }
//     })
// });
// return result
let func1 = (arg) => {
  console.log(Object.getOwnPropertyNames(func1));
  // console.log(arguments);
  let i = 0;
  // console.log(arguments);
  //Uncaught ReferenceError: arguments is not defined
};
func1.b = 1;
func1("123");
console.dir(func1);

// console.log(func1.arguments);

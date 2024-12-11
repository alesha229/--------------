let array = [
  "chemistry",
  "computer",
  "computer",
  "english",
  "geography",
  "hindi",
  "hindi",
  "geography",
  "maths",
  "physics",
  "a",
  "physics",
  "physics",
  "a",
  "physics",
  "physics",
  "a",
  "physics",
  "physics",
  ,
];

// array.splice(8, 1);
// console.log(array);
// function sortedUniq(array) {
//   for (i in array) {
//     let isFirst = false;
//     for (b in array) {
//       if (array[i] == array[b]) {
//         if (isFirst) {
//           array.splice(b, 1);
//         }
//         isFirst = true;
//       }
//     }
//     console.log(array);
//     isFirst = false;
//   }
//   return array;
// }

// function sortedUniq(array) {
//   let unicArray = [];
//   array.map((element, index) => {
//     if (!array.includes(element, index + 1)) {
//       unicArray.push(element);
//     }
//   });
//   return unicArray;
// }

function sortedUniq(array) {
  array.map((element, index) => {
    // if (array.includes(element, index + 1)) {
    //   unicArray.push(element);
    // }else{
    //   unicArray.push(element);
    // }
    while (array.includes(element, index + 1)) {
      array.splice(
        array.findLastIndex((e) => e == element),
        1
      );
    }
  });
  return array;
}

console.log(sortedUniq(array));

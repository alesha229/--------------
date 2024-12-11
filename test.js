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

function difference(array, values) {
  //Создаем результирующий массив
  let result = [...array];
  //Используем не результирующий массив а который нам подали на вход т.к при удалении от туда элементов индексы съедут.
  array.forEach((element) => {
    //Приводим текущий элемент в типу string для сравнеия
    element = toString(element);

    values.forEach((value) => {
      //Приводим элемент во втором массиве к типу string для сравнения
      value = toString(value);

      if (element === value) {
        //Если находит в первом массиве такой же элемент
        //Вырезаем из результирующего массива элемент
        //Индекс этого элемента находим при помощи indexOf дублирующемуся элементу
        result.splice(result.indexOf(element), 1);
      }
    });
  });
  return result;
}

//
//Всё что ниже оригинальный код задачи!!!
//

function check(originalArr, values, expectedArr) {
  const result = difference(originalArr, values);

  let correct = true;
  if (
    result.length != expectedArr.length ||
    !result.every(
      (item, index) =>
        (isNaN(item) && isNaN(expectedArr[index])) ||
        item === expectedArr[index]
    )
  ) {
    correct = false;
  }

  console.log(`original array: [${originalArr.join(", ")}]`);
  console.log(`values: [${values.join(", ")}]`);
  console.log(`expected array: [${expectedArr.join(", ")}]`);
  console.log(`result: [${result.join(", ")}]`);
  console.log(`correct: ${correct}`);
  console.log("");
}

function toString(obj) {
  if (obj === null) {
    return "null";
  } else if (obj === undefined) {
    return "undefined";
  } else if (isNaN(obj)) {
    return "NaN";
  } else if (obj === "") {
    return "''";
  } else if (obj === " ") {
    return "' '";
  }

  return obj;
}

Array.prototype.join = function (separator) {
  let result = "";

  for (item of this.values()) {
    if (!result) {
      result += toString(item);
    } else {
      result += separator + toString(item);
    }
  }

  return result;
};

check(
  [0, 1, 2, 3, 4, 4, 4, 0, 0, 6, 7, 8, 8, 10, 10],
  [4, 1, 2, 0],
  [3, 6, 7, 8, 8, 10, 10]
);
check([], [], []);

check(
  [null, "b", NaN, 0, 1, undefined, 0, "c", 1.2, 3.4, "g", +0, +0, NaN],
  ["b", 0, 1.2, NaN],
  [null, 1, undefined, "c", 3.4, "g"]
);
check(
  [null, "b", NaN, 0, 1, undefined, 0, "c", 1.2, "g", +0, +0, NaN],
  ["b", 0, 1.2, undefined],
  [null, NaN, 1, "c", "g", NaN]
);
check(
  [null, "b", NaN, 0, 1, undefined, 0, "c", 1.2, "g", +0, -0, NaN],
  ["b", 0, 1.2, null],
  [NaN, 1, undefined, "c", "g", NaN]
);

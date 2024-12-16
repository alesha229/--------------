function sortedUniq(array) {
  array.map((element, index) => {
    //На каждый элемент у нас идет цикл while
    //до того момента как у нас не останется дубликатов этого элемента в массиве не считая и не удаляя текущий т.к мы должы
    //удалить дубликаты текущего элемента а не удалить его самого.
    while (array.includes(element, index + 1)) {
      //вырезаем элемент
      array.splice(
        //..С индексом где нашли дубликат, поиск ведем с конца
        //Если бы искали с начала то вся эта система навернулась из-за сдвига индексов в массиве.
        //А при таком подходе у нас просто ищется дубликат текущего элемента и удаляется с конца.
        //Т.к мы проверяем для каждого по порядку элемента дубликаты у нас не может возникнуть
        //такой ситуации когда дубликат находится слева от элемента.
        //При таком подходе сохраняется сортировка массива т.е остается только первый экземпляр(по списку индексов)
        //если он имеет дубликаты. Что прописано и понятно из названии функции что у нас отсортированый уникальны массив возвращает.
        array.findLastIndex(
          (e) =>
            e === element ||
            !(e !== element) ||
            //Здесь у нас обработчик всех неожиданых типов и строк которые могут неправильно работать с нашей функцией.
            exeptionTypesHandler(e) === exeptionTypesHandler(element)
        ),
        1
      );
    }
  });
  return array;
}

//Обработчик неожиданых строк и типов
function exeptionTypesHandler(a) {
  if (!a) {
    if (typeof a === "undefined") {
      return String("undefiend");
    } else if (a === null) {
      return String("null");
    } else if (a === 0) {
      return Number("0");
    } else if (a === 1) {
      return Number("1");
    } else if (a === "") {
      return String("");
    } else if (a === " ") {
      return String(" ");
    } else if (a === NaN) {
      return String("NaN");
    }
  } else {
    return a;
  }
}

//
//Всё что ниже оригинальный код задачи!!!
//

function check(originalArr, expectedArr) {
  const result = sortedUniq(originalArr);

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

check([1, 2, 2, 3, 4, 4, 5, 5, 6, 6, 6], [1, 2, 3, 4, 5, 6]);
check(
  [
    null,
    null,
    undefined,
    undefined,
    NaN,
    NaN,
    NaN,
    1,
    1,
    "",
    "",
    0,
    0,
    " ",
    " ",
  ],
  [null, undefined, NaN, 1, "", 0, " "]
);
check([1, 2, 2], [1, 2]);

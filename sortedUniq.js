function sortedUniq(array) {
  array.map((element, index) => {
    while (array.includes(element, index + 1)) {
      array.splice(
        array.findLastIndex(
          (e) =>
            e === element ||
            !(e !== element) ||
            exeptionTypesHandler(e) === exeptionTypesHandler(element)
        ),
        1
      );
    }
  });
  return array;
}

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

//1.Проверяем равны ли объекты по ссылке
//2.Проверяем примитивные ли типы и сравниваем при помощи ==
//3.Проверяем одинаковые ли типы. Если типы разные делаем проверку разных типов. Number и String к Number. Boolean если один из то приводим к Boolean
//4.У типа object свой алогритм сравнения
//5.Массивы тоже отдельно проверяются
//
//
//
//
//
//
//
//
//
//
//
function isEqual(value, other) {
  if (value === other) return true;

  //Проверка на объект-примитив и наоборот
  if (isEqualBoolean1(value, other)) return true;
  if (isEqualBoolean1(other, value)) return true;
  if (isEqualObjectsAndPrimitives1(value, other)) return true;
  if (isEqualObjectsAndPrimitives1(other, value)) return true;
  if (isEqualExeption(other, value)) return true;

  // Если разный тип, вернуть false
  if (!isEqualTypes1(value, other)) return false;

  // Проверяем строковые значения (Эта проверка нужна для примитивов!)
  if (!isEqualStringsValue1(value, other)) return false;

  if (isEqualSymbols1(value, other)) return true;

  const datesResult = isEqualDates(value, other);
  if (datesResult !== undefined) return datesResult;

  // if (isEqualMaps1(value, other)) {
  //   let [arrValue, arrOther] = GetValueMaps1(value, other);
  //   return localIsEqual1(arrValue, arrOther);
  // }

  // if (isEqualSets1(value, other)) {
  //   let [arrValue, arrOther] = GetValueSets1(value, other);
  //   return localIsEqual1(arrValue, arrOther);
  // }

  // Проверяем значение ключей
  return isEqualObjectsKeys1(value, other);
}
function isEqualExeption(value, other) {
  //Number(0) 0
  if (typeof value == "undefined" && typeof other == "undefined") {
    console.log(value, other);
    return true;
  }
  if (
    value == null &&
    other == null &&
    typeof value !== "undefined" &&
    typeof other !== "undefined"
  ) {
    console.log(value, other);

    return true;
  }
  return false;
}
function isEqualObjectsAndPrimitives1(value, other) {
  //Number(0) 0
  if (
    typeof value == "object" &&
    typeof other != "object" &&
    value !== null &&
    other !== null
  ) {
    if (typeof other != "boolean") {
      if (value !== null && value == other.valueOf()) return true;
    }
  }
  return false;
}
function isEqualBoolean1(value, other) {
  //Number(0) 0
  if (typeof value == "boolean" && typeof other != "boolean") {
    if (value !== null && value.toString() == other.toString()) return true;
  }
  return false;
}
function isEqualTypes1(value, other) {
  return typeof value == typeof other;
}
function isEqualStringsValue1(value, other) {
  return toString(value) == toString(other);
}
function isEqualSymbols1(value, other) {
  if (typeof value == "symbol" && typeof other == "symbol") {
    return value.toString() == other.toString() ? true : null;
  }
}
// function isEqualTypedArrays1(value, other) {

// }
// function isEqualMaps1(value, other) {
//   //
// }
// function GetValueMaps1(value, other) {
//   //
// }
// function localIsEqual1(value, other) {
//   //
// }
// function isEqualSets1(value, other) {
//   //
// }
// function GetValueSets1(value, other) {
//   //
// }
function isEqualDates(value, other) {
  if (value instanceof Date && other instanceof Date) {
    console.log(value.getTime() == other.getTime());

    return value.getTime() == other.getTime();
  }
  return undefined;
}
function isEqualObjectsKeys1(value, other) {
  if (
    typeof value == "object" &&
    typeof other == "object" &&
    value !== null &&
    other !== null
  ) {
    if (value.length == other.length) {
      if (Object.keys(value).every((key) => isEqual(value[key], other[key]))) {
        return true;
      }
    }
  }
  return false;
}
function localIsEqual(value, other) {
  // Если ссылаются на одно и то же значение, вернуть true
  if (value === other) return true;

  //Проверка на объект-примитив и наоборот
  if (isEqualObjectsAndPrimitives(value, other)) return true;
  if (isEqualObjectsAndPrimitives(other, value)) return true;

  // Если разный тип, вернуть false
  if (!isEqualTypes(value, other)) return false;

  // Проверяем строковые значения (Эта проверка нужна для примитивов!)
  if (!isEqualStringsValue(value, other)) return false;

  if (isEqualSymbols(value, other)) return false;

  if (!isEqualTypedArrays(value, other)) return false;

  if (isEqualMaps(value, other)) {
    let [arrValue, arrOther] = GetValueMaps(value, other);
    return localIsEqual(arrValue, arrOther);
  }

  if (isEqualSets(value, other)) {
    let [arrValue, arrOther] = GetValueSets(value, other);
    return localIsEqual(arrValue, arrOther);
  }

  // Проверяем значение ключей
  return isEqualObjectsKeys(value, other);
}

function isEqualObjectsAndPrimitives(object, primitive) {
  if (typeof object == "object" && typeof primitive != "object") {
    if (object !== null && primitive === object.valueOf()) {
      return true;
    }
  }
  return false;
}

function isEqualTypes(value, other) {
  if (typeof value != typeof other) {
    return false;
  }
  return true;
}

function isEqualStringsValue(value, other) {
  if (value.toString() != other.toString()) {
    return false;
  }
  return true;
}

function isEqualSymbols(symbolValue, symbolOther) {
  return isEqualTypesAndSizeObjects(
    "[object Symbol]",
    symbolValue,
    symbolOther
  );
}

function isEqualTypedArrays(arrValue, arrOther) {
  if (ArrayBuffer.isView(arrValue) && ArrayBuffer.isView(arrOther)) {
    if (
      arrValue.length != arrOther.length ||
      arrValue.byteLength != arrOther.byteLength
    ) {
      return false;
    }
  }
  return true;
}

function isEqualMaps(mapValue, mapOther) {
  return isEqualTypesAndSizeObjects("[object Map]", mapValue, mapOther);
}

function GetValueMaps(mapValue, mapOther) {
  let arrValue = Array.from(mapValue.entries());
  let arrOther = Array.from(mapOther.entries());
  return [arrValue, arrOther];
}

function isEqualSets(setValue, setOther) {
  return isEqualTypesAndSizeObjects("[object Set]", setValue, setOther);
}

function GetValueSets(setValue, setOther) {
  let arrValue = Array.from(setValue);
  let arrOther = Array.from(setOther);
  return [arrValue, arrOther];
}

function isEqualTypesAndSizeObjects(typeObject, value, other) {
  let objectSet = Object.prototype.toString.call(value);
  if (objectSet == typeObject && value.size == other.size) {
    return true;
  }
  return false;
}

function isEqualObjectsKeys(objValue, objOther) {
  // Получаем массив ключей объктов
  let valueKeys = Object.keys(objValue);
  let otherKeys = Object.keys(objOther);

  // Если разное количество ключей, вернуть false
  if (valueKeys.length != otherKeys.length) {
    return false;
  }
  // Проверяем, что у них одинаковые ключи
  if (!valueKeys.every((key) => objOther.hasOwnProperty(key))) {
    return false;
  }
  return valueKeys.every((key) => localIsEqual(objValue[key], objOther[key]));
}

function check(value, other) {
  const result = isEqual(value, other);
  const localResult = localIsEqual(value, other);

  console.log(`left value: ${JSON.stringify(value)}`);
  console.log(`right value: ${JSON.stringify(other)}`);
  console.log(`expected result: ${localResult}`);
  console.log(`correct: ${result === localResult}`);
  console.log("");
}

check(0, new Number(0));
check("str", new String("str"));
check(true, new Boolean(true));
check(true, new Number(1));
check(true, new String("1"));
check(new Number(1), new String("1"));
check(new String("str"), new String("str"));
check(NaN, NaN);
check(NaN, null);
check(NaN, undefined);
check(null, undefined);
check(true, false);
check(true, true);
check(+0, -0);
check("", null);
check({}, {});
check([], []);
check(
  {
    a: 1,
    b: 2,
    c: {
      a: "1",
      b: true,
      c: {
        a: 1,
        b: 2,
        sayHi() {
          return 5;
        },
      },
    },
  },
  {
    a: 1,
    b: 2,
    c: {
      a: "1",
      b: true,
      c: {
        a: 1,
        b: 2,
        sayHi() {
          return 4;
        },
      },
    },
  }
);
check(
  { a: 1, b: 2, c: { a: "1", b: true, c: { a: 1, b: 2 } } },
  { a: 1, b: 2, c: { a: "1", b: true, c: { a: 1, b: 2 } } }
);
check(
  [
    {
      artist: "Billy Joel",
      title: "Piano Man",
      release_year: 1973,
      formats: ["CS", "8T", "LP"],
      gold: true,
    },
    1,
    [3, 2],
    [3, [4]],
  ],
  [
    {
      artist: "Billy Joel",
      title: "Piano Man",
      release_year: 1973,
      formats: ["C1", "8T", "LP"],
      gold: true,
    },
    1,
    [3, 2],
    [3, [4]],
  ]
);
check(
  [
    {
      artist: "Billy Joel",
      title: "Piano Man",
      release_year: 1973,
      formats: ["CS", "8T", "LP"],
      gold: true,
    },
    1,
    [3, 1],
    [3, [4]],
  ],
  [
    {
      artist: "Billy Joel",
      title: "Piano Man",
      release_year: 1973,
      formats: ["CS", "8T", "LP"],
      gold: true,
    },
    1,
    [3, 1],
    [3, [4]],
  ]
);
check(new Date("December 17, 1995 03:24:01"), new Date("1995-12-17T03:24:00"));
check(new Date("December 17, 1995 03:24:00"), new Date("1995-12-17T03:24:00"));

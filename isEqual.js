//Список функций был взят из тестового isEqual, т.к нужно ограничиться конкретными проверками, тут ещё можно много реализовать
//Но реализацией занимался самостоятельно там где постфикс1
//Некоторые из оригинальных функций не были реализованы для сравнения map,set,arraybuffer, т.к их нет в тестовых данных
function isEqual(value, other) {
  //Сравнение по ссылке
  if (value === other) return true;

  //Сравнение boolean с приведенем типа != boolean
  //С разных сторон ожидается тип != boolean
  if (isEqualBoolean1(value, other)) return true;
  if (isEqualBoolean1(other, value)) return true;

  //Аналогичное сравнение примитивного типа с объектом
  if (isEqualObjectsAndPrimitives1(value, other)) return true;
  if (isEqualObjectsAndPrimitives1(other, value)) return true;

  //Сравнение undefiend и null
  if (isEqualExeption(other, value)) return true;

  //Проверка на разные типы т.к разные типы мы обработали остались только одинаковые типы(в теории, если не смотреть шире тестов)
  if (!isEqualTypes1(value, other)) return false;

  //Сравнение строк
  if (!isEqualStringsValue1(value, other)) return false;

  //Сравнеие символов
  if (isEqualSymbols1(value, other)) return true;

  //Сравнение дат
  const datesResult = isEqualDates(value, other);
  if (datesResult !== undefined) return datesResult;

  //Последним мы сравниваем объекты т.к все остальное мы обработали
  return isEqualObjectsValue1(value, other);
}

function isEqualExeption(value, other) {
  //Очень мозги сделало то что null == undefiend думаю можно было лучше реализовать это в коде

  //Проверка если оба undefiend т.к typeof в обоих случаях выдаст тип undefiend
  if (typeof value == "undefined" && typeof other == "undefined") {
    return true;
  }
  //Проверка если оба null
  if (
    value == null &&
    other == null &&
    typeof value !== "undefined" &&
    typeof other !== "undefined"
  ) {
    return true;
  }
  return false;
}

function isEqualObjectsAndPrimitives1(value, other) {
  //Сравнение примитивов и типов относящихся к object, Number(0) такая обертка выдаст object

  //Тут null может попасть под object делаем проверку
  if (
    typeof value == "object" &&
    typeof other != "object" &&
    value !== null &&
    other !== null
  ) {
    //Сравниваем примитив и обернутый примитив
    if (typeof other != "boolean") {
      if (value !== null && value == other.valueOf()) return true;
    }
  }
  return false;
}

function isEqualBoolean1(value, other) {
  //Сравнение и обработка boolean типа с приведенем к строке
  if (typeof value == "boolean" && typeof other != "boolean") {
    if (value !== null && value.toString() == other.toString()) return true;
  }
  return false;
}

function isEqualTypes1(value, other) {
  //Сравниваем типы т.к обработали разные типы
  return typeof value == typeof other;
}

function isEqualStringsValue1(value, other) {
  //Сравниваем с приведенем к строке
  return toString(value) == toString(other);
}

function isEqualSymbols1(value, other) {
  //Сравниваем символы
  if (typeof value == "symbol" && typeof other == "symbol") {
    return value.toString() == other.toString() ? true : null;
  }
}

function isEqualDates(value, other) {
  //Сначала проверяем является ли датой. Date это не примитив а объект класса Date и мы проверяем принадлежность к нему
  //Если бы мы вызвали typeof то получили бы object
  if (value instanceof Date && other instanceof Date) {
    //Сравниваем время двух объектов date
    return value.getTime() == other.getTime();
  }
  return undefined;
}

function isEqualObjectsValue1(value, other) {
  if (
    typeof value == "object" &&
    typeof other == "object" &&
    value !== null &&
    other !== null
  ) {
    if (value.length == other.length) {
      //Объясню почему не сравниваем ключи. Сравниваем два входных объекта
      //Изначально убедившись что длина их одинаковая, этим мы исключаем возможности прохождения проверки
      //Когда один объект идентичен по всем полям но у второго есть ещё поля, если будут ещё поля то длинна будет разной.
      //
      //И дальше сравниваем каждый объект по ключу, если ключ или же значение будет не подходить, то объекты будут не равны.
      //Тоесть условно у первого объекта ключи которого мы подставляем будет ключ которого нет во втором объекте, тогда мы
      //не найдем такого значения у второго объекта и он обработается в isEqualExeption. Если же значения по одинаковым ключам
      //будут разные то мы проверим это в каждом обработчике который у нас есть.
      if (Object.keys(value).every((key) => isEqual(value[key], other[key]))) {
        return true;
      }
    }
  }
  return false;
}

//
//Всё что ниже оригинальный код задачи!!!
//

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

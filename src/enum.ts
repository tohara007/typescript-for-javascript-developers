export {};

// 数値のenum型
enum Months {
  January = 1,
  February,
  March,
  April,
  May,
  June,
  July,
  August,
  September,
  October,
  November,
  December
};

console.log(Months.January);
console.log(Months.February);
console.log(Months.December);

// もし同じことを普通のJSでやろうとした場合
// keyとvalueを与える必要がある
const MonthsJS = {
  January: 0,
  February: 1
};

console.log(MonthsJS.January);
console.log(MonthsJS.February);

// 文字列のenum型
// 全ての文字列に対して、初期化するのがポイント
enum Colors {
  RED = '#FF0000',
  WHITE = '#FFFFFF',
  GREEN = '#008000',
  BLUE = '#0000FF',
  // YELLOW = '#FFFF00',
  BLACK = '#000000'
};

let green = Colors.GREEN;
console.log({green});

enum Colors {
  YELLOW = '#FFFF00',
  GRAY = '#808080'
}

Colors.YELLOW;

export {};

let numbers: number[] = [1, 2, 3];
// 以下の方法は、非推奨
let numbers2: Array<number> = [1, 2, 3];

let strings2: Array<string> = ['Tokyo', 'Nagoya', 'Osaka'];

let strings: string[] = ['TypeScript', 'JavaScript', 'CoffeeScript'];

let nijigenHairetsu: number[][] = [
  [50, 100],
  [150, 200]
]

let hairetsu: (string | number | boolean)[] = [1, false, 'Japan'];

let hairetsu2: (string | number | boolean)[][] = [
  [1, false, 'Japan'],
  [2, 2],
  [false, true],
  ['England', 'China']
];
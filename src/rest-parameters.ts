export {};

// JavaScriptに用意されている配列の総和を求める関数reduce(reducer)を使うための準備
// 受け取った配列の要素を順に足していく
const reducer = (accumulator: number, currentValue: number) => {
  console.log({accumulator, currentValue});
  return accumulator + currentValue;
}

const sum: (...values: number[]) => number = (...values: number[]): number => {
  return values.reduce(reducer);
};

console.log(sum(1, 2, 3, 4, 5));

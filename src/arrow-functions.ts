export {};

let bmi = (height: number, weight: number): number => {
  return weight / (height*height);
}

console.log(bmi(1.64, 57));

// 1行しか処理がないアロー関数の場合、以下のようにもかける
// この場合、returnは書かない
let bmi2 = (height: number, weight: number): number => weight / (height*height);

console.log(bmi2(1.65, 57));
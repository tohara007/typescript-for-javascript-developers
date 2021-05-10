export {};

// functionキーワードの関数で大事なのは、引数と戻り値の型注釈
function BMI(height: number, weight: number): number {
  return weight / (height*height)
}

console.log(BMI(1.64, 58))
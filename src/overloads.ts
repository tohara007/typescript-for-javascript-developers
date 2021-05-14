export {};

// オーバーロード（実態の関数の定義）前に、シグネチャーを宣言する必要がある
// シグネチャーでは、その関数名、引数とその型、戻り値とその型を型制約することができる
function double(value: number): number;
function double(value: string): string;

// オーバーロード時には、型制約はいらない（シグネチャーで型制約しているため）
function double(value: any): any {
  console.log(typeof value);
  if (typeof value === "number") {
    return value*2;
  } else {
    return value + value;
  } 
}

console.log(double(100));
console.log(double("FUCK "));
// シグネチャーが存在するとき、コンパイルエラーになるが、シグネチャーないときは、エラーにならない
// console.log(double(true));

export {};

// classの定義
class Person {
  // classのメンバー変数の宣言時に、データの型定義を行う
  name: string;
  age: number;
  // インスタンス作成時に実行されるメソッド
  // constructorは、戻り値がないため、型つけない決まり
  constructor(name: string, age: number) {
    // インスタンスに値を持たせている
    // インスタンスの値を示すときは、this.XXとする
    this.name = name;
    this.age = age;
  }

  profile(): string {
    // インスタンスの値を返す関数
    return `name: ${this.name}, age: ${this.age}`;
  }
}
// classのインスタンス
let taro = new Person("taro", 33);
console.log(taro.profile());
// let hanako = new Person();
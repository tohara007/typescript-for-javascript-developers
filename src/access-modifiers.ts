export {};

// classの定義
class Person {
  // classのメンバー変数の宣言時に、データの型定義を行う
  // インスタンスからのaccess可能
  public name: string;
  // インスタンスはもちろん、子classからも参照不可能
  // private age: number;
  protected age: number;
  // 子classからも呼び出し可能
  protected nationality: string;
  // インスタンス作成時に実行されるメソッド
  // constructorは、戻り値がないため、型つけない決まり
  constructor(name: string, age: number, nationality: string) {
    // インスタンスに値を持たせている
    // インスタンスの値を示すときは、this.XXとする
    this.name = name;
    this.age = age;
    this.nationality = nationality;
  }

  profile(): string {
    // インスタンスの値を返す関数
    return `name: ${this.name}, age: ${this.age}`;
  }
}

// Personクラスを継承したAndroidクラス
class Android extends Person {
  constructor(name: string, age: number, nationality: string) {
    // 親クラスにある同名の関数使うときに使う
    super(name, age, nationality);
  }
  profile(): string {
    return `name: ${this.name}, age: ${this.age}, nationality: ${this.nationality}`;
  }
}


// 親classのインスタンス
let taro = new Person("taro", 33, "England");
console.log(taro.name);
// 親class内のメソッド呼び出し
console.log(taro.profile());
// 子classのインスタンス
let jiro = new Android("taro", 33, "England");
// 子class内のメソッド呼び出し
console.log(jiro.profile());
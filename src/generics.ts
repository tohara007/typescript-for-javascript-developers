export {};

// 引数をそのまま返す関数だが型が違う場合、2つ３つと書くのはめんどい。
// generics型を使って、汎用的な（genericsな）コードにしたい。
// const echo = (arg: number): number => {
//   return arg;
// };

// const echo = (arg: string): string => {
//   return arg;
// };

// <T>は、generics型で使われる、決まった型ではないもの（抽象的な型）
const echo = <T>(arg: T): T => {
  return arg;
};
// 実際に使うときに、型を<>へ入れ、引数を与えて実行する。
console.log(echo<number>(100));
console.log(echo<string>('Hello World!'));
console.log(echo<boolean>(true));

// genericsクラスの場合
class Mirror<T> {
  constructor(public value: T) {}

  echo(): T {
    return this.value;
  }
}
// メソッドと同様に、<T>にあたる型と適合する引数を与えて実行する。
console.log(new Mirror<number>(123).echo());
console.log(new Mirror<string>('Hello New World!!').echo());
console.log(new Mirror<boolean>(false).echo());

export {};

let fooCompatible: any;
let barCompatible: string = 'TypeScript';

console.log(typeof fooCompatible);
// 型互換性がある場合、エラー出ない
fooCompatible = barCompatible;
console.log(typeof fooCompatible);

let fooIncompatible: string;
let barIncompatible: number = 1;
// 型に互換性ない場合、エラーになる
// fooIncompatible = barIncompatible;

let fooString: string;
let barString: string = 'string';
fooString = barString;

let fooStringLiteral: 'fooStringLiteral' = 'fooStringLiteral';
// string型は、stringリテラル型を許容するため、エラー出ない
fooString = fooStringLiteral;

let fooNumber: number;
let fooNumberLiteral: 1976 = 1976;
// number型は、numberリテラル型を許容するため、エラー出ない
fooNumber = fooNumberLiteral;

// オブジェクト間の型互換性チェックは、
// あくまでもオブジェクトの内部のメンバーで使っている型同士で互換性があるか確認している
interface Animal {
  age: number;
  name: string;
}
class Person {
  constructor(public age: number, public name: string) {}
}
let me: Animal;
me = new Person(43, 'T-REX');

export {};

// 抽象クラス
abstract class Animal {
  // 抽象メソッドは、抽象クラス内でのみ宣言可能。
  // 継承側で、抽象メソッドが漏れていると、TypeScriptが教えてくれる。
  abstract cry(): string;
}

class Lion extends Animal {
  cry() {
    return 'roar';
  }
}

class Tiger extends Animal {
  cry() {
    return 'grrrr';
  }
}

let lion = new Lion();
console.log(lion.cry());

let tiger = new Tiger();
console.log(tiger.cry());

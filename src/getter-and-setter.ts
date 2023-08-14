export {};

// * owner
//   * 所有者
//   * 初期化時に設定できる。
//   * 途中で変更不可。
//   * 参照可能。
// * secretNumber
//   * 個人番号
//   * 初期化時に設定できる。
//   * 途中で変更可能。
//   * 参照不可。

class MyNumberCard {
  private owner: string;
  private secretNumber: number;

  constructor(owner: string, secretNumber: number) {
    this.owner = owner;
    this.secretNumber = secretNumber;
  }

  // 参照するためのメソッド＝getter
  get getOwner() {
    return this.owner;
  }

  // 値を設定するためのメソッド＝setter
  set setSecretNumber(secretNumber: number) {
    this.secretNumber = secretNumber;
  }

  // デバッグ用（本来なら、確認後削除するメソッドになる）
  debugPrint() {
    return `secretNumber: ${this.secretNumber}`;
  }
}

let card = new MyNumberCard('T-REX', 1234567890);
console.log(card.getOwner);
// card.getOwner = '恐竜';

console.log(card.setSecretNumber);
console.log(card.debugPrint());
card.setSecretNumber = 1111111111;
console.log(card.debugPrint());

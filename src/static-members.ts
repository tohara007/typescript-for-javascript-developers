export {};

// 静的メンバー宣言時に、staticをつけると、
// 毎回newでインスタンス化せずにクラスに直接アクセスできるようになる。
class Me {
  static isProgrammer: boolean = true;
  static firstName: string = 'T-Rex';
  static lastName: string = 'Mr.';

  // staticは、メソッドにも使える。
  static work() {
    return `Hey, guys! My name is ${this.lastName}${this.firstName}. Are you interested in TypeScript?`;
  }
}

// let me = new Me();
// console.log(me.isProgrammer);
console.log(Me.isProgrammer);
console.log(Me.work());

export {};

// 親クラス（継承元）
class Animal {
  constructor(public name: string) {}
  run(): string {
    return `My name is ${this.name}. I can run`;
  }
}

// 継承クラス
class Lion extends Animal {
  // 子クラスで出てくるメンバーのため、敢えて外だしにしている
  public speed: number;
  constructor(name: string, speed: number) {
    // 親クラスのコンストラクタを使うとき、superメソッドを使う必要ある。
    // 引数がある場合、その引数も渡す必要がある
    // 親クラスのメンバーの初期化はsuper()を使って、親クラスで実施する。
    super(name);
    // 子クラスのメンバーの初期化はthisを使って、自分で実施する。
    this.speed = speed;
  }
  run(): string {
    // 親クラスのメソッドを呼び出すときは、super.run()のようにする。
    return `${super.run()} ${this.speed}km/h.`;
  }
}

// let animal = new Animal();
// console.log(animal.run());

// let lion = new Lion();
// console.log(lion.run());

console.log(new Animal('Mickey').run());
console.log(new Lion('Simba', 80).run());

export {};

// namespaceで分けると、同じクラス名がファイル内に存在可能になる。
namespace Japanese {
  // namespace内のクラスにアクセスさせるためには、
  // export修飾子を書く必要がある。
  export class Person {
    constructor(public name: string) {}
  }
  // namespaceの下にさらにnamespaceを置く場合も、export付ける
  export namespace Tokyo {
    export class Person {
      constructor(public name: string) {}
    }
  }
  export namespace Osaka {
    export class Person {
      constructor(public name: string) {}
    }
  }
}

namespace English {
  export class Person {
    constructor(
      public firstName: string,
      public middleName: string,
      public lastName: string
    ) {}
  }
}

const me = new Japanese.Person('T-REX');
console.log(me.name);

const michael = new English.Person('Michael', 'Joseph', 'Jackson');
console.log(michael);

const me2 = new Japanese.Tokyo.Person('恐竜さん');
console.log(me2.name);

const me3 = new Japanese.Osaka.Person('恐竜やん');
console.log(me3.name);

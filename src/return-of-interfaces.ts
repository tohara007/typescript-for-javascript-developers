export {};

class Mahotsukai {}
class Souryo {}

// TypeScriptでは、複数のクラスの継承は認められていない(多重継承NG)
// 複数インターフェースの継承は認められている（多重継承（実装）OK）
class Taro extends Mahotsukai {}

interface Kenja {
  ionazun(): void;
}

interface Senshi {
  kougeki(): void;
}

// TypeScriptでは、複数インターフェースの継承は認められている（多重継承（実装）OK）
class Jiro implements Kenja, Senshi {
  ionazun(): void {
    console.log('ionazun!');
  }
  kougeki(): void {
    console.log('kougeki!');
  }
}

const jiro = new Jiro();
jiro.ionazun();
jiro.kougeki();

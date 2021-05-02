export {};

// 型エイリアス
type ObjectType = {
  name: string;
  age: number;
};

// interface
interface ObjectInterface {
  name: string;
  age: number;
}

let object1: ObjectType = {
  name: 'TO',
  age: 20
};

let object2: ObjectInterface = {
  name: 'TO',
  age: 20
};
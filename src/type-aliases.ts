export {};

// string型のAliaseを作成。先頭文字は、大文字にすること。
type Mojiretsu = string;

const fooString: string = 'hello';
const fooMojiretsu: Mojiretsu = 'hello';

const example1 = {
  name: 'TO',
  age: 18
};

// オブジェクト型でもAliaseは作成可能
type Profile = {
  name: string;
  age: number;
};

const example2: Profile = {
  name: 'TO',
  age: 18
};

// example1のtypeをProfile2のtypeとして定義
// example1の型が変わると、自動的にProfile2の型にも反映される
type Profile2 = typeof example1;

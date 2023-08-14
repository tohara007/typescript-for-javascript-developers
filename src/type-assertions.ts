export {};

let name: any = 'T-rex';

// 型アサーション
// 以下の方法は、Reactで利用されるJSXと書き方が似ているため、非推奨の記法。
// しかし、同様の型アサーションができる。
// 推奨方法は、「as」を使ったもの。
// let length = (<string>name).length;

let length = (name as string).length;
// 以下の方法でも可だが、より早い検出は上記。
// let length = name.length as number;

// length = 'foo';

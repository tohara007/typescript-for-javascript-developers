export {};

// 必ず例外を起こす関数
// 受け取ったメッセージをエラーメッセージとして渡す
// この関数は、returnすることはない（throwはreturnではない）
function error(message: string): never {
  throw new Error(message);
}

try {
  let result = error('test');
  console.log({result});
} catch(error) {
  console.log({error});
}

// void型は、undefinedを含むので代入できる
let foo: void = undefined;
// never型は、呼び元に戻らないためundefinedは代入できない
// never型に代入可能なものは、同じくnever型の関数のみである
let bar: never = error('only me');
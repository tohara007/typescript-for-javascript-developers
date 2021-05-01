export {};

// 返却がない（return文がない）関数は、void型を付けて明示的にする
function returnNothing(): void {
  console.log("I don't return anything");
}

// console.logでreturnNothing関数が呼ばれるが、返却値がないのでここのconsole.log自体は「undefined」と出力される
console.log(returnNothing());
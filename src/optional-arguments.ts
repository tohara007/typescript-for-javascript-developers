export {};

// オプショナルな引数の定義
// オプショナルな引数を定義する場合、引数のあとに「?」付ける
let bmi: (height: number, weight: number, printable?: boolean) => number = (
  height: number, weight: number, printable?: boolean
): number => {
  const bmi: number = weight / (height * height);
  if (printable) {
    console.log({bmi});
  }
  return bmi
}

// bmiがコンソールに出力される
bmi(1.64, 59, true);
// bmiがコンソールに出力されない
bmi(1.64, 59, false);
// bmiがコンソールに出力されない
bmi(1.64, 59);
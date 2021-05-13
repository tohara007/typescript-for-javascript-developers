export {};

// default引数を設定する
// rateがなければ、デフォルト引数として「1.1」を使用する要に設定（JavaScriptの書き方だよ）
const nextYaerSalary = (currentSaraly: number, rate: number = 1.1): number => {
  return currentSaraly * rate;
}

// デフォルト引数を使用しない場合
console.log(nextYaerSalary(1000, 1.05));
// デフォルト引数を使用する場合
console.log(nextYaerSalary(1000));
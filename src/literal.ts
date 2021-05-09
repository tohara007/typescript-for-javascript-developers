export {};

// Literal型は、文字列、数値、真偽値が存在

// 文字列のLiteral型
// 曜日を入れるための変数
let dayOfTheWeek: '日' | '月' | '火' | '水' | '木' | '金' | '土' = '日';
dayOfTheWeek = '月';
// 曜日以外の文字列が入った時はエラーになる
// dayOfTheWeek = '31';

// 数値のLiteral型
// 月を入れるための変数
let month: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 = 1;
month = 12;
// month = 13;

// 真偽値のLiteral型
let TRUE: true = true;
// TRUE = false;


export {};

type Pitcher1 = {
  throwingSpeed: number;
};

type Batter1 = {
  battingAverage: number;
};

const DaimajinSasaki: Pitcher1 = {
  throwingSpeed: 154
};

const OchiaiHIromitsu: Batter1 = {
  battingAverage: 0.367
};

// type TwoWayPlayer = {
//   throwingSpeed: number;
//   battingAverage: number;
// };

// すでに型宣言されているものを合体させて、新しい型を宣言している（新しいエイリアスを作成）
// これが交差型（interSection型）
type TwoWayPlayer = Pitcher1 & Batter1;

const OhtaniShohei: TwoWayPlayer = {
  throwingSpeed: 165,
  battingAverage: 0.286
};

// interSection型のものは、型が合っていない場合エラーを起こす
// 例）battingAverageプロパティが足りない
// const OhtaniShohei2: TwoWayPlayer = {
//   throwingSpeed: 165
// };

interface Pitcher2 {
  throwingSpeed: number;
};

interface Batter2 {
  battingAverage: number;
};

type TwoWayPlayer2 = Pitcher2 & Batter2

const OhtaniShohei3: TwoWayPlayer2 = {
  throwingSpeed: 170,
  battingAverage: 0.386
};
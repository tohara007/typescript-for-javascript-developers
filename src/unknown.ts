export {};

const kansu = (): number => 44;

let numberAny: any = kansu();
let numberUnknown: unknown = kansu();

let sumAny = numberAny + 10;
console.log(sumAny);
console.log(typeof numberUnknown);
// typeofを使用して、型ガードしている
if (typeof numberUnknown === 'number') {
  let sumUnknown = numberUnknown + 10;
  console.log(sumUnknown);
};

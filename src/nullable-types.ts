export {};

// 局所的にNULLを許容したい場合、「|」でつないだユニオンで対応する
let profile: { name: string; age: number | null } = {
  name: 'T=REX',
  age: null,
};

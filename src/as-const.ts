export {};

let name = 'T-rex';

name = '恐竜';

// READ ONLYにしたいときは、as constをつける。
// そうすることで、指定された全てのプロパティは、
// read only修飾子付けなくても、READ onlyになる。
let nickname = '恐竜' as const;
nickname = '恐竜';

let profile = {
  name: 'T-reex',
  height: 1300,
} as const;

profile.name = '恐竜';
profile.height = 1500;

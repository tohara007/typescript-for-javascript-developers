export {};

class VisaCard {
  // readonly修飾子があるので、publicなくても問題ないが、
  // public削れるのは、readonlyがあるときのみなので、
  // あえて残している（明示的に、publicだけど読取専用だよを示すため）
  constructor(public readonly owner: string) {}
}

let card = new VisaCard('T-rex');
console.log(card.owner);
// card.owner = '恐竜';

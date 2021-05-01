import axios from 'axios';

export {};

interface Articles {
  id: number;
  title: string;
  description: string;
}

let url: string = 'https://udemy-utils.herokuapp.com/api/v1/articles?token=token123';

// axios.getの引数にURLを渡すことで、httpのGETメソッドを呼び出せる
// レスポンスは、thenで書いたコールバック関数で受け取ることができる
axios.get(url).then(function (response) {
    let data: Articles[];
    data = response.data
    console.log(data);
  });
// こっちでもコールバックできるよ
axios.get(url)
  .then((response) => {
    let data: Articles[];
    data = response.data
    console.log(data);
  });
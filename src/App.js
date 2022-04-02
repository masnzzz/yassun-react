import React from 'react';
import { List } from "./List";

class App extends React.Component {
  // ステートを使うときは、
  constructor(props) {
    super(props);
    // クラスコンポーネントでは this.state がステートになる
    // 初期値は ’クリック前の表示’
    this.state = { description: 'クリック前の表示' }
  }

  // Descriptionを変更する関数
  changeDescription() {
    // setState はオブジェクトを受け取り
    this.setState({
      // 変更後の値を入れる
      description: 'クリック後の表示です。'
    })
  }

  render() {
    // this.state でステートを取り出し、descriptionを呼び出す
    const { description } = this.state;
    return (
      <div>
        { description }
        <List title="取扱言語一覧" />
        <button onClick={() => this.changeDescription()}>
          ボタン
        </button>
      </div>
    )
    // クラスのメソッドを呼び出すので、thisが引き継がれている必要あり。
    // アロー関数 () => でthisを引き継ぐ
  }
}

export default App;

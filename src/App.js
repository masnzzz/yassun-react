import React from 'react';
import { List } from "./List";
import { Form } from "./Form";

class App extends React.Component {
  // ステートを使うときは、
  constructor(props) {
    super(props);
    // クラスコンポーネントでは this.state がステートになる
    // 初期値は ’クリック前の表示’
    this.state = {
      description: 'クリック前の表示' ,
      tab: 'list',
    }
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
    const { tab, description } = this.state;
    return (
      <div>
        <header>
          <ul>
            <li onClick={() => this.setState({ tab: 'list' })}>リスト</li>
            <li onClick={() => this.setState({ tab: 'form' })}>フォーム</li>
          </ul>
        </header>
        { description }
        {
          tab === 'list' ? 
          <List title="取扱言語一覧" /> : 
          <Form />
        }
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

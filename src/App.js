import React from 'react';
import { List } from "./List";
import { Form } from "./Form";
import { LANGUAGES } from "./const/languages";

class App extends React.Component {
  // ステートを使うときは、
  constructor(props) {
    super(props);
    // クラスコンポーネントでは this.state がステートになる
    // 初期値は ’クリック前の表示’
    this.state = {
      tab: 'list',
      langs: LANGUAGES
    }
  }

  // Form.jsに渡すための関数
  addLang(lang) {
    this.setState({ 
      tab: 'list',
      langs: [...this.state.langs, lang]
    })
  }

  render() {
    const { tab, langs } = this.state;
    return (
      <div>
        <header>
          <ul>
            <li onClick={() => this.setState({ tab: 'list' })}>リスト</li>
            <li onClick={() => this.setState({ tab: 'form' })}>フォーム</li>
          </ul>
        </header>
        <hr />
        {
          tab === 'list' ? 
          <List langs={langs} /> : 
          <Form onAddLang={(lang) => this.addLang(lang)} />
        }
      </div>
    )
    // クラスのメソッドを呼び出すので、thisが引き継がれている必要あり。
    // アロー関数 () => でthisを引き継ぐ
  }
}

export default App;

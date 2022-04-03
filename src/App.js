import { useEffect } from 'react';
import { useState } from 'react';
import { List } from "./List";
import { Form } from "./Form";
import { getLanguages } from "./const/languages";

 function App() {
  const [tab, setTab] = useState('list');
  const [langs, setLangs] = useState([]);

  // 第一引数は関数、/ 第二引数は空配列にすると最初のマウンティングのみ発生（一番最初のみ実行したい場合）
  // [langs]を指定すると、ここの変更があった場合のみ実行する
  useEffect(() => {
    console.log('App.js:useEffect');
    fetchLanguages();
  }, [])

  const fetchLanguages = async() => {
    const languages = await getLanguages();
    setLangs(languages);
  }

  const addLang = (lang) => {
    // 新しいlangをlangs配列に入れる
    setLangs([...langs, lang]);
    // フォームから入力後リストtabに遷移
    setTab('list');
  }

  return (
    <div>
      <header>
        <ul>
          <li onClick={() => setTab('list')}>リスト</li>
          <li onClick={() => setTab('form')}>フォーム</li>
        </ul>
      </header>
      <hr />
      {
        tab === 'list' ? <List langs={langs} /> : <Form onAddLang={addLang} />
      }
    </div>
  );
}

export default App;

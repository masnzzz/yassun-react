import styled from 'styled-components';
import { useEffect } from 'react';
import { useState } from 'react';
import { List } from "./List";
import { Form } from "./Form";
import { getLanguages } from "./const/languages";

const Header = styled.header`
  display: flex;
  justfy-content: space-between;
  padding: 24px 64px 0;
  border-bottom: 1px solid #E0E0E0;
`

const HeaderUl = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
`

const HeaderLi = styled.li`
  list-style: none;
  padding: 4px 12px;
  cursor: pointer;
  border-bottom: ${props => props.focused ? '2px solid #F44336' : 'none' };
`

 function App() {
  const [tab, setTab] = useState('list');
  const [langs, setLangs] = useState([]);

  // 第一引数は関数、/ 第二引数は空配列にすると最初のマウンティングのみ発生（一番最初のみ実行したい場合）
  // [langs]を指定すると、ここの変更があった場合のみ実行する
  useEffect(() => {
    console.log('App.js:useEffect');
    fetchLanguages(); // APIから取得するイメージ
  }, [])

  const fetchLanguages = async () => {
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
      <Header>
        <HeaderUl>
          <HeaderLi focused={tab === 'list'} onClick={() => setTab('list')}>リスト</HeaderLi>
          <HeaderLi focused={tab === 'form'} onClick={() => setTab('form')}>フォーム</HeaderLi>
        </HeaderUl>
      </Header>
      {
        tab === 'list' ? <List langs={langs} /> : <Form onAddLang={addLang} />
      }
    </div>
  );
}

export default App;

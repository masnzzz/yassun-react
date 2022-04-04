import styled, { StyleSheetManager } from 'styled-components';
import { useState } from 'react';
import { Button } from './components/button';

const Countainer = styled.div`
    padding: 12px 64px;
`

const Label = styled.label`
    display: flex;
    color: #757575;
    font-size: 14px;
    font-weight: bold;
`

const Input = styled.input`
    border-radius: 3px;
    padding: 4px 8px;
    border: 1px solid black;
`

const ButtonContainer = styled.div`
    margin-top: 24px;
`

const FormButton = styled(Button)`
    width: 120px;
`

// 親コンポーネントApp.jsからonAddLang関数を取得
export const Form = ({ onAddLang }) => {
    // text ステートを定義した
    const [text, setText] = useState('');

    const submitForm = (e) => {
        // ページ遷移が起きないようにしている
        e.preventDefault();
        // onAddLangを実行し、App.js内のaddLang関数の処理が発火する
        onAddLang(text);
    }

    return (
        <Countainer>
            <h4>新しい言語の追加</h4>
            <form onSubmit={submitForm}>
                <div>
                    <Label>言語</Label>
                    <Input
                     type="text"
                     value={text}
                     onChange={(e) => setText(e.target.value)}
                    />
                </div>
                <ButtonContainer>
                    <FormButton>追加</FormButton>
                </ButtonContainer>
            </form>
        </Countainer>
    )
}

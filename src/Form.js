import { useState } from 'react';

export const Form = () => {
    // text ステートを定義した
    const [text, setText] = useState('');

    const submitForm = (e) => {
        // ページ遷移が起きないようにしている
        e.preventDefault();
        console.log(text);
    }

    return (
        <div>
            <h4>新しい言語の追加</h4>
            <form onSubmit={submitForm}>
                <div>
                    <input
                     type="text"
                     value={text}
                     onChange={(e) => setText(e.target.value)}
                    />
                </div>
                <div>
                    <button>追加</button>
                </div>
            </form>
        </div>
    )
}

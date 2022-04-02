const LANGAGES = [
    'JavaScript',
    'C++',
    'PHP',
    'Go',
    'Ruby'
];

export const List = () => {
    return (
        <div>
            {
                LANGAGES.map((lang, index) => {
                    return <div key={index}>{ lang }</div>
                })
            }
        </div>
    )
    // LANGAGEの中を繰り返し表示できるようにする
    // map関数、配列を変換して別の配列にする関数、ここでは言語の文字列のリストをjsxのhtmlのリストに変更する
    // jsxで繰り返すときは、keyプロパティを設定する必要あり、（keyはユニークである必要）
    // mapの二つ目の引数は配列の要素の0から始まるindex（number）がついてくる
}

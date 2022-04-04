import styled from "styled-components"

const Container = styled.div`
  padding: 12px 64px;
`

const ListItem = styled.div`
 padding: 8px 16px;

 &:nth-child(n+2) {
   border-top: 1px solid #D9DBDE;
 }

`

// 親コンポーネントApp.jsから受け取ったlangs配列（言語のリスト）を取得
export const List = ({ langs }) => {

  return (
      <Container>
          {
              langs.map((lang, index) => {
                  return <ListItem key={index}>{ lang }</ListItem>
              })
          }
      </Container>
  )
  // LANGAGEの中を繰り返し表示できるようにする
  // map関数、配列を変換して別の配列にする関数、ここでは言語の文字列のリストをjsxのhtmlのリストに変更する
  // jsxで繰り返すときは、keyプロパティを設定する必要あり、（keyはユニークである必要）
  // mapの二つ目の引数は配列の要素の0から始まるindex（number）がついてくる
}

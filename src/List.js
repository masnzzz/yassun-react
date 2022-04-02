import React from "react";

const LANGAGE = [
  'JS',
  'PHP',
  'Ruby',
  'Go',
  'Ruby'
];

export class List extends React.Component {
    render() {
        // this.props にプロパティが入っている
      return (
        <div>
          {
            LANGAGE.map((lang, index) => {
              return <div key={index}>{ lang }</div>
            })
          }
        </div>
      )
    }
  }
  
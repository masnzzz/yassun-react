import React from "react";

export class List extends React.Component {
    render() {
      const { langs } = this.props;
        // this.props にプロパティが入っている
      return (
        <div>
          {
            langs.map((lang, index) => {
              return <div key={index}>{ lang }</div>
            })
          }
        </div>
      )
    }
  }
  
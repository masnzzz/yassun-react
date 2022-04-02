import React from "react";
export class List extends React.Component {
    render() {
        // this.props にプロパティが入っている
      const { title } = this.props;
      return (
        <div>
          <h4>{ title }</h4>
          <div>リストです</div>
        </div>
      )
    }
  }
  
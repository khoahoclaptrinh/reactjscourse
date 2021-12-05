import React, { Component } from "react";
export default class Child extends Component {
  handleClick = () => {
    this.props.onChildClick("  child data");
  };

  // handleClick() {
  //   console.log("this is:", this);
  // }

  // onClick={() => this.handleClick()}

  render(props) {
    return (
      <div>
        <button onClick={this.handleClick}>{this.props.data}</button>
      </div>
    );
  }
}

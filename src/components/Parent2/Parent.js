import React, { Component } from "react";
import Child from "./Child";
export default class Parent extends Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(data) {
    alert("I am working" + data);
  }

  render() {
    return (
      <div>
        <Child
          data="this is demo"
          onChildClick={this.handleClick}
          onClick={() => this.handleClick()}
        />
      </div>
    );
  }
}

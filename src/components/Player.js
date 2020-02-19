import React, { Component } from "react";

export default class Player extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="player">
        Player :: <span>{this.props.value}</span>
      </div>
    );
  }
}

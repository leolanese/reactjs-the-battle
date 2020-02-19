import React, { Component } from "react";

export default class Monster extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className="monster">
          Monster :: <span>{this.props.value}</span>

        </div>
    );
  }
}

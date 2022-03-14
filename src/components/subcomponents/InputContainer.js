import React from 'react';
import './InputContainer.css'

export default class InputContainer extends React.Component {
  render() {
    return (
      <div className="input-container">
        <span>{this.props.title}</span>
        <span className="children-container">{this.props.children}</span>
      </div>
    );
  }
}
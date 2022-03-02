import React from 'react';
import './InputContainer.css'

export default class InputContainer extends React.Component {
  render() {
    return (
      <div class="input-container">
        <span>{this.props.title}</span>
        <span>{this.props.children}</span>
      </div>
    );
  }
}
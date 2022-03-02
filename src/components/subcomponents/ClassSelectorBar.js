import React from 'react';
import InputContainer from './InputContainer';
import Form from 'react-bootstrap/Form';
import './ClassSelectorBar.css'

export default class ClassSelectorBar extends React.Component {
  render() {
    return (
      <InputContainer title={this.props.title}>
        <Form.Select
            aria-label="Default select example" 
            onChange={(event) => this.props.onChange(event.target.value)}
            disabled={this.props.disabled}
            value={this.props.value}
        >
          <option value="NONE">select class</option>
          <option value="SWEN 101">SWEN 101</option>
          <option value="SWEN 102">SWEN 102</option>
          <option value="SWEN 256">SWEN 256</option>
          <option value="SWEN 261">SWEN 261</option>
          <option value="SWEN 350">SWEN 350</option>
          <option value="SWEN 356">SWEN 356</option>
        </Form.Select>
      </InputContainer>
    );
  }
}
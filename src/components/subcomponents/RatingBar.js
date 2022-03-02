import React from 'react';
import { Rating } from '@mui/material';
import './RatingBar.css'
import InputContainer from './InputContainer';

export default class RatingBar extends React.Component {
  render() {
    return (
      <InputContainer title={this.props.title}>
        <Rating onChange={(event, newValue) => this.props.onChange(newValue)}/>
      </InputContainer>
    );
  }
}
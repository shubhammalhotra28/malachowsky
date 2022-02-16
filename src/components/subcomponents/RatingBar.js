import React from 'react';
import { Rating } from '@mui/material';
import './RatingBar.css'

export default class RatingBar extends React.Component {
  render() {
    return (
      <div class="ratingContainer">
        <span>{this.props.title}</span>
        <Rating />
      </div>
    );
  }
}
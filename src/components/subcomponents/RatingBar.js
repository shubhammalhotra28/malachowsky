import React from 'react';
import { Rating } from '@mui/material';
import './RatingBar.css'

export default class RatingBar extends React.Component {
  render() {
    return (
      <div class="rating-container">
        <span>{this.props.title}</span>
        <span class="star-container"><Rating /></span>
      </div>
    );
  }
}
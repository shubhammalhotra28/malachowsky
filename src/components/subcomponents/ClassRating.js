import React from 'react';
import './ClassRating.css'
import { Rating } from '@mui/material';


export default class ClassRating extends React.Component {
  renderIndividualRating(emoji, ratingNumber) {
    return (
      <div className="individual-rating">
        <span className="emoji">{emoji}</span>
        <Rating value={ratingNumber} size="medium" readOnly  />
      </div>
    );
  }

  render() {
    return (
      <div className="class-rating-container">
        <span>{this.props.rating.ratedClass}</span>
        {this.renderIndividualRating("🎭", this.props.rating.comedyRating)}
        {this.renderIndividualRating("😣", this.props.rating.dificultyRating)}
        {this.renderIndividualRating("💡", this.props.rating.interestRating)}
      </div>
    );
  }
}
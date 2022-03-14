import React from 'react';
import './ChowClasses.css'
import ClassRater from './subcomponents/ClassRater';
import ClassRating from './subcomponents/ClassRating';

export default class ChowClasses extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      recentRatings: [],
    }
  }

  addNewRating = (newRating) => {
    this.setState({recentRatings: [newRating, ...this.state.recentRatings]});
  }

  renderSingleRating(rating) {
    return (
      <ClassRating rating={rating} />
    );
  }

  renderRatings() {
    return (
      <div className="ratings-list">{this.state.recentRatings.map((rating) => this.renderSingleRating(rating))}</div>
    );
  }

  render() {
    return (
      <div className="classes-top">
        <h1>Rate My Chow</h1>
        <div className="inner-container">
          <h3>Submit a New Rating:</h3>
          <ClassRater onNewRating={this.addNewRating} />
          <h3>Recent Ratings:</h3>
          {this.renderRatings()}
        </div>
      </div>
    );
  }
}
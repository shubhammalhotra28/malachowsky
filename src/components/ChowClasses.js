import React from 'react';
import './ChowClasses.css'
import ClassRater from './subcomponents/ClassRater';

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
      <div>{rating.ratedClass}</div>
    )
  }

  renderRatings() {
    return (
      <div>{this.state.recentRatings.map((rating) => this.renderSingleRating(rating))}</div>
    );
  }

  render() {
    return (
      <div className="classes-top">
        <h1>Rate My Chow</h1>
        <ClassRater onNewRating={this.addNewRating} />
        {this.renderRatings()}
      </div>
    );
  }
}
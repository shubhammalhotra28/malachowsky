import React from 'react';
import RatingBar from './subcomponents/RatingBar';
import './ChowClasses.css'
import ClassSelectorBar from './subcomponents/ClassSelectorBar';

export default class ChowClasses extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ratedClass: null,
      comedyRating: 0,
      dificultyRating: 0,
      interestingRating: 0,
    }
  }
  
  updateClassToRate = (newClassToRate) => {
    this.setState({ratedClass: newClassToRate});
  }
  
  updateComedyRating = (newRating) => {
    this.setState({comedyRating: newRating});
  }
  
  updateDificultyRating = (newRating) => {
    this.setState({dificultyRating: newRating});
  }
  
  updateInterestingRating = (newRating) => {
    this.setState({interestingRating: newRating});
  }

  render() {
    return (
      <div class="classes-top">
        <h1>Rate My Chow</h1>
        <ClassSelectorBar title="Which class are you rating?" onChange={this.updateClassToRate} />
        <RatingBar title="Class Comedy Rating" onChange={this.updateComedyRating} />
        <RatingBar title="Class Dificulty Rating" onChange={this.updateDificultyRating} />
        <RatingBar title="How Interesting Was This Lesson?" onChange={this.updateInterestingRating} />
        <div>{this.state.ratedClass}</div>
        <div>{this.state.comedyRating}</div>
        <div>{this.state.dificultyRating}</div>
        <div>{this.state.interestingRating}</div>
      </div>
    );
  }
}
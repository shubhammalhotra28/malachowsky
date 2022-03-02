import React from 'react';
import RatingBar from './RatingBar';
import ClassSelectorBar from './ClassSelectorBar';
import Button from 'react-bootstrap/Button';

export default class ClassRater extends React.Component {
  static startingState = {
    ratedClass: "NONE",
    comedyRating: 0,
    dificultyRating: 0,
    interestingRating: 0,
    isSubmitting: false,
  };

  constructor(props) {
    super(props);
    this.state = ClassRater.startingState;
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

  isFormReadyForSubmission() {
    return this.state.ratedClass != "NONE" &&
      this.state.comedyRating > 0 &&
      this.state.dificultyRating > 0 &&
      this.state.interestingRating > 0;
  }

  submitRating = () => {
    console.log(this.state); // TODO: POST to API
    this.setState({isSubmitting: true});
    setTimeout(() => this.setState(ClassRater.startingState), 2000);
  }

  renderSubmitButton() {
    if (this.state.isSubmitting) {
      return (
        <Button variant="info" disabled>Submitting...</Button>
      );
    } else if (this.isFormReadyForSubmission()) {
      return (
        <Button variant="info" onClick={this.submitRating}>Submit Chow rating!</Button>
      );
    } else {
      return (
        <Button variant="info" disabled>Fill out the above fields</Button>
      );
    }
  }

  render() {
    return (
      <div>
        <ClassSelectorBar
            title="Which class are you rating?"
            onChange={this.updateClassToRate}
            disabled={this.state.isSubmitting}
            value={this.state.ratedClass}
        />
        <RatingBar
            title="Class comedy rating"
            onChange={this.updateComedyRating}
            disabled={this.state.isSubmitting}
            value={this.state.comedyRating}
        />
        <RatingBar
            title="Class dificulty rating"
            onChange={this.updateDificultyRating}
            disabled={this.state.isSubmitting}
            value={this.state.dificultyRating}
        />
        <RatingBar
            title="How interesting was this lesson?"
            onChange={this.updateInterestingRating}
            disabled={this.state.isSubmitting}
            value={this.state.interestingRating}
        />
        {this.renderSubmitButton()}
      </div>
    );
  }
}
import React from 'react';
import RatingBar from './subcomponents/RatingBar';

export default class ChowClasses extends React.Component {
  render() {
    return (
      <div>
        <h1>Rate My Chow</h1>
        <RatingBar title="Class Comedy Level" />
        <RatingBar title="Class Dificulty Level" />
        <RatingBar title="How Interesting Was This Lesson?" />
      </div>
    );
  }
}
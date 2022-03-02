import React from 'react';
import RatingBar from './subcomponents/RatingBar';
import './ChowClasses.css'
import ClassSelectorBar from './subcomponents/ClassSelectorBar';

export default class ChowClasses extends React.Component {
  render() {
    return (
      <div class="classes-top">
        <h1>Rate My Chow</h1>
        <ClassSelectorBar title="Which class are you rating?" />
        <RatingBar title="Class Comedy Level" />
        <RatingBar title="Class Dificulty Level" />
        <RatingBar title="How Interesting Was This Lesson?" />
      </div>
    );
  }
}
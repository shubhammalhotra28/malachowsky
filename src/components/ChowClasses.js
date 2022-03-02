import React from 'react';
import './ChowClasses.css'
import ClassRater from './subcomponents/ClassRater';

export default class ChowClasses extends React.Component {
  render() {
    return (
      <div className="classes-top">
        <h1>Rate My Chow</h1>
        <ClassRater />
      </div>
    );
  }
}
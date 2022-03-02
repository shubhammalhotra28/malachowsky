import background from '../resources/tophat_chow.png';
import React from 'react';
import './Homepage.css';
import ActivityFeed from './ActivityFeed.js';
import {Button} from 'reactstrap';

class Homepage extends React.Component {
    render() {
			return (
			<div className="main">
        <center>
          <img src={background} alt="tophat_chow" />
        </center>
        <div className="navbuttons">
        <div className="leftcol">
          <div className="row1">
            <Button onClick={event =>  window.location.href='/chowmap'}>Chow Map</Button>
          </div>
          <div className="row2">
            <Button onClick={event =>  window.location.href='/chowlocation'}>Chow Location</Button>
          </div>
          <div className="row3">
            <Button onClick={event =>  window.location.href='/chowphoto'}>Chow Photo</Button>
          </div>
        </div>
        <div className="rightcol">
          <div className="row1">
            <Button onClick={event =>  window.location.href='/chowstatus'}>Chow Status</Button>
          </div>
          <div className="row2">
            <Button onClick={event =>  window.location.href='/chowclasses'}>Chow Classes</Button>
          </div>
          <div className="row3">
            <Button onClick={event =>  window.location.href='/chowdash'}>Chow Dash</Button>
          </div>
        </div>
        </div>
        <div className="activityfeed">
          <ActivityFeed name="Chow Reports" maxElements="20"></ActivityFeed>
        </div>

			</div>
			);
		}
}

export default Homepage;

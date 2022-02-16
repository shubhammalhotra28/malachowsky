import background from '../resources/tophat_chow.png';
import React from 'react';
import './Homepage.css';
import ActivityFeed from './ActivityFeed.js';
import {Button} from 'reactstrap';

class Homepage extends React.Component {
    render() {
			return (
			<div class="main">
        <h1 class='topline'>Chow</h1>
        <h1 class='botline'>Chaser</h1>
        <center>
          <img src={background} alt="tophat_chow" />
        </center>
        <div class="navbuttons">
        <div class="leftcol">
          <div class="row1">
            <Button onClick={event =>  window.location.href='/chowmap'}>Chow Map</Button>
          </div>
          <div class="row2">
            <Button onClick={event =>  window.location.href='/chowlocation'}>Chow Location</Button>
          </div>
          <div class="row3">
            <Button onClick={event =>  window.location.href='/chowphoto'}>Chow Photo</Button>
          </div>
        </div>
        <div class="rightcol">
          <div class="row1">
            <Button onClick={event =>  window.location.href='/chowstatus'}>Chow Status</Button>
          </div>
          <div class="row2">
            <Button onClick={event =>  window.location.href='/chowclasses'}>Chow Classes</Button>
          </div>
          <div class="row3">
            <Button onClick={event =>  window.location.href='/chowdash'}>Chow Dash</Button>
          </div>
        </div>
        </div>
        <div class="activityfeed">
          <ActivityFeed name="Chow Reports" maxElements="20"></ActivityFeed>
        </div>

			</div>
			);
		}
}

export default Homepage;

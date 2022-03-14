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
        <div className="activityfeed">
          <ActivityFeed name="Chow Reports" maxElements="20"></ActivityFeed>
        </div>

			</div>
			);
		}
}

export default Homepage;

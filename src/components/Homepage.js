import background from '../resources/chow.png';
import React from 'react';
import './Homepage.css';
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
        <div class="leftcol">
          <div class="row1">
            <Button class= "row1" onClick={event =>  window.location.href='/chowmap'}>Chow Map</Button>
          </div>
          <div class="row2">
            <Button class= "row2" onClick={event =>  window.location.href='/chowlocation'}>Chow Location</Button>
          </div>
          <div class="row3">
            <Button class= "row3" onClick={event =>  window.location.href='/chowphoto'}>Chow Photo</Button>
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
			);
		}
}

export default Homepage;

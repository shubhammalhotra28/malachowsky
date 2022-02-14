import React from 'react';
import { Button } from 'reactstrap';
import './ReportLocation.css';



class ReportLocation extends React.Component {
    render() {
			return (
			<div class="report-location-main">
                <div class="report">
                    <h1>Spotted The Chow?</h1>
                    <Button onClick={() => this.newReport()}>Report It!</Button>
                </div>
			</div>
			);
		}

    newReport = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
              (position) => {
                const pos = {
                  lat: position.coords.latitude,
                  lng: position.coords.longitude,
                };
              },
              () => {
                alert("Could Not Resolove Location");
              }
            );
        } else {
            alert("Browser Doesn't Support Geolocation");
        }
    }
}

export default ReportLocation;

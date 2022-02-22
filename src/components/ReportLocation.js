import React from 'react';
import { Button } from 'reactstrap';
import './ReportLocation.css';
import { API } from 'aws-amplify';

class ReportLocation extends React.Component {
    render() {
			return (
			<div className="report-location-main">
        <div className="report-location-photo">
              <div className="report">
                  <h1>Spotted The Chow?</h1>
                  <Button onClick={() => this.newReport()}>Report It!</Button>
              </div>
          </div>
			</div>
			);
		}

    testFunc = async () => {
        console.log("HERE")
        const data = await API.get('chowlocation', '/chowlocation')
        console.log(data)
    }

    newReport = async () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
              (position) => {
                console.log(position.coords.latitude)
                console.log(position.coords.longitude)
                API.post('chowlocation', '/chowlocation', {
                  'queryStringParameters': {
                    "lat": position.coords.latitude,
                    "lng": position.coords.longitude,
                  }
                }).then(response => {
                  console.log("Logged Position")
                  alert("Chow Location Reported!");
                })
                .catch(error => {
                  console.log(error.response);
                });
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

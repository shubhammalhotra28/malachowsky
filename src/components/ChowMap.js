import React from 'react';
import './ChowMap.css';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyle = {
    width: '100%',
    height: '100%'
};

export class ChowMap extends React.Component {
    render() {
        return(
        <Map 
            google={this.props.google}
            zoom={14}
            style={mapStyle}
            initialCenter={
                {
                lat:-1.2884,
                lng:36.8233,
            }
        }
        />
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyDNDoGpMBytyRLvWZkkBO9nVLyx3Fm4I9M'
})(ChowMap);